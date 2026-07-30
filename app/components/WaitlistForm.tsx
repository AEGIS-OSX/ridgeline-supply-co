"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitWaitlist } from "../actions";

export default function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      submitWaitlist(formData).then((response) => {
        setResult(response);
      });
    });
  }

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {result?.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-[var(--color-iron)]"
          >
            <p className="font-[family-name:var(--font-body)] text-base leading-7">
              {`You're on the list. We'll email you when the next pour opens.`}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-4"
          >
            <label
              htmlFor="email"
              className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-iron)]"
            >
              Get notified before the next pour.
            </label>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                disabled={isPending}
                className="flex-1 px-4 py-3 bg-transparent border border-[var(--color-border)] text-[var(--color-iron)] font-[family-name:var(--font-body)] text-sm leading-6 placeholder:text-[var(--color-border)] focus:outline-none focus:border-[var(--color-oxide)] disabled:opacity-50 rounded-none"
              />
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
              />
              <button
                type="submit"
                disabled={isPending}
                className="px-6 py-3 bg-[var(--color-oxide)] text-[var(--color-canvas)] font-[family-name:var(--font-body)] text-sm leading-6 font-medium hover:bg-[var(--color-oxide-hover)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
              >
                {isPending ? "Joining..." : "Join the Next Pour Waitlist"}
              </button>
            </div>

            <p className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-iron)] opacity-70">
              One email when the pour opens. Nothing else.
            </p>

            <AnimatePresence>
              {result && !result.success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  role="alert"
                  className="text-[var(--color-oxide)] font-[family-name:var(--font-body)] text-sm leading-6"
                >
                  {result.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
