"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <>
      <nav className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            Board Musafir
          </Link>
          <div className="hidden md:flex items-center gap-8 font-headline font-medium text-sm">
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/itineraries/builder">AI Builder</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="/search">Flights</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Hotels</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Activities</Link>
          </div>
        </div>
      </nav>

      <main className="min-h-screen relative flex items-center justify-center pt-28 pb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Serene Background" className="w-full h-full object-cover scale-105 filter brightness-[0.80]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXuhmMnWESbFLpsjyaGGuXicaFi2_GO0sQDIDWwet4oMSMyHdqK4rLRpMJdU5RJC8gb_Eg1yHZI2KUafofwxHOvaumBKl0OqyI6qy3AJmd487qpANf-MU0dPRuJVJ25OqPgeIf4tweiONUwp5sniH0U0rWG_4hGUYYjIOIyZrwLCH2Hjw3rz8UZvSYMp3K3hmW8COJ92sz52EMZtF5odRx2-yj7DSf3A0eF5IumYbt9cE3vp_lZRc0rXrU_8IHgldXAkx3_wGkzw" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-lg mx-4"
        >
          <div className="bg-surface/80 backdrop-blur-2xl rounded-3xl luxury-shadow p-8 lg:p-12 border border-outline-variant/20">
            <div className="text-center mb-8">
              <span className="material-symbols-outlined text-primary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
              <h2 className="font-headline text-3xl font-bold text-on-surface">Become an Explorer</h2>
              <p className="font-body text-sm text-on-surface-variant mt-2">
                Join to unlock bespoke itineraries and premium concierge access.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-all font-body text-base" 
                    placeholder="Jane" 
                  />
                </div>
                <div className="relative group">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-all font-body text-base" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-all font-body text-base" 
                  placeholder="name@example.com" 
                />
              </div>

              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b-2 border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-all font-body text-base" 
                  placeholder="••••••••" 
                />
                {/* Visual password strength indicator */}
                <div className="flex gap-1 mt-2">
                  <div className="h-1 bg-primary/20 rounded-full flex-1"></div>
                  <div className="h-1 bg-outline-variant/30 rounded-full flex-1"></div>
                  <div className="h-1 bg-outline-variant/30 rounded-full flex-1"></div>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-1 font-semibold">Password strength: Weak</p>
              </div>

              <div className="flex items-start gap-3 py-2 group">
                <input className="rounded text-primary focus:ring-primary h-4 w-4 bg-transparent border-outline-variant transition-colors mt-0.5" type="checkbox" id="terms" />
                <label htmlFor="terms" className="font-body text-xs text-on-surface-variant leading-relaxed">
                  I agree to the <Link href="/terms" className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <button 
                type="button"
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-full font-label font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Create Account
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>

              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-outline-variant/30"></div>
                <span className="shrink-0 px-4 text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">Or</span>
                <div className="flex-grow border-t border-outline-variant/30"></div>
              </div>

              <button 
                type="button"
                className="w-full bg-white text-on-surface border border-outline-variant/30 py-4 rounded-full font-label font-bold text-sm hover:bg-surface-container-low active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google logo" />
                Sign up with Google
              </button>
            </form>

            <p className="text-center font-body text-sm text-on-surface-variant mt-8">
              Already have an account?{' '}
              <Link href="/auth/login" className="font-bold text-primary hover:text-secondary transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}
