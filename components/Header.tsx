"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchArticle {
  category: string;
  title: string;
  slug: string;
  shortdescription?: string;
  date?: string;
  image?: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [allArticles, setAllArticles] = useState<SearchArticle[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(now.toLocaleDateString("en-US", options));
  }, []);

  // Fetch articles for live search indexing when search panel opens
  useEffect(() => {
    if (isSearchOpen && allArticles.length === 0) {
      const categories = ["world", "business", "us", "technology", "entertainment"];
      Promise.all(
        categories.map((cat) =>
          fetch(`/data/${cat}.json`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => [])
        )
      ).then((results) => {
        const merged = results.flat() as SearchArticle[];
        setAllArticles(merged);
      });
    }
  }, [isSearchOpen, allArticles.length]);

  const categories = [
    { name: "HOME", href: "/" },
    { name: "WORLD", href: "/world" },
    { name: "U.S.", href: "/us" },
    { name: "BUSINESS", href: "/business" },
    { name: "TECHNOLOGY", href: "/technology" },
    { name: "ENTERTAINMENT", href: "/entertainment" },
    { name: "OPINION", href: "/us" },
    { name: "CULTURE", href: "/entertainment" },
  ];

  const searchResults = searchQuery.trim() === ""
    ? []
    : allArticles.filter(
        (art) =>
          art.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.shortdescription?.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-xs mb-2 sm:mb-8">
      {/* ============================================================= */}
      {/* LAYER 1: Minimal Top Utility Bar (Date & Sunlight/Weather) */}
      {/* ============================================================= */}
      <div className="w-full border-b border-ink/10 bg-paper/90 backdrop-blur-md py-2 px-6 sm:px-10 lg:px-16 xl:px-24 text-[9px] sm:text-xs font-sans text-ink">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Date & Live Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-semibold text-ink/80 text-[9px] sm:text-[11px] uppercase tracking-wider font-sans">
              {currentDate || "Monday, August 10, 2026"}
            </span>
          </div>

          {/* Right: Sunlight / Weather Badge & Edition */}
          <div className="flex items-center gap-4 text-[9px] sm:text-[11px] font-sans">
            {/* Weather / Sunlight info */}
            <div className="flex items-center gap-1.5 text-gray-700 hover:text-ink transition-colors cursor-default">
              <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
              </svg>
              <span>New York</span>
              <span className="text-gray-300">•</span>
              <span className="font-semibold text-ink">74°F Sunny</span>
            </div>

            <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-widest text-gray-500 border-l border-ink/10 pl-4">
              Standard Edition
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* LAYER 2: Main Header Bar (Logo, Minimal Category Nav, Search) */}
      {/* ============================================================= */}
      <div className="w-full bg-paper/95 backdrop-blur-md border-b border-ink/10 py-3.5 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-6">
          
          {/* Left: Logo */}
          <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-950 text-white rounded flex items-center justify-center shadow-2xs group-hover:bg-blue-800 transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 3L2 21h20L12 3zm0 4.5l6.5 11.5h-13L12 7.5z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-serif font-black tracking-tight text-blue-950 uppercase group-hover:text-blue-800 transition-colors whitespace-nowrap">
              DOMAIN NAME
            </span>
          </Link>

          {/* Center: Minimal & Elegant Category Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 font-sans flex-1 justify-center px-4">
            {categories.map((cat) => {
              const isActive = pathname === cat.href;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`relative group py-1 px-2.5 text-xs tracking-[0.16em] uppercase font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-ink font-black"
                      : "text-ink/65 hover:text-ink"
                  }`}
                >
                  <span className="relative z-10">{cat.name}</span>

                  {/* Minimal Subtle Underline Effect */}
                  {isActive ? (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-ink rounded-full"></span>
                  ) : (
                    <span className="absolute bottom-0 left-1/2 right-1/2 h-[1.5px] bg-ink/40 group-hover:left-2.5 group-hover:right-2.5 transition-all duration-300"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search Icon Trigger & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isSearchOpen
                    ? "bg-blue-950 text-white"
                    : "text-ink hover:bg-black/5"
                }`}
                aria-label="Toggle Search"
                title="Search headlines"
              >
                {isSearchOpen ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>

              {/* Search Dropdown Panel */}
              {isSearchOpen && (
                <div className="absolute right-0 top-12 z-50 w-72 sm:w-96 md:w-[440px] bg-paper/95 backdrop-blur-md border border-ink/10 shadow-2xl p-4 rounded-xl animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-ink/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-700 font-sans">
                      Search Headlines & News
                    </span>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="p-1 text-gray-500 hover:text-red-700 transition-colors rounded-full hover:bg-black/5"
                      aria-label="Close Search Panel"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center border border-ink/10 bg-white px-3 py-2 rounded-lg mb-3 shadow-inner">
                    <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Type keywords to search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs outline-none bg-transparent text-ink placeholder:text-gray-400 font-sans"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-gray-400 hover:text-ink ml-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto divide-y divide-ink/10 border-t border-ink/10">
                    {searchQuery.trim() !== "" ? (
                      searchResults.length > 0 ? (
                        searchResults.map((article) => (
                          <Link
                            key={`${article.category}-${article.slug}`}
                            href={`/${article.category}/${article.slug}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="group p-3 flex flex-col gap-1 hover:bg-black/5 transition-colors block text-left"
                          >
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="bg-ink text-paper px-1.5 py-0.5 font-bold uppercase tracking-widest rounded-xs font-sans">
                                {article.category}
                              </span>
                              {article.date && (
                                <span className="text-gray-500 font-sans">{article.date}</span>
                              )}
                            </div>
                            <h5 className="text-xs font-serif font-bold text-ink group-hover:text-red-700 transition-colors leading-snug">
                              {article.title}
                            </h5>
                          </Link>
                        ))
                      ) : (
                        <div className="p-4 text-center text-xs text-gray-500 font-sans">
                          No news articles found for &quot;{searchQuery}&quot;.
                        </div>
                      )
                    ) : (
                      <div className="p-3 text-xs text-gray-500 font-sans">
                        <p className="font-semibold text-ink mb-2">Popular Topics:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {["Technology", "Markets", "Climate", "World", "US"].map((topic) => (
                            <button
                              key={topic}
                              type="button"
                              onClick={() => setSearchQuery(topic)}
                              className="bg-black/5 hover:bg-black/10 px-2.5 py-1 rounded-full text-[11px] text-ink font-medium transition-colors"
                            >
                              {topic}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-ink hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Open Mobile Navigation Menu"
            >
              <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Slide-out Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in">
          <div className="w-4/5 max-w-sm bg-paper h-full shadow-2xl flex flex-col p-6 overflow-y-auto border-l border-divider">
            <div className="flex items-center justify-between pb-4 border-b border-divider mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#141F3D] text-white rounded flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 3L2 21h20L12 3zm0 4.5l6.5 11.5h-13L12 7.5z" />
                  </svg>
                </div>
                <span className="font-serif font-black text-lg uppercase tracking-tight text-[#141F3D]">DOMAIN NAME</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Close Menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 font-sans px-2">
                Categories
              </p>
              {categories.map((cat) => {
                const isActive = pathname === cat.href;
                return (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-sans font-bold transition-all py-2 px-3 rounded-lg flex items-center justify-between ${
                      isActive ? "bg-[#141F3D] text-white shadow-xs" : "text-[#141F3D] hover:bg-[#141F3D]/5"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-paper"></span>}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto border-t border-divider pt-4 text-xs text-gray-600 font-sans">
              <p className="font-semibold text-[#141F3D] mb-1">{currentDate || "Monday, August 10, 2026"}</p>
              <p className="text-[11px] text-gray-500">New York 74°F • Sunny</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


