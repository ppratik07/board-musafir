"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ActivitiesPage() {
  return (
    <>
      <header className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            Board Musafir
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/itineraries/builder">AI Builder</Link>
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/search">Flights</Link>
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/hotels">Hotels</Link>
            <Link className="font-headline font-medium text-sm text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1" href="/activities">Activities</Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="account_circle">account_circle</Link>
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">Book Now</button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <div className="bg-surface-container-lowest luxury-shadow rounded-3xl p-8 flex flex-col gap-8">
            <div className="flex gap-4 border-b border-outline-variant/15 pb-2">
              <Link href="/search" className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-on-surface font-label font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="flight_takeoff">flight_takeoff</span>
                Flights
              </Link>
              <Link href="/hotels" className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-on-surface font-label font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="bed">bed</span>
                Hotels
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 text-primary border-b-2 border-primary font-label font-semibold text-sm">
                <span className="material-symbols-outlined text-lg" data-icon="local_activity">local_activity</span>
                Activities
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Location</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Jaipur, Rajasthan" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">location_on</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Interest</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Culture & History" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">history_edu</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Date</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Nov 14" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">calendar_today</span>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary-container text-white h-[52px] rounded-full flex items-center justify-center gap-2 font-semibold shadow-lg shadow-primary/10 transition-all duration-300 transform hover:scale-[1.02]">
                <span className="material-symbols-outlined">search</span>
                Refine Search
              </button>
            </div>
          </div>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full lg:w-72 flex flex-col gap-10">
            <div>
              <h3 className="font-headline text-lg font-bold mb-6">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full accent-primary bg-surface-container-high h-1 rounded-lg appearance-none cursor-pointer" type="range" />
                <div className="flex justify-between font-label text-xs font-semibold text-on-surface-variant">
                  <span>₹500</span>
                  <span>₹8000+</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold mb-6">Activity Type</h3>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" defaultChecked />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Private Tour</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" defaultChecked />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Culinary Experience</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Wellness</span>
                </label>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low rounded-2xl">
              <div className="flex items-center gap-2 text-tertiary mb-3">
                <span className="material-symbols-outlined text-lg">verified</span>
                <span className="font-label text-xs font-bold tracking-widest uppercase">Curator's Tip</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                "We recommend booking the tea ceremonies right at sunset; the garden lighting provides a magical transition from dusk to evening."
              </p>
            </div>
          </motion.aside>

          {/* Results Section */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-2xl font-bold">12 Experiences Found <span className="text-on-surface-variant/40 font-normal text-lg ml-2">in Jaipur</span></h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest">Sort by:</span>
                <select className="bg-transparent border-none font-label text-sm font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Curated Quality</option>
                  <option>Price: Low to High</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[ 
                { id: 1, name: "Private Fort Tour & High Tea", type: "Private Tour • 4 Hours", price: "₹2800", image: "https://images.unsplash.com/photo-1578469645766-d8fbd33627d0?q=80&w=1000&auto=format&fit=crop" },
                { id: 2, name: "Exclusive Rajputana Royal Dinner", type: "Culinary Experience • 3 Hours", price: "₹5200", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop" },
                { id: 3, name: "Amer Fort at Dawn", type: "Nature Walk • 2 Hours", price: "₹1500", image: "https://images.unsplash.com/photo-1507028456-cc1829373eb4?q=80&w=1000&auto=format&fit=crop" },
                { id: 4, name: "Masterclass: Authentic Spice Blending", type: "Culinary Class • 3 Hours", price: "₹2100", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop" }
              ].map((activity, i) => (
                <motion.div key={activity.id} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-surface-container-lowest luxury-shadow rounded-2xl overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                  <div className="w-full h-48 relative overflow-hidden">
                    <img alt={activity.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={activity.image} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-primary tracking-widest">
                      Bestseller
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-label text-xs text-on-surface-variant/60 font-semibold tracking-wide uppercase mb-2">{activity.type}</p>
                    <h4 className="font-headline text-xl font-bold mb-4 h-14 line-clamp-2">{activity.name}</h4>
                    
                    <div className="flex justify-between items-end border-t border-outline-variant/10 pt-4">
                      <div>
                        <p className="font-headline text-2xl font-bold text-primary">{activity.price}</p>
                        <p className="font-label text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest mt-1">Per person</p>
                      </div>
                      <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/10 transition-all active:scale-95 text-sm">Select</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-surface-container-low hover:bg-surface-container-high rounded-full font-label text-sm font-bold tracking-widest uppercase transition-all">
                Load More Activities
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
