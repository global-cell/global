import React from 'react'
import { Baby, Shirt, Crown, Sparkles } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Baby (0-2 years)',
    icon: Baby,
    color: 'from-pink-300 to-pink-400',
    bgColor: 'bg-pink-50',
    count: '45 items'
  },
  {
    id: 2,
    name: 'Toddler (2-5 years)',
    icon: Shirt,
    color: 'from-blue-300 to-blue-400',
    bgColor: 'bg-blue-50',
    count: '67 items'
  },
  {
    id: 3,
    name: 'Kids (5-12 years)',
    icon: Crown,
    color: 'from-green-300 to-green-400',
    bgColor: 'bg-green-50',
    count: '89 items'
  },
  {
    id: 4,
    name: 'Special Occasion',
    icon: Sparkles,
    color: 'from-purple-300 to-purple-400',
    bgColor: 'bg-purple-50',
    count: '23 items'
  }
]

export function Categories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Age Group</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect fit for your little one with our carefully curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className={`${category.bgColor} rounded-3xl p-8 text-center card-hover cursor-pointer group`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                
                <p className="text-gray-500 mb-4">{category.count}</p>
                
                <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:shadow-md transition-all">
                  Browse Now
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}