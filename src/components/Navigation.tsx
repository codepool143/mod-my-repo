import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Journey", href: "#journey" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg glow-effect"></div>
            <span className="text-lg sm:text-xl font-bold gradient-text">Foundora</span>
            <Badge variant="outline" className="ml-2 px-1.5 sm:px-2 py-0.5 text-xs border-primary/30">
              <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              AI
            </Badge>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => smoothScrollTo(item.href)}
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button variant="outline" className="text-sm border-border/50 hover:bg-card/50">
              Sign In
            </Button>
            <Button className="button-gradient text-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    smoothScrollTo(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                <Button variant="outline" className="w-full border-border/50 hover:bg-card/50">
                  Sign In
                </Button>
                <Button className="w-full button-gradient">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;