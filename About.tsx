import { motion } from 'motion/react';
import { ChefHat, ShieldCheck, Heart, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-secondary mb-6">Our Story</h1>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto leading-relaxed">
            From a small kitchen dream to Dhaka's favorite dining destination. We believe that great food brings people together.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800" 
              alt="Founders in kitchen" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-gray-100">
              <div className="text-4xl font-display font-bold text-primary mb-2">10+</div>
              <div className="text-secondary/70 font-medium">Years of Culinary<br/>Excellence</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-secondary mb-6">The CookMan Journey</h2>
            <div className="space-y-6 text-lg text-secondary/70 leading-relaxed">
              <p>
                Founded in 2015, CookMan started with a simple mission: to serve premium-quality, restaurant-style meals at prices that make sense for everyday dining.
              </p>
              <p>
                We noticed a gap in the market. You either had to pay a premium for a clean, high-quality meal, or settle for unhygienic street food. We decided to bridge that gap.
              </p>
              <p>
                Today, our team of passionate chefs works tirelessly to craft menus that blend local flavors with international standards, ensuring every bite is a memorable experience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-secondary text-white rounded-3xl p-12 md:p-20 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The principles that guide every dish we serve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <ShieldCheck size={32} />, title: 'Uncompromising Hygiene', desc: 'Our kitchens exceed international safety standards.' },
              { icon: <Leaf size={32} />, title: 'Fresh Ingredients', desc: 'We source locally and never compromise on quality.' },
              { icon: <Heart size={32} />, title: 'Customer First', desc: 'Your satisfaction is our ultimate metric of success.' },
              { icon: <ChefHat size={32} />, title: 'Culinary Passion', desc: 'We love what we do, and you can taste it in our food.' },
            ].map((value, idx) => (
              <div key={idx} className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex justify-center items-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-display font-bold text-secondary mb-6">Meet Our Executive Chef</h2>
            <h3 className="text-2xl text-primary font-display font-bold mb-6">Chef Rahman</h3>
            <div className="space-y-6 text-lg text-secondary/70 leading-relaxed">
              <p>
                With over 15 years of experience in top-tier restaurants across Asia and Europe, Chef Rahman brings a wealth of knowledge and creativity to the CookMan kitchen.
              </p>
              <p>
                "My philosophy is simple: respect the ingredients. When you start with high-quality, fresh produce, you don't need to overcomplicate the dish. Let the natural flavors shine."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800" 
              alt="Executive Chef" 
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
