import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left Side - Image & Info */}
          <div className="lg:w-5/12 relative bg-secondary text-white p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-display font-bold mb-4">Reserve Your Table</h2>
              <p className="text-white/80 text-lg mb-10">
                Experience the perfect ambiance for your next meal. Book ahead to secure your spot.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center shrink-0">
                    <CheckCircle2 className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Instant Confirmation</h4>
                    <p className="text-white/60 text-sm">Get notified immediately via SMS/Email.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">No Waiting Time</h4>
                    <p className="text-white/60 text-sm">Your table will be ready when you arrive.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center shrink-0">
                    <ShieldCheck className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Safe & Hygienic</h4>
                    <p className="text-white/60 text-sm">Sanitized tables and spaced seating.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-7/12 p-10 md:p-16">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex justify-center items-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-display font-bold text-secondary mb-4">Reservation Confirmed!</h3>
                <p className="text-secondary/70 text-lg mb-8 max-w-md">
                  Thank you for choosing CookMan. We've sent the confirmation details to your phone and email.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-xl font-medium transition-colors"
                >
                  Make Another Booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      placeholder="John Doe"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold text-secondary">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      placeholder="+880 1XXX XXXXXX"
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-sm font-bold text-secondary">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="date" 
                        id="date" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="time" className="text-sm font-bold text-secondary">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select 
                        id="time" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                      >
                        <option value="">Select Time</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                        <option value="20:00">08:00 PM</option>
                        <option value="21:00">09:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guests" className="text-sm font-bold text-secondary">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select 
                        id="guests" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6+">6+ People</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="requests" className="text-sm font-bold text-secondary">Special Requests (Optional)</label>
                  <textarea 
                    id="requests" 
                    rows={3}
                    placeholder="Allergies, high chair needed, anniversary celebration..."
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] shadow-lg shadow-primary/30 mt-4"
                >
                  Confirm Reservation
                </button>
                <p className="text-center text-sm text-secondary/50 mt-2">
                  By booking, you agree to our terms and cancellation policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
