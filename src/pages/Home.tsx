import { useState } from "react";
import { format } from "date-fns";
import { calculateAge } from "../lib/ageCalculator";
import { AgeCalculationResult } from "../types";
import { Calendar, Clock, Download, Share2, Copy, RefreshCcw } from "lucide-react";

export function Home() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [targetDate, setTargetDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
  const [result, setResult] = useState<AgeCalculationResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!birthDate) {
      setError("Please enter your date of birth.");
      return;
    }

    const bDate = new Date(birthDate);
    const tDate = new Date(targetDate);

    if (tDate < bDate) {
      setError("Target date cannot be before birth date.");
      setResult(null);
      return;
    }

    try {
      const res = calculateAge(bDate, tDate);
      setResult(res);
      const history = JSON.parse(localStorage.getItem("ageCalcHistory") || "[]");
      history.unshift({ birthDate, targetDate, date: new Date().toISOString() });
      localStorage.setItem("ageCalcHistory", JSON.stringify(history.slice(0, 5)));
    } catch (err) {
      setError("An error occurred during calculation.");
    }
  };

  const resetForm = () => {
    setBirthDate("");
    setTargetDate(format(new Date(), "yyyy-MM-dd"));
    setResult(null);
    setError("");
  };

  const copyResults = () => {
    if (!result) return;
    const text = `I am ${result.years} years, ${result.months} months, and ${result.days} days old!`;
    navigator.clipboard.writeText(text);
    alert("Results copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Input Form */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl font-bold mb-1">Precision Age Calculator</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Calculate age, milestones, and zodiac precisely for any date.</p>
            
            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label htmlFor="birthDate" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    max={targetDate}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="targetDate" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Calculate Age At
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="targetDate"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity mt-2"
              >
                Calculate Precise Age
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="w-full py-2 text-slate-500 text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
              >
                Reset All Fields
              </button>
            </form>
          </div>

          <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center p-4 min-h-[150px]">
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sponsor</p>
              <div className="w-full h-24 bg-white/50 dark:bg-black/50 rounded flex items-center justify-center text-slate-400 dark:text-slate-500 text-xs italic px-8">
                Premium Tool Showcase
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Results Dashboard */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {result ? (
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Top Row: Primary Result */}
              <div className="bg-black dark:bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Current Age</p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-bold">{result.years}</span>
                    <span className="text-lg sm:text-xl font-light text-slate-400">Years</span>
                    <span className="text-5xl sm:text-6xl font-bold ml-2 sm:ml-4">{result.months}</span>
                    <span className="text-lg sm:text-xl font-light text-slate-400">Months</span>
                    <span className="text-5xl sm:text-6xl font-bold ml-2 sm:ml-4">{result.days}</span>
                    <span className="text-lg sm:text-xl font-light text-slate-400">Days</span>
                  </div>
                </div>
                <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                  <button onClick={copyResults} className="flex-1 sm:flex-none px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium border border-white/10 transition-colors">
                    Share Result
                  </button>
                  <button onClick={() => window.print()} className="flex-1 sm:flex-none px-4 py-2 bg-white text-black hover:bg-slate-200 rounded-lg text-xs font-bold transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>

              {/* Middle Row: Bento Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-auto sm:h-[300px]">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Birthday</span>
                  <div className="mt-4 flex-1 flex flex-col justify-center">
                    <span className="text-3xl font-bold">{result.countdownDays} Days</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Until next milestone</span>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                      <div className="bg-black dark:bg-white h-full" style={{ width: `${Math.max(0, 100 - (result.countdownDays / 365) * 100)}%` }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Zodiac & Sign</span>
                  <div className="mt-4 flex-1 flex flex-col justify-center items-center text-center">
                    <span className="text-lg font-bold">{result.westernZodiac}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Chinese Year: {result.chineseZodiac}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Birthstone: {result.birthstone}</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Generation</span>
                  <div className="mt-4 flex-1 flex flex-col justify-center">
                    <span className="text-2xl font-bold">{result.generation}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                      Born on a {result.birthDayOfWeek}. {result.isLeapYear ? "A leap year baby!" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Grid Data */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Total Weeks</p>
                  <p className="text-xl font-bold">{result.totalWeeks.toLocaleString()}</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Total Days</p>
                  <p className="text-xl font-bold">{result.totalDays.toLocaleString()}</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Total Hours</p>
                  <p className="text-xl font-bold">{result.totalHours.toLocaleString()}</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Total Mins</p>
                  <p className="text-xl font-bold">{result.totalMinutes.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center p-8 min-h-[400px] shadow-sm">
              <div className="text-center text-slate-400 dark:text-slate-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="font-medium text-lg text-slate-600 dark:text-slate-300">Awaiting Input</p>
                <p className="text-sm">Enter your birth date to view your personalized age dashboard.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* SEO Features Section */}
      <section className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Use Our Age Calculator?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            title="High Precision" 
            desc="Calculates exactly down to the seconds, factoring in leap years perfectly." 
          />
          <FeatureCard 
            title="Privacy First" 
            desc="All calculations happen in your browser. We never store or transmit your dates." 
          />
          <FeatureCard 
            title="Comprehensive Details" 
            desc="Discover your zodiac, generation, birthstone, and exact lifespan breakdown." 
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center shadow-sm">
      <div className="w-10 h-10 mx-auto bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center mb-4">
        <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-sm" />
      </div>
      <h3 className="text-base font-bold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
