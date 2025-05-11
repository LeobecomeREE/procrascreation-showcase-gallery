
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Set up a timer to refresh the animation every 3 seconds
    const refreshTimer = setInterval(() => {
      if (iframeRef.current) {
        const src = iframeRef.current.src;
        iframeRef.current.src = '';
        setTimeout(() => {
          if (iframeRef.current) {
            iframeRef.current.src = src;
          }
        }, 100);
      }
    }, 3000);

    return () => clearInterval(refreshTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-16">
      {/* 3D Printer animation background - positioned on the right */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute right-0 w-3/5 h-full">
          <iframe 
            ref={iframeRef}
            src="https://my.spline.design/3dprinter-apJSr6w4Kyhgw2oHQWxD8bYo/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            className="w-full h-full" 
            title="3D Printer Animation Background"
            allow="autoplay"
            style={{ position: 'relative' }}
          />
          {/* Overlay to hide the Spline logo */}
          <div className="absolute bottom-0 right-0 bg-white px-3 py-1 rounded-md">
            &nbsp;
          </div>
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
        
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 via-blue-50/30 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
