import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addYears,
  isLeapYear as fnsIsLeapYear,
} from "date-fns";
import { AgeCalculationResult } from "../types";

export function calculateAge(birthDate: Date, targetDate: Date = new Date()): AgeCalculationResult {
  // Ensure we don't calculate negative age if target is before birth
  if (targetDate < birthDate) {
    throw new Error("Target date must be after birth date");
  }

  const years = differenceInYears(targetDate, birthDate);
  const dateAfterYears = addYears(birthDate, years);
  
  const months = differenceInMonths(targetDate, dateAfterYears);
  const dateAfterMonths = new Date(dateAfterYears);
  dateAfterMonths.setMonth(dateAfterMonths.getMonth() + months);
  
  const weeks = differenceInWeeks(targetDate, dateAfterMonths);
  const dateAfterWeeks = new Date(dateAfterMonths);
  dateAfterWeeks.setDate(dateAfterWeeks.getDate() + weeks * 7);
  
  const days = differenceInDays(targetDate, dateAfterWeeks);
  const dateAfterDays = new Date(dateAfterWeeks);
  dateAfterDays.setDate(dateAfterDays.getDate() + days);

  const hours = differenceInHours(targetDate, dateAfterDays);
  const dateAfterHours = new Date(dateAfterDays);
  dateAfterHours.setHours(dateAfterHours.getHours() + hours);

  const minutes = differenceInMinutes(targetDate, dateAfterHours);
  const dateAfterMinutes = new Date(dateAfterHours);
  dateAfterMinutes.setMinutes(dateAfterMinutes.getMinutes() + minutes);

  const seconds = differenceInSeconds(targetDate, dateAfterMinutes);

  // Total differences
  const totalDays = differenceInDays(targetDate, birthDate);
  const totalMonths = differenceInMonths(targetDate, birthDate);
  const totalWeeks = differenceInWeeks(targetDate, birthDate);
  const totalHours = differenceInHours(targetDate, birthDate);
  const totalMinutes = differenceInMinutes(targetDate, birthDate);
  const totalSeconds = differenceInSeconds(targetDate, birthDate);

  // Next birthday
  let nextBirthday = new Date(birthDate);
  nextBirthday.setFullYear(targetDate.getFullYear());
  if (nextBirthday < targetDate) {
    nextBirthday.setFullYear(targetDate.getFullYear() + 1);
  }
  const countdownDays = differenceInDays(nextBirthday, targetDate);

  // Zodiacs
  const chineseZodiac = getChineseZodiac(birthDate.getFullYear());
  const westernZodiac = getWesternZodiac(birthDate.getMonth() + 1, birthDate.getDate());
  
  // Birthstone
  const birthstone = getBirthstone(birthDate.getMonth() + 1);
  
  // Birth day of week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const birthDayOfWeek = daysOfWeek[birthDate.getDay()];

  // Leap year
  const isLeapYear = fnsIsLeapYear(birthDate);

  // Generation
  const generation = getGeneration(birthDate.getFullYear());

  return {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
    nextBirthday,
    countdownDays,
    totalDays,
    totalMonths,
    totalWeeks,
    totalHours,
    totalMinutes,
    totalSeconds,
    chineseZodiac,
    westernZodiac,
    birthstone,
    birthDayOfWeek,
    isLeapYear,
    generation
  };
}

function getChineseZodiac(year: number): string {
  const animals = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
  return animals[year % 12];
}

function getWesternZodiac(month: number, day: number): string {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

function getBirthstone(month: number): string {
  const stones = [
    "Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl", 
    "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"
  ];
  return stones[month - 1];
}

function getGeneration(year: number): string {
  if (year >= 2013) return "Gen Alpha";
  if (year >= 1997) return "Gen Z";
  if (year >= 1981) return "Millennial (Gen Y)";
  if (year >= 1965) return "Gen X";
  if (year >= 1946) return "Baby Boomer";
  if (year >= 1928) return "Silent Generation";
  return "Greatest Generation";
}
