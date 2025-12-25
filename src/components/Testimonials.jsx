import React from 'react';

const testimonials = [
    { quote: "Hana redefines elegance.", author: "Vogue" },
    { quote: "Minimalist at its finest.", author: "Elle" },
    { quote: "A new era of luxury cosmetics.", author: "Harper's Bazaar"},
];

export default function Testimonials() {
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-4xl mx-auto space-y-8">
                {testimonials.map((t, i) => (
                    <blockquote key={i} className="italic text-xl text-center">
                        "{t.quote}" <br />
                        <span className="text-indigo-500">- {t.author}</span>
                    </blockquote>
                ))}
            </div>
        </section>
    )
}