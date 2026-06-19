"use client";

import Link from "next/link";
import { useState } from "react";

export default function DesignSystemPage() {
  const [activeTheme, setActiveTheme] = useState<
    "sand" | "emerald" | "charcoal"
  >("sand");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const colors = [
    {
      name: "Alabaster (Background)",
      hex: "#FAF9F6",
      bgClass: "bg-brand-alabaster border border-stone-200/50",
      textClass: "text-brand-obsidian",
      desc: "Our main canvas color. Soft, warm, and highly readable.",
    },
    {
      name: "Obsidian (Text & Dark Mode)",
      hex: "#161616",
      bgClass: "bg-brand-obsidian",
      textClass: "text-brand-alabaster",
      desc: "Our primary high-contrast dark color. Sophisticated deep gray.",
    },
    {
      name: "Champagne Gold (Reflective Accent)",
      hex: "#D4AF37",
      bgClass: "bg-brand-gold",
      textClass: "text-brand-obsidian",
      desc: "Our highlight color. Used for spiritual titles, citations, and main actions.",
    },
    {
      name: "Forest Moss (Balanced Background)",
      hex: "#2C4C3E",
      bgClass: "bg-brand-moss",
      textClass: "text-brand-alabaster",
      desc: "Earthy secondary tone for deep reflection or dark-themed cards.",
    },
    {
      name: "Warm Rust (Action Call)",
      hex: "#B85C38",
      bgClass: "bg-brand-rust",
      textClass: "text-brand-alabaster",
      desc: "Tertiary warm tone. Ideal for call-to-actions and important warnings.",
    },
    {
      name: "Slate Gray (Muted Details)",
      hex: "#8E9290",
      bgClass: "bg-brand-slate",
      textClass: "text-brand-alabaster",
      desc: "For subtle annotations, border lines, and pagination dots.",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-alabaster text-brand-obsidian p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200/80 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-gold font-semibold text-xs tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            PostPilot Design System
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold tracking-tight">
            Visual Design System
          </h1>
          <p className="text-stone-500 text-sm mt-1 max-w-2xl">
            A premium, meditative interface system combining modern editorial
            sans/serif typography with a warm, organic color palette.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-obsidian hover:bg-stone-850 text-white font-medium text-xs py-2 px-4 rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <i className="fa-solid fa-house"></i> Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Palette & Typography */}
        <div className="lg:col-span-7 space-y-10">
          {/* Section: Color Palette */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-palette text-brand-gold"></i>
              <h2 className="font-playfair text-xl font-bold">
                Curated Color Palette
              </h2>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed">
              Click any color swatch to copy its HEX value. These colors define
              the brand essence of PostPilot.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleCopy(color.hex)}
                  className="flex items-start text-left p-4 bg-white border border-stone-200/60 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:scale-[1.01] active:scale-[0.99] transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${color.bgClass} shadow-inner mr-4`}
                  >
                    <i className="fa-regular fa-copy text-xs opacity-0 group-hover:opacity-60 transition-opacity"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-stone-800">
                      {color.name}
                    </h3>
                    <code className="text-[10px] font-mono text-brand-gold block mt-0.5">
                      {color.hex}
                    </code>
                    <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                      {color.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Section: Typography */}
          <section className="space-y-4 border-t border-stone-200/50 pt-8">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-font text-brand-gold"></i>
              <h2 className="font-playfair text-xl font-bold">
                Typography Scale & Families
              </h2>
            </div>

            <div className="space-y-6 bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)]">
              {/* Plus Jakarta Sans */}
              <div className="border-b border-stone-100 pb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                    UI & Interface Reading / Plus Jakarta Sans
                  </span>
                  <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600 font-mono">
                    font-sans
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-xl font-bold">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    Designed for user interfaces, input copy, forms, and
                    secondary reading. Highly legible at small sizes.
                  </p>
                </div>
              </div>

              {/* Playfair Display */}
              <div className="border-b border-stone-100 pb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                    Editorial Headline / Playfair Display
                  </span>
                  <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600 font-mono">
                    font-playfair
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-playfair text-2xl font-bold italic">
                    The Art of Stillness and Reflection.
                  </p>
                  <p className="font-playfair text-base text-stone-700 leading-relaxed font-light">
                    Beautiful contrasting serif with heavy vertical strokes,
                    delivering premium elegance for cover titles and main
                    points.
                  </p>
                </div>
              </div>

              {/* Amiri */}
              <div className="border-b border-stone-100 pb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                    Sacred & Arabic Calligraphy / Amiri
                  </span>
                  <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600 font-mono">
                    font-amiri
                  </span>
                </div>
                <div className="space-y-2 text-right">
                  <p className="font-amiri text-3xl text-brand-gold font-normal leading-relaxed">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="font-amiri text-base text-stone-700 leading-relaxed">
                    A Naskh-style Arabic font representing sacred scriptures and
                    deep classical text with maximum visual grace.
                  </p>
                </div>
              </div>

              {/* Caveat */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                    Handwritten Accent / Caveat
                  </span>
                  <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600 font-mono">
                    font-handwriting
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-handwriting text-2xl text-brand-rust">
                    This is a personal reflection note overlay...
                  </p>
                  <p className="font-sans text-xs text-stone-500 leading-relaxed">
                    Adds an organic, personal human touch. Perfect for accent
                    highlights, annotations, arrows, and signatures.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Component Library & Themes */}
        <div className="lg:col-span-5 space-y-10">
          {/* Section: UI Kit Components */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-shapes text-brand-gold"></i>
              <h2 className="font-playfair text-xl font-bold">
                Standard UI Components
              </h2>
            </div>

            <div className="bg-white border border-stone-200/60 rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] space-y-6">
              {/* Buttons */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                  Interactive Buttons
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <button className="bg-brand-gold hover:bg-brand-gold-dark text-brand-obsidian font-semibold text-xs py-2 px-4 rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                    Primary Gold
                  </button>
                  <button className="bg-brand-moss hover:bg-brand-moss-dark text-white font-semibold text-xs py-2 px-4 rounded-xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                    Forest Moss
                  </button>
                  <button className="bg-white border border-stone-200 text-stone-700 hover:border-stone-400 font-semibold text-xs py-2 px-4 rounded-xl shadow-sm hover:bg-stone-50 active:scale-[0.98] transition-all cursor-pointer">
                    Outline Gray
                  </button>
                  <button className="text-brand-rust hover:text-brand-rust-dark font-semibold text-xs py-2 px-3 rounded-xl hover:bg-brand-rust/5 transition-all cursor-pointer">
                    Minimal Rust
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                  Form Inputs
                </span>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-650">
                    Regular Input
                  </label>
                  <input
                    type="text"
                    placeholder="Enter template hook here..."
                    className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-650">
                    Reflective Text Area
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write your contemplative thought..."
                    className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all font-playfair italic leading-relaxed"
                  />
                </div>
              </div>

              {/* Checkboxes & Select */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-650 block">
                    Select Mode
                  </label>
                  <select className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all">
                    <option>Standard (4:5)</option>
                    <option>Square (1:1)</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end pb-2 gap-2">
                  <label className="flex items-center gap-2 text-xs text-stone-600 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded accent-brand-gold border-stone-300 focus:ring-brand-gold text-brand-gold"
                    />
                    <span>Show overlay</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Themes & Presets preview */}
          <section className="space-y-4 border-t border-stone-200/50 pt-8">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles text-brand-gold"></i>
              <h2 className="font-playfair text-xl font-bold">
                Dynamic Theme Presets
              </h2>
            </div>

            <p className="text-stone-500 text-xs leading-relaxed">
              Select a preset to see the visual layout update below. PostPilot
              supports multiple atmospheric aesthetics.
            </p>

            {/* Toggle Switches */}
            <div className="flex border border-stone-200 rounded-xl p-1 bg-white shadow-sm">
              {(["sand", "emerald", "charcoal"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t)}
                  className={`flex-1 py-1.5 px-3 text-center text-xs font-bold rounded-lg transition-all capitalize cursor-pointer ${
                    activeTheme === t
                      ? "bg-brand-gold text-brand-obsidian shadow-sm"
                      : "text-stone-500 hover:text-stone-850 hover:bg-stone-50"
                  }`}
                >
                  {t} Preset
                </button>
              ))}
            </div>

            {/* Simulated Slide Preview */}
            <div
              className={`border border-stone-200/60 rounded-2xl aspect-[4/5] p-8 flex flex-col justify-between shadow-md transition-all duration-300 ${
                activeTheme === "sand"
                  ? "bg-[#FCFBF7] text-[#1C1A17]"
                  : activeTheme === "emerald"
                    ? "bg-[#12241F] text-[#FAF9F5]"
                    : "bg-[#18181B] text-[#F4F4F5]"
              }`}
            >
              <div className="flex justify-between items-start opacity-70">
                <span className="text-[10px] tracking-widest font-semibold uppercase">
                  {process.env.NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE ||
                    "@umar.journal"}
                </span>
                <span className="text-[10px] font-bold">1/6</span>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
                <h2
                  className={`font-amiri text-2xl md:text-3xl leading-relaxed ${
                    activeTheme === "sand"
                      ? "text-brand-gold-dark"
                      : activeTheme === "emerald"
                        ? "text-[#8EA89C]"
                        : "text-zinc-350"
                  }`}
                >
                  الرَّحْمَٰنِ الرَّحِيمِ
                </h2>
                <p className="font-playfair text-xs md:text-sm italic opacity-80 max-w-[85%] leading-relaxed">
                  &ldquo;Ar-Raḥmān. Ar-Raḥeem. The boundlessly merciful.&rdquo;
                </p>
                <p className="font-sans text-[11px] font-light leading-relaxed max-w-[90%] opacity-70">
                  He names Himself by mercy. Twice. Before anything else. A
                  quiet invitation to begin again.
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] tracking-wider uppercase opacity-45">
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Floating Clipboard Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 bg-brand-obsidian text-brand-alabaster px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 border border-stone-850 animate-bounce text-xs">
          <i className="fa-solid fa-circle-check text-green-400"></i>
          <span>
            Copied{" "}
            <code className="text-brand-gold font-mono">{copiedText}</code> to
            clipboard!
          </span>
        </div>
      )}
    </div>
  );
}
