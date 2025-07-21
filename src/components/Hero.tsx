import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Share, Save, Smile</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Your 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Unused Coupons</span>
                <br />
                Into Real Value
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of smart shoppers who exchange, sell, and donate their unused coupons. 
                Never let a discount go to waste again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Swapping Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Coupons Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹2M+</div>
                <div className="text-sm text-muted-foreground">Value Saved</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="SwapnSave - Coupon Exchange Platform"
                className="w-full rounded-2xl shadow-hero animate-float"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Community Driven</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Secure & Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};

export default Hero;