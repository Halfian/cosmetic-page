import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-black-rich via-indigo-950 to-black py-10 text-center border-t border-gold-500">
            <p className="font-serif text-gold-500 font-bold text-2xl">© Hana</p>
            <div className="mt-4 flex justify-center space-x-6">
                <a href="https://instagram.com/hana" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-8 h-8 text-indigo-500 hover:text-white" />
                </a>
                <a href="https://tiktok.com/hana" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="w-8 h-8 text-indigo-500 hover:text-white" />
                </a>
                <a href="https://facebook.com/hana" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="w-8 h-8 text-indigo-500 hover:text-white" />
                </a>
            </div>
        </footer>
    )
}