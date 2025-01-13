import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

import { GiCoffeeBeans, GiCoffeeMug } from "react-icons/gi";

const FloatingImageContentBlock: React.FC = () => {
  // Helper component for menu items that alternates icons
  const MenuItem = ({ title, description, index }: { title: string; description: string; index: number }) => (
    <li className="flex items-start gap-3">
      {index % 2 === 0 ? (
        <GiCoffeeMug className="w-5 h-5 text-[#634232] mt-1 flex-shrink-0" />
      ) : (
        <GiCoffeeBeans className="w-5 h-5 text-[#634232] mt-1 flex-shrink-0" />
      )}
      <span className="text-[#38220f] text-md">
        <strong className="text-[#634232]  font-bold text-xl">{title}</strong>
        {' '}{description}
      </span>
    </li>
  );

  return (
    <section className="relative min-h-screen py-16 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: "url('/assets/pizza-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#f0ceb1]/30" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Decorative Elements */}
            <div className="absolute md:top-6 md:right-12 top-14 right-7 text-[#F7E1BC]">
          
            </div>
            
            <div className="absolute md:top-6 md:left-16 top-9 left-7 text-[#634232]">
             
            </div>

            {/* Header Section */}
            <div className="relative z-10 mb-12 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-6 relative inline-block">
                Delicious Food
                <span className="absolute -top-8 -right-10 rotate-45">
                  <GiCoffeeBeans className="w-15 h-15 text-[#634832]" />
                </span>
              </h2>
              
              <p className="text-xl text-[#634232] max-w-3xl mx-auto leading-relaxed">
              Savor the rich symphony of flavors and textures with our exquisite town-famous pizzas. Indulge in the unparalleled harmony of fresh ingredients and mouthwatering toppings, only found in our delightful pizza creations.
              </p>

              <button className="mt-8 group flex items-center gap-3 bg-[#967259] text-white py-3 px-8 rounded-full mx-auto
                transition-all duration-300 hover:bg-[#F7E1BC] hover:text-[#38220f] transform hover:scale-105 shadow-lg">
                Order Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </div>

            {/* Menu Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-[#634232] text-center mb-12 relative">
                Coming Soon: Our New Food Collection
                <div className="absolute w-24 h-1 bg-[#967259] bottom--4 left-1/2 transform -translate-x-1/2" />
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4">
                      Pizza Selection
                    </h4>
                    <ul className="space-y-4">
                      <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> . Triple Cheese Delight</li>
                      <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> . Cheese Lover’s Supreme</li>
                      <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> . Four Cheese Pesto Pizza</li>
                      <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> . Cheesy Bacon Burst</li>
                      <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> . Cheese & Spinach Alfredo</li>
                    
                    
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4">
                      Specialty Flavors
                    </h4>
                    <ul className="space-y-4">
                    <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> 1. Cheesy Stuffed Crust Pizza</li>
                    <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> 2. Classic Cheese Burger</li>
                    <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> 3. Four Cheese Pasta Bake</li>
                    <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> 4. Cheese Supreme Pizza Burger</li>
                    <li className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4"> 5. Cheese Lover’s Pasta Carbonara</li>
                     
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4">
                     Cheesy Sandwich
                    </h4>
                    <ul className="space-y-4">
                      <MenuItem 
                        title="Cheddar Melt Delight"
                        description="A gooey, melted cheddar cheese sandwich with crispy toasted bread.."
                        index={0}
                      />
                      <MenuItem 
                        title="Cheese Supreme Club"
                        description="A triple-layered sandwich with cheddar, Swiss, and mozzarella, paired with crispy bacon and fresh veggies."
                        index={1}
                      />
                      <MenuItem 
                        title="Grilled Cheese Classic"
                        description="The ultimate comfort food, featuring a perfect melt of mozzarella and cheddar on buttery toasted bread."
                        index={2}
                      />
                    </ul>
                  </div>

                  <div className="relative">
                    <Image
                      src="/assets/banners/7.jpg"
                      alt=" Banner"
                      width={500}
                      height={500}
                      className="w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-2"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#38220f]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#967259] to-[#38220f] mb-4">
                      Other Notable Launches
                    </h4>
                    <ul className="space-y-4 ">
                      <MenuItem 
                        title="Classic Mac and Cheese"
                        description="A creamy blend of cheddar and mozzarella, mixed with perfectly cooked macaroni for a comforting dish."
                        index={0}
                      />
                      <MenuItem 
                        title="Cheese Alfredo Pasta"
                        description="Tender fettuccine pasta smothered in a rich, velvety Alfredo sauce made with parmesan and mozzarella."
                        index={1}
                      />
                      <MenuItem 
                        title="Cheesy Garlic Penne"
                        description="Penne pasta in a luscious garlic butter sauce with melted mozzarella and a sprinkle of parmesan for an extra cheesy kick."
                        index={2}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper functions for descriptions





export default FloatingImageContentBlock;