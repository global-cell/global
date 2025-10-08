import React from 'react'
import { ShoppingBag, Star, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cloud-decoration top-20 left-10 text-6xl opacity-20">☁️</div>
        <div className="cloud-decoration top-32 right-20 text-4xl opacity-30">☁️</div>
        <div className="star-decoration top-40 left-1/4 text-2xl">⭐</div>
        <div className="star-decoration top-60 right-1/3 text-xl">✨</div>
        <div className="absolute top-1/4 right-10 text-8xl opacity-10 floating-element">🎈</div>
        <div className="absolute bottom-1/4 left-10 text-6xl opacity-15 floating-element">🧸</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-pink-100 rounded-full px-4 py-2 text-pink-600 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                New Collection Available
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Adorable
                </span>
                <br />
                <span className="text-gray-800">Outfits for</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Little Stars
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Discover our magical collection of comfortable, stylish, and playful clothing 
                designed to make every child shine bright and feel confident.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg">
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
              </button>
              
              <button className="btn-secondary text-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg">
                View Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">500+</div>
                <div className="text-sm text-gray-500">Happy Kids</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">100+</div>
                <div className="text-sm text-gray-500">Cute Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">4.9★</div>
                <div className="text-sm text-gray-500">Parent Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mx-auto flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-700">Smiling Child</h3>
                    <p className="text-gray-500">Wearing Latest Collection</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg floating-element">
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center shadow-lg floating-element">
                💖
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}