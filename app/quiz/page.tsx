import type { Metadata } from "next";
import QuizPageClient from "@/components/quiz/QuizPageClient";

export const metadata: Metadata = {
  title: "Find your ritual",
  description:
    "Answer a few questions and we’ll suggest a [FORM] renewal formula or stack.",
  robots: { index: false, follow: false },
};

export default function QuizPage() {
  return <QuizPageClient />;
}
