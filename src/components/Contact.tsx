
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-navy-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="heading-lg mb-6 text-white">Contact Us</h2>
            
            <p className="text-white/80 mb-8 max-w-md">
              Have a question or interested in our creations? We'd love to hear from you. 
              Fill out the form, and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Contact Info</h3>
                  <p className="text-white/60 mt-1">info@procrascreation.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p className="text-white/60 mt-1">Virtual Store - Follow us on Instagram</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M8 21h8"></path>
                    <path d="M12 17v4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Social Media</h3>
                  <a 
                    href="https://www.instagram.com/procrascreation"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-white hover:underline mt-1 inline-block"
                  >
                    @procrascreation
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect p-6 md:p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white/90">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm font-medium text-white/90">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-white/90">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in..."
                  className="mt-1 min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-white hover:bg-white/90 text-navy"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
