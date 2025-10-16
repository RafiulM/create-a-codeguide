import { Metadata } from "next";
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "CodeGuide - Build Better Code, Faster",
  description: "The modern development platform that helps you write, review, and deploy code with confidence. AI-powered tools, collaborative features, and seamless workflows.",
  openGraph: {
    title: "CodeGuide - Build Better Code, Faster",
    description: "The modern development platform that helps you write, review, and deploy code with confidence. AI-powered tools, collaborative features, and seamless workflows.",
    type: "website",
    url: "https://codeguide.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeGuide - Build Better Code, Faster",
    description: "The modern development platform that helps you write, review, and deploy code with confidence. AI-powered tools, collaborative features, and seamless workflows.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
