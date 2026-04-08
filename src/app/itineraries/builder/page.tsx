"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AIBuilderPage() {
  return (
    <>
      <nav className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            The Elevated Explorer
          </Link>
          <div className="hidden md:flex gap-8 items-center font-headline font-medium text-sm">
            <Link className="text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1 transition-colors" href="#">AI Builder</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Flights</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Hotels</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Activities</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-stone-600 dark:text-stone-400 p-2">account_circle</button>
            <button className="bg-primary hover:scale-95 transition-all duration-150 text-on-primary px-6 py-2 rounded-full font-label text-sm font-semibold shadow-md">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      <main className="min-h-screen relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Step Selection */}
          <div className="lg:col-span-8 space-y-16">
            <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
              <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Step 02 of 03</span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface max-w-2xl leading-[1.1]">
                Tailoring Your <span className="text-primary italic">Journey.</span>
              </h1>
              <div className="relative w-full h-[2px] bg-outline-variant/30 mt-8">
                <motion.div initial={{ width: "0%" }} animate={{ width: "66%" }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-0 left-0 h-full journey-line-active"></motion.div>
                <motion.div initial={{ left: "0%" }} animate={{ left: "66%" }} transition={{ duration: 1, delay: 0.2 }} className="absolute -top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary-container/20"></motion.div>
              </div>
            </motion.header>

            {/* Section 1: Budget Selection */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="payments">payments</span>
                <h2 className="font-headline text-2xl font-semibold">Define your investment</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group cursor-pointer p-6 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300 shadow-sm border-b-4 border-transparent hover:border-primary">
                  <span className="material-symbols-outlined text-3xl mb-4 text-stone-400 group-hover:text-primary">savings</span>
                  <h3 className="font-headline text-lg font-bold mb-1">Authentic</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">Focus on local charm and hidden street gems.</p>
                </div>
                <div className="group cursor-pointer p-6 rounded-xl bg-surface-container-lowest ring-2 ring-primary transition-all duration-300 shadow-md border-b-4 border-primary">
                  <span className="material-symbols-outlined text-3xl mb-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
                  <h3 className="font-headline text-lg font-bold mb-1">Boutique</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">Carefully curated comfort with local flair.</p>
                </div>
                <div className="group cursor-pointer p-6 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300 shadow-sm border-b-4 border-transparent hover:border-primary">
                  <span className="material-symbols-outlined text-3xl mb-4 text-stone-400 group-hover:text-primary">diamond</span>
                  <h3 className="font-headline text-lg font-bold mb-1">Grand Luxe</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">Unparalleled service and exclusive access.</p>
                </div>
              </div>
            </motion.section>

            {/* Section 2: Interests */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="explore">explore</span>
                <h2 className="font-headline text-2xl font-semibold">What moves you?</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[ 
                  { icon: "hiking", title: "Adventure", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkBw-U7LTXg4nb96jta379A7owQkf-y5Li5QJYyqfAujAEZtLeml6vswL-4cRoTx19iJU6DpqYNSKQTsD9xe5QfDLijZZPVANYcWvaRjqCDik3DBLjxzSs1KwhTiK51Ci7KckL_5G8TUzFC2k78396Tno32lXkgpGsgwPgAHMRjQGZIEEcYeq_LL7Ci-KAjtjZ3x4dtV3AKS1xPxRu0HXFr3fJ41b7NPA63XqLFLMSPcO9ei1ieikfdQbCjmY8VQWPb2qN6dmLlE4", active: false },
                  { icon: "history_edu", title: "History", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMlq76_aaksK0fkXEwukXH1EKQpDUM7KBKLbFiCMaBWzlx7MVoAzK2nQyuFjd9IUaDj7YV9Z31RJz-2AfpYZrk36hs2KhuFnzYrU1VSor9Y5JF4uxrb8HgGqtz0tcIMr3AOhMpq2eTUvvdpVK51dHBL-X1npWcHSr_MBDjh76scbUfIcKkfU6lwMVGs2mJgrNdCx6P6xsDx6oqnBacRPeS-6iS7YZhqoo9G0TVsz5kkkNomPFsq_a0W2UTSnewRQv9Xfp5rb0a4nI", active: true },
                  { icon: "spa", title: "Relaxation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp8ohhlMOSh2XH-Fxctpin1eLKFtWs2h5VU4BKwt967rRSEL-2Mbli6ISmuiMWh4FlypKG2Njrb7RECW8vLL64tIW8KDK_3iQmym5ZNQh1uPHQo-QG9tJsIXovBLclWuWHQvEUWGY86TkYKXoSBwgdnrHkuBIcOcexKtuOdwG-suXA3dP-0-9bROhDUCYSYBpjl5rb9PEqvDPD1M7mh1E0Alzy2xIbsNdXE1s-58A3jWkFCSSWikDz31qubRSzpyzoNsKC1e8Qnwk", active: false },
                  { icon: "forest", title: "Nature", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdcTx5lcbRBQxRS_j91fvA9oaFclargcAfeOMxc69w3bLTVRgw-S_8e-rIh4Qoh5-rK2sH8Qu2QjcNMGcAaibXEXr_cnd_F5WNg4yzfh2POSg4vYK8Hqj_MDI7eiaZqvDAfCfg_TYQlTr2eJ_w1byyn8TNY24qy0VS0_9GD31WJS2TfhRz4bq2p13nS5feAIG6-qvcyEhYHPyUiBkaAdtFKFvRN0p0H90jCrrLGCDVU5U2nHUYoktJepqIzO1s6P571R2LeLVlFhM", active: false }
                ].map((item, i) => (
                  <div key={i} className={`relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer ${item.active ? 'ring-4 ring-primary ring-offset-4 ring-offset-surface' : ''}`}>
                    <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} alt={item.title} />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.active ? 'from-primary/90' : 'from-on-background/80'} via-transparent to-transparent`}></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="material-symbols-outlined text-white mb-1" data-icon={item.icon}>{item.icon}</span>
                      <p className="text-white font-headline font-bold">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 3: Pace */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="speed">speed</span>
                <h2 className="font-headline text-2xl font-semibold">Select your tempo</h2>
              </div>
              <div className="bg-surface-container-low p-10 rounded-3xl relative">
                <div className="flex justify-between text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-8">
                  <span>Deep Immersion</span>
                  <span className="text-primary">Balanced Rhythm</span>
                  <span>Whirlwind Tour</span>
                </div>
                <input className="w-full h-1 bg-outline-variant/30 appearance-none rounded-full cursor-pointer accent-primary" max="100" min="1" type="range" defaultValue="45" />
              </div>
            </motion.section>
          </div>

          {/* Right: Preview Sidebar */}
          <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 overflow-hidden relative">
              <div className="absolute inset-0 ai-shimmer"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">Building your perfect trip...</p>
                  <p className="font-body text-xs text-on-surface-variant">Analyzing historical routes & luxury pairings</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl shadow-xl p-8 space-y-6 relative border border-outline-variant/10">
              <div className="space-y-2">
                <h3 className="font-headline text-3xl font-bold">Tuscany & Umbria</h3>
                <p className="font-label text-sm text-secondary font-bold">12 Days • September 2024</p>
              </div>
              <div className="space-y-8 pt-4">
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-px h-full bg-outline-variant/40 my-2"></div>
                  </div>
                  <div className="pb-4">
                    <p className="font-label text-xs font-bold text-stone-400 uppercase">Day 1-3</p>
                    <h4 className="font-headline font-semibold text-lg">Florence Arrival</h4>
                    <p className="font-body text-sm text-on-surface-variant">Artisan workshop tours & sunset over Ponte Vecchio.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-px h-full bg-outline-variant/40 my-2"></div>
                  </div>
                  <div className="pb-4">
                    <p className="font-label text-xs font-bold text-stone-400 uppercase">Day 4-6</p>
                    <h4 className="font-headline font-semibold text-lg">Chianti Hills</h4>
                    <p className="font-body text-sm text-on-surface-variant italic">Refining based on your interest: History & Mid-range Boutique.</p>
                    <div className="mt-3 flex gap-2">
                      <span className="px-3 py-1 bg-surface-container-low text-[10px] font-label font-bold rounded-full text-primary">VINEYARDS</span>
                      <span className="px-3 py-1 bg-surface-container-low text-[10px] font-label font-bold rounded-full text-primary">VILLA STAY</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 opacity-40">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-outline"></div>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase">Day 7-12</p>
                    <h4 className="font-headline font-semibold text-lg italic">Thinking...</h4>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Continue to Pace
              </button>
              <p className="text-center text-xs font-body text-stone-400">Step 2 of 3: Refinement Phase</p>
            </div>
          </motion.aside>
        </div>
      </main>

      <footer className="bg-stone-100 dark:bg-zinc-900 border-t-0 full-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="font-headline text-lg font-semibold text-stone-800 dark:text-stone-200">
            The Elevated Explorer
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Journal</Link>
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Sustainability</Link>
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Verified Reviews</Link>
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Terms of Service</Link>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 text-center md:text-right">
            © 2026 The Elevated Explorer. A Digital Curator Experience.
          </div>
        </div>
      </footer>
    </>
  );
}
