import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import CouponCard from "./CouponCard";
import { Search, Filter, SortAsc, Grid, List } from "lucide-react";

const CouponFeed = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample coupon data
  const coupons = [
    {
      id: 1,
      title: "Amazon 20% Off Electronics",
      description: "Get 20% discount on electronics worth ₹1000 and above. Valid on selected items only.",
      code: "ELECT20",
      category: "Electronics",
      expiryDate: "2024-01-15",
      owner: "RahulK",
      rating: 4.8,
      type: "trade" as const,
    },
    {
      id: 2,
      title: "Zomato ₹200 Off",
      description: "₹200 off on orders above ₹500. Valid for first-time users only.",
      code: "FIRST200",
      category: "Food",
      expiryDate: "2024-01-20",
      owner: "PriyaS",
      rating: 4.6,
      type: "sell" as const,
      price: "₹50",
    },
    {
      id: 3,
      title: "Myntra Free Shipping",
      description: "Free shipping on all orders. No minimum order value required.",
      code: "FREESHIP",
      category: "Fashion",
      expiryDate: "2024-02-01",
      owner: "AnkitM",
      rating: 4.9,
      type: "free" as const,
    },
    {
      id: 4,
      title: "BookMyShow ₹100 Off",
      description: "Get ₹100 off on movie tickets. Valid on weekdays only.",
      code: "MOVIE100",
      category: "Entertainment",
      expiryDate: "2024-01-25",
      owner: "SarahJ",
      rating: 4.7,
      type: "trade" as const,
    },
    {
      id: 5,
      title: "Domino's Buy 1 Get 1",
      description: "Buy 1 large pizza and get 1 medium pizza free. Limited time offer.",
      code: "BOGO",
      category: "Food",
      expiryDate: "2024-01-18",
      owner: "VikasR",
      rating: 4.5,
      type: "sell" as const,
      price: "₹30",
    },
    {
      id: 6,
      title: "Flipkart 15% Cashback",
      description: "Get 15% cashback on home appliances. Maximum cashback ₹500.",
      code: "HOME15",
      category: "Home",
      expiryDate: "2024-02-10",
      owner: "NeetuP",
      rating: 4.8,
      type: "free" as const,
    },
  ];

  const categories = ["All", "Electronics", "Food", "Fashion", "Entertainment", "Home", "Travel", "Health"];

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || coupon.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Discover Amazing Coupons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through thousands of coupons shared by our community. Find exactly what you need or share what you have.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search and View Toggle */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search coupons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewType === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewType("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewType === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewType("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Filter Options */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="expiry">Expiry Date</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price">Price: Low to High</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="trade">Trade</SelectItem>
                <SelectItem value="sell">For Sale</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCoupons.length} coupon{filteredCoupons.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Coupon Grid */}
        <div className={`grid gap-6 ${
          viewType === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredCoupons.map((coupon) => (
            <CouponCard key={coupon.id} {...coupon} />
          ))}
        </div>

        {/* Load More */}
        {filteredCoupons.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Coupons
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCoupons.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No coupons found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button variant="default">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CouponFeed;