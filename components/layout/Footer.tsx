import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/codeguide-logo.png"
              alt="CodeGuide Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-bold">CodeGuide</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, TypeScript, and shadcn/ui.
          </p>
        </div>

        <nav className="flex items-center space-x-6 text-sm">
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80 text-muted-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80 text-muted-foreground"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80 text-muted-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:contact@codeguide.com"
            className="transition-colors hover:text-foreground/80 text-muted-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CodeGuide. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Modern development starter kit
          </p>
        </div>
      </div>
    </footer>
  );
}