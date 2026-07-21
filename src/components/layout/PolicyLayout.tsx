export function PolicyLayout({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h1>
        <p className="text-slate-500 mb-12 font-mono text-sm">Last Updated: {lastUpdated}</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400">
          {children}
        </div>
      </div>
    </div>
  );
}
