import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">Foundora</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Transforming startup dreams into reality with AI-powered guidance. 
              Your intelligent co-founder team, available 24/7.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "AI Co-Founder Team",
                "Startup Journey",
                "Business Planning",
                "Market Research",
                "Technical Guidance",
                "Pricing"
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Documentation",
                "API Reference",
                "Tutorials",
                "Case Studies",
                "Templates",
                "Community"
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Press Kit",
                "Contact",
                "Support"
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8 card-gradient rounded-2xl border border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Get the latest insights, tips, and updates from the startup world directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
              />
              <Badge className="button-gradient px-4 sm:px-6 py-2 sm:py-3 cursor-pointer whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="mb-6 sm:mb-8 bg-border/50" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <span>© {currentYear} Foundora. All rights reserved.</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Cookie Policy</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current animate-pulse" />
            <span>for entrepreneurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;