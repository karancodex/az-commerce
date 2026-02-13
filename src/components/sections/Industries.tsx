"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingBasket, Pill, Shirt, Tablet, Building2 } from "lucide-react";

const Industries = () => {
    const industries = [
        { title: "Grocery Stores", icon: <ShoppingBasket size={32} />, color: "bg-emerald-50 text-emerald-600" },
        { title: "Pharmacies", icon: <Pill size={32} />, color: "bg-blue-50 text-blue-600" },
        { title: "Restaurants", icon: <Utensils size={32} />, color: "bg-orange-50 text-orange-600" },
        { title: "Fashion Shops", icon: <Shirt size={32} />, color: "bg-pink-50 text-pink-600" },
        { title: "Electronics", icon: <Tablet size={32} />, color: "bg-indigo-50 text-indigo-600" },
        { title: "Distributors", icon: <Building2 size={32} />, color: "bg-slate-50 text-slate-600" },
    ];

    return (
        <section id="industries" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">Built for every <span className="text-blue-600">business size</span> and type</h2>
                        <p className="text-xl text-slate-600">
                            Our flexible OS adapts to your specific industry needs with custom modules and specialized workflows.
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap">
                        View All Industries
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center text-center p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:shadow-blue-50 transition-all group"
                        >
                            <div className={`w-20 h-20 ${ind.color} rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-sm`}>
                                {ind.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg">{ind.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
