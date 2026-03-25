import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Clock, ShieldCheck, Truck, ArrowRight, MapPin, Quote, ChefHat } from 'lucide-react';
import { menuItems, reviews } from '../data';

export default function Home() {
  const featuredItems = menuItems.filter(item => item.isPopular).slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-secondary pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant ambiance" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-hover px-4 py-2 rounded-full font-medium text-sm mb-6 border border-primary/30 backdrop-blur-sm">
                <Star size={16} className="fill-primary text-primary" />
                <span>4.8/5 from 2,000+ Happy Customers</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                Craving Something <span className="text-primary">Extraordinary?</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                Delicious, hygienic, restaurant-quality meals delivered fast and affordably to your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu" 
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-primary/30"
                >
                  Order Now <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/reservation" 
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center transition-colors"
                >
                  Reserve a Table
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6 text-white/70 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-accent" />
                  <span>100% Hygienic Kitchen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={20} className="text-accent" />
                  <span>30-Min Fast Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Featured Menu */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-secondary mb-4">Popular Today 🔥</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">Our most loved dishes, prepared fresh with premium ingredients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-secondary shadow-md">
                    ৳{item.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-secondary">{item.name}</h3>
                    {item.isVeg && (
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">VEG</span>
                    )}
                  </div>
                  <p className="text-secondary/70 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <Link 
                    to="/menu" 
                    className="w-full block text-center bg-secondary hover:bg-primary text-white py-3 rounded-xl font-medium transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors text-lg">
              View Full Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Choose CookMan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800" 
                alt="Chef cooking" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex justify-center items-center">
                    <Star size={32} className="text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-secondary">4.8</div>
                    <div className="text-sm font-medium text-secondary/70">Google Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-secondary mb-6">Why Choose CookMan?</h2>
              <p className="text-lg text-secondary/70 mb-10">
                We believe that great food shouldn't be a luxury. Our mission is to provide premium, restaurant-quality meals that are accessible, fast, and consistently delicious.
              </p>
              
              <div className="flex flex-col gap-6">
                {[
                  { icon: <ChefHat size={24} />, title: 'Fresh Ingredients', desc: 'Sourced daily from local farmers for maximum flavor.' },
                  { icon: <Truck size={24} />, title: 'Fast Delivery', desc: 'Hot and fresh to your door in 30 minutes or less.' },
                  { icon: <ShieldCheck size={24} />, title: 'Hygienic Kitchen', desc: 'Strict safety standards and spotless preparation areas.' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-accent/20 rounded-xl flex justify-center items-center text-accent">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-secondary mb-1">{feature.title}</h4>
                      <p className="text-secondary/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customer Reviews */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Customers Say</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Real feedback from our amazing community of food lovers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <Quote size={40} className="text-primary/40 mb-6" />
                <p className="text-lg mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold font-display">{review.name}</h4>
                    <span className="text-sm text-white/50">{review.date}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location & Delivery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Find Us or Let Us Find You</h2>
              <p className="text-secondary/70 mb-8 text-lg">
                Dine in our cozy restaurant or enjoy our fast delivery service across Dhaka city.
              </p>
              
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex justify-center items-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Restaurant Location</h4>
                    <p className="text-secondary/70">123 Food Street, Gulshan, Dhaka 1212</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex justify-center items-center text-primary shrink-0">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Delivery Zones</h4>
                    <p className="text-secondary/70">Gulshan, Banani, Baridhara, Dhanmondi, Uttara</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                  Get Directions
                </Link>
                <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 min-h-[400px] bg-gray-200 relative">
              {/* Map Placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full font-bold text-secondary shadow-xl flex items-center gap-2">
                  <MapPin className="text-primary" size={20} /> CookMan Location
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Hungry? Order Now in Seconds</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get 15% off your first order! Use code <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded">FIRSTBITE</span> at checkout.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/menu" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-transform hover:scale-105 shadow-xl"
            >
              Order Online Now
            </Link>
            <Link 
              to="/reservation" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
