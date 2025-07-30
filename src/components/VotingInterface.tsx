import React, { useState, useEffect } from 'react'
import { LogOut, Vote, Check, BarChart3 } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface VotingInterfaceProps {
  voter: { id: string; name: string; address: string }
  onLogout: () => void
}

interface VoteCount {
  candidate_name: string
  count: number
}

const CANDIDATES = [
  'Erich', 'Doni', 'M.Ilham', 'Ragil', 'Sutrisno', 'Bayu', 'Bambang', 'Azlika', 
  'Indra', 'Robert', 'Heri', 'Zerinof', 'Siska', 'Vina', 'Fadly', 'Taofik', 
  'Zakaria', 'Irfan', 'Rois', 'Farhan', 'Ozan', 'Joko', 'Awal', 'Sudariyanto', 
  'Afriki', 'Arif H', 'Pringgo', 'Devi', 'Ferry', 'Reynal', 'Hermawan', 'Jerry', 
  'Rizal', 'Wanda', 'Abdul', 'Rama', 'Bilal', 'Ricky', 'Denny', 'Bowo', 'Toha', 
  'Daniel 1', 'Daniel 2', 'Ratih', 'Hermanto', 'Akmal', 'Acep', 'Andika', 'Arif', 
  'Ocan', 'Ajip', 'Tunggul', 'Alberto', 'Fitria', 'Edi', 'Rina', 'Fikri', 
  'Muchlis', 'Rizal Amin', 'Anjar', 'Iwan', 'Yoga', 'Sri', 'Gendras', 'Vinie', 
  'Handoko', 'Ariyanto', 'Bu Rizka', 'Tomi', 'Samuel', 'Feodella', 'Asmariah', 
  'Arnold', 'Fandy', 'Ilham Dwi', 'Efendi', 'Syafiyyah', 'Benedecta'
]

export function VotingInterface({ voter, onLogout }: VotingInterfaceProps) {
  const [hasVoted, setHasVoted] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [voteCounts, setVoteCounts] = useState<VoteCount[]>([])
  const [totalVotes, setTotalVotes] = useState(0)
  const [isVoting, setIsVoting] = useState(false)

  useEffect(() => {
    checkIfVoted()
    fetchVoteCounts()
    subscribeToVotes()
  }, [])

  const checkIfVoted = async () => {
    try {
      const { data, error } = await supabase
        .from('votes')
        .select('*')
        .eq('voter_id', voter.id)
        .maybeSingle()

      if (data) {
        setHasVoted(true)
        setSelectedCandidate(data.candidate_name)
      }
    } catch (error) {
      console.error('Error checking vote status:', error)
    }
  }

  const fetchVoteCounts = async () => {
    try {
      const { data, error } = await supabase
        .from('votes')
        .select('candidate_name')

      if (error) throw error

      const counts = CANDIDATES.map(candidate => ({
        candidate_name: candidate,
        count: data?.filter(vote => vote.candidate_name === candidate).length || 0
      }))

      setVoteCounts(counts)
      setTotalVotes(data?.length || 0)
    } catch (error) {
      console.error('Error fetching vote counts:', error)
    }
  }

  const subscribeToVotes = () => {
    const channel = supabase
      .channel('votes-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'votes' },
        () => {
          fetchVoteCounts()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }

  const handleVote = async (candidateName: string) => {
    if (hasVoted || isVoting) return

    setIsVoting(true)
    try {
      const { error } = await supabase
        .from('votes')
        .insert([{
          candidate_name: candidateName,
          voter_id: voter.id
        }])

      if (error) throw error

      setHasVoted(true)
      setSelectedCandidate(candidateName)
    } catch (error) {
      console.error('Error voting:', error)
      alert('Terjadi kesalahan saat memberikan suara. Silakan coba lagi.')
    } finally {
      setIsVoting(false)
    }
  }

  const getVotePercentage = (count: number) => {
    return totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(1) : '0.0'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Pemilihan Ketua Paguyuban
            </h1>
            <p className="text-gray-600">
              Selamat datang, <span className="font-semibold">{voter.name}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Total Suara: {totalVotes}</span>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {hasVoted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Terima kasih, suara Anda sudah terekam!</span>
            </div>
            <p>Anda telah memilih: <strong>{selectedCandidate}</strong></p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CANDIDATES.map((candidate) => {
            const voteData = voteCounts.find(v => v.candidate_name === candidate)
            const count = voteData?.count || 0
            const percentage = getVotePercentage(count)
            const isSelected = selectedCandidate === candidate

            return (
              <div
                key={candidate}
                className={`bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg ${
                  isSelected ? 'ring-2 ring-green-500 bg-green-50' : ''
                }`}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    isSelected ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {isSelected ? (
                      <Check className="w-8 h-8" />
                    ) : (
                      <Vote className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    {candidate}
                  </h3>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{count} suara</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        isSelected ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleVote(candidate)}
                  disabled={hasVoted || isVoting}
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                    hasVoted
                      ? isSelected
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                  }`}
                >
                  {isVoting ? 'Memproses...' : hasVoted ? (isSelected ? 'Terpilih' : 'Tidak Aktif') : 'Pilih'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}