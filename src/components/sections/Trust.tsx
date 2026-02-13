"use client";

const Trust = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-12">
                    Trusted by 10,000+ brands worldwide
                </p>

                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="text-3xl font-black tracking-tighter text-slate-900">VOLTA</div>
                    <div className="text-4xl font-serif italic text-slate-900">Aurelius</div>
                    <div className="text-3xl font-display font-light text-slate-900 tracking-widest">NEXUS</div>
                    <div className="text-3xl font-black text-slate-900 flex items-center gap-1">
                        <div className="w-6 h-6 bg-slate-900 rounded-full" /> OXY
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
