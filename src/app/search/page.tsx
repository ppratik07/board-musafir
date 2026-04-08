"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SearchResultsPage() {
  return (
    <>
      <header className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            The Elevated Explorer
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/itineraries/builder">AI Builder</Link>
            <Link className="font-headline font-medium text-sm text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1" href="/search">Flights</Link>
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Hotels</Link>
            <Link className="font-headline font-medium text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Activities</Link>
          </nav>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="account_circle">account_circle</button>
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">Book Now</button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        {/* Search Engine Widget */}
        <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <div className="bg-surface-container-lowest luxury-shadow rounded-3xl p-8 flex flex-col gap-8">
            <div className="flex gap-4 border-b border-outline-variant/15 pb-2">
              <button className="flex items-center gap-2 px-4 py-2 text-primary border-b-2 border-primary font-label font-semibold text-sm">
                <span className="material-symbols-outlined text-lg" data-icon="flight_takeoff">flight_takeoff</span>
                Flights
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-on-surface font-label font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="bed">bed</span>
                Hotels
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-on-surface font-label font-medium text-sm transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="local_activity">local_activity</span>
                Activities
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Departure</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="London (LHR)" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40" data-icon="location_on">location_on</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Destination</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Tokyo (HND)" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40" data-icon="explore">explore</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Dates</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" placeholder="Oct 12 - Oct 28" type="text" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40" data-icon="calendar_today">calendar_today</span>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary-container text-white h-[52px] rounded-full flex items-center justify-center gap-2 font-semibold shadow-lg shadow-primary/10 transition-all duration-300 transform hover:scale-[1.02]">
                <span className="material-symbols-outlined" data-icon="search">search</span>
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
                  <span>$450</span>
                  <span>$3,200+</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold mb-6">Experience Level</h3>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">First Class Curated</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Business Boutique</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded text-primary focus:ring-primary h-5 w-5 bg-surface border-outline-variant" type="checkbox" />
                  <span className="font-label text-sm font-medium group-hover:text-primary transition-colors">Premium Economy</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold mb-6">Stopovers</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full border border-outline-variant/40 text-xs font-bold hover:border-primary hover:text-primary transition-all">Non-stop</button>
                <button className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold shadow-sm">1 Stop</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant/40 text-xs font-bold hover:border-primary hover:text-primary transition-all">2+ Stops</button>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low rounded-2xl">
              <div className="flex items-center gap-2 text-tertiary mb-3">
                <span className="material-symbols-outlined text-lg" data-icon="verified">verified</span>
                <span className="font-label text-xs font-bold tracking-widest uppercase">Curator's Tip</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                "Booking mid-week flights to Tokyo often unlocks access to smaller boutique carrier codeshare seats."
              </p>
            </div>
          </motion.aside>

          {/* Results Section */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-2xl font-bold">18 Flights Found <span className="text-on-surface-variant/40 font-normal text-lg ml-2">from London</span></h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest">Sort by:</span>
                <select className="bg-transparent border-none font-label text-sm font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Curated Quality</option>
                  <option>Lowest Price</option>
                  <option>Fastest Path</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              {[ 
                { id: 1, airline: "Japan Airlines", operated: "Operated by British Airways", price: "$1,284", icon: "airlines", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcR3dVrJQ5CODg1-DokuY7S1XoHlPOAzJMQ6af3IdP26dAqCc4FxNOaowE-AozkdU-VhGM6bgPSA0J6R2MiGy7HJQdE-eXz-o9NjPrVxc_9xneepUP2iHRfdxU5MYYqaxOiRRGpiAEBvm0CMOuq1k7CN7ZQMHPL8dfFTKcRkT5ExHEHQr7wfA_ptGoqYmKF3EjdBklezDyrQNSeuiiQ1uEr4BhLoFHc50UyfXCte6gxi1rzxE85gAFUZB5VPxwiggNLEd55YBqWRE" },
                { id: 2, airline: "Qatar Airways", operated: "5-Star Carrier", price: "$942", icon: "flight", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv0rMKrGHmZ413vbZfLaQj4_MmVzBURqlcBtKE79owvc_fch9SWOVh5iel5yfIKTX_AatyEmpdvjezSVKIpOKnvbu-OzL6A6ciIwPwYmScR5qNPEPXR8myn_TVvscFLrJPPF5SpOdCv3DSSvIu4J8CyoIYot6OKlN-4fFaKAt8NFtb9ixmG99QUJ2N6lcnwoRFzJTwdvM_8Wy5WLMXuwSDz58jHmuh-ulPN6kzfXmqCt6UOXJRcLU9fzF4a11gA1UdXMtW08H2Vkc" },
                { id: 3, airline: "Emirates Boutique", operated: "Curator's Choice", price: "$1,150", icon: "star_half", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk7QNRWe5gBtlkxPb0Mq6Sggzl6gYd5WDHGCkJlos_ocOTKXO-SyaW9Cn1lziDIbNC8lbVsjxn1XgZiknYRbKPtX0F9NFrB0RVzQIlsqo_IZghfabWwruKdNpg72mX3xsrjnF9cssduBDHUh_gn8uRT01zpLSyrH88xNO93zqKm6mIOcoMCJetyKlcWbFVHS0WYHsefmUaxbOKEV6qzCnpxIKSoUUDfmKghxpvEAbRP4CFCZ9eH0roQY9CgdrD8E_JemKVW4yhYf4" }
              ].map((flight, i) => (
                <motion.div key={flight.id} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-surface-container-lowest luxury-shadow rounded-2xl overflow-hidden group hover:scale-[1.005] transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-56 h-48 md:h-auto overflow-hidden">
                      <img alt={flight.airline} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={flight.image} />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary" data-icon={flight.icon}>{flight.icon}</span>
                          </div>
                          <div>
                            <h4 className="font-headline text-lg font-bold">{flight.airline}</h4>
                            <p className="font-label text-xs text-on-surface-variant/60 font-semibold tracking-wide uppercase">{flight.operated}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-headline text-2xl font-bold text-primary">{flight.price}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest">Total per person</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-8 items-center py-6 border-y border-outline-variant/10">
                        <div>
                          <p className="text-2xl font-bold">11:40</p>
                          <p className="text-sm text-on-surface-variant">LHR · London</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-[10px] font-bold text-on-surface-variant/60 tracking-widest uppercase mb-1">14h 25m</p>
                          <div className="relative w-full h-[2px] bg-outline-variant/30 flex items-center justify-center">
                            <div className="absolute w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
                          </div>
                          <p className="text-[10px] font-bold text-primary mt-1">{flight.id === 1 ? "Direct" : `1 stop`}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">09:05</p>
                          <p className="text-sm text-on-surface-variant">HND · Tokyo</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex gap-4">
                          <span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant/80">
                            <span className="material-symbols-outlined text-sm" data-icon="luggage">luggage</span>
                            2x 23kg
                          </span>
                          <span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant/80">
                            <span className="material-symbols-outlined text-sm" data-icon="wifi">wifi</span>
                            Free Wi-Fi
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <button className="font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors px-4 py-2">View Details</button>
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
                Load More Journeys
                <span className="material-symbols-outlined text-lg" data-icon="expand_more">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-stone-100 dark:bg-zinc-900 full-width border-t-0 flat no shadows mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="font-headline text-lg font-semibold text-stone-800 dark:text-stone-200">
            The Elevated Explorer
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Journal</Link>
            <Link className="font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Sustainability</Link>
            <Link className="font-body text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300 font-bold" href="#">Verified Reviews</Link>
            <Link className="font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Terms of Service</Link>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 text-center md:text-right">
            © 2026 The Elevated Explorer. A Digital Curator Experience.
          </div>
        </div>
      </footer>
    </>
  );
}
