"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, Smartphone, Receipt, Zap, Wifi } from "lucide-react";

export default function POSBillingV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Zap size={14} /> Lightning Fast Transactions
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                    >
                        Cloud-First <span className="text-orange-600">POS System</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        The world's fastest billing experience. Work offline, sync online, and manage high-volume sales with zero friction.
                    </motion.p>
                </div>

                {/* POS Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative bg-slate-100 rounded-[4rem] p-12 lg:p-20 mb-32 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-8">Hardware Independent.</h2>
                            <p className="text-lg text-slate-500 mb-10">Run your POS on iPads, Android tablets, specialized checkout hardware, or even a basic smartphone.</p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Wifi, title: "Offline Mode", desc: "Keep selling even when the internet goes out." },
                                    { icon: CreditCard, title: "Unified Payments", desc: "Accept UPI, Cards, and Cash in one flow." },
                                    { icon: Receipt, title: "Digital Bills", desc: "Send receipts via WhatsApp or Email instantly." },
                                    { icon: Smartphone, title: "Staff Sync", desc: "Manage 100+ terminals on a single account." }
                                ].map((item) => (
                                    <div key={item.title} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                                        <item.icon size={24} className="text-orange-600 mb-4" />
                                        <h4 className="font-bold text-[#0f172a] mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full aspect-[4/3] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-slate-900 relative">
                                {/* POS UI Header */}
                                <div className="h-16 bg-slate-900 flex items-center justify-between px-6">
                                    <div className="text-white font-bold text-sm">AZ POS Billing</div>
                                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                                </div>
                                {/* POS UI Content */}
                                <div className="p-6 flex h-full">
                                    <div className="w-2/3 grid grid-cols-3 gap-4 h-fit">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="aspect-square bg-slate-50 rounded-xl" />
                                        ))}
                                    </div>
                                    <div className="w-1/3 border-l ml-6 pl-6 space-y-4">
                                        <div className="h-4 w-full bg-slate-100 rounded" />
                                        <div className="h-4 w-2/3 bg-slate-100 rounded" />
                                        <hr />
                                        <div className="h-8 w-full bg-orange-600 rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-600 rounded-3xl -z-10" />
                        </div>
                    </div>
                </motion.div>

                {/* Benefits */}
                <div className="text-center">
                    <h2 className="text-3xl font-display font-semibold text-[#0f172a] mb-16">Why Global Retailers trust AZ POS.</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {["0.2s Transaction Time", "10,000+ Stores", "24/7 Priority Support", "99.99% Uptime"].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                                <Zap size={16} className="text-orange-600" /> {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
