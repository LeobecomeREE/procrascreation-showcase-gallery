
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="container-custom relative z-10 flex flex-col items-start justify-center py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full mb-6">
            Creative Portfolio
          </span>
          <h1 className="heading-xl mb-6 leading-tight text-white">
            Bringing Your <span className="text-secondary">Creative</span> Ideas to Life
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Welcome to Procrascreation, where creativity never waits for tomorrow.
            Explore our unique handcrafted creations made with passion and dedication.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-navy rounded-full"
              asChild
            >
              <a href="#gallery">Explore Gallery</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#gallery" className="text-white/50 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
