"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        name: "Karan Kumar",
        business: "Global Retailers",
        text: "Moving our 40+ stores to AZ Commerce was the best decision we made. The real-time inventory sync across branches is a complete game-changer.",
        image: "https://i.pravatar.cc/150?u=karan",
    },
    {
        name: "Sarah Jenkins",
        business: "The Bakers Co.",
        text: "The POS is so fast and intuitive. Our staff needed zero training. It just works, every single time, even during our busiest hours.",
        image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        name: "James Thorne",
        business: "Tech Gadgets Store",
        text: "The vendor management system saved us 20+ hours a week in paperwork. Automated payouts and tracking are essential features for any distributor.",
        image: "https://i.pravatar.cc/150?u=james",
    },
    {
        name: "Elena Rodriguez",
        business: "Luxe Fashion Hub",
        text: "Simple, powerful, and professional. The web builder allowed us to launch a high-conversion store in less than a weekend. Stunning platform.",
        image: "https://i.pravatar.cc/150?u=elena",
    }
];

const TestimonialsV3 = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6 tracking-tight uppercase italic">
                            Trusted by <span className="text-orange-600">The Founders.</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Join thousands of business owners who have scaled their operations with our unified commerce system.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex -space-x-4">
                            {reviews.map((r, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative shadow-lg">
                                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm font-bold text-[#0f172a] bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100 italic">
                            4.9/5 from 2,000+ reviews
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex gap-8 animate-scroll whitespace-nowrap">
                        {[...reviews, ...reviews].map((r, i) => (
                            <motion.div
                                key={i}
                                className="min-w-[400px] w-[25vw] bg-white p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-white whitespace-normal relative group"
                            >
                                <div className="absolute top-10 right-10 text-slate-100 group-hover:text-orange-100 transition-colors">
                                    <Quote size={60} fill="currentColor" />
                                </div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} size={16} className="text-orange-600" fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-xl font-bold text-[#0f172a] mb-12 leading-relaxed italic">
                                    &quot;{r.text}&quot;
                                </p>
                                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-slate-50">
                                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                                        <Image src={r.image} alt={r.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-base font-semibold text-[#0f172a] uppercase tracking-tighter">{r.name}</div>
                                        <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">{r.business}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsV3;
