import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Domain Name",
  description: "Learn about Domain Name's legacy, independent newsroom values, and journalism mission.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Independent Journalism • Est. 1924
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          About Us
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Dedicated to objective, fearless, and authoritative news reporting worldwide.
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        {/* Lead Section */}
        <section className="border-b border-ink/20 pb-8">
          <p className="text-lg md:text-xl font-serif italic text-ink text-justify leading-relaxed">
            &ldquo;Domain Name was founded on the belief that a free, vigilant, and independent press is essential to a healthy society and informed citizenship.&rdquo;
          </p>
        </section>

        {/* Section 1 */}
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Our Foundation & History
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            A Century of Newsroom Integrity
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Established as a daily broadsheet in 1924, Domain Name has evolved into a global digital publication read by millions. Throughout decades of economic transformations, technological revolutions, and global geopolitical shifts, our commitment to rigorous investigative reporting remains unyielding.
          </p>
        </section>

        {/* Section 2 */}
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Global Bureaus & Reporting Standards
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Worldwide Bureau Network
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Our correspondents operate across major financial capitals and global news hubs, including London, Washington D.C., New York, Paris, Geneva, and San Francisco. We adhere strictly to verified primary-source journalism, multi-tiered copy editing, and independent editorial oversight.
          </p>
        </section>

        {/* Section 3 */}
        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Our Commitment to Readers
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Unsponsored & Objective Coverage
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name maintains complete separation between our newsroom and commercial sponsors. We publish without corporate influence or political bias, prioritizing truth and clarity in every dispatch.
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
