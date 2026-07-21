import { Link } from "react-router-dom";
import { BlogPost } from "../types";

const mockPosts: BlogPost[] = [
  {
    slug: "how-age-calculators-work",
    title: "How Age Calculators Work Under the Hood",
    excerpt: "Discover the complex mathematics and leap year logic required to accurately calculate someone's exact age down to the second.",
    content: "Content...",
    date: "July 21, 2026",
    readTime: "4 min read",
    category: "Technology"
  },
  {
    slug: "leap-year-explained",
    title: "The Science of Leap Years Explained",
    excerpt: "Why do we have leap years, and how do they affect your exact age calculation? A deep dive into the Gregorian calendar.",
    content: "Content...",
    date: "July 18, 2026",
    readTime: "5 min read",
    category: "Science"
  },
  {
    slug: "calculate-retirement-age",
    title: "How to Accurately Calculate Your Retirement Age",
    excerpt: "Planning for the future starts with knowing exactly how much time you have left. Here is how to plan your retirement timeline.",
    content: "Content...",
    date: "July 15, 2026",
    readTime: "6 min read",
    category: "Planning"
  }
];

export function BlogList() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">The AgeCalc Blog</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Articles, guides, and interesting facts about time and age.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockPosts.map((post) => (
          <Link 
            key={post.slug} 
            to={`/blog/${post.slug}`}
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="h-48 bg-slate-100 dark:bg-black w-full flex items-center justify-center text-slate-400 font-mono text-sm border-b border-slate-200 dark:border-slate-800">
              [ Article Image Placeholder ]
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-slate-500">
                <span className="uppercase tracking-wider">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="text-xs text-slate-400 font-medium">
                {post.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
