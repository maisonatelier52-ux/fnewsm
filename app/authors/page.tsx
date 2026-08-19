import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authors & Correspondents | Domain Name",
  description: "Directory of Domain Name correspondents, investigative reporters, and columnists.",
};

const authorsList = [
  {
    name: "Julian Mercer",
    role: "Senior Foreign Correspondent",
    beat: "World News & European Affairs",
    location: "London",
    bio: "Covering European policy, geopolitical conflicts, and international summits for over 15 years.",
    slug: "julian-mercer"
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Political Correspondent",
    beat: "U.S. Politics & Federal Policy",
    location: "Washington, D.C.",
    bio: "Veteran Capitol Hill reporter specializing in Congressional legislation, elections, and national security.",
    slug: "sarah-jenkins"
  },
  {
    name: "David Sterling Jr.",
    role: "Senior Financial Columnist",
    beat: "Global Markets & Macroeconomics",
    location: "New York",
    bio: "Former Wall Street analyst dissecting monetary policy, global trade dynamics, and market turbulence.",
    slug: "david-sterling"
  },
  {
    name: "Dr. Aris Thorne",
    role: "Technology & AI Bureau Chief",
    beat: "Artificial Intelligence & Semiconductors",
    location: "San Francisco",
    bio: "Doctorate in Computer Science focused on deep tech regulation, frontier models, and Silicon Valley strategy.",
    slug: "aris-thorne"
  },
  {
    name: "Helena Rostova",
    role: "Culture & Arts Critic",
    beat: "Visual Arts, Literature & Cinema",
    location: "Paris",
    bio: "Award-winning essayist reporting on global cultural movements, architectural heritage, and film festivals.",
    slug: "helena-rostova"
  },
  {
    name: "Raymond Cross",
    role: "Lead Investigative Reporter",
    beat: "Corporate Misconduct & Special Reports",
    location: "New York",
    bio: "Pulitzer-nominated investigative journalist focusing on financial fraud, whistleblower revelations, and governance.",
    slug: "raymond-cross"
  },
  {
    name: "Elena Rostova-Vance",
    role: "Climate & Science Reporter",
    beat: "Environmental Policy & Energy Transition",
    location: "Geneva",
    bio: "Specializing in climate science, renewable infrastructure investments, and international environmental treaties.",
    slug: "elena-vance"
  },
  {
    name: "Marcus Vance",
    role: "Senior Economics Correspondent",
    beat: "Labor Markets & Central Banking",
    location: "Chicago",
    bio: "Tracking central bank policy decisions, supply chain logistics, and global labor dynamics.",
    slug: "marcus-vance"
  }
];

export default function AuthorsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Directory & Index
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Authors & Correspondents
        </h1>
        <p className="text-xs font-sans text-ink/70 mt-2 max-w-2xl mx-auto">
          Meet our worldwide roster of journalists, columnists, and investigative reporters dedicated to delivering authoritative reporting.
        </p>
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {authorsList.map((author) => (
          <div
            key={author.slug}
            className="border border-ink/20 p-6 bg-white flex flex-col justify-between hover:border-ink transition-colors shadow-2xs group"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-red-900 mb-2">
                <span>{author.location} Bureau</span>
                <span className="bg-ink/5 px-2 py-0.5 rounded border border-ink/10 text-ink">{author.beat.split("&")[0]}</span>
              </div>
              
              <h2 className="text-xl font-serif font-bold text-ink group-hover:text-blue-950 transition-colors mb-1">
                {author.name}
              </h2>
              
              <p className="text-xs font-sans font-semibold text-ink/70 mb-3">
                {author.role}
              </p>
              
              <p className="text-xs font-serif text-ink/80 leading-relaxed italic mb-4">
                &ldquo;{author.bio}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-[11px] font-sans">
              <span className="text-ink/60">Beat: {author.beat}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-14 pt-8 border-t-2 border-ink text-center">
        <p className="text-xs font-sans text-ink/70 mb-4">
          Looking for a specific correspondent or article archive? Contact our Newsroom Index desk.
        </p>
        <Link href="/" className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-ink hover:underline border-b border-ink">
          ← Return to Front Page
        </Link>
      </div>
    </div>
  );
}
