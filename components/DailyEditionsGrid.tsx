import { getArticlesByCategory } from "@/lib/api";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default async function DailyEditionsGrid() {
  const techArticles = await getArticlesByCategory("technology");
  const businessArticles = await getArticlesByCategory("business");
  const usArticles = await getArticlesByCategory("us");
  const entArticles = await getArticlesByCategory("entertainment");
  const worldArticles = await getArticlesByCategory("world");

  const coverArticle = techArticles[0] || businessArticles[0];
  
  // 4 curated fast read articles with descriptions
  const fastReads = [
    businessArticles[0],
    usArticles[0],
    entArticles[0],
    techArticles[1] || worldArticles[1],
  ].filter(Boolean);

  const sideNewsArticles = [
    worldArticles[0],
    businessArticles[1] || usArticles[1],
  ].filter(Boolean);

  if (!coverArticle) return null;

  return (
    <section className="mt-8 border-t-2 border-ink pt-6 pb-4">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4 border-b border-divider pb-3">
        <h2 className="text-2xl md:text-3xl font-black font-serif">
          Global News & Special Reports
        </h2>
        <span className="text-xs uppercase font-sans tracking-widest text-gray-600 font-bold hidden sm:inline">
          WORLD NEWS DESK
        </span>
      </div>

      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* COL 1: Broadsheet Cover Story (4 Cols) - Border Removed */}
        <div className="lg:col-span-4 flex flex-col animate-on-scroll" style={{ animationDelay: "0ms" }}>
          <div className="flex-grow flex flex-col justify-between">
            <Link href={`/${coverArticle.category}/${coverArticle.slug}`} className="group block">
              <div className="flex justify-between items-center mb-3 border-b border-divider pb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-ink text-paper px-2.5 py-1 font-sans">
                  SPECIAL REPORT • FEATURED STORY
                </span>
                <span className="text-[11px] font-bold text-gray-600 font-sans">In-Depth News</span>
              </div>

              <div className="w-full aspect-[4/3] bg-gray-200 mb-4 overflow-hidden border border-divider">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverArticle.image}
                  alt={coverArticle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-2.5 group-hover:underline decoration-1 underline-offset-2 transition-all">
                {coverArticle.title}
              </h3>

              <p className="text-sm text-gray-800 font-medium leading-relaxed mb-4">
                {coverArticle.shortdescription}
              </p>
            </Link>

            <div className="border-t border-divider pt-3 mt-3 flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-600 font-sans">8 Min Comprehensive Analysis</span>
              <Link
                href={`/${coverArticle.category}/${coverArticle.slug}`}
                className="text-xs font-bold uppercase tracking-wider bg-ink text-paper px-3 py-1.5 hover:bg-gray-800 transition-colors font-sans"
              >
                Read Full Story →
              </Link>
            </div>
          </div>
        </div>

        {/* COL 2: Horizontal Fast Reads with Descriptions (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between animate-on-scroll" style={{ animationDelay: "200ms" }}>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-4 font-sans">
              Essential News Briefings
            </span>

            <div className="flex flex-col gap-4">
              {fastReads.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className="group flex gap-4 items-start pb-4 border-b border-divider last:border-0 last:pb-0"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-24 bg-gray-200 flex-shrink-0 overflow-hidden border border-divider">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1 font-sans">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-ink bg-gray-200 px-1.5 py-0.5">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium">• 4 Min Read</span>
                    </div>

                    <h4 className="text-base font-serif font-bold leading-snug group-hover:underline decoration-1 underline-offset-2 transition-all">
                      {article.title}
                    </h4>

                    <p className="text-xs text-gray-700 font-medium line-clamp-2 mt-1 leading-relaxed">
                      {article.shortdescription}
                    </p>

                    <p className="text-[11px] text-gray-600 font-semibold mt-1.5">
                      By {article.author?.name || "Senior Reporter"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* COL 3: Top News Column (3 Cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-divider lg:pl-6 pt-6 lg:pt-0 animate-on-scroll" style={{ animationDelay: "400ms" }}>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-4 font-sans">
              Top News
            </span>

            <div className="flex flex-col gap-4">
              {sideNewsArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className="group block pb-4 border-b border-divider last:border-0 last:pb-0"
                >
                  <div className="w-full aspect-[16/9] bg-gray-200 mb-2.5 overflow-hidden border border-divider">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-widest text-ink bg-gray-200 px-1.5 py-0.5 font-sans mb-1.5 inline-block">
                    {article.category}
                  </span>

                  <h4 className="text-base font-serif font-bold leading-snug mb-1.5 group-hover:underline decoration-1 underline-offset-2 transition-all">
                    {article.title}
                  </h4>

                  <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed mb-2">
                    {article.shortdescription}
                  </p>

                  <div className="flex items-center gap-2 pt-1.5 border-t border-divider">
                    {article.author?.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={article.author.image} alt={article.author.name} className="w-5 h-5 rounded-full object-cover" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                    )}
                    <span className="text-[10px] font-bold text-ink">{article.author?.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </AnimatedSection>
    </section>
  );
}
