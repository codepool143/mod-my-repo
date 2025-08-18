import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowDown, Lightbulb, Target, TrendingUp, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";
import rocketImage from "@/assets/rocket.png";



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
  const [rocketDirection, setRocketDirection] = useState('up');

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const section = document.getElementById('journey');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate progress through the section
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
        setScrollY(progress);

        // Determine rocket direction
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          setRocketDirection('down');
        } else {
          setRocketDirection('up');
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section id="journey" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical timeline */}
        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-primary via-accent-cyan to-accent-green opacity-30 transform -translate-x-1/2 z-0" style={{ top: '7%', bottom: '8%' }}></div>

        {/* Moving Rocket */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-10 transition-all duration-200 ease-out"
          style={{ top: `${scrollY * 85}%` }}
        >
          <div className={`w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 ${rocketDirection === 'down' ? 'rotate-180' : 'rotate-0'}`}>
            <img 
              src={rocketImage} 
              alt="Rocket" 
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        </div>


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

        {/* Journey steps */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 relative z-20">
          {journeySteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const rocketProgress = scrollY * (journeySteps.length + 1);
            const stepProgress = rocketProgress - index;
            const shouldAnimate = stepProgress > 0.5 && stepProgress < 1.5;

            return (
              <div
                key={step.phase}
                className="relative flex items-center w-full min-h-[200px]"
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-background shadow-xl transition-all duration-500 ${
                    shouldAnimate ? 'animate-pulse scale-110' : ''
                  }`}>
                    <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color} transition-all duration-300`} />
                  </div>
                  {/* Phase number */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Left side card */}
                {isLeft && (
                  <Card
                    className={`card-gradient border-border/50 p-4 sm:p-6 lg:p-8 relative overflow-hidden w-full max-w-xs sm:max-w-sm lg:max-w-lg transition-all duration-700 ${
                      shouldAnimate ? 'transform -translate-y-6 shadow-xl shadow-primary/20' : ''
                    }`}
                    style={{
                      marginLeft: '2rem',
                      marginRight: '50%'
                    }}
                  >
                    {/* Phase badge */}
                    <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs animate-zoom-in" style={{ animationDelay: `${index * 0.3 + 0.1}s` }}>
                      {step.phase}
                    </Badge>

                    {/* Title and subtitle */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground italic mb-4">{step.subtitle}</p>

                    {/* Key Agents - Always visible */}
                    <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        KEY AGENTS
                      </h4>
                      <div className="space-y-3">
                        {step.keyAgents.map((agent, agentIndex) => (
                          <div key={agentIndex} className="flex items-center gap-3 animate-scale-in" style={{ animationDelay: `${index * 0.3 + 0.3 + agentIndex * 0.1}s` }}>
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${step.bgColor} flex items-center justify-center border-2 border-background shadow-md`}>
                              <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-semibold">{agent.role}</span>
                              <p className="text-xs text-muted-foreground leading-relaxed">{agent.task}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Helpful Tools - Always visible when available */}
                    {step.helpfulTools.length > 0 && (
                      <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.4}s` }}>
                        <h4 className="text-sm font-semibold text-accent-green mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
                          HELPFUL TOOLS
                        </h4>
                        <div className="space-y-2">
                          {step.helpfulTools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-start gap-3 animate-scale-in" style={{ animationDelay: `${index * 0.3 + 0.5 + toolIndex * 0.1}s` }}>
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-accent-green/10 flex items-center justify-center mt-0.5 border border-accent-green/20">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-accent-green/40"></div>
                              </div>
                              <div>
                                <span className="text-xs sm:text-sm font-semibold">{tool.name}</span>
                                <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="bg-background/50 rounded-lg p-2 sm:p-3 lg:p-4 border-l-4 border-primary/50 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.6}s` }}>
                      <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">"{step.quote}"</p>
                    </div>

                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-lg opacity-5 ${step.color.replace('text-', 'bg-')}`}></div>
                    <div className="absolute -inset-1 rounded-lg opacity-10 bg-gradient-to-r from-primary/10 to-accent/10 blur-sm"></div>
                  </Card>
                )}

                {/* Right side card */}
                {!isLeft && (
                  <Card
                    className={`card-gradient border-border/50 p-4 sm:p-6 lg:p-8 relative overflow-hidden w-full max-w-xs sm:max-w-sm lg:max-w-lg transition-all duration-700 ${
                      shouldAnimate ? 'transform -translate-y-6 shadow-xl shadow-primary/20' : ''
                    }`}
                    style={{
                      marginRight: '2rem',
                      marginLeft: '50%'
                    }}
                  >
                    {/* Phase badge */}
                    <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs animate-zoom-in" style={{ animationDelay: `${index * 0.3 + 0.1}s` }}>
                      {step.phase}
                    </Badge>

                    {/* Title and subtitle */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground italic mb-4">{step.subtitle}</p>

                    {/* Key Agents - Always visible */}
                    <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        KEY AGENTS
                      </h4>
                      <div className="space-y-3">
                        {step.keyAgents.map((agent, agentIndex) => (
                          <div key={agentIndex} className="flex items-center gap-3 animate-scale-in" style={{ animationDelay: `${index * 0.3 + 0.3 + agentIndex * 0.1}s` }}>
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${step.bgColor} flex items-center justify-center border-2 border-background shadow-md`}>
                              <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-semibold">{agent.role}</span>
                              <p className="text-xs text-muted-foreground leading-relaxed">{agent.task}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Helpful Tools - Always visible when available */}
                    {step.helpfulTools.length > 0 && (
                      <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.4}s` }}>
                        <h4 className="text-sm font-semibold text-accent-green mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
                          HELPFUL TOOLS
                        </h4>
                        <div className="space-y-2">
                          {step.helpfulTools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-start gap-3 animate-scale-in" style={{ animationDelay: `${index * 0.3 + 0.5 + toolIndex * 0.1}s` }}>
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-accent-green/10 flex items-center justify-center mt-0.5 border border-accent-green/20">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-accent-green/40"></div>
                              </div>
                              <div>
                                <span className="text-xs sm:text-sm font-semibold">{tool.name}</span>
                                <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="bg-background/50 rounded-lg p-2 sm:p-3 lg:p-4 border-l-4 border-primary/50 animate-fade-in" style={{ animationDelay: `${index * 0.3 + 0.6}s` }}>
                      <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">"{step.quote}"</p>
                    </div>

                    {/* Background glow effect */}
                    <div className={`absolute inset-0 rounded-lg opacity-5 ${step.color.replace('text-', 'bg-')}`}></div>
                    <div className="absolute -inset-1 rounded-lg opacity-10 bg-gradient-to-r from-primary/10 to-accent/10 blur-sm"></div>
                  </Card>
                )}
              </div>
            );
          })}
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