"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Crown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "$29",
            icon: <Zap className="text-blue-600" />,
            desc: "For small boutiques and local shops starting their digital journey.",
            features: ["Online Storefront", "Mobile POS System", "Inventory (1,000 SKUs)", "Basic Analytics", "Email Support"],
            color: "bg-blue-50"
        },
        {
            name: "Professional",
            price: "$99",
            popular: true,
            icon: <Shield className="text-indigo-600" />,
            desc: "The complete suite for growing brands looking to scale nationwide.",
            features: ["Everything in Basic", "Advanced Inventory", "Delivery Partner App", "Custom Domain", "24/7 Priority Support", "Marketing Automations"],
            color: "bg-indigo-50"
        },
        {
            name: "Empire",
            price: "$299",
            icon: <Crown className="text-purple-600" />,
            desc: "Enterprise-grade features for multi-vendor marketplaces and large franchises.",
            features: ["Everything in Professional", "Multi-vendor Support", "Unlimited SKUs", "White-label Mobile Apps", "Dedicated Account Manager", "Custom API Access"],
            color: "bg-purple-50"
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-slate-50 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                    >
                        Transparent Pricing
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-8 leading-tight">
                        Invest in your <br />
                        <span className="text-blue-600 italic">business growth.</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium">
                        Choose the operating system that fits your scale. No hidden fees. No surprises.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "relative p-12 rounded-[3.5rem] transition-all duration-500 group",
                                plan.popular
                                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-200 scale-105 z-10"
                                    : "bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">
                                    Most Popular
                                </div>
                            )}

                            <div className={cn(
                                "w-16 h-16 rounded-3xl mb-10 flex items-center justify-center transition-transform group-hover:scale-110",
                                plan.popular ? "bg-white/10" : plan.color
                            )}>
                                {plan.icon}
                            </div>

                            <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black">{plan.price}</span>
                                <span className={cn("text-sm font-bold", plan.popular ? "text-slate-400" : "text-slate-500")}>/month</span>
                            </div>

                            <p className={cn("mb-10 text-sm leading-relaxed font-medium", plan.popular ? "text-slate-300" : "text-slate-500")}>
                                {plan.desc}
                            </p>

                            <div className="space-y-5 mb-12">
                                {plan.features.map((feat) => (
                                    <div key={feat} className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                                            plan.popular ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                                        )}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={cn("text-sm font-bold", plan.popular ? "text-slate-200" : "text-slate-700")}>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/signup"
                                className={cn(
                                    "w-full py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all",
                                    plan.popular
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/40"
                                        : "bg-slate-900 text-white hover:bg-blue-600"
                                )}
                            >
                                Get Started
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-slate-500 font-bold mb-8">Need something more custom?</p>
                    <button className="px-12 py-5 border-2 border-slate-200 rounded-2xl font-black text-slate-900 hover:border-slate-900 transition-all">
                        Contact Enterprise Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
