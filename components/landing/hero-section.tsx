"use client";

import { Button } from "@/components/ui/button";
import { AuthButtons, HeroAuthButtons } from "@/components/auth-buttons";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="text-center py-12 sm:py-16 relative px-4" aria-labelledby="hero-heading">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <AuthButtons />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
        <Image
          src="/codeguide-logo.png"
          alt="CodeGuide Logo"
          width={60}
          height={60}
          className="rounded-xl sm:w-[60px] sm:h-[60px] transition-transform hover:scale-105"
          priority
        />
        <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
          Build Better Code, Faster
        </h1>
      </div>
      
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8">
        The modern development platform that helps you write, review, and deploy code with confidence. 
        AI-powered tools, collaborative features, and seamless workflows.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <HeroAuthButtons />
        <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto" asChild>
          <Link href="/docs">
            View Documentation
          </Link>
        </Button>
      </div>
      
      <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
          <div className="text-sm text-muted-foreground">Developers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">1M+</div>
          <div className="text-sm text-muted-foreground">Lines of Code</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
          <div className="text-sm text-muted-foreground">Uptime</div>
        </div>
      </div>
    </div>
  );
}