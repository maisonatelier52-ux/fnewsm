"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#141F3D] text-white mt-0 border-t border-blue-900">
      {/* Top Section: Newsletter Briefing */}
      <div className="border-b border-blue-900/50 py-8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-[#141F3D] px-2.5 py-1 mb-3 inline-block font-sans">
              Daily Newsletter
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
              Get The Morning Dispatch Delivered
            </h3>
            <p className="text-xs text-blue-100 font-medium leading-relaxed">
              Stay ahead with curated headlines, breaking news analysis, and deep-dive reporting directly to your inbox every weekday morning.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-auto flex-shrink-0">
            {subscribed ? (
              <div className="bg-blue-900 border border-blue-800 text-amber-200 px-6 py-3 rounded text-xs font-bold font-sans animate-fade-in">
                ✓ Thank you for subscribing to Domain Name Morning Dispatch!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 bg-[#0F172A] border border-blue-800/50 text-white text-xs px-4 py-3 outline-none focus:border-white transition-colors rounded-xs placeholder:text-blue-200 font-sans"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-[#141F3D] hover:bg-gray-100 font-bold uppercase text-xs tracking-wider px-6 py-3 transition-colors font-sans whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Middle Section: Links Navigation Grid */}
      <div className="py-10 border-b border-blue-900/50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1: Primary Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-sans border-b border-blue-900/50 pb-2">
              News Categories
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-200 font-medium">
              <li>
                <Link href="/" className="hover:underline decoration-1 underline-offset-2 transition-all">Home Edition</Link>
              </li>
              <li>
                <Link href="/world" className="hover:underline decoration-1 underline-offset-2 transition-all">World News</Link>
              </li>
              <li>
                <Link href="/us" className="hover:underline decoration-1 underline-offset-2 transition-all">U.S. National</Link>
              </li>
              <li>
                <Link href="/business" className="hover:underline decoration-1 underline-offset-2 transition-all">Business & Economy</Link>
              </li>
              <li>
                <Link href="/technology" className="hover:underline decoration-1 underline-offset-2 transition-all">Technology & Science</Link>
              </li>
              <li>
                <Link href="/entertainment" className="hover:underline decoration-1 underline-offset-2 transition-all">Culture & Entertainment</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Desks & Coverage */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-sans border-b border-blue-900 pb-2">
              Special Desks
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-200 font-medium">
              <li>
                <Link href="/world" className="hover:underline decoration-1 underline-offset-2 transition-all">Investigative Reports</Link>
              </li>
              <li>
                <Link href="/business" className="hover:underline decoration-1 underline-offset-2 transition-all">Financial Markets</Link>
              </li>
              <li>
                <Link href="/us" className="hover:underline decoration-1 underline-offset-2 transition-all">Policy & Politics</Link>
              </li>
              <li>
                <Link href="/technology" className="hover:underline decoration-1 underline-offset-2 transition-all">Artificial Intelligence</Link>
              </li>
              <li>
                <Link href="/world" className="hover:underline decoration-1 underline-offset-2 transition-all">Global Affairs</Link>
              </li>
              <li>
                <Link href="/entertainment" className="hover:underline decoration-1 underline-offset-2 transition-all">Opinion & Columns</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-sans border-b border-blue-900 pb-2">
              Organization
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-200 font-medium">
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">About Domain Name</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Masthead & Leadership</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Editorial Standards</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Newsroom Careers</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Press Inquiries</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Diversity & Inclusion</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 font-sans border-b border-blue-900 pb-2">
              Support & Legal
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-200 font-medium">
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Help & Contact Center</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Subscription Terms</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Cookie Preferences</a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-1 underline-offset-2 transition-all">Site Directory</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Branding & Copyright Bar */}
      <div className="py-6">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-blue-200">

          {/* Logo Brand Title */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
            </svg>
            <span className="text-xl font-serif font-black tracking-tight text-white uppercase">
              Domain Name
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center font-medium">
            <p>&copy; {new Date().getFullYear()} Domain Name Inc. All rights reserved.</p>
            {/* <p className="text-[10px] text-blue-300 mt-0.5">
              Independent News & Journalism • Est. 1924
            </p> */}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:underline decoration-1 underline-offset-2 transition-all focus:outline-none font-bold uppercase text-[10px] tracking-wider border border-blue-800 hover:border-blue-700 px-3 py-1.5 rounded-xs cursor-pointer"
          >
            <span>Back to top</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
