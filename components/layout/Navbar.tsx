"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  Menu,
  X,
  User,
  Settings,
  LogOut,
  Home,
  Info,
  Mail,
  Github,
  Twitter
} from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { data: session, isPending } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  const getUserInitials = () => {
    if (!session?.user) return "U";
    const user = session.user;
    return user.name
      ? user.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : user.email?.[0]?.toUpperCase() || "U";
  };

  const navigationLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Brand */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/codeguide-logo.png"
            alt="CodeGuide Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="hidden font-bold sm:inline-block">CodeGuide</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Spacer */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Search Button */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Authentication */}
          {isPending ? (
            <div className="h-8 w-16 animate-pulse rounded bg-muted" />
          ) : session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user.image || undefined} alt={session.user.name || "User"} />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {session.user.name && (
                      <p className="font-medium">{session.user.name}</p>
                    )}
                    {session.user.email && (
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {session.user.email}
                      </p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} disabled={isSigningOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  {isSigningOut ? "Signing out..." : "Sign out"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/sign-in">
                  Sign In
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/sign-up">
                  Sign Up
                </Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Search className="h-4 w-4" />
                    </Button>
                    <ThemeToggle />
                  </div>

                  {isPending ? (
                    <div className="h-8 w-16 animate-pulse rounded bg-muted" />
                  ) : session?.user ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={session.user.image || undefined} />
                          <AvatarFallback>{getUserInitials()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{session.user.name}</span>
                          <span className="text-xs text-muted-foreground truncate">
                            {session.user.email}
                          </span>
                        </div>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                      <Button
                        variant="ghost"
                        className="justify-start p-2"
                        onClick={() => {
                          handleSignOut();
                          setMobileMenuOpen(false);
                        }}
                        disabled={isSigningOut}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        {isSigningOut ? "Signing out..." : "Sign out"}
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link
                        href="/sign-in"
                        className="flex justify-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/sign-up"
                        className="flex justify-center rounded-md bg-primary p-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="border-t pt-4">
                    <div className="flex justify-center gap-4">
                      <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}