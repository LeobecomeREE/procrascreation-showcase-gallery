
import React from "react";
import ProjectCard from "./ProjectCard";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Handcrafted Jewelry",
      description: "Unique handmade pieces crafted with attention to detail and quality materials.",
      imageUrl: "/lovable-uploads/4300d0ff-fc5d-4843-b6c5-6f516aca63f7.png",
    },
    {
      id: 2,
      title: "Custom Illustrations",
      description: "Personalized artwork designed to capture your vision and style.",
      imageUrl: "/lovable-uploads/d670c0a3-5301-4fee-b98f-848243cdf55b.png",
    },
    {
      id: 3,
      title: "Textile Creations",
      description: "Handwoven textiles that blend traditional techniques with modern designs.",
      imageUrl: "/lovable-uploads/7100b34a-2780-422b-99ac-b749d760f807.png",
    },
    {
      id: 4,
      title: "Paper Craft",
      description: "Intricate paper designs and custom stationery for special occasions.",
      imageUrl: "/lovable-uploads/4300d0ff-fc5d-4843-b6c5-6f516aca63f7.png",
    },
    {
      id: 5,
      title: "Ceramic Art",
      description: "Hand-shaped ceramic pieces that combine functionality with artistic expression.",
      imageUrl: "/lovable-uploads/d670c0a3-5301-4fee-b98f-848243cdf55b.png",
    },
    {
      id: 6,
      title: "Digital Creations",
      description: "Modern digital art that pushes the boundaries of creativity.",
      imageUrl: "/lovable-uploads/7100b34a-2780-422b-99ac-b749d760f807.png",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600">
            Discover our most impressive and creative works showcasing innovation and artistic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/procrascreation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            <span>View More on Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
