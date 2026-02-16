"use client";

import { motion } from "framer-motion";
import { Layout, Box, ShoppingCart, Globe, Store, Truck, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "CRM & Sales",
        desc: "Convert leads and manage deep customer relationships with integrated data.",
        icon: Layout,
    },
    {
        title: "Inventory",
        desc: "Track stock in real-time across multiple warehouses and channels automatically.",
        icon: Box,
    },
    {
        title: "POS System",
        desc: "Lightning-fast billing terminal for high-velocity physical storefronts.",
        icon: ShoppingCart,
    },
    {
        title: "Web Builder",
        desc: "E-commerce drag-and-drop builder for high-conversion online stores.",
        icon: Globe,
    },
    {
        title: "Vendor System",
        desc: "Automated multi-vendor management with commission and payout flows.",
        icon: Store,
    },
    {
        title: "Delivery Sync",
        desc: "Real-time fleet visibility and last-mile logistics tracking for everyone.",
        icon: Truck,
    },
    {
        title: "Mobile Apps",
        desc: "White-labeled iOS & Android apps for your customers and internal staff.",
        icon: Smartphone,
    }
];

const FeaturesGridV3 = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6 tracking-tight">
                        Everything you need to <span className="text-orange-600">scale.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Powerful modules that work perfectly together, so you can focus on building your business instead of managing multiple tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-white hover:shadow-2xl hover:-translate-y-2 transition-all group"
                        >
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <f.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-4 tracking-tight">{f.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                                {f.desc}
                            </p>
                            <Link href="#" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f172a] hover:text-orange-600 transition-colors">
                                Learn More <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    ))}

                    {/* Specialized CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-orange-600 p-10 rounded-[2.5rem] shadow-xl shadow-orange-600/20 text-white flex flex-col justify-center items-start lg:col-span-1 xl:col-span-1"
                    >
                        <h3 className="text-2xl font-semibold mb-6 leading-tight uppercase italic">Need a custom <br /> solution?</h3>
                        <p className="text-sm font-bold text-orange-100 mb-8 opacity-80">
                            Our team can build specialized modules for your enterprise.
                        </p>
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest hover:bg-orange-50 transition-all">
                            Talk to Sales
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGridV3;
