import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export default function Navbar() {   
    const totalQuantity = useCartStore((state) => 
        state.items.reduce((sum, item) => sum + item.quantity, 0));

    return (
        <nav className="fixed top-0 w-full bg-black-rich/70 backdrop-blur-md text-gold-500 flex justify-between items-center px-10 py-4 z-50">
            <div className="flex space-x-10">
                <Link to="/" className="hover:text-white">Home</Link>
                <Link to="/products" className="hover:text-white">Products</Link>
                <Link to="/about" className="hover:text-white">About</Link>
            </div>
            <Link to="/cart" className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-gold-500 hover:text-white" />
                {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs font-bold rounded-full px-2">
                        {totalQuantity}
                    </span>
                )}
            </Link>
        </nav>
    )
}