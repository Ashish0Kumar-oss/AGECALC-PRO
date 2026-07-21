export type Theme = "light" | "dark";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export interface AgeCalculationResult {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  nextBirthday: Date;
  countdownDays: number;
  totalDays: number;
  totalMonths: number;
  totalWeeks: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  chineseZodiac: string;
  westernZodiac: string;
  birthstone: string;
  birthDayOfWeek: string;
  isLeapYear: boolean;
  generation: string;
}
