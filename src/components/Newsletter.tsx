import React, { useState } from 'react'
import { Mail, Gift, Star } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
    alert('Thank you for subscribing! 🎉')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-4 left-8 text-2xl opacity-30">🎈</div>
          <div className="absolute top-8 right-12 text-xl opacity-40">⭐</div>
          <div className="absolute bottom-6 left-12 text-lg opacity-35">🌟</div>
          <div className="absolute bottom-4 right-8 text-2xl opacity-25">🎁</div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Join Our <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Magic Circle</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to get exclusive offers, early access to new collections, and special discounts for your little stars!
            </p>
            
            {/* Benefits */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Gift className="w-5 h-5 text-pink-500" />
                <span>Exclusive Offers</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="w-5 h-5 text-purple-500" />
                <span>Early Access</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>Style Tips</span>
              </div>
            </div>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy! 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}