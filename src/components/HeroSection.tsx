import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse float-animation"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-accent-pink/30 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-up">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">AI-Powered Startup Acceleration</span>
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent-cyan" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-up animate-delay-100">
          <span className="block">From Dream to</span>
          <span className="block gradient-text glow-effect">Launch</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-muted-foreground mt-2">
            Guided by Your AI Co-Founder
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed animate-fade-up animate-delay-200 px-4">
          Transform your startup idea into reality with our AI-powered team of specialists. 
          Get expert guidance in strategy, development, marketing, and finance - all in one platform.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-up animate-delay-300">
          <Button size="lg" className="button-gradient px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-border/50 hover:bg-card/50 w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto animate-fade-up animate-delay-400">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Startups Launched</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm sm:text-base text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;