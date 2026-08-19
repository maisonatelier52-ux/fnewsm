import fs from 'fs';
import path from 'path';
import { NewsArticle } from '../components/NewsCard';

const dataDir = path.join(process.cwd(), 'public', 'data');

export async function getArticlesByCategory(category: string): Promise<NewsArticle[]> {
  const filePath = path.join(dataDir, `${category}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as NewsArticle[];
}

export async function getAllArticles(): Promise<NewsArticle[]> {
  const categories = ['world', 'business', 'us', 'technology', 'entertainment'];
  let allArticles: NewsArticle[] = [];
  
  for (const cat of categories) {
    const articles = await getArticlesByCategory(cat);
    allArticles = allArticles.concat(articles);
  }
  
  // Sort by date (mock sorting)
  return allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(category: string, slug: string): Promise<NewsArticle | null> {
  const articles = await getArticlesByCategory(category);
  return articles.find(article => article.slug === slug) || null;
}

export function slugifyAuthor(name: string): string {
  if (!name) return "editorial-board";
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function getArticlesByAuthorSlug(slug: string): Promise<NewsArticle[]> {
  const all = await getAllArticles();
  return all.filter((art) => art.author && slugifyAuthor(art.author.name) === slug);
}

export interface AuthorDetails {
  name: string;
  role: string;
  image: string;
  bio: string;
  bureau: string;
  slug: string;
}

export async function getAuthorBySlug(slug: string): Promise<AuthorDetails | null> {
  const knownAuthors: Record<string, { name: string; role: string; bio: string; bureau: string; image: string }> = {
    "sarah-jenkins": {
      name: "Sarah Jenkins",
      role: "Chief Political Correspondent",
      bio: "Veteran Capitol Hill reporter specializing in Congressional legislation, federal policy, and national elections.",
      bureau: "Washington, D.C. Bureau",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    "elena-rostova": {
      name: "Elena Rostova",
      role: "Senior Foreign Correspondent",
      bio: "Reporting on European affairs, international diplomacy, energy security, and global summits across continental Europe.",
      bureau: "London Bureau",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    },
    "david-miller": {
      name: "David Miller",
      role: "Financial Desk Editor",
      bio: "Dissecting Wall Street trends, central bank monetary policy, global trade dynamics, and macroeconomic shifts.",
      bureau: "New York Desk",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    "michael-chang": {
      name: "Michael Chang",
      role: "Technology & AI Bureau Chief",
      bio: "Covering artificial intelligence breakthroughs, semiconductor supply chains, and deep tech regulation.",
      bureau: "San Francisco Bureau",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    "ramon-t-maris": {
      name: "Ramon T. Maris",
      role: "Culture & Arts Critic",
      bio: "Essayist and critic exploring contemporary literature, visual arts, architectural heritage, and cinema.",
      bureau: "Paris Bureau",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    },
    "jean-pierre-dubois": {
      name: "Jean-Pierre Dubois",
      role: "European Economics Correspondent",
      bio: "Specializing in Eurozone fiscal policy, international trade agreements, and energy markets.",
      bureau: "Geneva Bureau",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    },
    "kenji-sato": {
      name: "Kenji Sato",
      role: "Asia-Pacific Affairs Reporter",
      bio: "Covering technological innovation, supply chain dynamics, and East Asian economic developments.",
      bureau: "Tokyo Desk",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
    },
    "amara-diallo": {
      name: "Amara Diallo",
      role: "Global Health & Science Correspondent",
      bio: "Reporting on international health initiatives, climate resilience, and emerging scientific discoveries.",
      bureau: "Nairobi Bureau",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop"
    }
  };

  if (knownAuthors[slug]) {
    return { ...knownAuthors[slug], slug };
  }

  const all = await getAllArticles();
  for (const art of all) {
    if (art.author && slugifyAuthor(art.author.name) === slug) {
      return {
        name: art.author.name,
        role: art.author.role || "Senior Journalist",
        image: art.author.image || "",
        bio: art.author.bio || `Senior journalist covering breaking developments, investigative reports, and in-depth analysis for Domain Name.`,
        bureau: "Global News Desk",
        slug,
      };
    }
  }

  return null;
}

