import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-end px-5 py-10 lg:min-h-[600px] lg:px-24">
      <img 
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80" 
        alt="Hero Background" 
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      <div className="relative z-10 w-full max-w-[540px] rounded-lg bg-[#fff9f3] p-8 shadow-md lg:p-10">
        <p className="font-semibold tracking-widest text-gray-700 text-sm">New Arrival</p>
        <h1 className="my-3 text-3xl font-bold leading-tight text-[#b88e2f] lg:text-[42px]">
          Discover Our <br />New Collection
        </h1>
        <p className="mb-6 text-xs text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-[#b88e2f] px-10 py-3.5 font-bold uppercase text-white hover:bg-[#a17b27] text-xs tracking-wider transition rounded-sm text-center"
        >
          BUY NOW
        </Link>
      </div>
    </section>
  );
}