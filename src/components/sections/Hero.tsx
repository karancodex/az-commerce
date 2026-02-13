"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 20]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-40 overflow-hidden min-h-screen flex items-center noise-bg">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-400/10 rounded-full blur-[150px] mix-blend-screen"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/50 backdrop-blur-md border border-white/20 text-blue-700 rounded-full text-sm font-bold mb-10 shadow-sm"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                            </span>
                            Next-Gen Commerce OS
                        </motion.div>

                        <h1 className="text-6xl lg:text-8xl font-display font-black leading-[1] mb-8 text-slate-900 tracking-tight">
                            Scale without <br />
                            <span className="text-gradient">compromise.</span>
                        </h1>

                        <p className="text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
                            The unified ecosystem for brands that demand more. Seamlessly integrate <span className="text-slate-900 underline decoration-blue-500/30">Store, POS, and Logistics</span> in one beautiful platform.
                        </p>

                        <div className="flex flex-wrap gap-5 mb-12">
                            <Link
                                href="/signup"
                                className="px-10 py-6 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-2xl shadow-slate-900/20 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
                            >
                                Get Started
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/product/website-builder"
                                className="px-10 py-6 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-3 group shadow-sm"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Play size={18} fill="currentColor" />
                                </div>
                                Explore Builder
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-10">
                            {[
                                { label: "Zero Code", icon: <Zap size={18} className="text-amber-500" /> },
                                { label: "24h Launch", icon: <CheckCircle2 size={18} className="text-emerald-500" /> },
                                { label: "Bank-Grade", icon: <ShieldCheck size={18} className="text-blue-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                    <div className="p-2 bg-slate-50 rounded-lg">{item.icon}</div>
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="relative"
                        style={{ rotate }}
                    >
                        {/* Abstract 3D Visualizer Container */}
                        <div className="relative z-10 w-full aspect-square max-w-[700px] mx-auto group">
                            {/* Dynamic Glow */}
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse group-hover:bg-blue-500/30 transition-colors" />

                            <Image
                                src="/hero_hologram_dashboard.png"
                                alt="AZ Commerce 3D Hologram Dashboard"
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.2)]"
                                priority
                            />

                            {/* Orbital Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-10%] border border-blue-100/50 rounded-full pointer-events-none"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20%] border border-purple-100/30 rounded-full border-dashed pointer-events-none"
                            />

                            {/* Floating Data Panels */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-20 -right-4 glass-card p-6 rounded-3xl w-56 z-20 shadow-2xl border-white/40"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth</div>
                                        <div className="text-2xl font-black text-slate-900">+124%</div>
                                    </div>
                                </div>
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "70%" }}
                                        className="h-full bg-emerald-500"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 25, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-10 glass-card p-6 rounded-3xl w-64 z-20 shadow-2xl border-white/40"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                        📦
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Delivering Now</div>
                                        <div className="text-2xl font-black text-slate-900">2,482</div>
                                        <div className="text-[10px] font-bold text-blue-600">Real-time Sync Active</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
