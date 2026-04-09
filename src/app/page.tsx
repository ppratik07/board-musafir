"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <header className="bg-stone-50/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none docked full-width top-0 sticky z-50 transition-all">
        <nav className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
          <div className="font-headline text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            Board Musafir
          </div>
          <div className="hidden md:flex items-center space-x-10 font-headline font-medium text-sm">
            <Link className="text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors Active: scale-95 duration-150 ease-in-out" href="#">AI Builder</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Flights</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Hotels</Link>
            <Link className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Activities</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-label font-semibold text-sm hover:opacity-90 transition-opacity shadow-md">
              Book Now
            </button>
            <span className="material-symbols-outlined text-emerald-800 cursor-pointer text-3xl" data-icon="account_circle">account_circle</span>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section with AI Builder */}
        <section className="relative h-[921px] min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Remote Destination" className="w-full h-full object-cover scale-105" data-alt="Stunning panoramic view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP0tc47QGI10dCfaP1qErYHPlWBhTuTsMfYSuVniCPWZemxIeH-e8TgRXvVVYy3IXcRTFq-1FlA7KHGSfQGzRG-gC6_fne-1pXlxJpdagTpOelUYmifCdj0BpJTYe1F1C0JSuRW_Ev5c6luyhEbq-kIyaMqZ0ixNGkCq-Dasl_PjNVVjs2QDSltoPpj7wYcRgK4sTJltXkOQCuA5XftQdubB57KbzXSBV5RwjA4kFaJklOgVyBE6pZ8cJ9uvap-ojAG1BJ9CFMrUs" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-surface"></div>
          </div>

          <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-headline text-6xl md:text-8xl text-white leading-tight font-bold drop-shadow-lg">
                Curated by AI,<br />
                <span className="italic font-normal">Refined by You.</span>
              </h1>
              <p className="text-white/90 text-xl font-body max-w-lg leading-relaxed drop-shadow-md">
                Experience travel as a digital curator. Our intelligent engine crafts journeys that resonate with your personal narrative.
              </p>
            </motion.div>

            {/* AI Smart Itinerary Builder Widget */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-surface/70 glass-effect p-10 rounded-[2rem] shadow-2xl border border-white/20 backdrop-blur-3xl"
            >
              <h2 className="font-headline text-2xl text-primary font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
                AI Smart Itinerary Builder
              </h2>
              <div className="space-y-8">
                <div className="relative group">
                  <label className="block font-label text-xs uppercase tracking-widest text-primary font-bold mb-2">Where to?</label>
                  <input className="w-full bg-transparent border-b-2 border-outline-variant/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-lg" placeholder="Dream destination..." type="text" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block font-label text-xs uppercase tracking-widest text-primary font-bold mb-2">When?</label>
                    <input className="w-full bg-transparent border-b-2 border-outline-variant/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-lg" placeholder="Select dates" type="text" />
                  </div>
                  <div className="relative group">
                    <label className="block font-label text-xs uppercase tracking-widest text-primary font-bold mb-2">Who's going?</label>
                    <select className="w-full bg-transparent border-b-2 border-outline-variant/40 py-3 focus:outline-none focus:border-primary transition-all font-body text-lg appearance-none">
                      <option>Solo Explorer</option>
                      <option>Couple</option>
                      <option>Family</option>
                      <option>Group of Friends</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-full font-label font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                  Generate My Journey
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trending Itineraries - Bento Grid */}
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <span className="text-secondary font-label font-bold tracking-[0.2em] uppercase text-xs">Global Favorites</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Trending Itineraries</h2>
            </div>
            <Link className="text-tertiary font-label font-bold flex items-center gap-2 group" href="#">
              Explore All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="east">east</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <img alt="Santorini" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqkYJwj68R8_NZio66bCmg5WxLLKILff7eHlrvlFqhd4618_-1dHiq17TOUqq5gv94dmeBwBsfgNRHi91QmACEwzSUdo0d5xwld2h9eyQVjiZZG0y2_T124y-2FVhMCHZOTbuO7cMwPRphcoP3E-joi6NN752JfGxnAS067yCgu6XfsFXkAV-vsd1q3m73PmbJF9dIPBGZQ7K6XAf_y3i-WHdRHnc3imwOTx9AoeIwEOnoDdhAfmnMaCLrlIApEE9UhU-aP4g_HYw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="bg-primary/90 text-white px-4 py-1 rounded-full text-xs font-label font-bold uppercase tracking-widest mb-4 inline-block">Boutique Luxury</span>
                <h3 className="font-headline text-4xl font-bold">The Azure Escape: Santorini</h3>
                <p className="font-body text-white/80 mt-2">7 Days of volcanic sunsets and hidden coves.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <img alt="Agra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBveKEnJDyX13Q42FbTX21VnEJn8CuCE8kHoQ_xmpDm4qYFMYeCn1RWveSB-THU8lWWorOmnwKKyBxDrFSduq6OOZtyUTYd6dxxK4QRmfNuzvlnI2WKDC4c5Fv26nxX4unPD9lR2bDcBOcF4JHC7D79Q6LVzGyTvjoK1G8ARWFb0Fh_gugtiTrJVANEp2vYsH1SOQ7oXvcFxErbWg401HQ6TVe1GnBJDnjSL3amSxhTAEoRuKeKsI2Zp8Uk5ANBzOspXUf-6lFfb-M" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="bg-secondary/90 text-white px-4 py-1 rounded-full text-xs font-label font-bold uppercase tracking-widest mb-4 inline-block">Cultural Heritage</span>
                <h3 className="font-headline text-2xl font-bold">Royal Echoes: North India</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <img alt="Maldives" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7PPBbse7qpFF_h0wyzXqwDMliM4Zs4aSTb_MixnvcYdZHjOiHLsLyOmNl5rfjKrpAGgj_WOOBQa1Aw5WqNu8EVMAMexJxIGsIcYHO51cD_seujVs7ISke5MWO0Our1xx7gg4kv5zP8bul2EolFlWvYTCobbyWmOqdM-eOBsBZGLP7M8-didFzgRcw17t5djFPT-S0Q7rtE68xEoXJ2JtoSKHFQQ-lk5D4unahq-fEhvEdKJHM7pG-Onz1W8i_i54fKvtsOXVq38g" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="bg-tertiary/90 text-white px-4 py-1 rounded-full text-xs font-label font-bold uppercase tracking-widest mb-4 inline-block">Ocean Sanctuary</span>
                <h3 className="font-headline text-2xl font-bold">The Maldives Silence</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="md:col-span-8 group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <img alt="Alps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXuhmMnWESbFLpsjyaGGuXicaFi2_GO0sQDIDWwet4oMSMyHdqK4rLRpMJdU5RJC8gb_Eg1yHZI2KUafofwxHOvaumBKl0OqyI6qy3AJmd487qpANf-MU0dPRuJVJ25OqPgeIf4tweiONUwp5sniH0U0rWG_4hGUYYjIOIyZrwLCH2Hjw3rz8UZvSYMp3K3hmW8COJ92sz52EMZtF5odRx2-yj7DSf3A0eF5IumYbt9cE3vp_lZRc0rXrU_8IHgldXAkx3_wGkzw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="bg-primary/90 text-white px-4 py-1 rounded-full text-xs font-label font-bold uppercase tracking-widest mb-4 inline-block">Alpine Adventure</span>
                <h3 className="font-headline text-4xl font-bold">Peaks of Serenity: Swiss Alps</h3>
                <p className="font-body text-white/80 mt-2">Discover the hidden chalets of the Engadine Valley.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Curated Experiences Section */}
        <section className="bg-surface-container-low py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img alt="Japanese Experience" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn9hoYsnnocXoaxCFZPTjjVzKiymfRUhFSz6fMba4nKO0phoRTNSKhy6LdKsT6_q-0ACBTN2oSWQBlCVTmLLfRfKUEYjse-BZVX_jhs9nMl2PBMNZPEE_UXjzHTdEqJD_mqc3KXiEeTyAktW-FgwucAA5WyGncEQb3rAYHPtGjj8vNHhG8_qYTKVbThoS8ts_In_ZE6OzUp-9zuEd6OEnCW8iuVAZU6R6kEnsUBFA5ofOBM-Akn5MfrBRMHmEY5NAuxKT9MAQUj0I" />
                </div>
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl z-0"></div>
                <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl z-0"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border border-outline-variant/10"
                >
                  <span className="material-symbols-outlined text-secondary mb-3 text-4xl" data-icon="verified_user">verified_user</span>
                  <p className="font-label text-sm font-bold text-on-surface">Verified Curator Recommendation</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10 order-1 lg:order-2"
              >
                <div className="space-y-4">
                  <span className="text-secondary font-label font-bold tracking-[0.2em] uppercase text-xs">The Art of Travel</span>
                  <h2 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight">Curated Experiences that Linger</h2>
                </div>
                <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                  We don't just find hotels; we source moments. From private tea ceremonies in Jaipur to midnight treks in the Atacama, our digital curators map experiences that change your perspective.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-3">
                    <h4 className="font-headline text-xl font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary" data-icon="eco">eco</span>
                      Sustainability First
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant">Travel that respects the land and its people.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-headline text-xl font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary" data-icon="handshake">handshake</span>
                      Local Expertise
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant">Connect with guardians of local tradition.</p>
                  </div>
                </div>
                <button className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-label font-bold hover:bg-on-surface hover:text-white transition-all">
                  View All Experiences
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Travel Diaries */}
        <section className="py-32 px-8 max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <span className="text-tertiary font-label font-bold tracking-[0.2em] uppercase text-xs">From the Journal</span>
            <h2 className="font-headline text-5xl text-on-surface">Featured Travel Diaries</h2>
            <p className="font-body text-lg text-on-surface-variant">Deep dives and personal narratives from our sister publication, Owlous.in.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "The Silent Majesty of Wadi Rum: A Nomad's Perspective", tag: "Adventure", date: "June 12, 2024", author: "Julian Voss", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCczH-n2VmGxF9Xz6xIwnxDW451cHPW_BqSQ5rfURB9UcxjVIIvSLwovT_9B-cSFm6T6vqce1PrYEdQfIicTn3-rGCA3KFwlNgqA2gWWbtnbtGqm-KVujlan0dMp1O9YsehgNpa0UdH_DYcrSN9eEQlQYFz0alI9cFB7gZsdsHuprLokOsRYLc5r8PesF9O1JQf8z_G9zjwPAMIMfVfYVD-bnX6gHXu_FJ9Xruy1lrRAGmOLnCL8zMCpUhVAT8WEgvjd0oiQ2rCOlc" },
              { title: "Eco-Retreats: Where Luxury Meets Conscience in Bali", tag: "Sustainability", date: "May 28, 2024", author: "Elena Rossi", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKqqsKZ2v3HyuY0BK8c-eoz0NMk8RYlulVzz1ev0QmwChqF3OusRAcsgPQFMKAVWJg_4GJ5yOKKO8l1UsmNk3E8X9sJ1xmAmchnU7NFbSDwd-vS8PpvJ3m8WVAOreaLHfXhsneDNH0fx0Ubgcgnkv9EBl8begafWzwfy3ts7GRouhOZ5Q1yggyvtwLOm6C8RctztzICYMU905GZV1U2l8iwbr-Qc17aeeVVt13jJ1HAOagyJJAkVrb4xhQRr1xvYXpVKJI2FWt-8g" },
              { title: "The Architecture of Flavor: Jaipur's Kaiseki Tradition", tag: "Culinary", date: "May 15, 2024", author: "Marcus Chen", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4ZGiwXv9AxdfQgmFJC83tTTHZxoRERxPYX53yORy7Ecmuc5uhQxAVkm93QW4OjKWBIr7Kan-gTrTdAAUs7NBTeKP9aSiUilDi4E3isNRn_cRg5pSG3I1onTWiAUOLYaEWanzeiIjOnFAKe60wOuTZk4SYTfHDpdjqjgW5Ogy8qccW3LA_G1SFVF4MYq7fAP7Qo0ldtfB4A1BVmdsZv4hNgD8F9jqVo8HQHJ7lO24Qg-tWWALvgi_xhDL0Q0PFqbKkd_w-9i2Bgw" }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col space-y-6"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl relative">
                  <img alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.img} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full font-label text-[10px] font-extrabold uppercase tracking-widest">{post.tag}</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs font-label">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  <p className="font-body text-on-surface-variant text-sm line-clamp-3">A journey into the heart of travel's most profound experiences.</p>
                  <Link href="#" className="inline-block border-b border-primary text-primary font-label text-sm font-bold pb-1 hover:text-secondary hover:border-secondary transition-all">Read Diary</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust Section / Bridge */}
        <section className="bg-surface py-20 px-8 text-center border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="font-headline text-2xl font-bold">Condé Nast</span>
              <span className="font-headline text-2xl font-bold">VOGUE</span>
              <span className="font-headline text-2xl font-bold">FORBES</span>
              <span className="font-headline text-2xl font-bold">Monocle</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-zinc-900 full-width border-t-0 flat no shadows py-16 px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline text-lg font-semibold text-stone-800 dark:text-stone-200">
            Board Musafir
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-widest">
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Journal</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Sustainability</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Verified Reviews</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-opacity duration-300" href="#">Terms of Service</Link>
          </div>
          <div className="text-emerald-800 dark:text-emerald-400 font-body text-xs uppercase tracking-widest text-center md:text-right">
            © 2026 Board Musafir. A Digital Curator Experience.
          </div>
        </div>
      </footer>
    </>
  );
}
