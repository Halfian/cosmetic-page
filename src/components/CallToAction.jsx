import React from 'react';
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
    const navigate = useNavigate();

    return (
        <section className="bg-black-rich py-32 text-center">
            <h2 className="text-5xl font-serif text-gold-500">Experience Hana</h2>
            <button 
                onClick={() => navigate("/products")}
                className="mt-8 border border-gold-500 px-10 py-4 text-gold-500 rounded-md hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 hover:text-white transition cursor-pointer">
                Shop Now
            </button>
        </section>
    )
}