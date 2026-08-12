import { getArticleBySlug, getArticlesByCategory } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

interface DetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

  if (!article) {
    notFound();
  }

  // Fetch related articles from same category
  const categoryArticles = await getArticlesByCategory(category);
  const relatedArticles = categoryArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 6);

  const categoryTitle = category.toUpperCase();

  return (
    <main className="w-full bg-paper text-ink pb-8 animate-fade-in">
      <article className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-6 lg:py-10">
        
        {/* ========================================================================= */}
        {/* HEADER & HERO: FULL WIDTH WIDE DESIGN */}
        {/* ========================================================================= */}
        
        {/* Top Category Nav */}
        <nav className="flex items-center justify-start gap-2 mb-8 font-sans text-xs font-bold uppercase tracking-[0.15em] text-blue-950">
          <Link href="/" className="hover:underline text-gray-500">Home</Link>
          <span className="text-gray-300">/</span>
          <Link href={`/${article.category}`} className="hover:underline">{categoryTitle}</Link>
        </nav>

        <div className="max-w-5xl mb-12">
          
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-black text-ink leading-[1.05] tracking-tight mb-5">
            {article.title}
          </h1>
          
          {article.shortdescription && (
            <p className="text-lg sm:text-xl font-sans font-medium text-[#3A4B5C] leading-[1.4] mb-8">
              {article.shortdescription}
            </p>
          )}

          {/* Author Byline & Meta */}
          {article.author && (
            <div className="flex flex-wrap items-center gap-6 font-sans text-xs pt-2">
              <div className="flex items-center gap-3">
                {article.author.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-ink/10 shadow-sm"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-950 text-paper flex items-center justify-center font-bold text-xs font-serif shadow-sm">
                    {article.author.name.charAt(0)}
                  </div>
                )}
                <div className="text-left text-ink">
                  <span className="font-bold block text-sm">{article.author.name}</span>
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{article.author.role || "Journalist"}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-500 border-l border-ink/10 pl-6 h-8">
                <span className="font-bold text-ink">{article.date}</span>
                <span className="text-gray-300">•</span>
                <span className="font-semibold text-blue-950">5 Min Read</span>
              </div>
            </div>
          )}
        </div>



        {/* ========================================================================= */}
        {/* READING CONTENT: WIDE OFFSET GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-8 xl:col-span-8">
            
            {/* HERO IMAGE: REDUCED WIDTH IN CONTENT COLUMN */}
            <figure className="w-full mb-12">
              <div className="relative overflow-hidden aspect-[16/9] w-full bg-[#ddd6c9] rounded-2xl shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs font-sans text-gray-500 flex justify-between items-center px-1">
                <span className="italic">{article.title}</span>
              </figcaption>
            </figure>

            <div className="prose prose-lg sm:prose-xl max-w-none text-ink font-sans leading-snug mb-16">
            {article.description && article.description.length > 0 ? (
              article.description.map((sec, idx) => (
                <div key={idx} className="mb-10">
                  {sec.subtitle && (
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-ink mb-6 mt-12">
                      {sec.subtitle}
                    </h2>
                  )}
                  
                  {sec.text.split("\n\n").map((para, pIdx) => (
                    <p key={pIdx} className="font-medium text-[#3A4B5C] leading-snug mb-4">
                      {para}
                    </p>
                  ))}

                  
                </div>
              ))
            ) : (
              <p className="font-medium text-[#3A4B5C] leading-snug mb-4">
                {article.shortdescription}
              </p>
            )}
          </div>
          
            {/* Share and Comments Section */}
            <div className="border-t border-ink/10 pt-2 sm:pt-4 mt-2 sm:mt-6 mb-8">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-ink/10">
                <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-gray-600">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </button>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-serif font-bold text-2xl text-ink mb-8">Comments (3)</h3>
                <div className="space-y-8">
                  {/* Comment 1 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center font-bold font-serif text-sm">
                      M
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-sm text-ink">Michael T.</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-[#3A4B5C] leading-relaxed">
                        This is a very insightful piece. The geopolitical implications are massive and it's interesting to see how the market reacts.
                      </p>
                    </div>
                  </div>
                  {/* Comment 2 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex-shrink-0 flex items-center justify-center font-bold font-serif text-sm">
                      S
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-sm text-ink">Sarah Jenkins</span>
                        <span className="text-xs text-gray-500">5 hours ago</span>
                      </div>
                      <p className="text-sm text-[#3A4B5C] leading-relaxed">
                        I've been following this story closely and your breakdown of the key factors is the most comprehensive I've read so far.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <textarea 
                    className="w-full border border-ink/20 rounded p-4 text-sm font-sans focus:outline-none focus:border-blue-950 focus:ring-1 focus:ring-blue-950 min-h-[120px] bg-white" 
                    placeholder="Add a comment..."
                  ></textarea>
                  <button className="mt-3 bg-blue-950 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors shadow-sm">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          {/* RIGHT SIDEBAR: TRENDING NEWS */}
          <aside className="lg:col-span-4 xl:col-span-4 sticky top-24 pt-2">
            <div>
              <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-ink mb-6 pb-4 border-b border-ink/10">
                Trending News
              </h3>

              <div className="space-y-6">
                {relatedArticles.slice(0, 5).map((rel, idx) => (
                  <Link
                    key={rel.slug}
                    href={`/${rel.category}/${rel.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <span className="font-serif font-black text-2xl text-blue-950/20 group-hover:text-blue-950 transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-500 block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-ink leading-snug group-hover:text-blue-950 transition-colors line-clamp-3">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </article>

      {/* ========================================================================= */}
      {/* BOTTOM CURATED GRID - FULL WIDTH */}
      {/* ========================================================================= */}
      {relatedArticles.length > 0 && (
        <section className="pt-8 pb-8">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-10 pb-4 border-b border-ink/10 gap-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
                More News
              </h3>
              <Link
                href={`/${category}`}
                className="text-xs font-sans font-bold uppercase tracking-widest text-blue-950 hover:underline"
              >
                View Section &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedArticles.slice(0, 4).map((rel) => (
                <Link
                  key={`more-${rel.slug}`}
                  href={`/${rel.category}/${rel.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[3/2] bg-[#ddd6c9] mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>

                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {rel.date}
                  </span>

                  <h4 className="font-serif font-bold text-lg text-ink leading-snug group-hover:text-blue-950 transition-colors line-clamp-3">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}




