import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Calculator } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/utils";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shrink-0">
      <div className="flex items-center gap-2 group">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold transition-transform group-hover:scale-105">
            A
          </div>
          <span className="text-xl font-bold tracking-tight uppercase text-slate-900 dark:text-white">
            Age<span className="font-light">Calc Pro</span>
          </span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-sm font-medium text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center gap-3 ml-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-slate-400 hover:text-white" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 hover:text-black" />
            )}
          </button>
        </div>
      </nav>

      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-slate-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 dark:text-slate-400"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-64 border-b" : "max-h-0 border-b-0"
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
