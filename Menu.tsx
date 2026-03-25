import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Filter, Check } from 'lucide-react';
import { menuItems } from '../data';
import { cn } from '../lib/utils';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filterVeg, setFilterVeg] = useState(false);

  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const vegMatch = !filterVeg || item.isVeg;
    return categoryMatch && vegMatch;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-secondary mb-6">Our Menu</h1>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, prepared with the freshest ingredients and a whole lot of love.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-6 py-2.5 rounded-full font-medium transition-all',
                  activeCategory === category
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-white text-secondary hover:bg-gray-100 border border-gray-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Veg Filter */}
          <button
            onClick={() => setFilterVeg(!filterVeg)}
            className={cn(
              'flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all border',
              filterVeg
                ? 'bg-green-50 border-green-200 text-green-700'
                : 'bg-white border-gray-200 text-secondary hover:bg-gray-50'
            )}
          >
            <Filter size={18} />
            Pure Veg Only
            {filterVeg && <Check size={16} className="ml-1" />}
          </button>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      Popular
                    </div>
                  )}
                  {item.isVeg && (
                    <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                      VEG
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-display font-bold text-secondary leading-tight">{item.name}</h3>
                    <span className="font-bold text-lg text-primary shrink-0">৳{item.price}</span>
                  </div>
                  <p className="text-secondary/60 text-sm mb-6 flex-grow">{item.description}</p>
                  
                  <button className="w-full flex justify-center items-center gap-2 bg-secondary hover:bg-primary text-white py-3 rounded-xl font-medium transition-colors group mt-auto">
                    <ShoppingBag size={18} className="transition-transform group-hover:-translate-y-1" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-secondary/50">No items found matching your filters.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setFilterVeg(false); }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
