"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Box, MapPin, Barcode, Users, PieChart } from "lucide-react";

interface Feature {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
}

const features: Feature[] = [
    {
        title: "Real-time Inventory Sync",
        desc: "Automatically sync stock levels across your physical store, online website, and multi-vendor marketplaces. Never oversell again.",
        icon: <Box size={40} />,
        color: "bg-blue-600"
    },
    {
        title: "Live Order Tracking",
        desc: "Give your customers peace of mind with real-time GPS tracking for every delivery. Automated notifications keep them informed.",
        icon: <MapPin size={40} />,
        color: "bg-emerald-600"
    },
    {
        title: "Barcode Ready POS",
        desc: "Speed up your checkout with lightning-fast barcode scanning. Works with standard hardware out of the box.",
        icon: <Barcode size={40} />,
        color: "bg-indigo-600"
    },
    {
        title: "Multi-vendor Payouts",
        desc: "Manage thousands of vendors with ease. Automated commission calculations and scheduled bank payouts.",
        icon: <Users size={40} />,
        color: "bg-purple-600"
    },
    {
        title: "Deep Analytics",
        desc: "Make data-driven decisions with AI-powered insights into sales trends, customer behavior, and inventory ROI.",
        icon: <PieChart size={40} />,
        color: "bg-orange-600"
    }
];

const FeatureText = ({ feature, index, scrollYProgress }: { feature: Feature, index: number, scrollYProgress: MotionValue<number> }) => {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col justify-center text-white p-6 md:p-12"
        >
            <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl`}>
                {feature.icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">{feature.title}</h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                {feature.desc}
            </p>
        </motion.div>
    );
};

const FeatureViz = ({ feature, index, scrollYProgress }: { feature: Feature, index: number, scrollYProgress: MotionValue<number> }) => {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    const rotate = useTransform(scrollYProgress, [start, end], [0, 360]);

    return (
        <motion.div
            style={{ scale, opacity, rotate }}
            className="absolute"
        >
            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border-2 border-white/10 flex items-center justify-center">
                <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full border-2 border-white/20 flex items-center justify-center">
                    <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                        {feature.icon}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ScrollingFeatures = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-slate-900 overflow-visible">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

                    {/* Text Content */}
                    <div className="relative h-[500px]">
                        {features.map((feature, i) => (
                            <FeatureText key={i} feature={feature} index={i} scrollYProgress={scrollYProgress} />
                        ))}
                    </div>

                    {/* Visualization Side */}
                    <div className="relative aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-600/10 rounded-[4rem] blur-[100px]" />
                        <div className="relative z-10 w-full h-full glass-card border-white/5 rounded-[4rem] flex items-center justify-center p-12 overflow-hidden">
                            {features.map((feature, i) => (
                                <FeatureViz key={i} feature={feature} index={i} scrollYProgress={scrollYProgress} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScrollingFeatures;
