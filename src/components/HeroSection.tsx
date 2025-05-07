
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-16">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Showcase Your <span className="text-primary">Creative</span> Work With <span className="text-black">Style</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            A beautiful gallery to display your portfolio, photography, art, or any creative work. Make your projects stand out with our stunning showcase platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-2.5 h-auto font-medium"
              asChild
            >
              <a href="#gallery" className="flex items-center gap-2">
                Explore Gallery
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-md border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-6 py-2.5 h-auto font-medium"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="rounded-2xl overflow-hidden shadow-xl transform translate-x-4 translate-y-4">
            <img 
              src="/lovable-uploads/44882744-1d8e-4e92-ac62-1f81eee77a80.png" 
              alt="Art Gallery" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-primary/80 text-white py-2 px-4 rounded-tr-lg">
              <p className="font-medium">Art Categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
