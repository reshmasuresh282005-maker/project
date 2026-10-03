export const products = [
  { 
    id: 1, 
    name: "Annibale Colombo Bed", 
    desc: "Luxury Wooden Bed", 
    price: 1899, 
    old: 2500, 
    tag: "-24%", 
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    name: "Annibale Colombo Sofa", 
    desc: "Comfortable Fabric Sofa", 
    price: 2499, 
    old: 3000, 
    tag: "-16%", 
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    name: "Bedside Table African", 
    desc: "Classic Wooden Table", 
    price: 299, 
    old: 370, 
    tag: "-19%", 
    img: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 4, 
    name: "Knoll Saarinen Executive", 
    desc: "Modern Red Chair", 
    price: 499, 
    old: null, 
    tag: "New", 
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 5, 
    name: "Syltherine Chair", 
    desc: "Stylish Cafe Chair", 
    price: 399, 
    old: 500, 
    tag: "-20%", 
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 6, 
    name: "Outdoor Stool Table", 
    desc: "Minimalist Patio Set", 
    price: 150, 
    old: null, 
    tag: "New", 
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 7, 
    name: "Modern Living Sofa", 
    desc: "Minimalist Lounge Chair", 
    price: 1200, 
    old: 1500, 
    tag: "-20%", 
    img: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 8, 
    name: "Wooden Dining Chair", 
    desc: "Classic Solid Wood", 
    price: 250, 
    old: null, 
    tag: null, 
    img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80" 
  }
];

export const categories = [
  { id: 1, name: "Dining", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80" },
  { id: 2, name: "Living", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { id: 3, name: "Bedroom", img: "https://images.unsplash.com/photo-1540518614846-7ede433c5172?w=600&q=80" }
];

export const features = [
  { id: 1, icon: "trophy", title: "High Quality", text: "crafted from top materials" },
  { id: 2, icon: "shield", title: "Warranty Protection", text: "Over 2 years" },
  { id: 3, icon: "ship", title: "Free Shipping", text: "Order over $150" },
  { id: 4, icon: "support", title: "24 / 7 Support", text: "Dedicated support" }
];

export const formatPrice = (n) => "$" + n.toLocaleString();
