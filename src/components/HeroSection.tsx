
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-16">
      {/* 3D Printer animation background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute left-0 w-3/5 h-full">
          <iframe 
            src="https://my.spline.design/3dprinter-apJSr6w4Kyhgw2oHQWxD8bYo/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            className="w-full h-full"
            title="3D Printer Animation Background"
            allow="autoplay"
            onEnded={() => {
              // Force iframe reload to restart animation when it ends
              const iframe = document.querySelector('iframe');
              if (iframe) {
                const src = iframe.src;
                iframe.src = '';
                setTimeout(() => {
                  iframe.src = src;
                }, 100);
              }
            }}
          ></iframe>
        </div>
      </div>
      
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-500/10 to-white/10 pointer-events-none z-10"></div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 relative z-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Where <span className="gradient-text">Procrascreation</span> Meets <span className="text-black">Creativity</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">We create stickers together with 3D printed items</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-primary hover:opacity-90 text-white rounded-md px-6 py-2.5 h-auto font-medium" asChild>
              <a href="#gallery" className="flex items-center gap-2">
                Explore Gallery
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="glass-effect rounded-2xl overflow-hidden shadow-xl transform translate-x-4 translate-y-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-500/20 to-transparent z-10 pointer-events-none"></div>
            <div className="w-full h-[500px] flex items-center justify-center">
              <h3 className="text-2xl font-medium text-blue-800">Featured Projects</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 via-blue-50/30 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
