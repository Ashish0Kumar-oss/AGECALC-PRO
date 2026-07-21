import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar as CalendarIcon, Tag } from "lucide-react";

export function BlogArticle() {
  const { slug } = useParams();

  // In a real app, fetch post by slug. Using a placeholder here.
  const title = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Blog Article";

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to all articles
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-6">
          <span className="flex items-center gap-1.5"><CalendarIcon className="w-4 h-4" /> July 21, 2026</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min read</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> Guides</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          {title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold">
            A
          </div>
          <div className="text-sm">
            <p className="font-semibold text-slate-900 dark:text-white">Admin Author</p>
            <p className="text-slate-500">Editor in Chief</p>
          </div>
        </div>
      </header>

      <div className="w-full h-64 md:h-96 bg-slate-100 dark:bg-slate-900 rounded-3xl mb-12 flex items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-800">
        [ Featured Image Placeholder ]
      </div>

      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-p:leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2>The Core Principles</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote>
          "Time is what we want most, but what we use worst." - William Penn
        </blockquote>
        <h3>Advanced Calculations</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-500">
          Share this article:
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-medium hover:text-blue-600">Twitter</button>
          <button className="text-sm font-medium hover:text-blue-600">LinkedIn</button>
        </div>
      </div>
    </article>
  );
}
