import React from 'react'
import { Heart, Star, ShoppingBag } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Rainbow Unicorn Dress',
    price: 'Rp 299.000',
    originalPrice: 'Rp 399.000',
    rating: 4.9,
    reviews: 124,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Best Seller',
    colors: ['pink', 'purple', 'blue']
  },
  {
    id: 2,
    name: 'Superhero Cape Set',
    price: 'Rp 199.000',
    rating: 4.8,
    reviews: 89,
    image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'New',
    colors: ['red', 'blue', 'green']
  },
  {
    id: 3,
    name: 'Flower Princess Tutu',
    price: 'Rp 249.000',
    rating: 4.7,
    reviews: 67,
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Limited',
    colors: ['pink', 'white', 'yellow']
  },
  {
    id: 4,
    name: 'Dino Adventure Outfit',
    price: 'Rp 179.000',
    rating: 4.6,
    reviews: 45,
    image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Popular',
    colors: ['green', 'brown', 'orange']
  },
  {
    id: 5,
    name: 'Fairy Tale Gown',
    price: 'Rp 349.000',
    rating: 5.0,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Premium',
    colors: ['gold', 'silver', 'rose']
  },
  {
    id: 6,
    name: 'Space Explorer Suit',
    price: 'Rp 229.000',
    rating: 4.8,
    reviews: 78,
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Trending',
    colors: ['navy', 'silver', 'white']
  }
]

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Best Seller': return 'bg-pink-500'
    case 'New': return 'bg-green-500'
    case 'Limited': return 'bg-red-500'
    case 'Popular': return 'bg-blue-500'
    case 'Premium': return 'bg-purple-500'
    case 'Trending': return 'bg-orange-500'
    default: return 'bg-gray-500'
  }
}

export function FeaturedProducts() {
  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved pieces that make every child feel special and confident
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden card-hover group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>
                
                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                </button>
                
                {/* Quick Add */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full bg-white text-gray-800 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg hover:bg-gray-50">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Colors */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-500">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 border-gray-200`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-full hover:shadow-lg transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}