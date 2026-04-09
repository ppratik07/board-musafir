"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  cost: string;
  tips?: string[];
}

interface Day {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

interface Accommodation {
  name: string;
  type: string;
  [key: string]: string | number;
}

interface Budget {
  [key: string]: string | number;
}

interface Itinerary {
  title: string;
  summary: string;
  days: Day[];
  accommodations?: Accommodation[];
  estimatedBudget?: Budget;
  travelTips?: string[];
}

export default function AIBuilderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize with null to avoid hydration mismatch
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [source, setSource] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>('boutique');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['History']);
  
  const destination = searchParams.get('destination') || '';

  // Load from localStorage only on client after mount
  useEffect(() => {
    // This is intentionally in useEffect to avoid hydration mismatch
    setMounted(true);
    const storedItinerary = localStorage.getItem('generatedItinerary');
    const storedSource = localStorage.getItem('itinerarySource') || '';
    
    if (storedItinerary) {
      try {
        const parsed = JSON.parse(storedItinerary);
        setItinerary(parsed);
      } catch (error) {
        console.error('Error parsing itinerary:', error);
      }
    }
    
    setSource(storedSource);
  }, []);

  // Calculate trip duration
  const tripDuration = itinerary?.days?.length || 0;
  const firstDate = itinerary?.days?.[0]?.date || '';
  
  // Format date nicely
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Handle continue to pace - save preferences and navigate to finalize
  const handleContinueToPace = () => {
    // Save user preferences
    const preferences = {
      budget: selectedBudget,
      interests: selectedInterests,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('itineraryPreferences', JSON.stringify(preferences));
    
    // Navigate to dashboard with the finalized itinerary
    router.push('/dashboard');
  };

  return (
    <>
      <nav className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            Board Musafir
          </Link>
          <div className="hidden md:flex gap-8 items-center font-headline font-medium text-sm">
            <Link className="text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1 transition-colors" href="#">AI Builder</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Flights</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="/hotels">Hotels</Link>
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
                <div 
                  onClick={() => setSelectedBudget('authentic')}
                  className={`group cursor-pointer p-6 rounded-xl transition-all duration-300 shadow-sm border-b-4 ${
                    selectedBudget === 'authentic' 
                      ? 'bg-surface-container-lowest ring-2 ring-primary border-primary shadow-md' 
                      : 'bg-surface-container-low hover:bg-surface-container-lowest border-transparent hover:border-primary'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl mb-4 ${
                    selectedBudget === 'authentic' ? 'text-primary' : 'text-stone-400 group-hover:text-primary'
                  }`} style={selectedBudget === 'authentic' ? { fontVariationSettings: "'FILL' 1" } : {}}>savings</span>
                  <h3 className="font-headline text-lg font-bold mb-1">Authentic</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">Focus on local charm and hidden street gems.</p>
                </div>
                <div 
                  onClick={() => setSelectedBudget('boutique')}
                  className={`group cursor-pointer p-6 rounded-xl transition-all duration-300 shadow-sm border-b-4 ${
                    selectedBudget === 'boutique' 
                      ? 'bg-surface-container-lowest ring-2 ring-primary border-primary shadow-md' 
                      : 'bg-surface-container-low hover:bg-surface-container-lowest border-transparent hover:border-primary'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl mb-4 ${
                    selectedBudget === 'boutique' ? 'text-primary' : 'text-stone-400 group-hover:text-primary'
                  }`} style={selectedBudget === 'boutique' ? { fontVariationSettings: "'FILL' 1" } : {}}>hotel</span>
                  <h3 className="font-headline text-lg font-bold mb-1">Boutique</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">Carefully curated comfort with local flair.</p>
                </div>
                <div 
                  onClick={() => setSelectedBudget('grand-luxe')}
                  className={`group cursor-pointer p-6 rounded-xl transition-all duration-300 shadow-sm border-b-4 ${
                    selectedBudget === 'grand-luxe' 
                      ? 'bg-surface-container-lowest ring-2 ring-primary border-primary shadow-md' 
                      : 'bg-surface-container-low hover:bg-surface-container-lowest border-transparent hover:border-primary'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl mb-4 ${
                    selectedBudget === 'grand-luxe' ? 'text-primary' : 'text-stone-400 group-hover:text-primary'
                  }`} style={selectedBudget === 'grand-luxe' ? { fontVariationSettings: "'FILL' 1" } : {}}>diamond</span>
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
                  { icon: "hiking", title: "Adventure", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkBw-U7LTXg4nb96jta379A7owQkf-y5Li5QJYyqfAujAEZtLeml6vswL-4cRoTx19iJU6DpqYNSKQTsD9xe5QfDLijZZPVANYcWvaRjqCDik3DBLjxzSs1KwhTiK51Ci7KckL_5G8TUzFC2k78396Tno32lXkgpGsgwPgAHMRjQGZIEEcYeq_LL7Ci-KAjtjZ3x4dtV3AKS1xPxRu0HXFr3fJ41b7NPA63XqLFLMSPcO9ei1ieikfdQbCjmY8VQWPb2qN6dmLlE4" },
                  { icon: "history_edu", title: "History", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMlq76_aaksK0fkXEwukXH1EKQpDUM7KBKLbFiCMaBWzlx7MVoAzK2nQyuFjd9IUaDj7YV9Z31RJz-2AfpYZrk36hs2KhuFnzYrU1VSor9Y5JF4uxrb8HgGqtz0tcIMr3AOhMpq2eTUvvdpVK51dHBL-X1npWcHSr_MBDjh76scbUfIcKkfU6lwMVGs2mJgrNdCx6P6xsDx6oqnBacRPeS-6iS7YZhqoo9G0TVsz5kkkNomPFsq_a0W2UTSnewRQv9Xfp5rb0a4nI" },
                  { icon: "spa", title: "Relaxation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp8ohhlMOSh2XH-Fxctpin1eLKFtWs2h5VU4BKwt967rRSEL-2Mbli6ISmuiMWh4FlypKG2Njrb7RECW8vLL64tIW8KDK_3iQmym5ZNQh1uPHQo-QG9tJsIXovBLclWuWHQvEUWGY86TkYKXoSBwgdnrHkuBIcOcexKtuOdwG-suXA3dP-0-9bROhDUCYSYBpjl5rb9PEqvDPD1M7mh1E0Alzy2xIbsNdXE1s-58A3jWkFCSSWikDz31qubRSzpyzoNsKC1e8Qnwk" },
                  { icon: "forest", title: "Nature", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdcTx5lcbRBQxRS_j91fvA9oaFclargcAfeOMxc69w3bLTVRgw-S_8e-rIh4Qoh5-rK2sH8Qu2QjcNMGcAaibXEXr_cnd_F5WNg4yzfh2POSg4vYK8Hqj_MDI7eiaZqvDAfCfg_TYQlTr2eJ_w1byyn8TNY24qy0VS0_9GD31WJS2TfhRz4bq2p13nS5feAIG6-qvcyEhYHPyUiBkaAdtFKFvRN0p0H90jCrrLGCDVU5U2nHUYoktJepqIzO1s6P571R2LeLVlFhM" }
                ].map((item, i) => {
                  const isActive = selectedInterests.includes(item.title);
                  const handleClick = () => {
                    if (isActive) {
                      setSelectedInterests(selectedInterests.filter(interest => interest !== item.title));
                    } else {
                      setSelectedInterests([...selectedInterests, item.title]);
                    }
                  };
                  
                  return (
                    <div 
                      key={i} 
                      onClick={handleClick}
                      className={`relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer transition-all ${
                        isActive ? 'ring-4 ring-primary ring-offset-4 ring-offset-surface' : ''
                      }`}
                    >
                      <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} alt={item.title} />
                      <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-primary/90' : 'from-on-background/80'} via-transparent to-transparent`}></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="material-symbols-outlined text-white mb-1" data-icon={item.icon}>{item.icon}</span>
                        <p className="text-white font-headline font-bold">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
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

            {/* Full Itinerary Details */}
            {mounted && itinerary && itinerary.days && itinerary.days.length > 0 && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.6 }} 
                className="space-y-6 pt-8"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="map">map</span>
                  <h2 className="font-headline text-2xl font-semibold">Your Complete Itinerary</h2>
                </div>
                
                <div className="space-y-6">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-headline font-bold text-primary">{day.day}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between mb-2">
                            <h3 className="font-headline text-xl font-bold">{day.title}</h3>
                            {day.date && (
                              <span className="text-xs text-on-surface-variant font-label">
                                {new Date(day.date).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </span>
                            )}
                          </div>
                          
                          {day.activities && day.activities.length > 0 && (
                            <div className="space-y-3 mt-4">
                              {day.activities.map((activity, actIdx) => (
                                <div key={actIdx} className="pl-4 border-l-2 border-primary/20">
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                      <h4 className="font-headline font-semibold text-base text-on-surface">
                                        {activity.title}
                                      </h4>
                                      {activity.description && (
                                        <p className="text-sm text-on-surface-variant mt-1">
                                          {activity.description}
                                        </p>
                                      )}
                                      {activity.location && (
                                        <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                                          <span className="material-symbols-outlined text-xs">location_on</span>
                                          {activity.location}
                                        </p>
                                      )}
                                    </div>
                                    {activity.time && (
                                      <span className="text-xs font-label text-on-surface-variant whitespace-nowrap">
                                        {activity.time}
                                      </span>
                                    )}
                                  </div>
                                  {(activity.duration || activity.cost) && (
                                    <div className="flex gap-3 mt-2">
                                      {activity.duration && (
                                        <span className="text-xs px-2 py-1 bg-surface-container-low rounded-full text-on-surface-variant">
                                          ⏱️ {activity.duration}
                                        </span>
                                      )}
                                      {activity.cost && (
                                        <span className="text-xs px-2 py-1 bg-surface-container-low rounded-full text-on-surface-variant">
                                          💰 {activity.cost}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Travel Tips */}
                {itinerary.travelTips && itinerary.travelTips.length > 0 && (
                  <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
                    <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">lightbulb</span>
                      Travel Tips
                    </h3>
                    <ul className="space-y-2">
                      {itinerary.travelTips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-on-surface-variant flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Estimated Budget */}
                {itinerary.estimatedBudget && (
                  <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10">
                    <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                      Estimated Budget
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(itinerary.estimatedBudget).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <span className="text-on-surface-variant capitalize">{key.replace(/_/g, ' ')}:</span>
                          <span className="font-semibold text-on-surface ml-2">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.section>
            )}
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
                <h3 className="font-headline text-3xl font-bold">
                  {mounted && itinerary?.title ? itinerary.title : destination || 'Your Journey'}
                </h3>
                <p className="font-label text-sm text-secondary font-bold">
                  {mounted && tripDuration > 0 ? `${tripDuration} Days • ${formatDate(firstDate)}` : 'Planning your adventure...'}
                </p>
                {mounted && source && (
                  <p className="text-xs text-green-600 font-semibold">
                    ✨ Generated by {source}
                  </p>
                )}
              </div>
              <div className="space-y-8 pt-4">
                    {mounted && itinerary?.days && itinerary.days.length > 0 ? (
                      <>
                        {itinerary.days.slice(0, 2).map((day) => (
                          <div key={day.day} className="flex gap-4 group">
                            <div className="flex flex-col items-center">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                              <div className="w-px h-full bg-outline-variant/40 my-2"></div>
                            </div>
                            <div className="pb-4">
                              <p className="font-label text-xs font-bold text-stone-400 uppercase">
                                Day {day.day}
                              </p>
                              <h4 className="font-headline font-semibold text-lg">{day.title}</h4>
                              <p className="font-body text-sm text-on-surface-variant">
                                {day.activities?.[0]?.description || day.activities?.[0]?.title || 'Exploring...'}
                              </p>
                              {day.activities && day.activities.length > 1 && (
                                <div className="mt-3 flex gap-2 flex-wrap">
                                  {day.activities.slice(1, 3).map((activity, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-surface-container-low text-[10px] font-label font-bold rounded-full text-primary uppercase">
                                      {activity.title.slice(0, 15)}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                        {itinerary.days.length > 2 && (
                          <div className="flex gap-4 opacity-40">
                            <div className="flex flex-col items-center">
                              <div className="w-2 h-2 rounded-full bg-outline"></div>
                            </div>
                            <div>
                              <p className="font-label text-xs font-bold uppercase">
                                Day {itinerary.days[2].day}-{itinerary.days[itinerary.days.length - 1].day}
                              </p>
                              <h4 className="font-headline font-semibold text-lg italic">More adventures...</h4>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <div className="w-px h-full bg-outline-variant/40 my-2"></div>
                        </div>
                        <div className="pb-4">
                          <p className="font-label text-xs font-bold text-stone-400 uppercase">Day 1</p>
                          <h4 className="font-headline font-semibold text-lg">Your Journey Begins</h4>
                          <p className="font-body text-sm text-on-surface-variant">
                            Generate your itinerary from the homepage to see details.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
              <button 
                onClick={handleContinueToPace}
                className="w-full bg-primary text-on-primary py-4 rounded-full font-label font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
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
            Board Musafir
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Journal</Link>
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Sustainability</Link>
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Verified Reviews</Link>
            <Link className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity" href="#">Terms of Service</Link>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 text-center md:text-right">
            © 2026 Board Musafir. A Digital Curator Experience.
          </div>
        </div>
      </footer>
    </>
  );
}
