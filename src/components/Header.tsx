import React, { useState } from 'react'
import { Search, ShoppingBag, User, Menu, X, Heart, Star } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100">
      {/* Decorative elements */}
      <div className="star-decoration top-2 left-10 text-lg">⭐</div>
      <div className="star-decoration top-4 right-20 text-sm">✨</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pastel-pink to-mint-green rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Jennaration
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Styles Kids</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Home
            </a>
            <a href="#shop" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Shop
            </a>
            <a href="#new-arrivals" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              New Arrivals
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search cute outfits..."
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-pink-50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search cute outfits..."
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
              <a href="#home" className="text-gray-700 hover:text-pink-500 font-medium">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-pink-500 font-medium">Shop</a>
              <a href="#new-arrivals" className="text-gray-700 hover:text-pink-500 font-medium">New Arrivals</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}