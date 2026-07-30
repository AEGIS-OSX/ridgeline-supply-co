"use server";

import { headers } from "next/headers";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitMap = new Map<string, RateLimitEntry>();

function getClientIp(): string {
  const headersList = headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return "anonymous";
}

function sanitizeInput(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

function checkRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return { allowed: true };
  }

  if (entry.count >= 5) {
    return { allowed: false };
  }

  entry.count += 1;
  return { allowed: true };
}

export async function submitWaitlist(formData: FormData): Promise<{ success: boolean; message: string }> {
  const honeypot = formData.get("honeypot") as string | null;

  if (honeypot && honeypot.trim().length > 0) {
    return { success: true, message: `You're on the list. We'll email you when the next pour opens.` };
  }

  const rawEmail = formData.get("email") as string | null;

  if (!rawEmail) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const email = sanitizeInput(rawEmail.trim());

  if (email.length === 0 || !isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const ip = getClientIp();
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  return { success: true, message: `You're on the list. We'll email you when the next pour opens.` };
}
