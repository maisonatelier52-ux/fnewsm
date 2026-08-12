import { getArticlesByCategory } from "@/lib/api";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default async function EditorsSpotlight() {
  const techArticles = await getArticlesByCategory("technology");
  const businessArticles = await getArticlesByCategory("business");
  const usArticles = await getArticlesByCategory("us");
  const entArticles = await getArticlesByCategory("entertainment");

  const featured = techArticles[0] || businessArticles[0];
  const listArticles = [
    businessArticles[0],
    usArticles[0],
    entArticles[0],
    techArticles[1] || businessArticles[1],
  ].filter(Boolean);

  if (!featured) return null;

  return (
    <section className="mt-8 border-t-2 border-ink pt-6">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4 border-b border-divider pb-3">
        <h2 className="text-2xl md:text-3xl font-black font-serif border-b-2 border-ink pb-1">
          Editor's Spotlight
        </h2>
        <span className="text-xs uppercase font-sans tracking-widest text-gray-600 font-bold hidden sm:inline">
          Curated Analysis & In-Depth Reads
        </span>
      </div>

      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Featured Big Card (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between animate-on-scroll">
          <Link href={`/${featured.category}/${featured.slug}`} className="group block">
            <div className="relative w-full aspect-[16/9] bg-gray-200 mb-4 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-ink text-paper text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                Must Read
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5 font-sans">
              <span className="text-ink">{featured.category}</span>
              <span>•</span>
              <span>{featured.date}</span>
              <span>•</span>
              <span className="highlight-yellow">6 Min Read</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-serif font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-2 transition-all">
              {featured.title}
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-gray-800 font-medium mb-4">
              {featured.shortdescription}
            </p>

            <div className="flex items-center gap-3 border-t border-divider pt-3">
              {featured.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.author.image}
                  alt={featured.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p className="text-xs font-bold">{featured.author?.name || "Editorial Board"}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  {featured.author?.role || "Senior Editor"}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Numbered List (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-divider lg:pl-6 pt-6 lg:pt-0">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 font-sans text-gray-500">
            Top Editorial Picks
          </h3>

          <div className="flex flex-col gap-4">
            {listArticles.map((article, idx) => {
              if (!article) return null;
              const formattedNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={article.slug}
                  className="animate-on-scroll group pb-4 border-b border-divider last:border-0 last:pb-0"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  <Link href={`/${article.category}/${article.slug}`} className="flex gap-4 items-start">
                    <span className="text-3xl md:text-4xl font-serif font-black text-gray-400 group-hover:text-ink transition-colors duration-300">
                      {formattedNum}
                    </span>

                    <div className="flex-grow">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1 font-sans">
                        {article.category}
                      </span>
                      <h4 className="text-base md:text-lg font-serif font-bold leading-snug group-hover:underline decoration-1 underline-offset-2 transition-all">
                        {article.title}
                      </h4>
                      <p className="text-[11px] text-gray-600 font-medium mt-1.5">
                        By {article.author?.name || "The Daily Staff"}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
