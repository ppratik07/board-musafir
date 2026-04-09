"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HotelsPage() {
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
            <Link className="font-headline font-medium text-sm text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1" href="/hotels">Hotels</Link>
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/activities">Activities</Link>
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
              <button className="flex items-center gap-2 px-4 py-2 text-primary border-b-2 border-primary font-label font-semibold text-sm">
                <span className="material-symbols-outlined text-lg" data-icon="bed">bed</span>
                Hotels
              </button>
              <Link href="/activities" className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-on-surface font-label font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="local_activity">local_activity</span>
                Activities
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Destination</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Jaipur, Rajasthan" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">location_city</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Check-in / Check-out</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Nov 12 - Nov 18" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">calendar_today</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Guests</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="2 Adults, 1 Room" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">group</span>
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
              <h3 className="font-headline text-lg font-bold mb-6">Price Per Night</h3>
              <div className="space-y-4">
                <input className="w-full accent-primary bg-surface-container-high h-1 rounded-lg appearance-none cursor-pointer" type="range" />
                <div className="flex justify-between font-label text-xs font-semibold text-on-surface-variant">
                  <span>₹1500</span>
                  <span>₹1,5000+</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold mb-6">Property Class</h3>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" defaultChecked />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Boutique & Heritage</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Resorts & Spa</span>
                </label>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low rounded-2xl">
              <div className="flex items-center gap-2 text-tertiary mb-3">
                <span className="material-symbols-outlined text-lg">verified</span>
                <span className="font-label text-xs font-bold tracking-widest uppercase">Curator's Tip</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                "Heritage Palace stays in Jaipur are extremely popular in autumn. We've secured allocations at properties fully booked elsewhere."
              </p>
            </div>
          </motion.aside>

          {/* Results Section */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-2xl font-bold">24 Properties Found <span className="text-on-surface-variant/40 font-normal text-lg ml-2">in Jaipur</span></h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest">Sort by:</span>
                <select className="bg-transparent border-none font-label text-sm font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Curated Quality</option>
                  <option>Lowest Price</option>
                  <option>Distance to Center</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              {[ 
                { id: 1, name: "Aman Jaipur", operated: "Luxury Resort • 5 Stars", price: "₹1,4500", rating: "9.8", reviews: "124 verified reviews", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc-B7s6oE_w6QY7Q9K9W9xXjK_9xV_S8a4D7F4mZQQqQQQXZA_QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ_oZ8xXjK_9xV_S8a4D7F4mZQQqQQQXZA_QQQQQQQQQQQQQQQQQQ" }, /* I'll use real image URLs from unsplash/mock */
                { id: 2, name: "The Ritz-Carlton, Jaipur", operated: "Premium Luxury • 5 Stars", price: "₹9800", rating: "9.6", reviews: "450 verified reviews", image: "https://images.unsplash.com/photo-1542314831-c6a4d14d8835?q=80&w=2000&auto=format&fit=crop" },
                { id: 3, name: "Rambagh Palace", operated: "Heritage Palace • 5 Stars", price: "₹1,1200", rating: "9.7", reviews: "210 verified reviews", image: "https://images.unsplash.com/photo-1551882547-ff40c0d13c11?q=80&w=2000&auto=format&fit=crop" }
              ].map((hotel, i) => (
                <motion.div key={hotel.id} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-surface-container-lowest luxury-shadow rounded-2xl overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-64 h-56 md:h-auto overflow-hidden">
                      <img alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={i === 0 ? "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2000&auto=format&fit=crop" : hotel.image} />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-headline text-2xl font-bold">{hotel.name}</h4>
                          <p className="font-label text-xs text-on-surface-variant/60 font-semibold tracking-wide uppercase mt-1">{hotel.operated}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-headline text-3xl font-bold text-primary">{hotel.price}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest mt-1">Per night</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-md bg-secondary text-white flex items-center justify-center font-bold text-sm">
                          {hotel.rating}
                        </div>
                        <span className="font-label text-xs font-semibold text-on-surface-variant">{hotel.reviews}</span>
                      </div>

                      <div className="flex justify-between items-end mt-6 pt-6 border-t border-outline-variant/10">
                        <div className="flex gap-4">
                          <span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant/80">
                            <span className="material-symbols-outlined text-sm">spa</span>
                            Spa
                          </span>
                          <span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant/80">
                            <span className="material-symbols-outlined text-sm">restaurant</span>
                            Michelin Dining
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <button className="font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors px-4 py-2">View Rooms</button>
                          <button className="bg-primary hover:bg-primary-container text-white px-8 py-2 rounded-full font-bold shadow-lg shadow-primary/10 transition-all active:scale-95">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-surface-container-low hover:bg-surface-container-high rounded-full font-label text-sm font-bold tracking-widest uppercase transition-all">
                Load More Properties
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
