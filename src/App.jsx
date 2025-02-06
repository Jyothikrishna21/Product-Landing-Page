import { FiShoppingCart, FiCheck, FiStar, FiTruck, FiRefreshCw, FiHeadphones } from 'react-icons/fi';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <FiHeadphones className="mr-2" />
            SonicBeats
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#products" className="hover:text-gray-200">Products</a>
            <a href="#features" className="hover:text-gray-200">Features</a>
            <a href="#reviews" className="hover:text-gray-200">Reviews</a>
          </div>
          <div className="relative">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 flex items-center">
              <FiShoppingCart className="mr-2" />
              Cart ({cartCount})
            </button>
            {cartCount > 0 && (
              <button 
                onClick={handleRemoveFromCart}
                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center hover:bg-red-600"
              >
                -
              </button>
            )}
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Experience Pure Sound Excellence
            </h1>
            <p className="text-xl mb-12 text-gray-300">
              Immerse yourself in premium audio quality with our flagship wireless headphones.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
              alt="Premium Headphones" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "SonicBeats Pro",
                price: "299",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
                description: "Premium wireless headphones with noise cancellation"
              },
              {
                name: "SonicBeats Air",
                price: "199",
                image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80",
                description: "Lightweight wireless earbuds for active lifestyle"
              },
              {
                name: "SonicBeats Studio",
                price: "399",
                image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
                description: "Professional studio-quality headphones"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <button 
                      onClick={handleAddToCart}
                      className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 flex items-center"
                    >
                      <FiShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose SonicBeats</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FiCheck />,
                title: "Premium Sound Quality",
                description: "Experience crystal-clear audio with deep, rich bass"
              },
              {
                icon: <FiTruck />,
                title: "Free Shipping",
                description: "Free worldwide shipping on all orders over $200"
              },
              {
                icon: <FiRefreshCw />,
                title: "30-Day Returns",
                description: "Try our products risk-free with easy returns"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "James Wilson",
                role: "Music Producer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
                text: "The sound quality of SonicBeats Pro is absolutely incredible. Perfect for studio work and casual listening."
              },
              {
                name: "Emily Chen",
                role: "Professional DJ",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                text: "These headphones have transformed my DJ sets. The noise cancellation is top-notch, and the battery life is amazing."
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow flex gap-6">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">{review.text}</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiHeadphones className="mr-2" />
                SonicBeats
              </h3>
              <p className="text-gray-400">Premium audio equipment for music enthusiasts.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">Headphones</a></li>
                <li><a href="#" className="hover:text-white">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates and exclusive offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full"
                />
                <button className="bg-white text-gray-900 px-4 py-2 rounded-r-lg hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SonicBeats. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;