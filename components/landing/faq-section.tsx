import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does CodeGuide's AI code completion work?",
    answer: "CodeGuide uses advanced machine learning models trained on millions of code repositories to provide contextually relevant suggestions. It analyzes your codebase structure, coding patterns, and current context to offer intelligent completions that match your style and requirements."
  },
  {
    question: "Can I use CodeGuide with my existing projects?",
    answer: "Yes! CodeGuide integrates seamlessly with popular IDEs like VS Code, JetBrains IDEs, and more. It works with all major programming languages and frameworks. You can easily import existing Git repositories and start using CodeGuide's features immediately."
  },
  {
    question: "Is my code secure and private?",
    answer: "Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your code is never shared with other users, and our AI models run on secure, isolated infrastructure. For Enterprise customers, we also offer on-premise deployment options."
  },
  {
    question: "How does team collaboration work?",
    answer: "CodeGuide offers real-time collaboration features including live code sharing, pair programming, and synchronized code reviews. Team members can work on the same codebase simultaneously, see each other's changes in real-time, and communicate through built-in chat and video features."
  },
  {
    question: "What programming languages are supported?",
    answer: "CodeGuide supports 50+ programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, Swift, Kotlin, and many more. Our AI models are continuously trained to improve support for both popular and emerging languages."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. We also offer a 30-day money-back guarantee for all paid plans if you're not completely satisfied."
  },
  {
    question: "Do you offer discounts for students or open-source projects?",
    answer: "Yes! We offer free Professional plans for students and educators with valid academic credentials. We also provide special discounts for open-source projects and non-profit organizations. Contact our support team to learn more about these programs."
  },
  {
    question: "How does CodeGuide compare to other development tools?",
    answer: "CodeGuide combines the best features of multiple tools in one integrated platform. Unlike standalone code editors or basic IDE extensions, we offer AI-powered assistance, advanced Git management, team collaboration, and comprehensive analytics—all in one seamless experience designed to boost productivity."
  }
];

export function FaqSection() {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/20 dark:to-blue-900/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't see your question here, feel free to{' '}
            <a 
              href="mailto:support@codeguide.dev" 
              className="text-blue-600 hover:text-blue-700 underline"
              aria-label="Contact support team via email"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white dark:bg-gray-800 rounded-lg border-0 shadow-sm hover:shadow-md transition-shadow duration-300 px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}