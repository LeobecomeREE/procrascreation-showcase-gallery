
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80"
                alt="About Procrascreation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-navy p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-playfair text-3xl font-bold">5+</p>
              <p className="text-sm">Years of Creativity</p>
            </div>
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full mb-4">
              About Us
            </span>
            <h2 className="heading-lg mb-6 text-white">The Story Behind Procrascreation</h2>
            
            <p className="text-white/80 mb-4">
              Procrascreation was born from a passion for creativity and a desire to bring unique, handcrafted items to life. 
              Our journey began with a simple idea: to transform everyday objects into works of art that inspire and delight.
            </p>
            
            <p className="text-white/80 mb-6">
              We believe in the power of creation and the joy it brings to both the maker and the recipient. 
              Each piece in our collection is crafted with care, attention to detail, and a touch of imagination.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h3 className="text-secondary font-playfair text-xl font-medium mb-2">Our Mission</h3>
                <p className="text-white/70 text-sm">
                  To create unique, high-quality handcrafted items that bring joy and inspiration to our customers.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h3 className="text-secondary font-playfair text-xl font-medium mb-2">Our Vision</h3>
                <p className="text-white/70 text-sm">
                  To inspire creativity and share our passion for handcrafted art with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
