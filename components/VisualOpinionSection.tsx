import { getArticlesByCategory } from "@/lib/api";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default async function VisualOpinionSection() {
  const techArticles = await getArticlesByCategory("technology");
  const businessArticles = await getArticlesByCategory("business");
  const usArticles = await getArticlesByCategory("us");
  const worldArticles = await getArticlesByCategory("world");

  const darkCardArticle = techArticles[0] || businessArticles[0];
  const visualArticle = worldArticles[1] || businessArticles[1];
  const opinionArticles = [
    usArticles[0],
    businessArticles[0],
    worldArticles[0] || techArticles[1],
  ].filter(Boolean);

  if (!darkCardArticle || !visualArticle) return null;

  return (
    <section className="mt-8 border-t-2 border-ink pt-6">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-4 border-b border-divider pb-3">
        <h2 className="text-2xl md:text-3xl font-black font-serif">
          Investigative News & Global Perspectives
        </h2>
        <span className="text-xs uppercase font-sans tracking-widest text-gray-600 font-bold hidden sm:inline">
          National News Briefing
        </span>
      </div>

      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* BLOCK 1: Inverted Dark Ink Card with Background Image (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col animate-on-scroll" style={{ animationDelay: "0ms" }}>
          <Link 
            href={`/${darkCardArticle.category}/${darkCardArticle.slug}`}
            className="relative w-full h-full min-h-[300px] bg-ink group overflow-hidden block flex flex-col justify-between p-6 border border-ink text-paper"
          >
            {/* Image background with gradient overlay */}
            {darkCardArticle.image && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={darkCardArticle.image} 
                  alt={darkCardArticle.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60"></div>
              </>
            )}

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 border-b border-gray-700/80 pb-3">
                <span className="bg-paper text-ink text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 font-sans">
                  In-Depth Analysis
                </span>
                <span className="text-[11px] text-gray-300 font-sans">{darkCardArticle.date}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-2 transition-all">
                {darkCardArticle.title}
              </h3>

              <p className="text-xs text-gray-200 font-medium leading-relaxed mb-4">
                {darkCardArticle.shortdescription}
              </p>
            </div>

            <div className="relative z-10 border-t border-gray-700/80 pt-4 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkCardArticle.author?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={darkCardArticle.author.image} 
                    alt={darkCardArticle.author.name} 
                    className="w-8 h-8 rounded-full object-cover border border-gray-600" 
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                )}
                <div>
                  <p className="text-xs font-bold text-paper">{darkCardArticle.author?.name || "Senior Columnist"}</p>
                  <p className="text-[10px] text-gray-300 font-sans uppercase tracking-widest">{darkCardArticle.category}</p>
                </div>
              </div>

              <span className="text-xs font-bold text-amber-200 group-hover:translate-x-1 transition-transform font-sans">
                Read →
              </span>
            </div>
          </Link>
        </div>

        {/* BLOCK 2: Full-Bleed Visual Feature Card (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col animate-on-scroll" style={{ animationDelay: "200ms" }}>
          <Link 
            href={`/${visualArticle.category}/${visualArticle.slug}`}
            className="relative w-full h-full min-h-[300px] bg-ink group overflow-hidden block flex flex-col justify-end p-6 border border-ink"
          >
            {/* Image background with gradient overlay */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={visualArticle.image} 
              alt={visualArticle.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"></div>

            <div className="relative z-10 text-paper">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-2 block font-sans">
                Photo Story • {visualArticle.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-2 transition-all">
                {visualArticle.title}
              </h3>

              <p className="text-xs text-gray-300 font-medium line-clamp-3 leading-relaxed">
                {visualArticle.shortdescription}
              </p>
            </div>
          </Link>
        </div>

        {/* BLOCK 3: Editorial Perspectives (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 lg:border-l border-divider lg:pl-6 pt-6 lg:pt-0 animate-on-scroll" style={{ animationDelay: "400ms" }}>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-3 font-sans">
              Editorial Perspectives
            </span>

            <div className="flex flex-col gap-4">
              {opinionArticles.map((op) => (
                <Link key={op.slug} href={`/${op.category}/${op.slug}`} className="group block pb-3 border-b border-divider last:border-0 last:pb-0">
                  <h4 className="text-base md:text-lg font-serif font-bold leading-snug mb-1.5 group-hover:underline decoration-1 underline-offset-2 transition-all">
                    {op.title}
                  </h4>
                  <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed mb-2">
                    {op.shortdescription}
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    {op.author?.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={op.author.image} alt={op.author.name} className="w-6 h-6 rounded-full object-cover" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    )}
                    <span className="text-[11px] font-bold text-ink">{op.author?.name}</span>
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
