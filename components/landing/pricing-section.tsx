"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individual developers",
    price: "Free",
    features: [
      "Up to 3 projects",
      "Basic AI suggestions",
      "Git integration",
      "Community support",
      "Basic analytics"
    ],
    limitations: [
      "No team collaboration"
    ],
    popular: false,
    buttonText: {
      authenticated: "Go to Dashboard",
      unauthenticated: "Get Started"
    },
    href: {
      authenticated: "/dashboard",
      unauthenticated: "/sign-up"
    }
  },
  {
    name: "Professional",
    description: "For professional developers and small teams",
    price: "$29",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced AI assistant",
      "Advanced Git features",
      "Priority support",
      "Advanced analytics",
      "Team collaboration (up to 5)",
      "Code review tools",
      "Custom integrations"
    ],
    limitations: [],
    popular: true,
    buttonText: {
      authenticated: "Go to Dashboard",
      unauthenticated: "Start Free Trial"
    },
    href: {
      authenticated: "/dashboard",
      unauthenticated: "/sign-up"
    }
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "SSO & advanced security",
      "Dedicated support",
      "Custom workflows",
      "API access",
      "On-premise deployment",
      "SLA guarantee"
    ],
    limitations: [],
    popular: false,
    buttonText: "Contact Sales",
    href: "/contact"
  }
];

interface PricingCardProps {
  plan: typeof pricingPlans[0];
}

function PricingCard({ plan }: PricingCardProps) {
  const { data: session, isPending } = useSession();
  
  const getButtonText = () => {
    if (isPending) return "Loading...";
    
    if (typeof plan.buttonText === 'string') {
      return plan.buttonText;
    }
    
    return session?.user ? plan.buttonText.authenticated : plan.buttonText.unauthenticated;
  };
  
  const getButtonHref = () => {
    if (typeof plan.href === 'string') {
      return plan.href;
    }
    
    return session?.user ? plan.href.authenticated : plan.href.unauthenticated;
  };
  return (
    <Card className={`relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-0 shadow-lg'} hover:shadow-xl transition-all duration-300`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
        <CardDescription className="text-base">{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{plan.price}</span>
          {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
          variant={plan.popular ? "default" : "outline"}
          size="lg"
          asChild
        >
          <Link href={getButtonHref()}>
            {getButtonText()}
          </Link>
        </Button>
        
        <div className="mt-8 space-y-3">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
          {plan.limitations.map((limitation, index) => (
            <div key={index} className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{limitation}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start with our free plan and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include our 30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}