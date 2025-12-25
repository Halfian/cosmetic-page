import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import Footer from '../components/Footer';

export default function Products() {
    const { addItem } = useCartStore();
    const { products, searchQuery, setSearchQuery, categories, setCategory, selectedCategory } = useProductStore();

    const filteredProducts = products.filter((p) =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-black-rich via-indigo-950 to-black">
            <section className="py-20 relative z-20">
                <div className="flex flex-col items-center gap-6 px-6">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gold-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search products..."
                            aria-label="Search products"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gold-500 bg-indigo-900 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-lg"
                        />
                    </div>
                    <div>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-md border transition ${
                                    selectedCategory === cat
                                        ? "bg-gold-500 text-black font-semibold"
                                        : "border-gold-500 text-gold-500 hover:bg-indigo-800 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <main className="flex-grow px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gold-500 rounded-lg p-6 bg-gradient-to-r from-indigo-950 via-black-rich to-black hover:scale-105 transition"
                    >
                        <img src={product.image} alt={product.name} 
                            className="w-full h-64 object-cover rounded-md mb-4"/>
                        <h3 className="text-gold-500 font-serif text-xl">{product.name}</h3>
                        <p className="text-indigo-200">${product.price}</p>
                        <button
                            onClick={() => addItem(product)}
                            className="mt-4 px-4 py-2 border border-gold-500 text-gold-500 hover:bg-indigo-800 hover:text-white transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                      ))
                ) : (
                  <p className="text-indigo-200 text-center col-span-full">
                    No products found.
                  </p>
                )}
            </main>
            <Footer />
        </div>
    );
}