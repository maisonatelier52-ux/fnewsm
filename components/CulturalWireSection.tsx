import { getArticlesByCategory } from "@/lib/api";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default async function CulturalWireSection() {
  const entArticles = await getArticlesByCategory("entertainment");
  const businessArticles = await getArticlesByCategory("business");
  const usArticles = await getArticlesByCategory("us");
  const techArticles = await getArticlesByCategory("technology");
  const worldArticles = await getArticlesByCategory("world");

  const cultureFeature = entArticles[0] || worldArticles[0];
  const wireFeature = businessArticles[0] || techArticles[0];
  const worldFeature = worldArticles[0] || usArticles[0];

  // 3 news articles for the bottom section
  const bottomNewsArticles = [
    usArticles[0],
    techArticles[0],
    businessArticles[1] || entArticles[1],
  ].filter(Boolean);

  if (!cultureFeature || !wireFeature || !worldFeature) return null;

  return (
    <section className="mt-8 border-t-2 border-ink pt-6 pb-4">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-4 border-b border-divider pb-3">
        <h2 className="text-2xl md:text-3xl font-black font-serif">
          International News & Wire Reports
        </h2>
        <span className="text-xs uppercase font-sans tracking-widest text-gray-600 font-bold hidden sm:inline">
          INTERNATIONAL DESK
        </span>
      </div>

      {/* TOP ROW: 3 Equal Feature Cards */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* Card 1: Culture & Arts */}
        <div className="animate-on-scroll h-full flex flex-col justify-between" style={{ animationDelay: "0ms" }}>
          <Link href={`/${cultureFeature.category}/${cultureFeature.slug}`} className="group flex flex-col justify-between h-full block">
            <div>
              <div className="w-full aspect-[16/10] bg-gray-200 mb-3 overflow-hidden border border-divider">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cultureFeature.image}
                  alt={cultureFeature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex items-center gap-2 mb-1.5 font-sans">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-ink text-paper px-2 py-0.5">
                  Culture & Arts
                </span>
                <span className="text-[10px] text-gray-500 font-medium">• {cultureFeature.date}</span>
              </div>

              <h3 className="text-xl font-serif font-bold leading-snug mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
                {cultureFeature.title}
              </h3>

              <p className="text-xs text-gray-800 font-medium leading-relaxed mb-3 line-clamp-2">
                {cultureFeature.shortdescription}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2.5 border-t border-divider mt-auto">
              {cultureFeature.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cultureFeature.author.image}
                  alt={cultureFeature.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              )}
              <span className="text-xs font-bold text-ink">By {cultureFeature.author?.name || "Culture Staff"}</span>
            </div>
          </Link>
        </div>

        {/* Card 2: Markets & Wire */}
        <div className="animate-on-scroll h-full flex flex-col justify-between" style={{ animationDelay: "150ms" }}>
          <Link href={`/${wireFeature.category}/${wireFeature.slug}`} className="group flex flex-col justify-between h-full block">
            <div>
              <div className="w-full aspect-[16/10] bg-gray-200 mb-3 overflow-hidden border border-divider">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={wireFeature.image}
                  alt={wireFeature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex items-center gap-2 mb-1.5 font-sans">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-ink text-paper px-2 py-0.5">
                  Markets & Wire
                </span>
                <span className="text-[10px] text-gray-500 font-medium">• 5 Min Read</span>
              </div>

              <h3 className="text-xl font-serif font-bold leading-snug mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
                {wireFeature.title}
              </h3>

              <p className="text-xs text-gray-800 font-medium leading-relaxed mb-3 line-clamp-2">
                {wireFeature.shortdescription}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2.5 border-t border-divider mt-auto">
              {wireFeature.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={wireFeature.author.image}
                  alt={wireFeature.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              )}
              <span className="text-xs font-bold text-ink">By {wireFeature.author?.name || "Financial Editor"}</span>
            </div>
          </Link>
        </div>

        {/* Card 3: Global Affairs */}
        <div className="animate-on-scroll h-full flex flex-col justify-between" style={{ animationDelay: "300ms" }}>
          <Link href={`/${worldFeature.category}/${worldFeature.slug}`} className="group flex flex-col justify-between h-full block">
            <div>
              <div className="w-full aspect-[16/10] bg-gray-200 mb-3 overflow-hidden border border-divider">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={worldFeature.image}
                  alt={worldFeature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex items-center gap-2 mb-1.5 font-sans">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-ink text-paper px-2 py-0.5">
                  Global Affairs
                </span>
                <span className="text-[10px] text-gray-500 font-medium">• {worldFeature.date}</span>
              </div>

              <h3 className="text-xl font-serif font-bold leading-snug mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
                {worldFeature.title}
              </h3>

              <p className="text-xs text-gray-800 font-medium leading-relaxed mb-3 line-clamp-2">
                {worldFeature.shortdescription}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2.5 border-t border-divider mt-auto">
              {worldFeature.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={worldFeature.author.image}
                  alt={worldFeature.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              )}
              <span className="text-xs font-bold text-ink">By {worldFeature.author?.name || "Foreign Desk"}</span>
            </div>
          </Link>
        </div>

      </AnimatedSection>

      {/* BOTTOM ROW: 3 News Article Cards (Replacing Columnist Boxes) */}
      <AnimatedSection className="pt-6 border-t border-divider">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-4 font-sans">
          Latest Dispatches & Analysis
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomNewsArticles.map((article, idx) => {
            if (!article) return null;

            return (
              <div 
                key={article.slug}
                className="animate-on-scroll h-full flex flex-col justify-between"
                style={{ animationDelay: `${(idx + 3) * 150}ms` }}
              >
                <Link href={`/${article.category}/${article.slug}`} className="group flex flex-col justify-between h-full block">
                  <div>
                    <div className="w-full aspect-[16/10] bg-gray-200 mb-3 overflow-hidden border border-divider">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-1.5 font-sans">
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-ink text-paper px-2 py-0.5">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium">• {article.date}</span>
                    </div>

                    <h4 className="text-xl font-serif font-bold leading-snug mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
                      {article.title}
                    </h4>

                    <p className="text-xs text-gray-800 font-medium leading-relaxed mb-3 line-clamp-2">
                      {article.shortdescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-2.5 border-t border-divider mt-auto">
                    {article.author?.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    )}
                    <span className="text-xs font-bold text-ink">By {article.author?.name || "Staff Writer"}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
