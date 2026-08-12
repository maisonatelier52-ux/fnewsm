import Image from "next/image";
import Link from "next/link";

export interface NewsArticle {
  category: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  shortdescription: string;
  description?: Array<{
    subtitle?: string;
    text: string;
  }>;
  author?: {
    name: string;
    role?: string;
    bio?: string;
    image?: string;
    email?: string;
  };
}

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const href = `/${article.category}/${article.slug}`;

  return (
    <Link href={href} className="group block h-full">
      <article className={`flex flex-col h-full bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'md:flex-row md:gap-8 bg-brand-gray' : 'border border-gray-100'}`}>
        <div className={`relative overflow-hidden ${featured ? 'md:w-3/5 w-full aspect-video md:aspect-auto' : 'w-full aspect-video'}`}>
          {/* We use standard img for simplicity with external urls, or next/image if configured */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-sm">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className={`flex flex-col justify-center ${featured ? 'md:w-2/5 p-6 md:p-8' : 'p-5 flex-grow'}`}>
          <p className="text-gray-500 text-sm font-medium mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.date}
          </p>
          <h2 className={`${featured ? 'text-3xl md:text-4xl' : 'text-xl'} font-serif font-bold text-brand-dark mb-4 leading-tight group-hover:underline decoration-1 underline-offset-2 transition-all`}>
            {article.title}
          </h2>
          <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">
            {article.shortdescription}
          </p>
          
          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
            {article.author && (
              <span className="text-sm font-semibold text-brand-blue">
                By {article.author.name}
              </span>
            )}
            <span className="text-sm font-bold text-brand-red group-hover:underline flex items-center gap-1 ml-auto">
              Read Story 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
