"use client";

import { motion } from "framer-motion";
import { Layout, Shield, Zap, Search, Bell, Settings } from "lucide-react";
import Image from "next/image";

export default function AdminPortalV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Shield size={14} /> Mission Control for Your Business
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                    >
                        Centralized <span className="text-orange-600">Admin Portal</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        One dashboard to rule them all. Manage users, track global performance, and configure every aspect of your commerce empire.
                    </motion.p>
                </div>

                {/* Main Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative rounded-[3rem] overflow-hidden bg-[#0f172a] p-4 lg:p-8 shadow-2xl mb-32"
                >
                    <div className="bg-white rounded-[2rem] overflow-hidden aspect-video relative">
                        {/* Mock UI Structure */}
                        <div className="absolute inset-0 flex">
                            {/* Sidebar */}
                            <div className="w-1/5 border-r border-slate-100 p-6 space-y-4">
                                <div className="w-full h-8 bg-slate-50 rounded-lg animate-pulse" />
                                <div className="w-full h-8 bg-orange-50 rounded-lg" />
                                <div className="w-full h-8 bg-slate-50 rounded-lg animate-pulse" />
                                <div className="w-full h-8 bg-slate-50 rounded-lg animate-pulse" />
                            </div>
                            {/* Main */}
                            <div className="flex-1 p-8 space-y-8">
                                <div className="flex justify-between items-center">
                                    <div className="w-1/3 h-10 bg-slate-50 rounded-xl" />
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-50 rounded-full" />
                                        <div className="w-10 h-10 bg-slate-50 rounded-full" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="h-40 bg-slate-50 rounded-3xl" />
                                    <div className="h-40 bg-slate-50 rounded-3xl" />
                                    <div className="h-40 bg-slate-50 rounded-3xl" />
                                </div>
                                <div className="h-64 bg-slate-50 rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { title: "User Hierarchy", desc: "Granular permissions and audit logs for your entire team.", icon: Layout },
                        { title: "Global Settings", desc: "Update taxes, currencies, and regions across all stores instantly.", icon: Settings },
                        { title: "Live Monitoring", desc: "Watch orders and server health in real-time with zero lag.", icon: Zap },
                        { title: "Data Export", desc: "One-click CSV/PDF exports for accounting and performance reviews.", icon: Search },
                        { title: "Multi-Store Sync", desc: "Synchronize themes and data across infinite storefronts.", icon: Bell },
                        { title: "Enterprise Grade", desc: "SSO support and bank-grade encryption for all admin actions.", icon: Shield },
                    ].map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                <f.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{f.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
