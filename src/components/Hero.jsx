import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-950 via-black-rich to-black">
            <div className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain pointer-events-none"
                style={{ backgroundImage: "url('/Hana logo2.png')"}}>
            </div>
            <h1 className="text-7xl font-serif text-gold-500 tracking-wider drop-shadow-lg">Hana</h1>
            <p className="mt-6 text-lg font-sans text-indigo-200">Beauty in Bloom</p>
            <button 
                onClick={() => navigate("/products")}
                className="mt-10 bg-gradient-to-r from-indigo-700 to-indigo-900 
                   text-white font-sans tracking-wide shadow-luxury px-10 py-4 
                   transition cursor-pointer hover:scale-105 hover:shadow-xl rounded-md">
                Discover Hana
            </button>
        </section>
    );
} 