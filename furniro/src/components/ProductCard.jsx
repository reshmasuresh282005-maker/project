import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { formatPrice } from "../data/products";

export default function ProductCard({ product, onAdd, onLike, isLiked }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
        
        {/* Like (Heart) Button on Top Right of Image */}
        <button
          onClick={onLike}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition ${
            isLiked 
              ? "bg-red-500 text-white" 
              : "bg-white text-gray-600 hover:text-red-500"
          }`}
          title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <FiHeart className={isLiked ? "fill-current" : ""} />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[#b88e2f]">
            {formatPrice(product.price)}
          </span>
          
          <button
            onClick={onAdd}
            className="flex items-center gap-2 rounded bg-[#b88e2f] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#a17b27]"
          >
            <FiShoppingCart /> Add to Cart
          </button>

          
        </div>
      </div>
    </div>
  );
}