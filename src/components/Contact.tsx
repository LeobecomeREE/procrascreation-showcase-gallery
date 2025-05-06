import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Show loading state
    setIsSubmitting(true);
    try {
      // EmailJS credentials
      const serviceId = "service_b8kulc8";
      const templateId = "template_35yaodd";
      const publicKey = "98Vf9cC3qdcvuXk_r";

      // Send the email
      const result = await emailjs.send(serviceId, templateId, {
        name: values.name,
        email: values.email,
        message: values.message
      }, publicKey);
      console.log("Email sent successfully:", result.text);

      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon."
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error message
      toast({
        title: "Failed to send message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section-padding bg-navy-dark">
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
                  <p className="text-white/60 mt-1">procrascreation</p>
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
                  <a href="https://www.instagram.com/procrascreation" target="_blank" rel="noreferrer" className="text-secondary hover:text-white hover:underline mt-1 inline-block">
                    @procrascreation
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect p-6 md:p-8 rounded-xl shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm font-medium text-white/90">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm font-medium text-white/90">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm font-medium text-white/90">Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="I'm interested in..." className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>} />
                
                <Button type="submit" className="w-full bg-white hover:bg-white/90 text-navy" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;