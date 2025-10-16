import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  GitBranch, 
  Zap, 
  Shield, 
  Users, 
  BarChart 
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "AI-Powered Code Completion",
    description: "Smart code suggestions and completions that understand your context and coding style."
  },
  {
    icon: GitBranch,
    title: "Advanced Git Integration",
    description: "Seamless version control with intelligent branching strategies and merge conflict resolution."
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized workflows and real-time collaboration tools that keep up with your development speed."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security features to keep your code and data safe."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time code reviews, pair programming, and seamless team coordination features."
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Comprehensive code metrics and analytics to improve code quality and team productivity."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-4" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Build Amazing Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to accelerate your development workflow and help you ship better code faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300" role="listitem">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}