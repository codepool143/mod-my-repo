import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Founder Lite",
    description: "Perfect for early-stage entrepreneurs just starting out",
    price: "Free",
    period: "forever",
    icon: Star,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "border-accent-cyan/30",
    popular: false,
    features: [
      "AI CEO strategic guidance",
      "Basic market research",
      "Business model canvas",
      "Community access",
      "Email support"
    ],
    limitations: [
      "Limited AI interactions (50/month)",
      "Basic templates only"
    ]
  },
  {
    name: "Startup Pro",
    description: "Comprehensive solution for serious entrepreneurs",
    price: "$97",
    period: "month",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/50",
    popular: true,
    features: [
      "Full AI Co-Founder Team access",
      "Unlimited AI interactions",
      "Advanced market analysis",
      "Custom business plans",
      "Technical architecture guidance",
      "Marketing strategies",
      "Financial modeling",
      "Priority support",
      "Exclusive workshops"
    ],
    limitations: []
  },
  {
    name: "Enterprise",
    description: "For established companies and accelerators",
    price: "Custom",
    period: "pricing",
    icon: Crown,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/30",
    popular: false,
    features: [
      "Everything in Startup Pro",
      "White-label solution",
      "Custom AI training",
      "Dedicated account manager",
      "API access",
      "Advanced analytics",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment options"
    ],
    limitations: []
  }
];

const PricingSection = () => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const handleCardHover = (planName: string) => {
    setExpandedCards(prev => new Set([...prev, planName]));
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core AI guidance, 
            with advanced features for serious entrepreneurs.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative card-gradient border-border/50 p-4 sm:p-6 lg:p-8 hover-lift animate-bounce-in group cursor-pointer overflow-hidden transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              } ${
                expandedCards.has(plan.name) ? 'min-h-[500px] sm:min-h-[550px]' : 'min-h-[300px] sm:min-h-[350px]'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => handleCardHover(plan.name)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="button-gradient px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                <plan.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${plan.color} group-hover:scale-110 transition-all duration-300`} />
              </div>

              {/* Plan details */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                  {plan.price === "Custom" && (
                    <span className="text-muted-foreground text-base sm:text-lg ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features - Always visible when expanded */}
              <div className={`space-y-2 sm:space-y-3 mb-6 sm:mb-8 transition-all duration-500 ${
                expandedCards.has(plan.name) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h5 className="text-sm font-semibold text-foreground/80 mb-3">Features:</h5>
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-start gap-3 transition-all duration-300"
                    style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                  >
                    <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${plan.color} mt-0.5 flex-shrink-0 animate-pulse`} />
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div 
                    key={limitIndex} 
                    className="flex items-start gap-3 opacity-60 transition-all duration-300"
                    style={{ transitionDelay: `${(plan.features.length + limitIndex) * 0.1}s` }}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="mt-auto">
                <Button 
                  className={`w-full transition-all duration-300 group-hover:scale-105 ${
                    plan.popular 
                      ? 'button-gradient' 
                      : 'border-border/50 hover:bg-card/50'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.price === "Free" ? "Get Started" : 
                   plan.price === "Custom" ? "Contact Sales" : 
                   "Start Free Trial"}
                </Button>
              </div>
              
              {/* Hover effects */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${plan.color.replace('text-', 'bg-')}`}></div>
              <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm"></div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-green" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-green" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-green" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <p className="text-sm sm:text-base text-muted-foreground">
            Need a custom plan? <span className="text-primary hover:underline cursor-pointer">Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;