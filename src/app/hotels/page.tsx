"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HotelsPage() {
  const [destination, setDestination] = useState("Jaipur, Rajasthan");
  const [checkIn, setCheckIn] = useState("2026-05-15");
  const [checkOut, setCheckOut] = useState("2026-05-18");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const searchHotels = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/hotels/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination,
          checkIn,
          checkOut,
          adults,
          children,
          rooms,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setHotels(data.data.hotels);
        setTotal(data.data.total);
      } else {
        setError(data.error || 'Failed to search hotels');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };
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
                  <input 
                    className="w-full bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-stone-300" 
                    placeholder="Delhi, India" 
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-on-surface-variant/40">location_city</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Check-in / Check-out</label>
                <div className="flex gap-2">
                  <input 
                    className="flex-1 bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all text-sm" 
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  <input 
                    className="flex-1 bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all text-sm" 
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs font-bold text-on-surface-variant/70 tracking-wider uppercase">Guests</label>
                <div className="flex gap-2">
                  <input 
                    className="w-20 bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all text-sm" 
                    type="number"
                    min="1"
                    max="10"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                    placeholder="Adults"
                  />
                  <input 
                    className="w-20 bg-transparent border-b border-outline-variant/40 py-3 font-medium focus:border-primary focus:ring-0 outline-none transition-all text-sm" 
                    type="number"
                    min="0"
                    max="10"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                    placeholder="Kids"
                  />
                </div>
              </div>
              <button 
                onClick={searchHotels}
                disabled={loading}
                className="bg-primary hover:bg-primary-container text-white h-[52px] rounded-full flex items-center justify-center gap-2 font-semibold shadow-lg shadow-primary/10 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">{loading ? 'hourglass_empty' : 'search'}</span>
                {loading ? 'Searching...' : 'Refine Search'}
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
              <h2 className="font-headline text-2xl font-bold">
                {loading ? 'Searching...' : error ? 'Search Error' : total > 0 ? `${total} Properties Found` : 'Search for Hotels'} 
                {destination && total > 0 && <span className="text-on-surface-variant/40 font-normal text-lg ml-2">in {destination}</span>}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest">Sort by:</span>
                <select className="bg-transparent border-none font-label text-sm font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Curated Quality</option>
                  <option>Lowest Price</option>
                  <option>Highest Rating</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
                <p className="text-red-800 dark:text-red-200 font-medium">{error}</p>
              </div>
            )}

            {loading && (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center gap-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  <p className="text-on-surface-variant font-medium">Searching hotels...</p>
                </div>
              </div>
            )}
            
            {!loading && hotels.length === 0 && !error && (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/40 mb-4">hotel</span>
                <p className="text-on-surface-variant text-lg">Click "Refine Search" to find hotels</p>
              </div>
            )}

            <div className="space-y-6">
              {hotels.map((hotel, i) => (
                <motion.div 
                  key={hotel.id} 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: i * 0.1 }} 
                  className="bg-surface-container-lowest luxury-shadow rounded-2xl overflow-hidden group hover:scale-[1.005] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-64 h-56 md:h-auto overflow-hidden">
                      <img 
                        alt={hotel.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        src={hotel.images?.thumbnail || hotel.images?.main || 'https://images.unsplash.com/photo-1542314831-c6a4d14d8835?q=80&w=600'} 
                      />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-headline text-2xl font-bold">{hotel.name}</h4>
                          <p className="font-label text-xs text-on-surface-variant/60 font-semibold tracking-wide uppercase mt-1">
                            {hotel.rating?.starClass && `${hotel.rating.starClass} Stars`} {hotel.type || 'Hotel'}
                          </p>
                          {hotel.location?.address && (
                            <p className="font-label text-xs text-on-surface-variant/80 mt-2">
                              <span className="material-symbols-outlined text-xs align-middle">location_on</span> {hotel.location.address}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-headline text-3xl font-bold text-primary">{hotel.pricePerNight?.display || 'N/A'}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest mt-1">Per night</p>
                          {hotel.totalPrice && (
                            <p className="font-label text-xs text-on-surface-variant/80 mt-1">Total: {hotel.totalPrice.display}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-6">
                        {hotel.rating?.overall && (
                          <>
                            <div className="w-8 h-8 rounded-md bg-secondary text-white flex items-center justify-center font-bold text-sm">
                              {hotel.rating.overall}
                            </div>
                            <span className="font-label text-xs font-semibold text-on-surface-variant">
                              {hotel.rating.reviews ? `${hotel.rating.reviews} verified reviews` : 'Highly rated'}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Amenities */}
                      {hotel.amenities && hotel.amenities.length > 0 && (
                        <div className="flex gap-4 flex-wrap mb-4">
                          {hotel.amenities.slice(0, 4).map((amenity: string, idx: number) => (
                            <span key={idx} className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant/80">
                              <span className="material-symbols-outlined text-sm">check_circle</span>
                              {amenity}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end mt-6 pt-6 border-t border-outline-variant/10">
                        <button className="font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors px-6 py-2.5 border border-outline-variant/30 rounded-full hover:border-primary">
                          View Details
                        </button>
                        <button className="bg-primary hover:bg-primary-container text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-primary/10 transition-all active:scale-95">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {hotels.length > 0 && hotels.length >= 20 && (
              <div className="mt-12 flex justify-center">
                <button className="flex items-center gap-2 px-8 py-4 bg-surface-container-low hover:bg-surface-container-high rounded-full font-label text-sm font-bold tracking-widest uppercase transition-all">
                  Load More Properties
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
