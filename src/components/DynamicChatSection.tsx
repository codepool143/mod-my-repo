import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, TrendingUp, DollarSign, CheckCircle, Clock, Users } from "lucide-react";

const aiCoFounders = [
  {
    id: "ceo",
    name: "AI CEO",
    role: "Strategy & Leadership",
    icon: Brain,
    color: "from-primary to-primary-glow",
    status: "Active Now",
    responseTime: "<1s"
  },
  {
    id: "cto",
    name: "AI CTO",
    role: "Technology & Development", 
    icon: Code,
    color: "from-accent-cyan to-accent-cyan/80",
    status: "Active Now",
    responseTime: "<1s"
  },
  {
    id: "cmo",
    name: "AI CMO",
    role: "Marketing & Growth",
    icon: TrendingUp,
    color: "from-accent-pink to-accent-pink/80",
    status: "Active Now",
    responseTime: "<1s"
  },
  {
    id: "cfo",
    name: "AI CFO",
    role: "Finance & Operations",
    icon: DollarSign,
    color: "from-accent-green to-accent-green/80",
    status: "Active Now",
    responseTime: "<1s"
  }
];

const mockChats = [
  { type: "ai", sender: "AI CEO", message: "Let's define your unique value proposition.", avatar: "ceo" },
  { type: "user", message: "What should I focus on first?" },
  { type: "ai", sender: "AI CFO", message: "Here's a financial model you can start with.", avatar: "cfo" },
  { type: "ai", sender: "AI CTO", message: "I'd recommend starting with MVP validation.", avatar: "cto" },
  { type: "user", message: "How do I validate my idea?" },
  { type: "ai", sender: "AI CMO", message: "Let's create a customer discovery plan.", avatar: "cmo" }
];

const recommendedActions = [
  "Build pitch deck",
  "Test MVP idea", 
  "Outline hiring plan",
  "Pricing Strategy",
  "Revenue Model",
  "Unit Economics"
];

const DynamicChatSection = () => {
  const [currentMessages, setCurrentMessages] = useState<typeof mockChats>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCoFounder, setSelectedCoFounder] = useState("ceo");

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < mockChats.length) {
        setIsTyping(true);
        
        setTimeout(() => {
          setCurrentMessages(prev => [...prev, mockChats[currentIndex]]);
          setIsTyping(false);
          setCurrentIndex(prev => prev + 1);
        }, 1500);
      } else {
        // Reset and start over
        setTimeout(() => {
          setCurrentMessages([]);
          setCurrentIndex(0);
        }, 3000);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const getCoFounderById = (id: string) => aiCoFounders.find(cf => cf.id === id);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative particle-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <Badge variant="outline" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-primary/30">
            AI Co-Founder Technology Preview
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-shimmer">
            Experience Real-Time AI Collaboration
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI co-founders work together to solve your startup challenges in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Side - AI Co-Founders List */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Your AI Team</h3>
            {aiCoFounders.map((coFounder) => (
              <Card 
                key={coFounder.id}
                className={`card-gradient border-border/50 p-4 cursor-pointer transition-all duration-300 hover-lift ${
                  selectedCoFounder === coFounder.id ? 'ring-2 ring-primary/50' : ''
                }`}
                onClick={() => setSelectedCoFounder(coFounder.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${coFounder.color} flex items-center justify-center`}>
                    <coFounder.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{coFounder.name}</div>
                    <div className="text-xs text-muted-foreground">{coFounder.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      {coFounder.status}
                    </div>
                    <div className="text-xs text-muted-foreground">{coFounder.responseTime}</div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Metrics */}
            <Card className="card-gradient border-border/50 p-4 mt-6">
              <h4 className="font-semibold mb-3 text-sm">Performance Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Success Rate</span>
                  <span className="text-xs font-semibold text-green-400">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Avg Response Time</span>
                  <span className="text-xs font-semibold">0.8s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Availability</span>
                  <span className="text-xs font-semibold text-green-400">24/7</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Chat Window */}
          <div className="lg:col-span-8">
            <Card className="card-gradient border-border/50 h-[500px] flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-border/50 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">AI Co-Founder Chat</h3>
                  <div className="flex items-center gap-2 text-xs text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    Live Session
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {currentMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-muted text-foreground ml-4'
                          : 'bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mr-4'
                      }`}
                    >
                      {message.type === 'ai' && (
                        <div className="text-xs text-primary font-semibold mb-1">
                          {message.sender}
                        </div>
                      )}
                      <div className="text-sm">{message.message}</div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 p-3 rounded-2xl mr-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Recommended Actions */}
              <div className="border-t border-border/50 p-4">
                <div className="text-xs text-muted-foreground mb-2">Recommended Next Steps:</div>
                <div className="flex flex-wrap gap-2">
                  {recommendedActions.map((action, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-2 py-1 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all cursor-pointer"
                    >
                      {action}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicChatSection;