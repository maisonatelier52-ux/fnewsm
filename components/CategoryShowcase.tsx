import { getArticlesByCategory } from "@/lib/api";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { NewsArticle } from "./NewsCard";

const CATEGORY_MAP = [
  { id: "world", name: "Global Perspectives" },
  { id: "business", name: "Markets & Economy" },
  { id: "us", name: "The Nation" },
  { id: "technology", name: "Innovation Hub" },
  { id: "entertainment", name: "Culture & Arts" },
];

export default async function CategoryShowcase() {
  // Fetch one top article for each category
  const categoriesWithArticles = await Promise.all(
    CATEGORY_MAP.map(async (cat) => {
      const articles = await getArticlesByCategory(cat.id);
      return {
        ...cat,
        article: articles.length > 0 ? articles[0] : null,
      };
    })
  );

  return (
    <section className="mt-8 border-t-2 border-ink pt-6 animate-fade-in">


      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
        {categoriesWithArticles.map((item, index) => {
          if (!item.article) return null;
          
          return (
            <div 
              key={item.id} 
              className="flex flex-col group border-b lg:border-b-0 lg:border-r border-divider lg:pr-8 last:border-0 pb-6 lg:pb-0 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              
              <Link href={`/${item.article.category}/${item.article.slug}`} className="flex-grow flex flex-col block">
                <div className="w-full aspect-square bg-gray-200 mb-3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.article.image} 
                    alt={item.article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <h4 className="text-[1.2rem] font-serif font-bold leading-tight mb-2.5 group-hover:underline decoration-1 underline-offset-2 transition-all line-clamp-2">
                  {item.article.title}
                </h4>
                
                <p className="text-[11px] leading-[1.4] font-medium text-gray-800 mb-3 line-clamp-3 flex-grow">
                  {item.article.shortdescription}
                </p>

                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-divider">
                  {item.article.author?.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.article.author.image} alt={item.article.author.name} className="w-6 h-6 rounded-full object-cover" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  )}
                  <div>
                    <p className="text-[10px] font-bold">{item.article.author?.name || "The Daily Staff"}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </AnimatedSection>
    </section>
  );
}
