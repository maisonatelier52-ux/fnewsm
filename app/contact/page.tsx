"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Newsroom Tip Desk",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Banner Header */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Editorial Communication Desk
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Contact Us & News Desk
        </h1>
        <p className="text-xs font-sans text-ink/70 mt-2 max-w-2xl mx-auto">
          Get in touch with our newsroom editors, submit news tips, send letters to the editor, or report technical website issues.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Department Directory (NO ADDRESS DETAILS) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-2 border-ink p-6 bg-stone-50/60">
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider text-ink border-b border-ink/30 pb-3 mb-4">
              Newsroom Contacts
            </h2>

            <div className="space-y-4 text-xs font-sans">
              <div>
                <span className="font-bold uppercase tracking-wider text-red-900 block mb-0.5">
                  Breaking News Tips
                </span>
                <p className="text-ink/80 mb-1">For time-sensitive news alerts and confidential pitches:</p>
                <a href="mailto:newstips@domainname.com" className="font-semibold text-blue-950 hover:underline">
                  newstips@domainname.com
                </a>
              </div>

              <div className="border-t border-ink/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-ink block mb-0.5">
                  Letters to the Editor
                </span>
                <p className="text-ink/80 mb-1">For publication feedback and opinion responses:</p>
                <a href="mailto:letters@domainname.com" className="font-semibold text-blue-950 hover:underline">
                  letters@domainname.com
                </a>
              </div>

              <div className="border-t border-ink/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-ink block mb-0.5">
                  Corrections & Fact-Check Desk
                </span>
                <p className="text-ink/80 mb-1">To report factual errors or request story updates:</p>
                <a href="mailto:corrections@domainname.com" className="font-semibold text-blue-950 hover:underline">
                  corrections@domainname.com
                </a>
              </div>

              <div className="border-t border-ink/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-ink block mb-0.5">
                  Subscription & Technical Support
                </span>
                <p className="text-ink/80 mb-1">For digital account access and newsletter delivery:</p>
                <a href="mailto:support@domainname.com" className="font-semibold text-blue-950 hover:underline">
                  support@domainname.com
                </a>
              </div>

              <div className="border-t border-ink/10 pt-3">
                <span className="font-bold uppercase tracking-wider text-ink block mb-0.5">
                  Syndication & Content Licensing
                </span>
                <a href="mailto:syndication@domainname.com" className="font-semibold text-blue-950 hover:underline">
                  syndication@domainname.com
                </a>
              </div>
            </div>
          </div>

          <div className="border border-ink/20 p-5 bg-white text-xs font-sans text-ink/75 leading-relaxed">
            <span className="font-bold text-ink block mb-1">Note on Confidential Sources:</span>
            If you possess sensitive documents or high-risk whistleblower material, please use our dedicated <Link href="/whistleblower" className="text-blue-950 font-bold underline">Whistleblower Protection Drop</Link> for end-to-end encrypted submission.
          </div>
        </div>

        {/* Right Column: Contact & Tip Form */}
        <div className="lg:col-span-7 border-2 border-ink p-6 md:p-8 bg-white">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider text-ink mb-1">
            Send a Message to the Editors
          </h2>
          <p className="text-xs font-sans text-ink/70 mb-6">
            Fill out the form below. Messages are routed directly to the appropriate desk editor.
          </p>

          {submitted ? (
            <div className="bg-stone-50 border-2 border-ink p-6 text-center animate-fade-in my-8">
              <span className="text-xl font-serif font-bold text-ink block mb-2">
                ✓ Message Received
              </span>
              <p className="text-xs font-sans text-ink/80 leading-relaxed max-w-md mx-auto">
                Thank you for contacting the Domain Name newsroom. Your inquiry has been forwarded to the {formData.department}. If your submission requires editorial action, a reporter will follow up promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-sans font-bold uppercase tracking-wider underline text-ink cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-ink mb-1">
                    Your Name (Optional for Tips)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Jane Doe"
                    className="w-full border border-ink/30 p-3 outline-none focus:border-ink bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-ink mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., jane@example.com"
                    className="w-full border border-ink/30 p-3 outline-none focus:border-ink bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-ink mb-1">
                  Target Department
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full border border-ink/30 p-3 outline-none focus:border-ink bg-stone-50/50 cursor-pointer font-sans"
                >
                  <option value="Newsroom Tip Desk">Newsroom Tip Desk</option>
                  <option value="Letters to the Editor">Letters to the Editor</option>
                  <option value="Corrections Desk">Corrections & Fact-Checking Desk</option>
                  <option value="Subscription Support">Subscription & Member Services</option>
                  <option value="Technical Website Desk">Technical Website Desk</option>
                </select>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-ink mb-1">
                  Subject / Story Headline
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief summary of your inquiry..."
                  className="w-full border border-ink/30 p-3 outline-none focus:border-ink bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-ink mb-1">
                  Message / News Tip Details *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide complete context, timeline, or relevant details for our editors..."
                  className="w-full border border-ink/30 p-3 outline-none focus:border-ink bg-stone-50/50 font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-ink text-white font-bold uppercase tracking-widest text-xs px-8 py-3.5 hover:bg-blue-950 transition-colors cursor-pointer"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Return Link */}
      <div className="mt-14 pt-8 border-t-2 border-ink text-center">
        <Link href="/" className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-ink hover:underline border-b border-ink">
          ← Return to Front Page
        </Link>
      </div>
    </div>
  );
}
