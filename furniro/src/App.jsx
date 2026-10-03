import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { products, formatPrice } from "./data/products";
import { FiX, FiTrash2 } from "react-icons/fi";

function Home({ onAdd, onLike, wishlist, searchTerm }) {
  const filteredProducts = products ? products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Our Products</h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found matching "{searchTerm}"</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={() => onAdd(product)} 
                onLike={() => onLike(product)}
                isLiked={wishlist.some(item => item.id === product.id)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function Shop({ onAdd, onLike, wishlist, searchTerm }) {
  const filteredProducts = products ? products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Shop All Products</h1>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found matching "{searchTerm}"</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAdd={() => onAdd(product)} 
              onLike={() => onLike(product)}
              isLiked={wishlist.some(item => item.id === product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-800">About Furniro</h1>
      <p className="mt-4 text-gray-600">High quality furniture crafted from top materials.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
      <p className="mt-4 text-gray-600">Email: support@furniro.com | Phone: +1 234 567 890</p>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleToggleLike = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar 
        cartCount={cart.length} 
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      
      <Routes>
        <Route path="/" element={<Home onAdd={handleAddToCart} onLike={handleToggleLike} wishlist={wishlist} searchTerm={searchTerm} />} />
        <Route path="/shop" element={<Shop onAdd={handleAddToCart} onLike={handleToggleLike} wishlist={wishlist} searchTerm={searchTerm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="flex h-full w-full max-w-md flex-col justify-between bg-white p-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">Shopping Cart ({cart.length})</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-2xl text-gray-500 hover:text-black">
                  <FiX />
                </button>
              </div>

              <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b pb-3">
                      <img src={item.img} alt={item.name} className="h-16 w-16 rounded object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-sm font-semibold text-[#b88e2f]">{formatPrice(item.price)}</p>
                      </div>
                      <button onClick={() => handleRemoveFromCart(idx)} className="text-red-500 text-sm hover:underline">
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg text-gray-800 mb-4">
                  <span>Subtotal:</span>
                  <span className="text-[#b88e2f]">{formatPrice(totalAmount)}</span>
                </div>
                <button 
                  onClick={() => alert("Proceeding to Checkout!")}
                  className="w-full bg-[#b88e2f] py-3 text-center font-bold text-white hover:bg-[#a17b27] transition rounded"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="flex h-full w-full max-w-md flex-col justify-between bg-white p-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">My Wishlist ({wishlist.length})</h2>
                <button onClick={() => setIsWishlistOpen(false)} className="text-2xl text-gray-500 hover:text-black">
                  <FiX />
                </button>
              </div>

              <div className="mt-4 max-h-[70vh] overflow-y-auto space-y-4">
                {wishlist.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No items in your wishlist.</p>
                ) : (
                  wishlist.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                      <img src={item.img} alt={item.name} className="h-16 w-16 rounded object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-sm font-semibold text-[#b88e2f]">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => { handleAddToCart(item); handleRemoveFromWishlist(item.id); }}
                          className="bg-[#b88e2f] text-white text-xs px-2 py-1 rounded"
                        >
                          Add to Cart
                        </button>
                        <button onClick={() => handleRemoveFromWishlist(item.id)} className="text-red-500 hover:text-red-700">
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-gray-800">User Account</h3>
              <button onClick={() => setIsProfileOpen(false)} className="text-gray-500 hover:text-black">
                <FiX className="text-xl" />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-600"><span className="font-semibold">Name:</span> Reshma S</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Status:</span> Logged In</p>
              <button 
                onClick={() => { alert("Logged out!"); setIsProfileOpen(false); }}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded text-sm font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}