import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiX } from "react-icons/fi";

export default function Navbar({ 
  cartCount = 0, 
  wishlistCount = 0, 
  onOpenCart, 
  onOpenWishlist,
  onOpenProfile,
  searchTerm, 
  setSearchTerm, 
  isSearchOpen, 
  setIsSearchOpen 
}) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
          Furniro
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-base font-medium text-gray-700">
          <Link to="/" className="hover:text-[#b88e2f] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#b88e2f] transition">Shop</Link>
          <Link to="/about" className="hover:text-[#b88e2f] transition">About</Link>
          <Link to="/contact" className="hover:text-[#b88e2f] transition">Contact</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          {/* Profile Button */}
          <button 
            onClick={onOpenProfile} 
            title="Account" 
            className="hover:text-[#b88e2f] cursor-pointer"
          >
            <FiUser />
          </button>
          
          {/* Search Button */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)} 
            title="Search" 
            className="hover:text-[#b88e2f] cursor-pointer"
          >
            <FiSearch />
          </button>

          {/* Wishlist Button */}
          <button 
            onClick={onOpenWishlist} 
            title="Wishlist" 
            className="relative hover:text-[#b88e2f] cursor-pointer"
          >
            <FiHeart />
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </button>
          
          {/* Cart Button */}
          <button 
            onClick={onOpenCart} 
            title="Cart" 
            className="relative hover:text-[#b88e2f] cursor-pointer"
          >
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-[#b88e2f] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {isSearchOpen && (
        <div className="bg-gray-50 border-t border-b px-6 py-3 flex items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#b88e2f]"
            autoFocus
          />
          <button 
            onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }} 
            className="text-gray-500 hover:text-black text-xl"
          >
            <FiX />
          </button>
        </div>
      )}
    </header>
  );
}