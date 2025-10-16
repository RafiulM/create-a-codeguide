import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at TechCorp",
    content: "CodeGuide has transformed how our team collaborates. The AI suggestions and real-time features have cut our development time in half while improving code quality.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Freelance Full-Stack Developer",
    content: "As a freelancer, I need tools that are both powerful and easy to use. CodeGuide delivers on both fronts. The Git integration alone is worth the subscription.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Engineering Manager at StartupXYZ",
    content: "We've tried many development tools, but CodeGuide is the first one that our entire team actually loves using. The onboarding was seamless and productivity gains were immediate.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "David Kim",
    role: "CTO at FinTech Innovations",
    content: "The security features and enterprise-grade capabilities give us peace of mind. CodeGuide handles our most sensitive code while keeping our team efficient.",
    rating: 5,
    avatar: "DK"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating 
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who have transformed their workflow with CodeGuide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="mt-4 text-base leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}