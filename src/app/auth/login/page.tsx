"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
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

      <main className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Serene Background" className="w-full h-full object-cover scale-105 filter brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXuhmMnWESbFLpsjyaGGuXicaFi2_GO0sQDIDWwet4oMSMyHdqK4rLRpMJdU5RJC8gb_Eg1yHZI2KUafofwxHOvaumBKl0OqyI6qy3AJmd487qpANf-MU0dPRuJVJ25OqPgeIf4tweiONUwp5sniH0U0rWG_4hGUYYjIOIyZrwLCH2Hjw3rz8UZvSYMp3K3hmW8COJ92sz52EMZtF5odRx2-yj7DSf3A0eF5IumYbt9cE3vp_lZRc0rXrU_8IHgldXAkx3_wGkzw" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-md mx-4"
        >
          <div className="bg-surface/80 backdrop-blur-2xl rounded-3xl luxury-shadow p-10 border border-outline-variant/20">
            <div className="text-center mb-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>vpn_key</span>
              <h2 className="font-headline text-3xl font-bold text-on-surface">Welcome Back</h2>
              <p className="font-body text-sm text-on-surface-variant mt-2">
                Continue your curated journey.
              </p>
            </div>

            <form className="space-y-6">
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-all font-body text-lg" 
                  placeholder="name@example.com" 
                />
              </div>

              <div className="relative group">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Password</label>
                  <Link href="#" className="font-label text-[10px] font-bold text-primary hover:text-secondary transition-colors">Forgot?</Link>
                </div>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b-2 border-outline-variant/40 py-2 focus:outline-none focus:border-primary transition-all font-body text-lg" 
                  placeholder="••••••••" 
                />
              </div>

              <div className="flex items-center gap-3 py-2 cursor-pointer group w-max">
                <input className="rounded text-primary focus:ring-primary h-4 w-4 bg-transparent border-outline-variant transition-colors" type="checkbox" id="remember" />
                <label htmlFor="remember" className="font-label text-xs font-semibold text-on-surface-variant group-hover:text-on-surface transition-colors cursor-pointer">
                  Remember me
                </label>
              </div>

              <button 
                type="button"
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-full font-label font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Sign In
                <span className="material-symbols-outlined text-lg" data-icon="login">login</span>
              </button>

              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-outline-variant/30"></div>
                <span className="shrink-0 px-4 text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">Or</span>
                <div className="flex-grow border-t border-outline-variant/30"></div>
              </div>

              <button 
                type="button"
                className="w-full bg-white text-on-surface border border-outline-variant/30 py-4 rounded-full font-label font-bold text-sm hover:bg-surface-container-low active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google logo" />
                Continue with Google
              </button>
            </form>

            <p className="text-center font-body text-sm text-on-surface-variant mt-8">
              New here?{' '}
              <Link href="/auth/register" className="font-bold text-primary hover:text-secondary transition-colors">
                Begin your journey
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}
