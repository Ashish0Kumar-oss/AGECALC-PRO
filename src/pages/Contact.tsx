import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, MapPin, Mail } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call for the static site
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get in Touch</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-slate-50 dark:bg-black p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-slate-500">support@agecalcpro.com</p>
                  <p className="text-sm text-slate-400 mt-1">We aim to respond within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Headquarters</p>
                  <p className="text-slate-500">123 Tech Boulevard<br />San Francisco, CA 94105<br />United States</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-400 font-medium">
              Interactive Map Integration
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500 py-12">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-slate-500">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-semibold underline underline-offset-4 hover:text-slate-500"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
                <input
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold">Subject</label>
                <input
                  id="subject"
                  {...register("subject")}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-4 px-8 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
