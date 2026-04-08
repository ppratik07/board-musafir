"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ItineraryOverviewPage() {
  return (
    <>
      <nav className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            The Elevated Explorer
          </Link>
          <div className="hidden md:flex items-center gap-8 font-headline font-medium text-sm">
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/itineraries/builder">AI Builder</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/search">Flights</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Hotels</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Activities</Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-stone-600">account_circle</button>
            <button className="bg-primary px-6 py-2 rounded-full text-on-primary font-label font-semibold text-sm hover:scale-95 transition-transform">Book Now</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <span className="font-label text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Curated Experience</span>
              <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">A Week in Kerala: The Emerald Escape</h1>
              <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">A bespoke seven-day journey through the serene backwaters, misty tea plantations, and lush coastal sanctuaries of God's Own Country.</p>
            </div>
            <div className="md:col-span-5 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img alt="Misty tea gardens of Munnar" className="w-full h-full object-cover hero-mask" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTrJq0BMNdH4oSmHer4KQrXEIVkAo1GTvY8aQWF5Zqg7yXjP09FktBYuLgh4vFqZnlX_wHaTf6hDSW1lJCXkNdH5yQo9uU6-iq7rAbcaqjkyh-UMXkCPnbYpm6C-btcNTxENPrjSbmDsxINbT8v1GyFTEGrxFQV5x8ztxXu3eWMxIIQOUavNTKyMQ0J6KPnF_KL5vg7voLko69QxT4L8bm5HD76tjyJJYrG6inGHvBCOSDS4YsbkgHf5V8Y_pzanIzZyyCw_UZmk" />
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar: Day Timeline */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 flex flex-col items-center">
              <div className="relative flex flex-col items-center gap-12">
                <div className="v-journey-line absolute h-full top-0 left-1/2 -translate-x-1/2 opacity-20"></div>
                
                {[ { id: 1, icon: "flight", active: true }, { id: 2, icon: "hotel", active: false }, { id: 4, icon: "directions_boat", active: false }, { id: 7, icon: "verified", active: false }].map((day, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }} className="relative z-10 flex flex-col items-center group cursor-pointer">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${day.active ? 'bg-primary text-on-primary shadow-lg' : 'bg-surface-container-highest text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container'}`}>
                      <span className="material-symbols-outlined text-sm">{day.icon}</span>
                    </div>
                    <span className={`font-label text-[10px] mt-2 font-bold ${day.active ? 'text-primary' : 'text-on-surface-variant'}`}>DAY {day.id}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-7 space-y-12">
            {/* Day 1: Flight & Arrival */}
            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-headline text-3xl text-on-surface">Day 1: The Ascent</h2>
                <div className="h-px flex-grow bg-outline-variant opacity-30"></div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl luxury-shadow flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
                <div className="flex-shrink-0 w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-3xl">flight_takeoff</span>
                </div>
                <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Departure</p>
                    <p className="font-bold text-lg">LHR 08:45</p>
                    <p className="text-sm text-on-surface-variant">London Heathrow</p>
                  </div>
                  <div className="hidden md:flex flex-col items-center justify-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="h-[2px] flex-grow bg-primary-container"></div>
                      <span className="material-symbols-outlined text-primary text-sm">flight</span>
                      <div className="h-[2px] flex-grow bg-primary-container"></div>
                    </div>
                    <p className="text-[10px] mt-1 font-semibold uppercase text-primary">Direct • 10h 15m</p>
                  </div>
                  <div className="text-right">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Arrival</p>
                    <p className="font-bold text-lg">COK 22:30</p>
                    <p className="text-sm text-on-surface-variant">Cochin International</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Day 2-3: The Resort */}
            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-headline text-3xl text-on-surface">Day 2-3: Colonial Whispers</h2>
                <div className="h-px flex-grow bg-outline-variant opacity-30"></div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden border border-outline-variant/10 group">
                <div className="relative h-72">
                  <img alt="The Brunton Boatyard Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxWakwT0vdfzVE6BOw_oxBPohnu6guna9U711-ZAr3VI7UL6f1KmWwrXZwOM3sscc58w6NCmM1uYdQWxtoSDbQj26SJmgJfR93ahbol_xxlTWi2O726H6Sh1DSPLlifD_wjdxGGuFFuyUwQU7M98bwwJ3utd9IKhkHia3KeVvZwZaJ_IhpFwX5sBDmZnxlvNrPbwFYsWKZ9InNcKIxknj57zPL9cCln8g3NcBa1YOOwNVdcEE-UlxEHccehLPQNYiUc2e4rWnmYb8" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="font-label text-xs font-bold text-on-surface">Verified by Owlous</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-headline text-2xl text-white">The Brunton Boatyard</h3>
                    <p className="text-white/80 text-sm">Fort Kochi • Luxury Heritage Suite</p>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-on-surface-variant leading-relaxed">Inspired by the British Empire's maritime history, this restored boatyard offers vaulted ceilings, teak floors, and 19th-century elegance overlooking the harbor.</p>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-xs font-bold text-primary bg-primary-fixed/30 px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm">spa</span> Ayurvedic Spa
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-primary bg-primary-fixed/30 px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm">pool</span> Infinity Pool
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center border-l border-outline-variant/20 pl-8">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1">Check In</p>
                    <p className="font-bold">Mon, Oct 14</p>
                    <p className="text-xs text-on-surface-variant mb-4">After 14:00</p>
                    <button className="text-secondary font-label font-bold text-sm flex items-center gap-1 group/btn">
                      View Suite details
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Day 4: Activity */}
            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-headline text-3xl text-on-surface">Day 4: Liquid Gold</h2>
                <div className="h-px flex-grow bg-outline-variant opacity-30"></div>
              </div>
              <div className="bg-surface-container-low p-2 rounded-2xl">
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start shadow-sm border border-outline-variant/10">
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="Backwater Houseboat" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLg2oxBmNjyieRjtz2xec23IIl8jwZiIvF_YjMDqw9eNC9IE4Gw0KJQu9aL4SmuNOTnOThAmzOAsJQbaZGgDr0QOLayRb6xMg1uhEU7y4EP0Qd0WIl664-viY-k8YRNPTYQOCMJJ-PjGR95MyhrU7kQYNOiVvjCsDi2I7uoCinBGWwBnfu2vfBRtxnHsEbs_iSqnHvIU-AJ_mArkhqcp6Lhlz8qW1JdevzpkgN5LskOWj-RiO6ob0qndVk9dmSO7grSitb7ytC3sw" />
                  </div>
                  <div className="flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-label text-[10px] font-bold text-secondary uppercase tracking-tighter">Private Experience</span>
                        <h3 className="font-headline text-2xl text-on-surface mt-1">Backwater Houseboat Cruise</h3>
                      </div>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded text-[10px] font-bold uppercase">Activity</span>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed text-sm">Drift through the narrow canals of Alleppey on a traditional thatched houseboat. Enjoy a private lunch prepared on board with freshly caught Karimeen and local spices.</p>
                    <div className="pt-2 flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                        <span>6 Hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-lg">restaurant</span>
                        <span>Lunch Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Sidebar: Booking Summary */}
          <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_30px_60px_rgba(27,28,27,0.08)] border border-outline-variant/20">
                <h3 className="font-headline text-2xl mb-8">Booking Summary</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Flights (Premium Econ)</span>
                    <span className="font-semibold">£1,240.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Luxury Stays (6 Nights)</span>
                    <span className="font-semibold">£2,150.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Curated Activities</span>
                    <span className="font-semibold">£860.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Private Chauffeur</span>
                    <span className="font-semibold">£420.00</span>
                  </div>
                  <div className="h-px bg-outline-variant/30 my-4"></div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Total Price</p>
                      <p className="font-headline text-4xl text-primary">£4,670</p>
                    </div>
                    <p className="text-xs text-on-surface-variant text-right">Inc. taxes & fees</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-full font-label font-bold text-base shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                    Book This Package
                  </button>
                  <button className="w-full bg-surface-container-highest text-on-surface py-4 rounded-full font-label font-bold text-base hover:bg-surface-variant transition-colors">
                    Customize Itinerary
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/20">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tight mb-1">Explorer Protection</p>
                      <p className="text-[11px] text-on-surface-variant leading-snug">Full flexibility and 24/7 concierge support throughout your journey in Kerala.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Contextual Bubble */}
              <div className="mt-6 bg-tertiary-container text-on-tertiary-container p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    <span className="text-xs font-bold uppercase">AI Insights</span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">October is the ideal month for this route. The monsoon has just passed, leaving the backwaters exceptionally lush and vibrant.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-8xl">compost</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </main>

      <footer className="bg-stone-100 dark:bg-zinc-900 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="space-y-2">
            <span className="font-headline text-lg font-semibold text-stone-800 dark:text-stone-200">The Elevated Explorer</span>
            <p className="font-body text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400">© 2026 The Elevated Explorer. A Digital Curator Experience.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-widest">
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Journal</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Sustainability</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Verified Reviews</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
