import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Domain Name",
  description: "Learn how Domain Name protects reader privacy, handles data, and manages telemetry.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Reader Protection & Data Governance
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Last Updated: August 2026 • Domain Name Inc.
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 1.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Information Collection & Usage
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name collects minimal personal data required to deliver news dispatches, manage digital subscriptions, and maintain website security. When you subscribe to our Morning Dispatch newsletter, we store your email address securely and strictly for newsletter distribution.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 2.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            No Data Broker Sales Guarantee
          </h2>
          <p className="text-sm sm:text-base text-justify">
            We do NOT sell, rent, or trade reader personal information, browsing history, or subscriber lists to external data brokers or advertising networks. Your privacy as a reader is essential to our independent reporting mission.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 3.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Cookies & Local Telemetry Controls
          </h2>
          <p className="text-sm sm:text-base text-justify">
            We use essential cookies to maintain session states and anonymous performance telemetry to measure article readership. Readers may manage or opt out of non-essential cookies via our <Link href="/cookie-policy" className="text-blue-950 font-bold underline font-sans">Cookie Preferences</Link> page.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 4.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Reader Rights & Privacy Contact
          </h2>
          <p className="text-sm sm:text-base text-justify">
            You have the right to request access, correction, or deletion of your personal subscriber data at any time. For privacy requests, contact our Data Privacy Officer at <span className="font-semibold text-blue-950 font-sans">privacy@domainname.com</span>.
          </p>
        </section>
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
