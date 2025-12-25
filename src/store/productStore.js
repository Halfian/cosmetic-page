import { create } from 'zustand';

export  const useProductStore = create((set) => ({
  products: [
    { id: 1, name: "Elegant Lipstick", category: "Lipstick", price: 19, image: "lipstick-renee.webp" },
    { id: 2, name: "Luxury Perfume", category: "Perfume", price: 89, image: "perfume-chanel.jpg" },
    { id: 3, name: "Silk Cream", category: "Cream", price: 39, image: "cream-sensai.avif" },
    { id: 4, name: "Bloom Serum", category: "Serum", price: 49, image: "bloom-serum.jpg"},
    { id: 5, name: "Glow Cream", category: "Cream", price: 79, image: "glow-cream.jpg"},
    { id: 6, name: "Luxury Lip Tint", category: "Lipstick", price: 29, image: "lip-tint.webp"},
    { id: 7, name: "Velvet Foundation", category: "Face", price: 59, image: "espoir-foundation.png" },
    { id: 8, name: "Rose Mist", category: "Serum", price: 35, image: "rose-serum.webp" },

  ],
  categories: ["All", "Lipstick", "Cream", "Perfume", "Serum", "Face"],
  selectedCategory: "All",
  setCategory: (cat) => set({ selectedCategory: cat }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
