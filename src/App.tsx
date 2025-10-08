import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Categories } from './components/Categories'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
      <div className="hero-pattern min-h-screen">
        <Header />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default App