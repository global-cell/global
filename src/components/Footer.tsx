import React from 'react'
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pastel-pink to-mint-green rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jennaration</h3>
                <p className="text-sm text-gray-400">Styles Kids</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Creating magical moments through comfortable, stylish, and playful clothing 
              for children who deserve to shine bright every day.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Shop All</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">hello@jennarationkids.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                <span className="text-gray-300">
                  Jl. Kebahagiaan No. 123<br />
                  Jakarta Selatan, 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Jennaration Styles Kids. All rights reserved. Made with 💖 for little stars.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}