import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 shrink-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold transition-transform group-hover:scale-105">
                A
              </div>
              <span className="font-bold text-xl tracking-tight uppercase text-slate-900 dark:text-white">
                Age<span className="font-light">Calc Pro</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              The most advanced, professional age calculator designed for precision and clarity.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Legal & Policies</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/sitemap" className="text-sm text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors">Sitemap</Link></li>
              <li><span className="text-sm text-slate-600 dark:text-slate-400">Accessibility Statement</span></li>
              <li><span className="text-sm text-slate-600 dark:text-slate-400">Editorial Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              © {currentYear} AgeCalc Pro
            </p>
            <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
          </div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 text-center md:text-right max-w-xl leading-relaxed">
            Disclaimer: Results are for informational purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
}
