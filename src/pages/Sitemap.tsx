import { Link } from "react-router-dom";

export function Sitemap() {
  const pages = [
    { name: "Home (Calculator)", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms and Conditions", path: "/terms" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">HTML Sitemap</h1>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.path} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
              <Link to={page.path} className="text-lg font-medium hover:underline underline-offset-4">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-2xl text-center">
      <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
