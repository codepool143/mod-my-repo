import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowDown, Lightbulb, Target, Rocket, TrendingUp, Users, Award, Car } from "lucide-react";
import { useEffect, useState } from "react";

const journeySteps = [
  {
    phase: "Stage 1",
    title: "Ideation + Research",
    subtitle: "Is my idea even valid?",
    description: "Market research, competitive analysis, and idea refinement with AI insights.",
    icon: Lightbulb,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    duration: "Week 1-2",
    keyAgents: [
      { role: "CEO", task: "Validate your vision" },
      { role: "CTO", task: "Explore feasibility" },
      { role: "CMO", task: "Check market demand" }
    ],
    helpfulTools: [
      { name: "Case Study Tool", desc: "Generate brand-specific case studies" },
      { name: "Startup News Feed", desc: "Stay updated" }
    ],
    quote: "I used the CEO & CMO agents to compare 3 versions of my idea."
  },
  {
    phase: "Stage 2",
    title: "Planning + Strategy",
    subtitle: "What's my go-to-market plan?",
    description: "Business model canvas, technical architecture, and go-to-market strategy.",
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/10",
    duration: "Week 3-4",
    keyAgents: [
      { role: "CMO", task: "Plan early marketing steps" },
      { role: "CFO", task: "Draft pricing models" },
      { role: "COO", task: "Map out timeline and resource needs" }
    ],
    helpfulTools: [
      { name: "Smart Notes", desc: "Organize insights by theme" }
    ],
    quote: "I asked the CFO to help me choose between freemium vs subscription."
  },
  {
    phase: "Stage 3",
    title: "Building the Product",
    subtitle: "How do I actually build this?",
    description: "MVP development, iterative feedback, and feature prioritization.",
    icon: Rocket,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    duration: "Week 5-12",
    keyAgents: [
      { role: "CTO", task: "Guide tech decisions" },
      { role: "COO", task: "Track execution flow" }
    ],
    helpfulTools: [],
    quote: "The CTO agent helped me prep a spec doc for my freelance developer."
  },
  {
    phase: "Stage 4",
    title: "Fundraising + Pitching",
    subtitle: "How do I raise capital?",
    description: "Launch strategy, customer acquisition, and performance optimization.",
    icon: TrendingUp,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    duration: "Week 13+",
    keyAgents: [
      { role: "Investor Agent", task: "Practice pitching, get skilled" },
      { role: "CFO", task: "Build the cap table, financial model" }
    ],
    helpfulTools: [],
    quote: "The investor agent ripped apart my deck... and rebuilt it stronger."
  },
  {
    phase: "Stage 5",
    title: "Scaling + Hiring",
    subtitle: "How do I grow fast and hire smart?",
    description: "Hiring guidance, operational systems, and scaling infrastructure.",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    duration: "Ongoing",
    keyAgents: [
      { role: "HR Agent", task: "Recruit first team" },
      { role: "COO", task: "Optimize operations" },
      { role: "CMO", task: "Launch campaigns" },
      { role: "CTO", task: "Plan feature roadmap" }
    ],
    helpfulTools: [],
    quote: "I used the HR agent to create job descriptions and offer letters."
  }
];

const StartupJourney = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('journey');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within the section
        if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
          setScrollY(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-cyan to-accent-green opacity-30 transform -translate-x-1/2 z-0"></div>
        
        {/* Moving vehicle */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 ease-out"
          style={{ 
            top: `${20 + (scrollY * 60)}%`,
          }}
        >
          <div className="w-10 h-6 sm:w-12 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
            <Car className="w-5 h-3 sm:w-6 sm:h-4 text-white" />
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Step by Step Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            The Startup Journey — Step by Step
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow a clear, 5-stage path from idea to scale, with AI agents guiding you at every turn.
          </p>
        </div>

        {/* Journey steps */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 relative z-20">
          {journeySteps.map((step, index) => (
            <div 
              key={step.phase}
              className={`flex items-start gap-4 sm:gap-6 lg:gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-background shadow-xl group hover:scale-125 transition-all duration-500`}>
                  <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color} group-hover:scale-110 transition-all duration-300`} />
                </div>
                {/* Phase number */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center animate-pulse">
                  {index + 1}
                </div>
              </div>

              {/* Content card */}
              <Card 
                className={`card-gradient border-border/50 p-4 sm:p-6 lg:p-8 animate-bounce-in group relative overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg ${index % 2 === 0 ? 'ml-auto mr-4 sm:mr-8' : 'mr-auto ml-4 sm:ml-8'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Phase badge */}
                <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs animate-zoom-in" style={{ animationDelay: `${index * 0.3 + 0.1}s` }}>
                  {step.phase}
                </Badge>
                
                {/* Title and subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground italic mb-4">{step.subtitle}</p>

                {/* Key Agents */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    KEY AGENTS
                  </h4>
                  <div className="space-y-2">
                    {step.keyAgents.map((agent, agentIndex) => (
                      <div key={agentIndex} className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full ${step.bgColor} flex items-center justify-center`}>
                          <div className={`w-2 h-2 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                        </div>
                        <div>
                          <span className="text-sm font-medium">{agent.role}</span>
                          <p className="text-xs text-muted-foreground">{agent.task}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Helpful Tools */}
                {step.helpfulTools.length > 0 && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-semibold text-accent-green mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-green"></div>
                      HELPFUL TOOLS
                    </h4>
                    <div className="space-y-2">
                      {step.helpfulTools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded bg-accent-green/10 flex items-center justify-center mt-0.5">
                            <div className="w-3 h-3 rounded bg-accent-green/30"></div>
                          </div>
                          <div>
                            <span className="text-sm font-medium">{tool.name}</span>
                            <p className="text-xs text-muted-foreground">{tool.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quote */}
                <div className="bg-background/50 rounded-lg p-3 sm:p-4 border-l-4 border-primary/50">
                  <p className="text-xs sm:text-sm text-muted-foreground italic">"{step.quote}"</p>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${step.color.replace('text-', 'bg-')}`}></div>
                <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm"></div>
              </Card>

              {/* Connecting arrow (not on last item) */}
              {index < journeySteps.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 sm:-bottom-6 transform -translate-x-1/2 z-20">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-card rounded-full flex items-center justify-center border-2 border-primary/30 animate-bounce">
                    <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 lg:p-8 card-gradient rounded-2xl border border-border/50">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've turned their ideas into thriving businesses with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-4 sm:px-6 py-2 sm:py-3 text-primary border-primary/30 hover:bg-primary/10 cursor-pointer transition-colors">
              Begin Your Startup Journey →
            </Badge>
            <Badge variant="outline" className="px-4 sm:px-6 py-2 sm:py-3 border-border/50 hover:bg-card/50 cursor-pointer transition-colors">
              Schedule a Consultation
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupJourney;