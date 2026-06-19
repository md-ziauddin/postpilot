import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:py-24 bg-brand-alabaster text-brand-obsidian">
      <main className="w-full max-w-4xl space-y-12">
        
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <i className="fa-brands fa-instagram text-sm"></i>
            <i className="fa-brands fa-linkedin text-sm ml-1"></i>
            PostPilot Studio v1.0
          </div>
          
          <h1 className="font-playfair text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
            The Reflective & Minimalist <span className="font-playfair italic text-brand-gold-dark">Content Studio</span>
          </h1>
          
          <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans">
            Craft premium, visually serene Instagram carousels and LinkedIn document posts designed to inspire, teach, and connect.
          </p>
        </section>

        {/* Studio Apps Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Instagram Carousel Card */}
          <div className="bg-white border border-stone-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.04)] hover:scale-[1.01] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-gold text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="space-y-1">
                <h2 className="font-playfair text-xl font-bold">Instagram Carousel Creator</h2>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Design beautiful multi-slide carousels combining traditional Arabic scripture, reflective translations, and thoughtful commentary.
                </p>
              </div>
              
              {/* Feature tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[9px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full border border-stone-200">5-6 Slide Templates</span>
                <span className="text-[9px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full border border-stone-200">IG Live Preview</span>
                <span className="text-[9px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full border border-stone-200">Caption Copy</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <Link
                href="/instagram"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-obsidian hover:bg-stone-850 text-white font-medium text-xs py-3 px-4 rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Launch IG Creator <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>

          {/* LinkedIn Creator Card */}
          <div className="bg-white/60 border border-stone-200/40 rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.005)] opacity-85 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/50 flex items-center justify-center text-blue-600 text-2xl">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="space-y-1">
                <h2 className="font-playfair text-xl font-bold flex items-center gap-2">
                  LinkedIn Post Studio
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded bg-amber-50 border border-amber-250 text-[8px] font-bold text-brand-gold-dark uppercase tracking-widest">
                    Next Up
                  </span>
                </h2>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Compose authoritative long-form text articles and generate clean, presentation-style PDFs designed for LinkedIn document feeds.
                </p>
              </div>
              
              {/* Feature tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[9px] bg-stone-50 text-stone-400 px-2 py-0.5 rounded-full border border-stone-200/50">PDF Document Gen</span>
                <span className="text-[9px] bg-stone-50 text-stone-400 px-2 py-0.5 rounded-full border border-stone-200/50">API Posting</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100/50">
              <button
                disabled
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-200 text-stone-400 font-medium text-xs py-3 px-4 rounded-xl cursor-not-allowed"
              >
                Coming Soon...
              </button>
            </div>
          </div>

        </section>

        {/* Global Design & Guide Center */}
        <section className="bg-white border border-stone-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.01)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h3 className="font-playfair text-lg font-bold flex items-center gap-2">
              <i className="fa-solid fa-shapes text-brand-gold"></i>
              System UI Design Showroom
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Explore the system font pairings, color palettes, form inputs, buttons, and custom layout variables to see the full UI kit in action.
            </p>
          </div>
          <Link
            href="/design-system"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white border border-stone-250 hover:border-brand-gold/60 text-stone-700 font-semibold text-xs py-3 px-6 rounded-xl hover:bg-stone-50 active:scale-[0.98] transition-all"
          >
            Open Design Showroom <i className="fa-solid fa-chevron-right text-[9px]"></i>
          </Link>
        </section>

      </main>
    </div>
  );
}

