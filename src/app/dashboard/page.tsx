"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  // Using a mock session to replace requireAuth for aesthetic viewing.
  const session = { user: { name: "Pratik", email: "pratik@example.com" } };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation */}
      <nav className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            The Elevated Explorer
          </Link>
          <div className="hidden md:flex items-center gap-8 font-headline font-medium text-sm">
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="/itineraries/builder">AI Builder</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="/search">Flights</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Hotels</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline font-bold">
              {session.user.name.charAt(0)}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-xl mx-auto px-6 py-32">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-headline text-5xl font-bold text-on-surface">Explorer Portal</h1>
          <p className="mt-4 text-on-surface-variant text-lg">
            Welcome back, {session.user.name}. Here is your curated travel overview.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          {[
            { 
              title: "Upcoming Trips", 
              value: "02", 
              icon: "flight_sm", 
              desc: "Next: Tokyo in 45 days", 
              color: "text-primary",
              bg: "bg-primary-container/20"
            },
            { 
              title: "Saved Itineraries", 
              value: "05", 
              icon: "bookmark", 
              desc: "Kerala, Tuscany, & more",
              color: "text-secondary",
              bg: "bg-secondary-container/20" 
            },
            { 
              title: "Explorer Status", 
              value: "Gold", 
              icon: "hotel_class", 
              desc: "4,500 miles to Platinum",
              color: "text-tertiary",
              bg: "bg-tertiary-container/20" 
            }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-surface-container-lowest luxury-shadow rounded-2xl p-8 border border-outline-variant/10 group cursor-pointer hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-4">{stat.title}</p>
                  <p className="font-headline text-4xl font-semibold text-on-surface">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                </div>
              </div>
              <p className="mt-6 font-body text-sm text-on-surface-variant font-medium">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Active Itineraries & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-2xl font-bold text-on-surface">Active Itineraries</h2>
              <Link href="/search" className="font-label text-sm font-bold text-primary hover:text-primary-container transition-colors">View All Voyages</Link>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-3xl luxury-shadow border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center group cursor-pointer">
              <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden relative">
                <img alt="Tokyo at night" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv0rMKrGHmZ413vbZfLaQj4_MmVzBURqlcBtKE79owvc_fch9SWOVh5iel5yfIKTX_AatyEmpdvjezSVKIpOKnvbu-OzL6A6ciIwPwYmScR5qNPEPXR8myn_TVvscFLrJPPF5SpOdCv3DSSvIu4J8CyoIYot6OKlN-4fFaKAt8NFtb9ixmG99QUJ2N6lcnwoRFzJTwdvM_8Wy5WLMXuwSDz58jHmuh-ulPN6kzfXmqCt6UOXJRcLU9fzF4a11gA1UdXMtW08H2Vkc" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                  Confirmed
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">14 Days • Nov 12 - Nov 26</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">The Japanese Archipelago</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                  A comprehensive journey spanning from the ultra-modern skyline of Tokyo to the tranquil temples of Kyoto, with curated bullet train transfers.
                </p>
                <div className="pt-2">
                  <button className="text-sm font-label font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-1">
                    Manage Booking <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10"
          >
            <h2 className="font-headline text-xl font-bold text-on-surface mb-8">Recent Activity</h2>
            <div className="relative">
               {/* Timeline line */}
               <div className="absolute left-3.5 top-0 bottom-0 w-px bg-outline-variant/30"></div>
               
               <div className="space-y-8">
                 <div className="relative flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0 z-10 border-4 border-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-sm">flight_land</span>
                    </div>
                    <div>
                      <p className="font-headline font-semibold text-on-surface">Flights Confirmed</p>
                      <p className="font-body text-xs text-on-surface-variant mt-1">LHR to HND via Qatar Airways.</p>
                      <span className="font-label text-[10px] uppercase font-bold text-stone-400 mt-2 block">2 Days Ago</span>
                    </div>
                 </div>

                 <div className="relative flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 z-10 border-4 border-surface-container-low">
                      <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
                    </div>
                    <div>
                      <p className="font-headline font-semibold text-on-surface">Itinerary Generated</p>
                      <p className="font-body text-xs text-on-surface-variant mt-1">AI created "The Japanese Archipelago".</p>
                      <span className="font-label text-[10px] uppercase font-bold text-stone-400 mt-2 block">1 Week Ago</span>
                    </div>
                 </div>

                 <div className="relative flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 z-10 border-4 border-surface-container-low">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">bookmark</span>
                    </div>
                    <div>
                      <p className="font-headline font-semibold text-on-surface">Saved Inspiration</p>
                      <p className="font-body text-xs text-on-surface-variant mt-1">Kerala Backwaters.</p>
                      <span className="font-label text-[10px] uppercase font-bold text-stone-400 mt-2 block">2 Weeks Ago</span>
                    </div>
                 </div>
               </div>
            </div>
            
            <button className="w-full mt-10 py-3 bg-transparent border border-outline-variant rounded-full font-label text-sm font-bold text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              View All History
            </button>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
