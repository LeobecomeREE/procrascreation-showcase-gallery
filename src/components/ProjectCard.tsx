
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard = ({ title, description, imageUrl, className }: ProjectCardProps) => {
  return (
    <Card className={cn("overflow-hidden border-none shadow-lg hover-scale group glass-effect", className)}>
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/70 to-transparent p-5 pt-10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white font-playfair text-xl font-medium mb-1">{title}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
