import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How does the AI Co-Founder Team work?",
    answer: "Our AI Co-Founder Team consists of four specialized AI agents - CEO, CTO, CMO, and CFO - each trained on vast amounts of domain-specific knowledge. They work together to provide comprehensive guidance across all aspects of your startup journey, from strategic planning to technical implementation."
  },
  {
    question: "Is Foundora suitable for complete beginners?",
    answer: "Absolutely! Foundora is designed for entrepreneurs at all levels. Our AI guides break down complex concepts into digestible steps, provide templates and frameworks, and offer personalized guidance based on your experience level and industry."
  },
  {
    question: "What makes Foundora different from other startup tools?",
    answer: "Unlike traditional tools that offer static templates or generic advice, Foundora provides dynamic, personalized guidance through AI that understands your specific business context. Our integrated approach means you get strategy, technical, marketing, and financial guidance all in one platform."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle. All your data and progress are preserved across plan changes."
  },
  {
    question: "How accurate and reliable is the AI guidance?",
    answer: "Our AI is trained on successful startup methodologies, market data, and best practices from thousands of successful companies. While AI provides excellent guidance, we always recommend combining it with human judgment and validation from industry experts."
  },
  {
    question: "Do you offer integrations with other tools?",
    answer: "Yes, we integrate with popular tools like Slack, Notion, Google Workspace, and various project management platforms. Our Enterprise plan includes custom integrations and API access for seamless workflow integration."
  },
  {
    question: "Is my business data secure?",
    answer: "Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and comply with industry standards including SOC 2 and GDPR. Your business data is never shared with third parties or used to train other models."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer multiple support channels including email support for all users, priority support for Pro users, and dedicated account management for Enterprise clients. We also provide extensive documentation, video tutorials, and regular webinars."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Got Questions?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Foundora and how it can accelerate your startup journey.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-gradient border border-border/50 rounded-lg px-4 sm:px-6 data-[state=open]:shadow-lg hover-lift transition-all duration-300 animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary transition-all duration-300 py-4 sm:py-6 hover:no-underline group-hover:translate-x-2">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional help */}
        <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 card-gradient rounded-2xl border border-border/50">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Our team is here to help you succeed. Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Badge variant="outline" className="px-4 sm:px-6 py-2 sm:py-3 text-primary border-primary/30 hover:bg-primary/10 cursor-pointer transition-colors">
              Contact Support
            </Badge>
            <Badge variant="outline" className="px-4 sm:px-6 py-2 sm:py-3 border-border/50 hover:bg-card/50 cursor-pointer transition-colors">
              Schedule a Demo
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;