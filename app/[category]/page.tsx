import Link from "next/link";
import { getArticlesByCategory, getAllArticles } from "@/lib/api";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryArticles = await getArticlesByCategory(category);

  if (!categoryArticles || categoryArticles.length === 0) {
    notFound();
  }

  const allArticles = await getAllArticles();
  const otherArticles = allArticles.filter(a => a.category !== category);
  const displayArticles = [...categoryArticles, ...otherArticles];

  const categoryTitle = category.toUpperCase();
  const leadArticle = displayArticles[0];
  const bulletinArticles = displayArticles.slice(1, 4); 
  const topStories = displayArticles.slice(4, 9);
  const inDepthArticles = displayArticles.slice(9, 13);
  const remainingArticles = displayArticles.slice(13, 19);
  const sidebarArticles = displayArticles.slice(19, 23);

  return (
    <main className="w-full bg-white text-ink min-h-screen animate-fade-in pb-8">
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-4 animate-fade-in-up">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 font-sans">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink">{categoryTitle}</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: EDITORIAL ASYMMETRIC HERO */}
      {/* ========================================================================= */}
      {leadArticle && (
        <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column (Main Feature - 8 Cols) */}
            <div className="lg:col-span-8 flex flex-col">
              <Link href={`/${leadArticle.category}/${leadArticle.slug}`} className="group block">
                <div className="flex flex-col max-w-4xl mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-950 bg-blue-50 px-2 py-0.5 rounded-sm">
                      Lead Story
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      {leadArticle.date}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif font-black text-ink leading-[1.05] tracking-tight transition-all mb-3">
                    {leadArticle.title}
                  </h2>

                  {leadArticle.shortdescription && (
                    <p className="text-base sm:text-[15px] font-medium text-[#3A4B5C] leading-relaxed line-clamp-3">
                      {leadArticle.shortdescription}
                    </p>
                  )}
                  
                  {leadArticle.author && (
                    <div className="mt-5 flex items-center gap-3">
                      <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-ink">
                        By {leadArticle.author.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="w-full relative overflow-hidden bg-gray-100 aspect-[16/10] mb-6 border border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={leadArticle.image}
                    alt={leadArticle.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </Link>
            </div>

            {/* Right Column (Bulletins - 4 Cols) */}
            <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-300 pt-8 lg:pt-0 lg:pl-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-950 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-950 rounded-full"></span>
                Recent News
              </h3>

              <div className="flex flex-col">
                {bulletinArticles.map((article) => (
                  <Link key={article.slug} href={`/${article.category}/${article.slug}`} className="group block border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        {article.date}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-ink leading-[1.1] transition-all mb-2">
                      {article.title}
                    </h4>
                    {article.shortdescription && (
                      <p className="font-medium text-[#3A4B5C] text-[13px] leading-relaxed line-clamp-3 mb-3">
                        {article.shortdescription}
                      </p>
                    )}
                    {article.author && (
                      <div className="flex items-center gap-2">
                        {article.author.image ? (
                          <img src={article.author.image} alt={article.author.name} className="w-6 h-6 rounded-full object-cover" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                        )}
                        <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-ink">
                          By {article.author.name}
                        </span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: TOP STORIES MASONRY/GRID */}
      {/* ========================================================================= */}

      {topStories.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-8">
          <div className="border-b border-ink py-2 mb-6 flex items-center justify-between">
            <h2 className="text-sm font-bold font-sans uppercase tracking-[0.2em] text-ink">
              Featured Coverage
            </h2>
            <Link href="#" className="text-[10px] font-bold font-sans uppercase tracking-[0.15em] text-ink">
              See All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Featured Article (Left Side) */}
            {topStories[0] && (
              <Link href={`/${topStories[0].category}/${topStories[0].slug}`} className="group flex flex-col">
                <div className="w-full relative overflow-hidden bg-gray-100 aspect-video mb-4 border border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={topStories[0].image} alt={topStories[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {topStories[0].category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-ink leading-[1.1] transition-all mb-2 text-3xl">
                  {topStories[0].title}
                </h3>
                {topStories[0].shortdescription && (
                  <p className="font-medium text-[#3A4B5C] leading-relaxed line-clamp-3 text-[15px]">
                    {topStories[0].shortdescription}
                  </p>
                )}
                {topStories[0].author && (
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-ink">
                    {topStories[0].author.name}
                  </div>
                )}
              </Link>
            )}

            {/* Right Side Stack */}
            <div className="flex flex-col justify-between">
              {/* Top Row of Right Side: 2 Small Image Articles */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {topStories.slice(1, 3).map(article => (
                  <Link key={article.slug} href={`/${article.category}/${article.slug}`} className="group flex flex-col">
                    <div className="w-full relative overflow-hidden bg-gray-100 aspect-[4/3] mb-3 border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-ink leading-[1.1] transition-all mb-1 text-lg">
                      {article.title}
                    </h3>
                    {article.shortdescription && (
                      <p className="font-medium text-[#3A4B5C] leading-relaxed line-clamp-3 text-[13px] mt-1">
                        {article.shortdescription}
                      </p>
                    )}
                    {article.author && (
                      <div className="mt-2 text-[9px] font-bold uppercase tracking-widest text-ink">
                        {article.author.name}
                      </div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Bottom Row of Right Side: 2 Text-Only Articles */}
              <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-6">
                {topStories.slice(3, 5).map(article => (
                  <Link key={article.slug} href={`/${article.category}/${article.slug}`} className="group flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-ink leading-[1.1] transition-all mb-1 text-lg">
                      {article.title}
                    </h3>
                    {article.shortdescription && (
                      <p className="font-medium text-[#3A4B5C] leading-relaxed line-clamp-2 text-[13px] mt-1">
                        {article.shortdescription}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: IN-DEPTH ANALYSIS (NEW SECTION) */}
      {/* ========================================================================= */}

      {inDepthArticles.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16">
          <div className="border-b border-ink py-2 mb-8 flex items-center justify-between">
            <h2 className="text-sm font-bold font-sans uppercase tracking-[0.2em] text-ink">
              In-Depth Analysis
            </h2>
            <Link href="#" className="text-[10px] font-bold font-sans uppercase tracking-[0.15em] text-ink">
              More &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {inDepthArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.category}/${article.slug}`}
                className="group flex flex-col"
              >
                <div className="w-full relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4 border border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl text-ink leading-[1.1] transition-all mb-2">
                  {article.title}
                </h3>
                {article.shortdescription && (
                  <p className="font-medium text-[#3A4B5C] leading-relaxed text-[13px] line-clamp-2">
                    {article.shortdescription}
                  </p>
                )}
                {article.author && (
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-ink">
                    {article.author.name}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: LATEST NEWS TICKER / LIST */}
      {/* ========================================================================= */}

      {remainingArticles.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-8">
          <div className="border-t-2 border-ink pt-4 mb-8">
            <h2 className="text-lg font-bold font-sans uppercase tracking-[0.2em] text-ink">
              More News
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Column */}
            <div className="lg:col-span-8">
              
              <div className="flex flex-col gap-8">
                {remainingArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${article.category}/${article.slug}`}
                    className="group flex flex-col sm:flex-row gap-6 items-start pb-8 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="w-full sm:w-64 flex-shrink-0 relative overflow-hidden bg-gray-100 aspect-video border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-950">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-ink leading-[1.1] transition-all mb-2">
                        {article.title}
                      </h3>
                      {article.shortdescription && (
                        <p className="font-medium text-[#3A4B5C] leading-relaxed text-[13px] line-clamp-2">
                          {article.shortdescription}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="sticky top-8">
                {/* Sidebar Articles */}
                <div className="flex flex-col gap-6">
                  {sidebarArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/${article.category}/${article.slug}`}
                      className="group flex items-start gap-4"
                    >
                      <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden bg-gray-100 border border-gray-200">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex-grow pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                            {article.category}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-[13px] text-ink leading-[1.1] transition-all mb-1 line-clamp-3">
                          {article.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

    </main>
  );
}
