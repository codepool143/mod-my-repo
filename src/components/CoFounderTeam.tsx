import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, TrendingUp, DollarSign } from "lucide-react";

const coFounders = [
  {
    id: "ceo",
    title: "AI CEO",
    name: "Strategy & Leadership",
    description: "Your strategic partner for business planning, market analysis, and leadership guidance.",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: ["Business Strategy", "Market Analysis", "Leadership Coaching", "Vision Planning"]
  },
  {
    id: "cto",
    title: "AI CTO", 
    name: "Technology & Development",
    description: "Technical expertise for architecture, development, and scaling your product.",
    icon: Code,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    features: ["Technical Architecture", "Code Review", "Scaling Solutions", "Tech Stack Selection"]
  },
  {
    id: "cmo",
    title: "AI CMO",
    name: "Marketing & Growth",
    description: "Growth strategies, brand building, and customer acquisition expertise.",
    icon: TrendingUp,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    features: ["Growth Marketing", "Brand Strategy", "Customer Acquisition", "Analytics"]
  },
  {
    id: "cfo",
    title: "AI CFO",
    name: "Finance & Operations",
    description: "Financial planning, fundraising guidance, and operational efficiency.",
    icon: DollarSign,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    features: ["Financial Planning", "Fundraising", "Budget Management", "Investor Relations"]
  }
];

const CoFounderTeam = () => {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative particle-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Your AI Dream Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-shimmer">
            Meet Your AI Co-Founder Team
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized AI experts working together to turn your startup vision into reality. 
            Each brings unique expertise to accelerate your journey.
          </p>
        </div>

        {/* Co-founder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coFounders.map((coFounder, index) => (
            <Card 
              key={coFounder.id} 
              className={`card-gradient border-border/50 p-4 sm:p-6 hover-lift animate-bounce-in group cursor-pointer relative overflow-hidden transition-all duration-500 hover:min-h-[400px]`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${coFounder.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}>
                <coFounder.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${coFounder.color} group-hover:scale-110 transition-all duration-300`} />
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${coFounder.color.replace('text-', 'bg-')}`}></div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-2">{coFounder.title}</h3>
              <h4 className={`text-base sm:text-lg font-semibold mb-3 ${coFounder.color}`}>
                {coFounder.name}
              </h4>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                {coFounder.description}
              </p>

              {/* Features - Now visible on hover and expand the card */}
              <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h5 className="text-sm font-semibold text-foreground/80 mb-3">Key Features:</h5>
                {coFounder.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center gap-2 transition-all duration-300"
                    style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${coFounder.color.replace('text-', 'bg-')} animate-pulse`}></div>
                    <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover effects */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${coFounder.color.replace('text-', 'bg-')}`}></div>
              <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:animate-bounce"></div>
              <div className="absolute bottom-6 left-4 w-1 h-1 rounded-full bg-accent-cyan/40 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200 group-hover:animate-pulse"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            Ready to assemble your AI dream team?
          </p>
          <Badge variant="outline" className="px-4 sm:px-6 py-2 text-primary border-primary/30 hover:bg-primary/10 cursor-pointer transition-colors">
            Start Building Now →
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CoFounderTeam;