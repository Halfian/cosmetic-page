import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { items, addItem, removeItem, clearCart } = useCartStore();
    const totalQuantity = useCartStore((state) =>
        state.items.reduce((sum, item) => sum + item.quantity, 0));
    const totalPrice = useCartStore((state) =>
        state.items.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0
        )
    );
    const navigate = useNavigate();

    return (
        <section className="bg-black-rich min-h-screen py-20 text-center">
            <h2 className="text-4xl font-serif text-gold-500 mb-10">Your Cart</h2>

            {items.length === 0 ? (
                <p className="text-indigo-200">Your cart is empty</p>
            ) : (
                <div className="max-w-4xl mx-auto space-y-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border border-gold-500 rounded-lg p-4 bg-gradient-to-r from-indigo-950 via-black-rich to-black">
                            <div className="text-left">
                                <h3 className="text-gold-500 font-serif text-lg">{item.name}</h3>
                                <p className="text-indigo-200">${item.price}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={() => removeItem(item.id)}
                                    className="px-3 py-1 border border-gold-500 text-gold-500 hover:bg-indigo-800 hover:text-white transition"
                                >
                                    -
                                </button>
                                <span className="text-gold-500 font-medium">{item.quantity}</span>
                                <button 
                                    onClick={() => addItem(item)}
                                    className="px-3 py-1 border border-gold-500 text-gold-500 hover:bg-indigo-800 hover:text-white transition"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt-10 text-gold-500 font-serif text-xl">
                        <p>Total Items: {totalQuantity}</p>
                        <p>Total Price: {totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="mt-10 flex justify-center space-x-6">
                        <button
                            onClick={clearCart}
                            className="px-6 py-3 border border-gold-500 text-gold-500 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-950 hover:text-white transition"
                        >
                            Clear Cart
                        </button>
                        <button 
                            onClick={() => navigate("/checkout")}
                            className="px-6 py-3 border border-gold-500 text-white bg-gradient-to-r from-indigo-800 to-indigo-950 hover:scale-105 transition"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}