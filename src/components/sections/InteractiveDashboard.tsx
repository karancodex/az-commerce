"use client";

import { motion } from "framer-motion";
import {
    ShoppingBag,
    BarChart3,
    Users,
    Package,
    Truck,
    Settings,
    Search,
    Bell,
    CreditCard,
    Target,
    ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const InteractiveDashboard = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden noise-bg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6"
                    >
                        Manage everything from <br />
                        <span className="text-gradient underline decoration-blue-500/20">one dashboard.</span>
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                        A premium, high-fidelity interface designed for modern retail operators. Inspired by Odoo, built for luxury.
                    </p>
                </div>

                {/* Dashboard Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(31,38,135,0.1)] border border-slate-100 overflow-hidden min-h-[700px] grid lg:grid-cols-12 relative group"
                >
                    {/* Sidebar */}
                    <div className="hidden lg:flex lg:col-span-1 border-r border-slate-100 flex-col items-center py-10 gap-8 bg-slate-50/50">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                            <ShoppingBag size={20} />
                        </div>
                        <div className="space-y-6">
                            {[BarChart3, Users, Package, Truck, Target, Settings].map((Icon, i) => (
                                <div key={i} className={cn(
                                    "p-3 rounded-xl transition-all cursor-pointer",
                                    i === 0 ? "bg-white text-blue-600 shadow-md" : "text-slate-400 hover:text-blue-600 hover:bg-white"
                                )}>
                                    <Icon size={20} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-11 p-10 flex flex-col h-full">
                        {/* Header */}
                        <header className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4 bg-slate-100/50 px-6 py-3 rounded-2xl w-full max-w-md border border-slate-200/50">
                                <Search size={18} className="text-slate-400" />
                                <input type="text" placeholder="Explore your business..." className="bg-transparent border-none outline-none w-full text-sm font-medium" />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                                    <Bell size={20} />
                                </div>
                                <div className="h-10 w-[1px] bg-slate-200 mx-2" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white overflow-hidden shadow-sm relative">
                                        <Image
                                            src="https://i.pravatar.cc/150?u=admin"
                                            alt="Admin Avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="text-xs font-black text-slate-900 leading-none">Karan Kumar</div>
                                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">Founder</div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Stats Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {[
                                { label: "Total Revenue", val: "$1,24,500", grow: "+12%", icon: <BarChart3 className="text-blue-600" />, color: "bg-blue-50" },
                                { label: "Active Orders", val: "1,482", grow: "+24%", icon: <Package className="text-emerald-600" />, color: "bg-emerald-50" },
                                { label: "Site Visitors", val: "42.5k", grow: "+8.4%", icon: <Users className="text-purple-600" />, color: "bg-purple-50" },
                                { label: "Avg. Delivery", val: "22 min", grow: "-4 min", icon: <Truck className="text-orange-600" />, color: "bg-orange-50" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.color)}>
                                            {stat.icon}
                                        </div>
                                        <div className="text-xs font-black text-emerald-600">{stat.grow}</div>
                                    </div>
                                    <div className="text-2xl font-black text-slate-900 mb-1">{stat.val}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Main Visual Panels */}
                        <div className="grid lg:grid-cols-12 gap-8 flex-grow">
                            <div className="lg:col-span-8 space-y-8">
                                {/* Sales Chart Mock */}
                                <div className="bg-slate-900 rounded-[2.5rem] p-8 min-h-[300px] relative overflow-hidden group/chart">
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-10 text-white">
                                            <div>
                                                <h4 className="font-display font-black text-2xl">Sales Velocity</h4>
                                                <div className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Live updates from ONDC</div>
                                            </div>
                                            <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-xs font-bold font-mono outline-none">
                                                <option>LAST 24 HOURS</option>
                                            </select>
                                        </div>
                                        <div className="flex items-end gap-3 h-32 w-full mt-12">
                                            {[40, 70, 45, 90, 65, 85, 120, 100, 140, 110, 160].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="flex-grow bg-blue-500 rounded-t-lg opacity-40 hover:opacity-100 hover:bg-blue-400 transition-all relative group/bar"
                                                >
                                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                                        ${(h * 10).toLocaleString()}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-blue-600/5 mix-blend-screen pointer-events-none" />
                                </div>

                                {/* Recent Activities */}
                                <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <h4 className="font-black text-slate-900 text-xl">Recent Orders</h4>
                                        <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-1">
                                            View All <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { cu: "Marcus Rossi", p: "Artisan Bread", pr: "$45.00", st: "Delivered", color: "bg-emerald-100 text-emerald-600" },
                                            { cu: "Elena Gilbert", p: "Coffee Blend", pr: "$89.50", st: "Processing", color: "bg-blue-100 text-blue-600" },
                                            { cu: "John Wick", p: "Elite Package", pr: "$1,200.00", st: "Pending", color: "bg-amber-100 text-amber-600" }
                                        ].map((order, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-400">{order.cu[0]}</div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm">{order.cu}</div>
                                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{order.p}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-8">
                                                    <div className="font-black text-slate-900 text-sm">{order.pr}</div>
                                                    <div className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.05em]", order.color)}>
                                                        {order.st}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Cards */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden group/card shadow-2xl shadow-blue-900/20">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                                            <CreditCard size={24} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-1 opacity-80 uppercase tracking-widest text-xs">Available Funds</h4>
                                        <div className="text-4xl font-black mb-8 leading-none">$42,890.12</div>
                                        <div className="flex gap-4">
                                            <button className="flex-grow py-4 bg-white text-blue-600 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg">Payout</button>
                                            <button className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-md">
                                                <ArrowUpRight size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl animate-pulse" />
                                </div>

                                <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                                    <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Marketing Reach</h4>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-black uppercase">
                                                <span className="text-slate-400">Instagram Flow</span>
                                                <span className="text-blue-600">84%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full w-[84%]" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-black uppercase">
                                                <span className="text-slate-400">SEO Conversion</span>
                                                <span className="text-indigo-600">62%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-600 rounded-full w-[62%]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-black text-lg">+14%</div>
                                            <div>
                                                <div className="text-slate-900 font-bold text-sm">Target Achieved</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Q1 Sales Goal</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveDashboard;
