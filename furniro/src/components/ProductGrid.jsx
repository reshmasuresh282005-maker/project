import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
export default function ProductGrid({ title, limit = 8 }) {
  const [cart, setCart] = useState(0);
  const [count, setCount] = useState(limit);
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-24">
      {title && <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>}
      <p className="mb-4 text-right text-sm text-gray-500">Cart items: {cart}</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, count).map((p) => <ProductCard key={p.id} product={p} onAdd={() => setCart(cart + 1)} />)}
      </div>
      {count < products.length && (
        <div className="mt-12 text-center">
          <button onClick={() => setCount(products.length)} className="border border-gold px-16 py-3 font-semibold text-gold hover:bg-gold hover:text-white">Show More</button>
        </div>
      )}
    </section>
  );
}
