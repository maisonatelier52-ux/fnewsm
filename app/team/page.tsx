import Link from "next/link";
import { Metadata } from "next";
import { slugifyAuthor } from "@/lib/api";

export const metadata: Metadata = {
  title: "Our Team & Masthead | Domain Name",
  description: "Meet the editorial leadership, bureau chiefs, and correspondents of Domain Name.",
};

const executiveBoard = [
  { title: "Publisher & Chairman", name: "Arthur Vance Sterling" },
  { title: "Editor-in-Chief", name: "Eleanor Vance-Rutherford" },
  { title: "Managing Editor", name: "Marcus Thorne" },
  { title: "Editorial Page Editor", name: "Dr. Evelyn Hart" },
];

const correspondents = [
  {
    name: "Sarah Jenkins",
    role: "Chief Political Correspondent",
    bureau: "Washington, D.C. Bureau",
    bio: "Veteran Capitol Hill reporter covering Congressional legislation, presidential policy, and national elections.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Elena Rostova",
    role: "Senior Foreign Correspondent",
    bureau: "London Bureau",
    bio: "Reporting on European diplomacy, geopolitical conflicts, and energy security across continental Europe.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "David Miller",
    role: "Financial Desk Editor",
    bureau: "New York Desk",
    bio: "Dissecting Wall Street markets, Federal Reserve policy, trade dynamics, and corporate governance.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Michael Chang",
    role: "Technology & AI Bureau Chief",
    bureau: "San Francisco Bureau",
    bio: "Specializing in artificial intelligence research, semiconductor supply chains, and Silicon Valley regulation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Ramon T. Maris",
    role: "Culture & Arts Critic",
    bureau: "Paris Bureau",
    bio: "Essayist covering international cinema, contemporary art exhibitions, and literary reviews.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Jean-Pierre Dubois",
    role: "European Economics Correspondent",
    bureau: "Geneva Bureau",
    bio: "Tracking Eurozone monetary decisions, central banking, and international trade agreements.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Kenji Sato",
    role: "Asia-Pacific Affairs Reporter",
    bureau: "Tokyo Desk",
    bio: "Reporting on East Asian economic policy, supply chain logistics, and technological innovation.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Amara Diallo",
    role: "Global Health & Science Correspondent",
    bureau: "Nairobi Bureau",
    bio: "Covering environmental research, climate policy, public health initiatives, and scientific breakthroughs.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Organization & Editorial Leadership
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Our Team & Masthead
        </h1>
        <p className="text-xs font-sans text-ink/70 mt-2 max-w-2xl mx-auto">
          The editors, correspondents, and bureau chiefs behind Domain Name news reporting.
        </p>
      </div>

      {/* Editorial Mission Statement Box */}
      <div className="border-2 border-ink p-6 md:p-8 mb-12 bg-stone-50/60 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-4 text-xs font-serif font-bold uppercase tracking-widest text-ink border border-ink/40">
          Newsroom Creed
        </div>
        <p className="font-serif text-base md:text-lg italic text-ink/90 leading-relaxed text-center max-w-4xl mx-auto">
          &ldquo;To report the news without fear or favor, to preserve the independence of our press, and to serve the public interest with rigorous standards of truth, balance, and investigative integrity.&rdquo;
        </p>
      </div>

      {/* Executive Leadership Grid */}
      <section className="mb-14">
        <h2 className="text-xl font-serif font-bold uppercase border-b-2 border-ink pb-2 mb-6 text-ink">
          Executive Editorial Directorate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveBoard.map((person) => (
            <div key={person.name} className="border border-ink/20 p-5 bg-white shadow-2xs hover:border-ink transition-colors">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-red-900 block mb-1">
                {person.title}
              </span>
              <h3 className="text-lg font-serif font-bold text-ink mb-1">
                {person.name}
              </h3>
              <p className="text-xs font-sans text-ink/60">
                Senior Directorate
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Correspondents Grid with Clickable Links */}
      <section className="mb-14">
        <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-6">
          <h2 className="text-xl font-serif font-bold uppercase text-ink">
            Senior Correspondents & Bureau Chiefs
          </h2>
          <span className="text-xs font-sans text-ink/60 font-semibold">
            Click any correspondent to view their full articles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {correspondents.map((author) => {
            const slug = slugifyAuthor(author.name);
            return (
              <Link
                key={slug}
                href={`/author/${slug}`}
                className="group border border-ink/20 p-5 bg-white hover:border-ink transition-all shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-14 h-14 rounded-full object-cover border border-ink/20 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-red-900 block">
                        {author.bureau}
                      </span>
                      <h3 className="text-base font-serif font-bold text-ink group-hover:text-blue-950 transition-colors">
                        {author.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs font-sans font-bold text-blue-950 mb-2">
                    {author.role}
                  </p>

                  <p className="text-xs font-serif text-ink/80 leading-relaxed italic line-clamp-3 mb-4">
                    &ldquo;{author.bio}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-sans font-bold text-ink group-hover:underline">
                  <span>View Articles & Bio</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Return Link */}
      <div className="mt-14 pt-8 border-t-2 border-ink text-center">
        <Link href="/" className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-ink hover:underline border-b border-ink">
          ← Return to Front Page
        </Link>
      </div>
    </div>
  );
}
