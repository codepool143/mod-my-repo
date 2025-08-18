import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowDown, Lightbulb, Target, TrendingUp, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";
import rocketImage from "@/assets/rocket-transparent.png";

const journeySteps = [
  {
    phase: "Stage 1",
    title: "Ideation + Research",
    subtitle: "Is my idea even valid?",
    icon: Lightbulb,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
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
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/10",
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
    icon: TrendingUp,
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
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
    icon: Award,
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
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
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
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
  const [rocketDirection, setRocketDirection] = useState('down');

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollY(currentScrollTop);

      // Determine rocket direction
      if (currentScrollTop > lastScrollTop) {
        setRocketDirection('down');
      } else {
        setRocketDirection('up');
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical timeline */}
        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-primary via-accent-cyan to-accent-green opacity-30 transform -translate-x-1/2 z-0" style={{ top: '15%', bottom: '15%' }}></div>

        {/* Section header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <Badge variant="outline" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-primary/30">
            Step by Step Process
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            The Startup Journey — Step by Step
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Follow a clear, 5-stage path from idea to scale, with AI agents guiding you at every turn.
          </p>
        </div>

        {/* Journey Steps - Positioned at screen edges, away from center */}
        <div className="relative">
          {journeySteps.map((step, index) => {
            const progress = Math.max(0, Math.min(1, (scrollY - 100) / (500 * journeySteps.length)));
            const stepProgress = Math.max(0, Math.min(1, (progress * journeySteps.length) - index));
            const isRocketNear = stepProgress > 0.4 && stepProgress < 0.9;
            const shouldHop = stepProgress > 0.5 && stepProgress < 0.8;
            
            return (
              <div
                key={step.phase}
                className={`absolute transition-all duration-500 ${
                  index % 2 === 0 ? 'left-0 sm:left-4 lg:left-8' : 'right-0 sm:right-4 lg:right-8'
                } ${shouldHop ? 'animate-bounce-in' : ''}`}
                style={{
                  top: `${index * 250 + 150}px`,
                  transform: shouldHop ? 'translateY(-30px) scale(1.05)' : 'translateY(0) scale(1)',
                }}
              >
                <Card className={`card-gradient border-border/50 p-4 sm:p-6 w-64 sm:w-72 lg:w-80 transition-all duration-500 ${
                  shouldHop ? 'shadow-2xl border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5' : 'opacity-80'
                }`}>
                  {/* Logo with dark fill when rocket is near */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color.replace('text-', 'from-').replace('text-', 'to-')}/80 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isRocketNear ? 'brightness-75 ring-2 ring-primary/30' : ''
                  }`}>
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {step.phase}
                  </Badge>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">{step.subtitle}</p>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      KEY AGENTS
                    </h4>
                    {step.keyAgents.map((agent, agentIndex) => (
                      <div key={agentIndex} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${step.bgColor} flex items-center justify-center border-2 border-background shadow-md`}>
                          <div className={`w-2 h-2 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                        </div>
                        <div>
                          <span className="text-xs font-semibold">{agent.role}</span>
                          <p className="text-xs text-muted-foreground">{agent.task}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {step.helpfulTools.length > 0 && (
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-accent-green flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
                        HELPFUL TOOLS
                      </h4>
                      {step.helpfulTools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent-green/10 flex items-center justify-center border border-accent-green/20">
                            <div className="w-3 h-3 rounded bg-accent-green/40"></div>
                          </div>
                          <div>
                            <span className="text-xs font-semibold">{tool.name}</span>
                            <p className="text-xs text-muted-foreground">{tool.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <blockquote className="bg-background/50 rounded-lg p-3 border-l-4 border-primary/50">
                    <p className="text-xs text-muted-foreground italic">"{step.quote}"</p>
                  </blockquote>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Moving Rocket - Transparent background */}
        <div
          className="fixed left-1/2 transform -translate-x-1/2 transition-all duration-300 z-10"
          style={{
            top: `${Math.min(400 + (scrollY * 0.5), window.innerHeight - 200)}px`,
            transform: `translateX(-50%) ${rocketDirection === 'up' ? 'scaleY(-1)' : 'scaleY(1)'}`,
          }}
        >
          <div className="relative">
            <img 
              src={rocketImage} 
              alt="Rocket" 
              className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-2xl animate-float"
              style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }}
            />
          </div>
        </div>

        {/* Spacer for cards */}
        <div style={{ height: `${journeySteps.length * 250 + 300}px` }}></div>

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