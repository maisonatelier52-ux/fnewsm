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
