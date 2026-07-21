import { Mail, MapPin, Phone } from "lucide-react";

export function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About AgeCalc Pro</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are dedicated to building the most precise, privacy-focused, and beautifully designed calculation tools on the web.
          </p>
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              In a world filled with cluttered, ad-heavy, and inaccurate web tools, AgeCalc Pro was born out of a desire for simplicity and precision. Our mission is to provide an elegant, professional-grade age calculator that respects user privacy and delivers comprehensive results instantly.
            </p>
            <p>
              We believe that even the simplest tools deserve exceptional design. That's why we've focused on a minimalist Black & White aesthetic, ensuring that the interface gets out of your way and lets the data speak for itself.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-12 h-12 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold">01</span>
            </div>
            <h3 className="font-bold mb-2">Precision</h3>
            <p className="text-sm text-slate-500">Accurate down to the second, handling complex leap year logic effortlessly.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-12 h-12 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold">02</span>
            </div>
            <h3 className="font-bold mb-2">Privacy</h3>
            <p className="text-sm text-slate-500">100% client-side calculation. Your dates never leave your browser.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-12 h-12 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="font-bold">03</span>
            </div>
            <h3 className="font-bold mb-2">Design</h3>
            <p className="text-sm text-slate-500">A premium, distraction-free environment optimized for all devices.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
