"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface Slide {
  id: number;
  title: string;
  isDark: boolean;
  arabic?: string;
  translation?: string;
  citation?: string;
  body: string;
  isCover: boolean;
  textAlign?: "left" | "center" | "right";
}

const defaultCaption = `Three words. Everything begins. Before the meal. Before the door. Before the sentence I'm typing right now.

We start so many things in our own name—our timelines, our effort, our plans. The Bismillah is a gentle, recurring correction throughout our day. It reminds us we aren’t the source. Only the doers.

Try slowing it down today before you begin your next task.

How does the Bismillah shift your focus? Comment below.👇

#Bismillah #Reflections #Quran #DailyDevotion #IslamicMindfulness #SpiritualGrowth`;

const bismillahSlides: Slide[] = [
  {
    id: 1,
    title: "Slide 1 — Cover",
    isDark: false,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation:
      '"In the name of Allah, the Most Merciful, the Most Compassionate."',
    citation: "Qur'an 1:1",
    body: "First Ayah of Surah Al-Fatihah, initiating every action in mindfulness.",
    isCover: true,
    textAlign: "center",
  },
  {
    id: 2,
    title: "Slide 2 — Hook",
    isDark: false,
    arabic: "",
    translation: "",
    citation: "",
    body: "Three words. Everything begins.\n\nBefore the meal. Before the door. Before the sentence I’m typing now.\n\nThe first Ayah of the Qur'an is also the first thing said before almost every act in a Muslim's day.",
    isCover: false,
    textAlign: "center",
  },
  {
    id: 3,
    title: "Slide 3 — The Two Mercies",
    isDark: false,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "Ar-Raḥmān. Ar-Raḥeem.",
    citation: "",
    body: "Both names stem from raḥmah — mercy. Scholars often distinguish them: one is the boundless mercy covering all creation, the other is the specific mercy meeting those who turn back.\n\nHe names Himself by mercy. Twice. Before anything else.",
    isCover: false,
    textAlign: "center",
  },
  {
    id: 4,
    title: "Slide 4 — Self-Reflection",
    isDark: true,
    arabic: "",
    translation: "",
    citation: "",
    body: "I start in my own name. My plans. My timeline. My output.\n\nThe Bismillah is a quiet correction — a reminder that I am not the source.\n\nOnly the doer. Whatever strength I bring to this moment is borrowed.",
    isCover: false,
    textAlign: "center",
  },
  {
    id: 5,
    title: "Slide 5 — Practice",
    isDark: false,
    arabic: "",
    translation: "",
    citation: "",
    body: "What if I said it slowly?\n\nNot as a quick reflex.\nNot as simple background.\n\nBut as a real, conscious handing-over of whatever comes next.",
    isCover: false,
    textAlign: "center",
  },
  {
    id: 6,
    title: "Slide 6 — Call To Action",
    isDark: true,
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا",
    translation: '"Our Lord, accept it from us."',
    citation: "",
    body: "If you want to try this with me today:\n• Read it before one small thing.\n• Notice what shifts.\n• Come back Friday.",
    isCover: false,
    textAlign: "center",
  },
];

const initialEmptySlides: Slide[] = [
  {
    id: 1,
    title: "Slide 1 — Cover",
    isDark: false,
    arabic: "",
    translation: "",
    citation: "",
    body: "",
    isCover: true,
    textAlign: "center",
  },
];

const themes = {
  "sand-slate": {
    light: {
      bg: "bg-[#FCFBF7]",
      text: "text-[#1C1A17]",
      subtext: "text-stone-500",
      highlight: "text-[#C2974F]",
      border: "border-stone-200/50",
    },
    dark: {
      bg: "bg-[#1C1A17]",
      text: "text-[#F9F7F2]",
      subtext: "text-stone-400",
      highlight: "text-[#DCAE5A]",
      border: "border-stone-850",
    },
  },
  emerald: {
    light: {
      bg: "bg-[#FAF9F5]",
      text: "text-[#1B2925]",
      subtext: "text-stone-500",
      highlight: "text-[#567E6B]",
      border: "border-stone-200/50",
    },
    dark: {
      bg: "bg-[#12241F]",
      text: "text-[#FAF9F5]",
      subtext: "text-stone-400",
      highlight: "text-[#8EA89C]",
      border: "border-stone-900",
    },
  },
  "sage-cream": {
    light: {
      bg: "bg-[#F5F0E6]",
      text: "text-[#1A1A1A]",
      subtext: "text-[#5F6B58]",
      highlight: "text-[#8A9A82]",
      border: "border-[#E8E0D0]",
    },
    dark: {
      bg: "bg-[#1A1A1A]",
      text: "text-[#F5F0E6]",
      subtext: "text-[#A8B5A2]",
      highlight: "text-[#A8B5A2]",
      border: "border-stone-800",
    },
  },
  charcoal: {
    light: {
      bg: "bg-[#FAFAFA]",
      text: "text-zinc-900",
      subtext: "text-zinc-500",
      highlight: "text-zinc-600",
      border: "border-zinc-200",
    },
    dark: {
      bg: "bg-[#18181B]",
      text: "text-[#F4F4F5]",
      subtext: "text-zinc-400",
      highlight: "text-zinc-300",
      border: "border-zinc-800",
    },
  },
};

const jsonSchemaExample = {
  caption: "Insert your Instagram caption here...",
  theme: "sand-slate",
  aspectRatio: "aspect-[4/5]",
  showUserOverlay: true,
  showPaginationDots: true,
  showPageNumbers: true,
  instagramHandle: "@umar.journal",
  displayName: "Mohammad Umar",
  slides: [
    {
      id: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: '"In the name of Allah..."',
      citation: "Qur'an 1:1",
      body: "Cover slide body description...",
      textAlign: "center",
    },
    {
      id: 2,
      arabic: "",
      translation: "",
      citation: "",
      body: "Hook slide text content...",
      textAlign: "left",
    },
  ],
};

export default function InstagramPage() {
  const [slides, setSlides] = useState<Slide[]>(initialEmptySlides);
  const [caption, setCaption] = useState("");

  // Controls
  const [activeTab, setActiveTab] = useState<
    "editor" | "design" | "caption" | "import"
  >("editor");
  const [aspectRatio, setAspectRatio] = useState<
    "aspect-[4/5]" | "aspect-square"
  >("aspect-[4/5]");
  const [selectedTheme, setSelectedTheme] = useState<
    "sand-slate" | "emerald" | "charcoal" | "sage-cream"
  >("sand-slate");
  const [showUserOverlay, setShowUserOverlay] = useState(true);
  const [showPaginationDots, setShowPaginationDots] = useState(true);
  const [showPageNumbers, setShowPageNumbers] = useState(true);

  // Custom Branding Overlays (Default to @umar.journal and Mohammad Umar from env)
  const [instagramHandle, setInstagramHandle] = useState(
    process.env.NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE || "@umar.journal",
  );
  const [displayName, setDisplayName] = useState(
    process.env.NEXT_PUBLIC_DEFAULT_DISPLAY_NAME || "Mohammad Umar",
  );

  // JSON editor raw string state
  const [rawJSON, setRawJSON] = useState("");

  // Navigation & Gesture State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Swipe & Drag Gestures state
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const activeSlides = slides;

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSlideChange = (
    slideId: number,
    field: keyof Slide,
    value: any,
  ) => {
    setSlides((prev) =>
      prev.map((s) => (s.id === slideId ? { ...s, [field]: value } : s)),
    );
  };

  // Add / Delete dynamic slides
  const addSlide = () => {
    if (slides.length >= 10) {
      triggerToast(
        "Instagram carousels are limited to a maximum of 10 slides.",
      );
      return;
    }
    setSlides((prev) => {
      const maxId = prev.length > 0 ? Math.max(...prev.map((s) => s.id)) : 0;
      const nextId = maxId + 1;
      const newSlide: Slide = {
        id: nextId,
        title: `Slide ${prev.length + 1} — Content`,
        isDark: false,
        arabic: "",
        translation: "",
        citation: "",
        body: "",
        isCover: false,
        textAlign: "center",
      };
      return [...prev, newSlide];
    });
    triggerToast("New slide added!");
  };

  const deleteSlide = (slideId: number) => {
    if (slideId === 1) return;
    setSlides((prev) => {
      const filtered = prev.filter((s) => s.id !== slideId);
      const reindexed = filtered.map((s, index) => {
        if (s.isCover) return s;
        return {
          ...s,
          title: `Slide ${index + 1} — Content`,
        };
      });
      setCurrentSlideIndex((curr) => Math.min(curr, reindexed.length - 1));
      return reindexed;
    });
    triggerToast("Slide removed.");
  };

  const nextSlide = () => {
    if (currentSlideIndex < activeSlides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Drag Gesture Event Handlers
  const handleDragStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const sliderWidth = sliderRef.current?.offsetWidth || 400;
    const swipeThreshold = sliderWidth * 0.15;

    if (dragOffset < -swipeThreshold) {
      nextSlide();
    } else if (dragOffset > swipeThreshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const getTransformStyle = () => {
    const baseTranslate = -currentSlideIndex * 100;
    if (isDragging && dragOffset !== 0) {
      const sliderWidth = sliderRef.current?.offsetWidth || 400;
      const dragPercent = (dragOffset / sliderWidth) * 100;
      return `translateX(calc(${baseTranslate}% + ${dragPercent}%))`;
    }
    return `translateX(${baseTranslate}%)`;
  };

  const copyCaption = () => {
    navigator.clipboard.writeText(caption);
    triggerToast("Caption and hashtags copied! Ready for Instagram.");
  };

  // Loader / Reset Draft Methods
  const loadDemoTemplate = () => {
    setSlides(JSON.parse(JSON.stringify(bismillahSlides)));
    setCaption(defaultCaption);
    setAspectRatio("aspect-[4/5]");
    setSelectedTheme("sand-slate");
    setShowUserOverlay(true);
    setShowPaginationDots(true);
    setShowPageNumbers(true);
    setInstagramHandle(
      process.env.NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE || "@umar.journal",
    );
    setDisplayName(
      process.env.NEXT_PUBLIC_DEFAULT_DISPLAY_NAME || "Mohammad Umar",
    );
    setCurrentSlideIndex(0);
    triggerToast("Demo template loaded!");
  };

  const clearDraft = () => {
    setSlides(JSON.parse(JSON.stringify(initialEmptySlides)));
    setCaption("");
    setAspectRatio("aspect-[4/5]");
    setSelectedTheme("sand-slate");
    setShowUserOverlay(true);
    setShowPaginationDots(true);
    setShowPageNumbers(true);
    setInstagramHandle(
      process.env.NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE || "@umar.journal",
    );
    setDisplayName(
      process.env.NEXT_PUBLIC_DEFAULT_DISPLAY_NAME || "Mohammad Umar",
    );
    setCurrentSlideIndex(0);
    setRawJSON("");
    triggerToast("Editor cleared (Cover slide preserved).");
  };

  // JSON Import & Export
  const getCurrentJSONData = () => {
    return {
      caption,
      theme: selectedTheme,
      aspectRatio,
      showUserOverlay,
      showPaginationDots,
      showPageNumbers,
      instagramHandle,
      displayName,
      slides: slides.map((s) => ({
        id: s.id,
        arabic: s.arabic || "",
        translation: s.translation || "",
        citation: s.citation || "",
        body: s.body || "",
        isDark: s.isDark,
        textAlign: s.textAlign || "center",
      })),
    };
  };

  const handleImportJSON = (jsonString: string) => {
    if (!jsonString.trim()) {
      alert("JSON content is empty.");
      return;
    }
    try {
      const data = JSON.parse(jsonString);

      if (data.caption !== undefined && typeof data.caption !== "string") {
        throw new Error("Caption must be a string.");
      }

      if (data.slides !== undefined) {
        if (!Array.isArray(data.slides)) {
          throw new Error("Slides must be an array.");
        }
        if (data.slides.length === 0) {
          throw new Error("Slides array cannot be empty.");
        }

        const importedSlides = data.slides.map((is: any, index: number) => ({
          id: index + 1,
          title:
            index === 0 ? "Slide 1 — Cover" : `Slide ${index + 1} — Content`,
          isDark:
            is.isDark !== undefined
              ? Boolean(is.isDark)
              : index === 0
                ? false
                : index === 3 || index === 5
                  ? true
                  : false,
          arabic: is.arabic !== undefined ? String(is.arabic) : "",
          translation:
            is.translation !== undefined ? String(is.translation) : "",
          citation: is.citation !== undefined ? String(is.citation) : "",
          body: is.body !== undefined ? String(is.body) : "",
          isCover: index === 0,
          textAlign:
            is.textAlign === "left"
              ? "left"
              : is.textAlign === "right"
                ? "right"
                : "center",
        }));
        setSlides(importedSlides);
      }

      if (data.caption !== undefined) {
        setCaption(data.caption);
      } else {
        setCaption("");
      }

      if (
        data.theme === "sand-slate" ||
        data.theme === "emerald" ||
        data.theme === "charcoal" ||
        data.theme === "sage-cream"
      ) {
        setSelectedTheme(data.theme);
      } else {
        setSelectedTheme("sand-slate");
      }

      if (
        data.aspectRatio === "aspect-[4/5]" ||
        data.aspectRatio === "aspect-square"
      ) {
        setAspectRatio(data.aspectRatio);
      } else {
        setAspectRatio("aspect-[4/5]");
      }

      setShowUserOverlay(
        data.showUserOverlay !== undefined
          ? Boolean(data.showUserOverlay)
          : true,
      );
      setShowPaginationDots(
        data.showPaginationDots !== undefined
          ? Boolean(data.showPaginationDots)
          : true,
      );
      setShowPageNumbers(
        data.showPageNumbers !== undefined
          ? Boolean(data.showPageNumbers)
          : true,
      );

      setInstagramHandle(
        data.instagramHandle !== undefined
          ? String(data.instagramHandle)
          : process.env.NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE ||
              "@umar.journal",
      );
      setDisplayName(
        data.displayName !== undefined
          ? String(data.displayName)
          : process.env.NEXT_PUBLIC_DEFAULT_DISPLAY_NAME || "Mohammad Umar",
      );

      setCurrentSlideIndex(0);
      triggerToast("Post imported successfully!");
    } catch (err: any) {
      alert("Failed to parse JSON: " + err.message);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === "string") {
        setRawJSON(text);
        handleImportJSON(text);
      }
    };
    reader.readAsText(file);
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(rawJSON);
      setRawJSON(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      alert("Invalid JSON structure: " + err.message);
    }
  };

  const copyJSONSchema = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonSchemaExample, null, 2));
    triggerToast("Example schema copied to clipboard!");
  };

  const downloadJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(getCurrentJSONData(), null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "postpilot-instagram-post.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerToast("JSON exported successfully!");
  };

  // Double-digit format formatter (e.g. 01 / 05)
  const formatIndex = (i: number) => String(i).padStart(2, "0");

  // Sync JSON string whenever switching to import tab
  useEffect(() => {
    if (activeTab === "import") {
      setRawJSON(JSON.stringify(getCurrentJSONData(), null, 2));
    }
  }, [activeTab]);

  return (
    <div className="lg:h-screen flex flex-col bg-brand-alabaster text-brand-obsidian lg:overflow-hidden font-sans">
      {/* Navigation Bar */}
      <header className="flex-shrink-0 bg-white border-b border-stone-200/80 py-4 px-6 sticky top-0 z-30 shadow-[0_2px_15px_rgb(0,0,0,0.015)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="bg-brand-gold text-brand-obsidian p-2 rounded-xl shadow-md shadow-brand-gold/10 hover:scale-105 active:scale-95 transition-all"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </Link>
            <div>
              <h1 className="font-playfair font-bold text-xl tracking-tight text-brand-obsidian flex items-center gap-2">
                Instagram Carousel Creator
              </h1>
              <p className="text-xs text-stone-500 font-sans">
                Reflective & Minimalist Content Studio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={loadDemoTemplate}
              className="text-xs text-brand-gold-dark font-bold hover:text-brand-gold flex items-center gap-1.5 border border-brand-gold/30 rounded-xl px-3.5 py-2 bg-brand-gold/5 hover:bg-brand-gold/10 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i> Load Demo
            </button>
            <button
              onClick={clearDraft}
              className="text-xs text-stone-500 hover:text-brand-obsidian flex items-center gap-1.5 border border-stone-200 rounded-xl px-3 py-2 bg-white hover:bg-stone-50 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="fa-regular fa-trash-can text-[10px]"></i> Clear
              Editor
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6 lg:overflow-hidden h-full">
        {/* Left Panel: Slide Editor & Theme Configuration (5 cols) */}
        <section className="lg:col-span-5 bg-white border border-stone-200/60 rounded-3xl flex flex-col shadow-[0_4px_20px_rgb(0,0,0,0.01)] overflow-hidden h-full">
          {/* Tabs header */}
          <div className="flex-shrink-0 flex border-b border-stone-150 bg-stone-50/50 sticky top-0 z-10">
            <button
              onClick={() => setActiveTab("editor")}
              className={`flex-1 py-3 px-2 text-center font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "editor"
                  ? "border-b-2 border-brand-gold text-brand-gold-dark bg-white"
                  : "text-stone-500 border-b-2 border-transparent hover:text-stone-850 hover:bg-stone-50"
              }`}
            >
              <i className="fa-solid fa-pen-nib"></i> Copy Edit
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`flex-1 py-3 px-2 text-center font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "design"
                  ? "border-b-2 border-brand-gold text-brand-gold-dark bg-white"
                  : "text-stone-500 border-b-2 border-transparent hover:text-stone-850 hover:bg-stone-50"
              }`}
            >
              <i className="fa-solid fa-palette"></i> Styles
            </button>
            <button
              onClick={() => setActiveTab("caption")}
              className={`flex-1 py-3 px-2 text-center font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "caption"
                  ? "border-b-2 border-brand-gold text-brand-gold-dark bg-white"
                  : "text-stone-500 border-b-2 border-transparent hover:text-stone-850 hover:bg-stone-50"
              }`}
            >
              <i className="fa-solid fa-comment-dots"></i> Caption
            </button>
            <button
              onClick={() => setActiveTab("import")}
              className={`flex-1 py-3 px-2 text-center font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "import"
                  ? "border-b-2 border-brand-gold text-brand-gold-dark bg-white"
                  : "text-stone-500 border-b-2 border-transparent hover:text-stone-850 hover:bg-stone-50"
              }`}
            >
              <i className="fa-solid fa-file-import"></i> JSON Import
            </button>
          </div>

          {/* Tab contents panel (SCROLLABLE) */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
            {/* Tab: EDITOR */}
            {activeTab === "editor" && (
              <div className="space-y-6">
                {/* Global Info Block */}
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/60 flex items-center justify-between">
                  <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                    Carousel Structure
                  </h3>
                  <span className="text-[9px] font-semibold text-brand-gold-dark bg-brand-gold/10 px-2 py-0.5 rounded-full border border-brand-gold/20">
                    {slides.length} / 10 slides
                  </span>
                </div>

                {/* Slides Form List */}
                <div className="space-y-4">
                  {slides.map((slide) => {
                    return (
                      <div
                        key={slide.id}
                        className="bg-white border border-stone-200/60 rounded-2xl p-4 shadow-[0_4px_15px_rgb(0,0,0,0.005)] space-y-3.5 relative"
                      >
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-stone-800">
                            {slide.title}
                          </label>
                          <div className="flex items-center gap-1.5">
                            {slide.isDark ? (
                              <span className="text-[8px] font-bold uppercase tracking-wider bg-brand-obsidian text-white px-2 py-0.5 rounded">
                                Dark Slide
                              </span>
                            ) : (
                              <span className="text-[8px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200">
                                Light Slide
                              </span>
                            )}
                            {slide.isCover ? (
                              <span className="text-[8px] font-bold uppercase tracking-wider bg-brand-gold/10 text-brand-gold-dark px-2 py-0.5 rounded border border-brand-gold/25">
                                Cover
                              </span>
                            ) : (
                              <button
                                onClick={() => deleteSlide(slide.id)}
                                className="text-stone-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                                title="Delete this slide"
                              >
                                <i className="fa-regular fa-trash-can text-sm"></i>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Slide Dark Mode Toggle */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-stone-400 font-bold">
                              Use Dark Theme:
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleSlideChange(
                                  slide.id,
                                  "isDark",
                                  !slide.isDark,
                                )
                              }
                              className={`relative inline-flex h-4 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                slide.isDark
                                  ? "bg-brand-obsidian"
                                  : "bg-stone-200"
                              }`}
                            >
                              <span
                                className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                  slide.isDark
                                    ? "translate-x-5"
                                    : "translate-x-0"
                                }`}
                              ></span>
                            </button>
                          </div>

                          {/* Text Alignment Selector (Except for Cover Heading) */}
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-stone-400 font-bold font-sans">
                              Text Align:
                            </span>
                            <div className="flex border border-stone-200 rounded-lg p-0.5 bg-brand-alabaster shadow-inner">
                              <button
                                type="button"
                                onClick={() =>
                                  handleSlideChange(
                                    slide.id,
                                    "textAlign",
                                    "left",
                                  )
                                }
                                className={`px-2 py-0.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                                  slide.textAlign === "left"
                                    ? "bg-brand-gold text-brand-obsidian shadow-sm"
                                    : "text-stone-500 hover:text-stone-850"
                                }`}
                              >
                                Left
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleSlideChange(
                                    slide.id,
                                    "textAlign",
                                    "center",
                                  )
                                }
                                className={`px-2 py-0.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                                  slide.textAlign === "center" ||
                                  !slide.textAlign
                                    ? "bg-brand-gold text-brand-obsidian shadow-sm"
                                    : "text-stone-500 hover:text-stone-850"
                                }`}
                              >
                                Center
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleSlideChange(
                                    slide.id,
                                    "textAlign",
                                    "right",
                                  )
                                }
                                className={`px-2 py-0.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                                  slide.textAlign === "right"
                                    ? "bg-brand-gold text-brand-obsidian shadow-sm"
                                    : "text-stone-500 hover:text-stone-850"
                                }`}
                              >
                                Right
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Arabic Input */}
                        <div className="space-y-1">
                          <span className="text-[9px] text-stone-400 font-bold block">
                            Arabic Heading (Optional)
                          </span>
                          <input
                            type="text"
                            value={slide.arabic || ""}
                            onChange={(e) =>
                              handleSlideChange(
                                slide.id,
                                "arabic",
                                e.target.value,
                              )
                            }
                            dir="rtl"
                            className="w-full text-sm font-amiri bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold text-right font-medium transition-all"
                          />
                        </div>

                        {/* Translation Input */}
                        <div className="space-y-1">
                          <span className="text-[9px] text-stone-400 font-bold block">
                            Translation / Quote (Optional)
                          </span>
                          <input
                            type="text"
                            value={slide.translation || ""}
                            onChange={(e) =>
                              handleSlideChange(
                                slide.id,
                                "translation",
                                e.target.value,
                              )
                            }
                            className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                          />
                        </div>

                        {/* Citation Input */}
                        <div className="space-y-1">
                          <span className="text-[9px] text-stone-400 font-bold block">
                            Citation Source (Optional)
                          </span>
                          <input
                            type="text"
                            value={slide.citation || ""}
                            onChange={(e) =>
                              handleSlideChange(
                                slide.id,
                                "citation",
                                e.target.value,
                              )
                            }
                            className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                            placeholder="e.g. QUR'AN 20 : 114"
                          />
                        </div>

                        {/* Body Thought Input */}
                        <div className="space-y-1">
                          <span className="text-[9px] text-stone-400 font-bold block">
                            Body Thought Block (Optional)
                          </span>
                          <textarea
                            rows={4}
                            value={slide.body || ""}
                            onChange={(e) =>
                              handleSlideChange(
                                slide.id,
                                "body",
                                e.target.value,
                              )
                            }
                            className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-playfair leading-relaxed transition-all"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Add New Slide Button */}
                <button
                  onClick={addSlide}
                  className="w-full py-4 border-2 border-dashed border-stone-200 hover:border-brand-gold/55 text-stone-500 hover:text-brand-gold-dark rounded-2xl flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer bg-stone-50/30 hover:bg-stone-50/50"
                >
                  <i className="fa-solid fa-plus-circle text-base"></i> Add New
                  Slide
                </button>
              </div>
            )}

            {/* Tab: DESIGN & STYLING */}
            {activeTab === "design" && (
              <div className="space-y-6">
                {/* Ratio Options */}
                <div>
                  <h3 className="font-bold text-stone-855 mb-2.5 text-xs uppercase tracking-wider">
                    Aspect Ratio
                  </h3>
                  <div className="grid grid-cols-2 gap-3.5">
                    <button
                      onClick={() => setAspectRatio("aspect-[4/5]")}
                      className={`py-3.5 px-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 font-bold transition-all cursor-pointer ${
                        aspectRatio === "aspect-[4/5]"
                          ? "border-2 border-brand-gold bg-brand-gold/5 text-brand-gold-dark shadow-sm"
                          : "border border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      <i className="fa-solid fa-mobile-screen-button text-base"></i>
                      <span className="text-xs">Portrait (4:5)</span>
                      <span
                        className={`text-[9px] font-normal ${aspectRatio === "aspect-[4/5]" ? "text-brand-gold" : "text-stone-400"}`}
                      >
                        Instagram Standard
                      </span>
                    </button>
                    <button
                      onClick={() => setAspectRatio("aspect-square")}
                      className={`py-3.5 px-4 rounded-2xl flex flex-col items-center justify-center gap-1.5 font-bold transition-all cursor-pointer ${
                        aspectRatio === "aspect-square"
                          ? "border-2 border-brand-gold bg-brand-gold/5 text-brand-gold-dark shadow-sm"
                          : "border border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      <i className="fa-solid fa-square text-base"></i>
                      <span className="text-xs">Square (1:1)</span>
                      <span
                        className={`text-[9px] font-normal ${aspectRatio === "aspect-square" ? "text-brand-gold" : "text-stone-400"}`}
                      >
                        Classic grid layout
                      </span>
                    </button>
                  </div>
                </div>

                {/* Theme Presets */}
                <div>
                  <h3 className="font-bold text-stone-855 mb-2.5 text-xs uppercase tracking-wider">
                    Theme Presets
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {/* Sand & Slate */}
                    <button
                      onClick={() => setSelectedTheme("sand-slate")}
                      className={`flex items-center justify-between p-3.5 border rounded-2xl transition-all text-left cursor-pointer ${
                        selectedTheme === "sand-slate"
                          ? "border-2 border-brand-gold bg-brand-gold/5 shadow-sm"
                          : "border-stone-200 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-stone-800">
                          Sacred Sands
                        </span>
                        <span className="text-[10px] text-stone-400 leading-normal block max-w-[240px] mt-0.5">
                          Warm cream light slides, soft black dark slides.
                          Elegant gold highlights.
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FCFBF7] border border-stone-200 shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#1C1A17] shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#C2974F] shadow-sm"></span>
                      </div>
                    </button>

                    {/* Emerald Devotion */}
                    <button
                      onClick={() => setSelectedTheme("emerald")}
                      className={`flex items-center justify-between p-3.5 border rounded-2xl transition-all text-left cursor-pointer ${
                        selectedTheme === "emerald"
                          ? "border-2 border-brand-gold bg-brand-gold/5 shadow-sm"
                          : "border-stone-200 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-stone-850">
                          Emerald Devotion
                        </span>
                        <span className="text-[10px] text-stone-400 leading-normal block max-w-[240px] mt-0.5">
                          Off-white soft pages, forest green dark pages. Sage
                          outlines.
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FAF9F5] border border-stone-200 shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#12241F] shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#8EA89C] shadow-sm"></span>
                      </div>
                    </button>

                    {/* Sage & Cream */}
                    <button
                      onClick={() => setSelectedTheme("sage-cream")}
                      className={`flex items-center justify-between p-3.5 border rounded-2xl transition-all text-left cursor-pointer ${
                        selectedTheme === "sage-cream"
                          ? "border-2 border-brand-gold bg-brand-gold/5 shadow-sm"
                          : "border-stone-200 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-stone-850">
                          Sage & Cream
                        </span>
                        <span className="text-[10px] text-stone-400 leading-normal block max-w-[240px] mt-0.5">
                          Soft cream light slides, ink black dark slides. Muted
                          sage green accents.
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#F5F0E6] border border-[#E8E0D0] shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#1A1A1A] shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#8A9A82] shadow-sm"></span>
                      </div>
                    </button>

                    {/* Minimalist Charcoal */}
                    <button
                      onClick={() => setSelectedTheme("charcoal")}
                      className={`flex items-center justify-between p-3.5 border rounded-2xl transition-all text-left cursor-pointer ${
                        selectedTheme === "charcoal"
                          ? "border-2 border-brand-gold bg-brand-gold/5 shadow-sm"
                          : "border-stone-200 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-stone-805">
                          Classic Ivory & Graphite
                        </span>
                        <span className="text-[10px] text-stone-400 leading-normal block max-w-[240px] mt-0.5">
                          Sleek contrasting stark-ivory light and minimalist
                          charcoal deep tones.
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FAFAFA] border border-stone-200 shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#18181B] shadow-sm"></span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#71717A] shadow-sm"></span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Mockup Branding Inputs */}
                <div className="space-y-3.5 pt-4 border-t border-stone-150">
                  <h3 className="font-bold text-stone-855 text-xs uppercase tracking-wider block">
                    Mockup Branding
                  </h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-stone-450 uppercase tracking-wide block">
                        Instagram Handle
                      </label>
                      <input
                        type="text"
                        value={instagramHandle}
                        onChange={(e) => setInstagramHandle(e.target.value)}
                        className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-stone-450 uppercase tracking-wide block">
                        Author Display Name
                      </label>
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-all"
                      />
                    </div>
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setInstagramHandle(
                            process.env.NEXT_PUBLIC_DEFAULT_INSTAGRAM_HANDLE ||
                              "@umar.journal",
                          );
                          setDisplayName(
                            process.env.NEXT_PUBLIC_DEFAULT_DISPLAY_NAME ||
                              "Mohammad Umar",
                          );
                          triggerToast("Reset branding to default");
                        }}
                        className="text-[10px] text-brand-gold-dark hover:text-brand-gold font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer bg-brand-gold/5 border border-brand-gold/25 hover:bg-brand-gold/10 px-3 py-1.5 rounded-lg"
                      >
                        <i className="fa-solid fa-rotate-left text-[9px]"></i>{" "}
                        Reset to Default Branding
                      </button>
                    </div>
                  </div>
                </div>

                {/* Overlays Visibility options */}
                <div className="space-y-3.5 pt-4 border-t border-stone-150">
                  <h3 className="font-bold text-stone-855 text-xs uppercase tracking-wider block">
                    Visual Elements
                  </h3>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-xs text-stone-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showUserOverlay}
                        onChange={(e) => setShowUserOverlay(e.target.checked)}
                        className="rounded accent-brand-gold border-stone-300 text-brand-gold focus:ring-brand-gold"
                      />
                      <span>Display Username Overlay</span>
                    </label>
                    <label className="flex items-center gap-2.5 text-xs text-stone-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showPaginationDots}
                        onChange={(e) =>
                          setShowPaginationDots(e.target.checked)
                        }
                        className="rounded accent-brand-gold border-stone-300 text-brand-gold focus:ring-brand-gold"
                      />
                      <span>Display Slider Dots</span>
                    </label>
                    <label className="flex items-center gap-2.5 text-xs text-stone-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showPageNumbers}
                        onChange={(e) => setShowPageNumbers(e.target.checked)}
                        className="rounded accent-brand-gold border-stone-300 text-brand-gold focus:ring-brand-gold"
                      />
                      <span>Display Page Numbers</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: CAPTION */}
            {activeTab === "caption" && (
              <div className="space-y-5">
                <div className="bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold text-brand-gold-dark mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-lightbulb"></i> Writing Strategy
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
                    Keep your captions reflective, matching the intimate,
                    personal voice of the slides. Avoid heavy lecturing. Use
                    line breaks to match the reading tempo of the slides.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    Edit Instagram Caption
                  </label>
                  <textarea
                    rows={12}
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write your caption here..."
                    className="w-full text-xs bg-brand-alabaster border border-stone-200/60 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold text-stone-800 leading-relaxed font-sans transition-all"
                  />
                </div>

                <button
                  onClick={copyCaption}
                  className="w-full bg-brand-obsidian hover:bg-stone-850 text-white font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <i className="fa-regular fa-copy"></i> Copy Caption & Hashtags
                </button>
              </div>
            )}

            {/* Tab: JSON IMPORT/EXPORT */}
            {activeTab === "import" && (
              <div className="space-y-6">
                {/* File Importer Dropzone */}
                <div className="border-2 border-dashed border-stone-200 hover:border-brand-gold/50 rounded-2xl p-6 text-center transition-colors cursor-pointer relative bg-stone-50/50">
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <i className="fa-solid fa-file-arrow-up text-stone-400 text-3xl mb-2"></i>
                  <p className="text-xs font-bold text-stone-750">
                    Upload JSON File
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1">
                    Select or drag a .json file containing post data
                  </p>
                </div>

                {/* Raw JSON Code Editor */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                      Raw JSON Editor
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={formatJSON}
                        className="text-[10px] font-bold text-brand-gold-dark hover:text-brand-gold transition-colors cursor-pointer"
                      >
                        Format
                      </button>
                      <button
                        onClick={copyJSONSchema}
                        className="text-[10px] font-bold text-stone-500 hover:text-stone-750 transition-colors cursor-pointer"
                      >
                        Copy Schema Example
                      </button>
                    </div>
                  </div>
                  <textarea
                    rows={10}
                    value={rawJSON}
                    onChange={(e) => setRawJSON(e.target.value)}
                    className="w-full text-xs font-mono bg-white text-brand-obsidian border border-stone-200/80 rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all leading-relaxed"
                    placeholder={JSON.stringify(jsonSchemaExample, null, 2)}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleImportJSON(rawJSON)}
                      className="flex-1 bg-brand-gold hover:bg-brand-gold-dark text-brand-obsidian font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Apply JSON Editor
                    </button>
                    <button
                      onClick={downloadJSON}
                      className="flex-1 bg-white border border-stone-250 hover:bg-stone-50 text-stone-750 font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <i className="fa-solid fa-download"></i> Export JSON
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Right Panel: Dynamic Instagram Live Carousel Mockup (7 cols) */}
        <section className="lg:col-span-7 flex flex-col items-center justify-center gap-5 h-full p-4 bg-stone-100/40 rounded-3xl border border-stone-200/50 overflow-hidden">
          {/* Preview Controls Bar */}
          <div className="w-full max-w-md flex items-center justify-between px-1">
            <span className="text-[9px] font-bold text-stone-400 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-sm"></span>
              Live Mockup
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200/80 w-8 h-8 rounded-full flex items-center justify-center shadow-sm active:scale-90 transition-all focus:outline-none cursor-pointer"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <span className="text-[10px] font-bold text-stone-500 bg-stone-200/40 rounded-full px-3 py-1">
                Slide {currentSlideIndex + 1} of {activeSlides.length}
              </span>
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200/80 w-8 h-8 rounded-full flex items-center justify-center shadow-sm active:scale-90 transition-all focus:outline-none cursor-pointer"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

          {/* Instagram Post Mockup Box */}
          <div className="w-full max-w-[400px] bg-white border border-stone-200/60 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all">
            {/* Instagram Header */}
            <div className="px-4 py-3.5 flex items-center justify-between border-b border-stone-50 bg-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-[1px]">
                    <div className="w-full h-full rounded-full bg-brand-obsidian text-[10px] text-brand-gold flex items-center justify-center font-bold font-amiri">
                      ب
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 tracking-tight flex items-center gap-1">
                    {instagramHandle.replace("@", "")}
                    <i className="fa-solid fa-circle-check text-blue-500 text-[10px]"></i>
                  </div>
                  <div className="text-[9px] text-stone-400">
                    Original Audio
                  </div>
                </div>
              </div>
              <button className="text-stone-400 hover:text-stone-750 transition-colors">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>

            {/* Slider Viewport */}
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full overflow-hidden bg-stone-50"
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <div
                className="flex"
                style={{
                  transform: getTransformStyle(),
                  transition: isDragging
                    ? "none"
                    : "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                {activeSlides.map((slide, idx) => {
                  const isDark = slide.isDark;
                  const themeSet = themes[selectedTheme];
                  const colors = isDark ? themeSet.dark : themeSet.light;
                  const alignmentClass =
                    slide.textAlign === "left"
                      ? "text-left"
                      : slide.textAlign === "right"
                        ? "text-right"
                        : "text-center";

                  // Replace line breaks with JSX elements
                  const formattedBody = slide.body
                    ? slide.body.split("\n").map((line, key) => (
                        <span key={key}>
                          {line}
                          <br />
                        </span>
                      ))
                    : null;

                  return (
                    <div
                      key={slide.id}
                      className={`w-full flex-shrink-0 relative ${aspectRatio} ${colors.bg} ${colors.text} p-8 flex flex-col justify-between select-none border-r border-stone-200/10 transition-all`}
                    >
                      {/* Header Overlays (all slides) */}
                      {showUserOverlay && (
                        <div className="absolute top-8 left-8 flex items-center gap-1.5 text-[8px] tracking-wider opacity-60 font-sans font-bold">
                          <span>{instagramHandle}</span>
                          <span className="opacity-35 font-normal">|</span>
                          <span className="opacity-55 font-normal">
                            {displayName}
                          </span>
                        </div>
                      )}

                      {/* Pagination slide numbering */}
                      {showPageNumbers && (
                        <span className="absolute bottom-8 right-8 text-[8px] font-bold tracking-wider opacity-60 font-sans">
                          {formatIndex(idx + 1)} /{" "}
                          {formatIndex(activeSlides.length)}
                        </span>
                      )}

                      {/* Main content - Centered layout */}
                      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4 px-2 my-8">
                        {slide.arabic && (
                          <h2
                            className={`font-amiri text-4xl leading-relaxed ${colors.highlight} font-normal text-center`}
                          >
                            {slide.arabic}
                          </h2>
                        )}

                        {slide.arabic && (slide.translation || slide.body) && (
                          <div
                            className={`w-8 h-[1.5px] ${colors.highlight} bg-current opacity-30 my-2 mx-auto`}
                          ></div>
                        )}

                        {slide.isCover ? (
                          <>
                            {slide.translation ? (
                              <p
                                className={`font-playfair text-xs md:text-sm italic leading-relaxed w-full max-w-[85%] ${alignmentClass}`}
                              >
                                {slide.translation}
                              </p>
                            ) : (
                              !slide.arabic &&
                              !slide.body && (
                                <span className="text-stone-400/40 italic text-[11px] font-sans">
                                  [Enter Cover Text]
                                </span>
                              )
                            )}
                            {slide.citation && (
                              <span
                                className={`text-[8px] font-bold tracking-widest uppercase opacity-60 pt-2 w-full max-w-[85%] ${colors.highlight} ${alignmentClass}`}
                              >
                                — {slide.citation}
                              </span>
                            )}
                          </>
                        ) : (
                          <>
                            {slide.translation && (
                              <p
                                className={`font-playfair text-xs italic leading-relaxed opacity-75 w-full max-w-[85%] ${alignmentClass}`}
                              >
                                {slide.translation}
                              </p>
                            )}
                            {formattedBody && (
                              <div
                                className={`font-playfair text-xs md:text-sm leading-relaxed font-light max-w-[90%] w-full ${alignmentClass}`}
                              >
                                {formattedBody}
                              </div>
                            )}
                            {slide.citation && (
                              <span
                                className={`text-[8px] font-bold tracking-widest uppercase opacity-60 pt-2 w-full max-w-[85%] ${colors.highlight} ${alignmentClass}`}
                              >
                                — {slide.citation}
                              </span>
                            )}
                            {!slide.arabic &&
                              !slide.translation &&
                              !slide.body && (
                                <span className="text-stone-400/40 italic text-[11px] font-sans">
                                  [Enter Slide Content]
                                </span>
                              )}
                          </>
                        )}
                      </div>

                      {/* SWIPE indicator on Cover footer */}
                      {slide.isCover && idx === 0 && (
                        <div className="absolute bottom-8 left-8 flex items-center justify-start">
                          <span className="text-[8px] uppercase font-bold tracking-widest text-brand-gold animate-pulse flex items-center gap-1">
                            Swipe left{" "}
                            <i className="fa-solid fa-arrow-right-long text-[9px]"></i>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instagram Footer Actions */}
            <div className="p-4 bg-white flex flex-col gap-2.5 border-t border-stone-50">
              <div className="flex items-center justify-between text-stone-700">
                <div className="flex items-center gap-4 text-lg">
                  <button className="hover:text-red-500 transition-colors cursor-pointer">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="hover:text-brand-gold-dark transition-colors cursor-pointer">
                    <i className="fa-regular fa-comment"></i>
                  </button>
                  <button className="hover:text-brand-obsidian transition-colors cursor-pointer">
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>

                {/* Simulated dots */}
                {showPaginationDots && (
                  <div className="flex gap-1 justify-center items-center">
                    {activeSlides.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentSlideIndex
                            ? "bg-brand-gold scale-125"
                            : "bg-stone-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                )}

                <div>
                  <button className="hover:text-brand-obsidian text-lg transition-colors cursor-pointer">
                    <i className="fa-regular fa-bookmark"></i>
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-stone-850 font-sans leading-none mt-1">
                Liked by <strong>faith_seekers</strong> and{" "}
                <strong>others</strong>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-stone-400 italic text-center max-w-xs font-sans">
            <i className="fa-solid fa-arrows-left-right mr-1"></i> Use
            drag/swipe gestures on the mockup image or navigation chevrons to
            browse slides.
          </p>
        </section>
      </main>

      {/* Floating Clipboard Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-brand-obsidian text-brand-alabaster px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 border border-stone-850 animate-bounce text-xs z-50">
          <i className="fa-solid fa-circle-check text-green-400"></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
