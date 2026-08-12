import { getAllArticles } from "@/lib/api";
import Link from "next/link";
import CategoryShowcase from "@/components/CategoryShowcase";
import VisualOpinionSection from "@/components/VisualOpinionSection";
import DailyEditionsGrid from "@/components/DailyEditionsGrid";
import CulturalWireSection from "@/components/CulturalWireSection";

export default async function Home() {
  const allArticles = await getAllArticles();

  if (allArticles.length < 5) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Not enough articles found. Please add mock data.</h2>
      </div>
    );
  }

  const art1 = allArticles[0];
  const art2 = allArticles[1];
  const artCenter = allArticles[2];
  const artCol3_1 = allArticles[4]; 
  const artCol3_2 = allArticles.length > 5 ? allArticles[5] : allArticles[4]; 
  const artCol4_1 = allArticles[3];

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-6">
      
      {/* SECTION 1: Hero Newspaper Grid (4 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6 lg:gap-8 animate-fade-in">
        
        {/* Column 1 (20%) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href={`/${art1.category}/${art1.slug}`} className="group block">
            <h3 className="text-2xl lg:text-[1.65rem] font-serif font-bold leading-[1.1] mb-4 group-hover:underline decoration-1 underline-offset-2 transition-all">
              The First Signs of <br/>
              <span className="highlight-peach">Alcoholic Liver</span> <br/>
              Damage Are Not in the Liver
            </h3>
            <p className="text-[13px] leading-relaxed mb-4 font-medium text-[#3A4B5C]">
              The combination of my father's death and my personal background lit a fire in me to know more.
            </p>
            <p className="text-[13px] leading-relaxed mb-5 font-medium text-[#3A4B5C]">
              He was admitted to the hospital on June 24, 2016.
            </p>
            <div className="flex items-center gap-2">
              {art1.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={art1.author.image} alt={art1.author.name} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p className="text-[11px] font-bold">{art1.author?.name || "Marina Sherof"}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">{art1.author?.role || "Reporter"}</p>
              </div>
            </div>
          </Link>

          <hr className="border-t border-divider my-2" />

          <Link href={`/${art2.category}/${art2.slug}`} className="group block">
            <h3 className="text-xl font-serif font-bold leading-tight mb-4 group-hover:underline decoration-1 underline-offset-2 transition-all">
              The Founder's Guide to Actually Understanding Users Nowadays.
            </h3>
            <p className="text-[11px] leading-relaxed font-medium text-[#3A4B5C]">
              By Jonathan O'Connell, Andrew Van Dam Aaron Gregg and Alyssa Fowers.
            </p>
          </Link>
        </div>

        {/* Column 2 (40%) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <Link href={`/${artCenter.category}/${artCenter.slug}`} className="group block">
            <div className="w-full aspect-[4/3] bg-gray-200 mb-5 overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={artCenter.image} alt={artCenter.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-[1.7rem] font-serif font-bold leading-[1.15] mb-4 group-hover:underline decoration-1 underline-offset-2 transition-all">
              How 7 Lines of Code Turned Into a $36 Billion Empire.
            </h3>
            <p className="text-[13px] leading-[1.6] font-medium text-[#3A4B5C] mb-5">
              Yeah, it's safe to say these guys have a great sense of humor, Which isn't really surprising for us, considering their seemingly absurd solution to online payments. Instead of chasing 1000-hour programming contracts to build clunky payments solutions for each individual client, the Collison.
            </p>
            <div className="flex items-center gap-2">
              {artCenter.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={artCenter.author.image} alt={artCenter.author.name} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p className="text-[11px] font-bold">{artCenter.author?.name || "James Robert"}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">{artCenter.author?.role || "Editor"}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Column 3 (20%) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href={`/${artCol3_1.category}/${artCol3_1.slug}`} className="group block">
            <div className="w-full aspect-[4/3] bg-gray-200 mb-3 overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={artCol3_1.image} alt={artCol3_1.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-[1.1rem] font-serif font-bold leading-tight mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
              To Become <span className="highlight-blue">Happier</span>, Ask Yourself These Two Questions Every Night
            </h3>
            <p className="text-[11px] leading-relaxed font-medium">
              By Jonathan O'Connell
            </p>
          </Link>

          <Link href={`/${artCol3_2.category}/${artCol3_2.slug}`} className="group block mt-2">
            <div className="w-full aspect-[4/3] bg-gray-200 mb-3 overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={artCol3_2.image} alt={artCol3_2.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-[1.1rem] font-serif font-bold leading-tight mb-2 group-hover:underline decoration-1 underline-offset-2 transition-all">
              10 Things I Stole From People Smarter Than Me
            </h3>
            <p className="text-[11px] leading-relaxed font-medium">
              By Jonathan O'Connell
            </p>
          </Link>
        </div>

        {/* Column 4 (20%) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href={`/${artCol4_1.category}/${artCol4_1.slug}`} className="group block">
            <h3 className="text-xl font-serif font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-2 transition-all">
              Traveller Visiting Ice Cave With Amazing Eye-catching Scenes
            </h3>
            <p className="text-[11px] leading-[1.6] font-medium text-[#3A4B5C] mb-4">
              Slack has become indispensable for many businesses operating remotely during the pandemic. Here's what the acquisition could mean for users...
            </p>
            <div className="flex items-center gap-2">
              {artCol4_1.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={artCol4_1.author.image} alt={artCol4_1.author.name} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p className="text-[11px] font-bold">{artCol4_1.author?.name || "James Robert"}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">{artCol4_1.author?.role || "Editor"}</p>
              </div>
            </div>
          </Link>

          <hr className="border-t border-divider my-0" />

          {/* News Report Section */}
          <Link href={`/${art2.category}/${art2.slug}`} className="group block pt-2">
            <h4 className="text-[1.2rem] font-serif font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-2 transition-all">
              Essential Habits & Routine Changes That Can Enrich <span className="highlight-yellow">Your Life</span>
            </h4>
            <p className="text-[12px] leading-relaxed font-medium text-[#3A4B5C] mb-4">
              Simple shifts in daily focus and evening routines provide measurable improvements to personal wellbeing and career output.
            </p>
            <div className="flex items-center gap-2">
              {art2.author?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={art2.author.image} alt={art2.author.name} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p className="text-[11px] font-bold">{art2.author?.name || "Marina Sherof"}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">{art2.author?.role || "Special Correspondent"}</p>
              </div>
            </div>
          </Link>

        </div>

      </div>

      {/* SECTION 2: Topic Showcase Grid */}
      <CategoryShowcase />

      {/* SECTION 3: Visual Stories & Opinions */}
      <VisualOpinionSection />

      {/* SECTION 4: Weekend Edition & Deep Dives */}
      <DailyEditionsGrid />

      {/* SECTION 5: Cultural Wire & Columnist Gallery */}
      <CulturalWireSection />
    </div>
  );
}
