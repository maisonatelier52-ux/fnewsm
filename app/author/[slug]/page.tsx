import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByAuthorSlug, getAuthorBySlug } from "@/lib/api";
import NewsCard from "@/components/NewsCard";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const resolvedParams = await params;
  const author = await getAuthorBySlug(resolvedParams.slug);

  if (!author) {
    return {
      title: "Author Not Found | Domain Name",
    };
  }

  return {
    title: `${author.name} - ${author.role} | Domain Name`,
    description: `Read the latest news reports, columns, and investigative articles by ${author.name} at Domain Name.`,
  };
}

export default async function AuthorDetailPage({ params }: AuthorPageProps) {
  const resolvedParams = await params;
  const authorSlug = resolvedParams.slug;
  const author = await getAuthorBySlug(authorSlug);
  const articles = await getArticlesByAuthorSlug(authorSlug);

  if (!author && articles.length === 0) {
    notFound();
  }

  const authorName = author?.name || authorSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const authorRole = author?.role || "News Correspondent";
  const authorBureau = author?.bureau || "Global Desk";
  const authorBio = author?.bio || `Senior journalist covering breaking developments, investigative reports, and in-depth analysis for Domain Name.`;
  const authorImage = author?.image;

  return (
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Top Breadcrumb */}
      <div className="mb-6 text-xs font-sans font-bold uppercase tracking-widest text-ink/60">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">•</span>
        <Link href="/team" className="hover:underline">Our Team</Link>
        <span className="mx-2">•</span>
        <span className="text-ink">{authorName}</span>
      </div>

      {/* Author Profile Header Box */}
      <div className="border-4 border-double border-ink p-6 sm:p-10 bg-stone-50/60 mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Avatar Image */}
          <div className="flex-shrink-0">
            {authorImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={authorImage}
                alt={authorName}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-ink shadow-md"
              />
            ) : (
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-blue-950 text-white flex items-center justify-center font-serif font-black text-4xl shadow-md border-2 border-ink">
                {authorName.charAt(0)}
              </div>
            )}
          </div>

          {/* Author Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
              <span className="bg-red-900 text-white text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1">
                {authorBureau}
              </span>
              <span className="text-xs font-sans font-semibold text-ink/60">
                {articles.length} Published {articles.length === 1 ? "Article" : "Articles"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight mb-2">
              {authorName}
            </h1>

            <p className="text-sm font-sans font-bold text-blue-950 uppercase tracking-wider mb-4">
              {authorRole}
            </p>

            <p className="text-sm sm:text-base font-serif italic text-ink/85 leading-relaxed max-w-3xl">
              &ldquo;{authorBio}&rdquo;
            </p>

            {/* Social / Contact links */}
            <div className="mt-6 pt-4 border-t border-ink/20 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-sans">
              <a href={`mailto:${authorSlug}@domainname.com`} className="font-semibold text-ink hover:underline flex items-center gap-1.5">
                <svg className="w-4 h-4 text-ink/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{authorSlug}@domainname.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Author Articles Feed */}
      <section className="mb-14">
        <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-8">
          <h2 className="text-2xl font-serif font-bold uppercase text-ink tracking-tight">
            Articles by {authorName}
          </h2>
          <span className="text-xs font-sans font-semibold text-ink/60">
            Archive Index
          </span>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard key={`${article.category}-${article.slug}`} article={article} />
            ))}
          </div>
        ) : (
          <div className="border border-ink/20 p-12 bg-white text-center">
            <p className="text-base font-serif italic text-ink/70 mb-2">
              No recent dispatches found in the active archive for {authorName}.
            </p>
            <p className="text-xs font-sans text-ink/50">
              Check back soon for upcoming investigative reports and columns.
            </p>
          </div>
        )}
      </section>

      {/* Return to Front Page */}
      <div className="mt-14 pt-8 border-t-2 border-ink text-center">
        <Link href="/" className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-ink hover:underline border-b border-ink">
          ← Return to Front Page
        </Link>
      </div>
    </div>
  );
}
