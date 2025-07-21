import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CouponFeed from "@/components/CouponFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CouponFeed />
      <Footer />
    </div>
  );
};

export default Index;
