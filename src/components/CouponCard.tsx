import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Star, Heart, Share2, Clock } from "lucide-react";

interface CouponCardProps {
  title: string;
  description: string;
  code: string;
  category: string;
  expiryDate: string;
  owner: string;
  rating: number;
  image?: string;
  type: "trade" | "sell" | "free";
  price?: string;
}

const CouponCard = ({ 
  title, 
  description, 
  code, 
  category, 
  expiryDate, 
  owner, 
  rating, 
  image, 
  type,
  price 
}: CouponCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "sell": return "bg-secondary text-secondary-foreground";
      case "free": return "bg-primary text-primary-foreground";
      default: return "bg-accent text-accent-foreground";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "sell": return price || "For Sale";
      case "free": return "Free";
      default: return "Trade";
    }
  };

  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-primary/10">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge className={`${getTypeColor(type)} font-medium`}>
            {getTypeLabel(type)}
          </Badge>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {image && (
          <div className="w-full h-32 bg-muted rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Code:</span>
            <code className="px-2 py-1 bg-muted rounded text-xs font-mono">
              {code}
            </code>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Expires: {expiryDate}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-muted-foreground">By:</span>
              <span className="font-medium">{owner}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 space-x-2">
        <Button variant="default" size="sm" className="flex-1">
          {type === "sell" ? "Buy Now" : type === "free" ? "Claim" : "Request Trade"}
        </Button>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CouponCard;