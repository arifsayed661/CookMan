import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-secondary mb-6">Get in Touch</h1>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Have a question, feedback, or want to place a large catering order? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex justify-center items-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-secondary mb-2">Call Us</h3>
                <p className="text-secondary/70 mb-1">For orders & reservations:</p>
                <a href="tel:+8801234567890" className="text-primary font-bold hover:underline">+880 1234 567890</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex justify-center items-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-secondary mb-2">Email Us</h3>
                <p className="text-secondary/70 mb-1">For general inquiries:</p>
                <a href="mailto:hello@cookman.com" className="text-primary font-bold hover:underline">hello@cookman.com</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex justify-center items-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-secondary mb-2">Opening Hours</h3>
                <p className="text-secondary/70">Monday - Sunday</p>
                <p className="text-secondary/70 font-medium">11:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex justify-center items-center shrink-0">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-secondary mb-2">WhatsApp</h3>
                <p className="text-secondary/70 mb-2">Quick chat & support:</p>
                <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#20b858] transition-colors">
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-secondary mb-8">Send us a Message</h2>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-secondary">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-secondary">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-bold text-secondary">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="How can we help you?"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-secondary">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Write your message here..."
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-secondary hover:bg-primary text-white py-4 rounded-xl font-bold text-lg transition-colors flex justify-center items-center gap-2 mt-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Map location" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 pointer-events-auto">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex justify-center items-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">CookMan Restaurant</h4>
                    <p className="text-sm text-secondary/70">123 Food Street, Gulshan, Dhaka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
