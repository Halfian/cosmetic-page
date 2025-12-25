import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const clearCart = useCartStore((state) => state.clearCart);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        alert("Order placed successfully! Thank you for shopping with Hana.");
        navigate("/products");
    };

    return (
        <section className="bg-black-rich min-h-screen py-20 flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-r from-indigo-950 via-black-rich to-black p-10 rounded-lg shadow-luxury w-full max-w-lg border border-gold-500"
            >
                <h2 className="text-3xl font-serif text-gold-500 mb-6 text-center">
                    Checkout
                </h2>
                <label className="block text-gold-500 mb-2">Full Name</label>
                <input 
                    type="text" 
                    required
                    className="w-full mb-4 px-4 py-2 rounded border border-gold-500 bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <label className="block text-gold-500 mb-2">Address</label>
                <textarea 
                    required
                    className="w-full mb-4 px-4 py-2 rounded border border-gold-500 bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <label className="block text-gold-500 mb-2">Payment Method</label>
                <select 
                    required
                    className="w-full mb-6 px-4 py-2 rounded border border-gold-500 bg-black text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="">Select</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">Paypal</option>
                    <option value="bank">Bank Transfer</option>
                </select>

                <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-800 to-indigo-950 text-white font-bold rounded hover:scale-105 transition"    
                >
                    Place Order
                </button>
            </form>
        </section>
    );
}