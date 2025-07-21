import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SwapnSave</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Join thousands of smart shoppers who exchange, sell, and donate their unused coupons. 
              Never let a discount go to waste again.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-primary-foreground hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-primary-foreground hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-primary-foreground hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Browse Coupons</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Post a Coupon</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Safety & Trust</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Report Issue</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Get the latest deals and updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-secondary" />
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-primary-foreground/80">support@swapnsave.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-secondary" />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-primary-foreground/80">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-primary-foreground/80">Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 SwapnSave. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;