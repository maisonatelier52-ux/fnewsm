import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Domain Name",
  description: "Find answers to frequently asked questions about Domain Name subscriptions, newsletters, and newsroom policies.",
};

const faqItems = [
  {
    question: "How do I subscribe to the Morning Dispatch newsletter?",
    answer: "You can subscribe by entering your email address in the newsletter form located in the footer of any page. Morning Dispatch is delivered every weekday morning free of charge.",
  },
  {
    question: "How can I submit a news tip or story pitch to the newsroom?",
    answer: "You can submit news tips via our Contact page or email newstips@domainname.com. For high-risk or confidential document leaks, please review our Whistleblower protection guidelines.",
  },
  {
    question: "What is Domain Name's policy on factual corrections?",
    answer: "We promptly correct errors of fact when brought to our attention. Corrections are clearly noted on the article page detailing what was updated. Email corrections@domainname.com to notify our editors.",
  },
  {
    question: "Can I republish Domain Name articles or infographics?",
    answer: "Commercial republication, syndication, or automated scraping requires prior written authorization. Contact syndication@domainname.com for licensing terms.",
  },
  {
    question: "How do I contact a specific reporter or desk editor?",
    answer: "Direct desk emails are listed on our Contact page. General inquiries are routed by our news desk to the appropriate correspondent.",
  },
  {
    question: "Are Domain Name news articles written by AI?",
    answer: "No. All reporting, investigative analysis, and opinion columns are written, reported, and fact-checked by human journalists in accordance with our Editorial Policy.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Reader Help & Information Center
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Quick answers to common questions about Domain Name services and policies.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto mb-14">
        {faqItems.map((item, idx) => (
          <div key={idx} className="border-2 border-ink p-6 bg-stone-50/50">
            <h2 className="text-lg font-serif font-bold text-ink mb-2">
              Q: {item.question}
            </h2>
            <p className="text-xs sm:text-sm font-serif text-ink/85 leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Direct Contact Box */}
      <div className="border border-ink/30 p-6 bg-white text-center max-w-2xl mx-auto">
        <h3 className="text-base font-serif font-bold uppercase text-ink mb-2">
          Have a question not answered here?
        </h3>
        <p className="text-xs font-sans text-ink/75 leading-relaxed mb-4">
          Our reader support desk is available to assist you with digital access or newsroom inquiries.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-ink text-white font-sans font-bold uppercase text-xs tracking-wider px-6 py-2.5 hover:bg-blue-950 transition-colors"
        >
          Contact News Desk
        </Link>
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
