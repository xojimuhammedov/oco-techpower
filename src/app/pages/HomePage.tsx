import { Link } from "react-router";
import { Droplet, Home, Truck, Wrench, CheckCircle, Users, Award, ArrowRight, Phone, Send, Building2, Tractor, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const useCaseCategories = [
    {
      icon: Home,
      title: "For Home Use",
      slug: "domestic",
      description: "Water supply for houses and apartments",
      useCases: ["Drinking water supply", "Garden irrigation", "Well pumping", "Pressure boosting"],
      image: "https://images.unsplash.com/photo-1698031610511-c7a35d121b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      ctaText: "Find Home Pumps",
    },
    {
      icon: Tractor,
      title: "For Agriculture",
      slug: "irrigation",
      description: "Irrigation systems for farms and fields",
      useCases: ["Crop irrigation", "Deep well extraction", "Water transfer", "Livestock supply"],
      image: "https://images.unsplash.com/photo-1693463735697-73df1f35930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      ctaText: "Find Agriculture Pumps",
    },
    {
      icon: Building2,
      title: "For Industry",
      slug: "industrial",
      description: "Heavy-duty pumps for industrial facilities",
      useCases: ["Factory water supply", "Cooling systems", "High-rise buildings", "Process water"],
      image: "https://images.unsplash.com/photo-1670843837803-8122fdb3d4c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      ctaText: "Find Industrial Pumps",
    },
  ];

  const featuredProducts = [
    {
      id: "centrifugal-cp-150",
      name: "Centrifugal Pump CP-150",
      category: "Industrial",
      power: "1.5 kW",
      flow: "150 L/min",
      image: "https://images.unsplash.com/photo-1670843837803-8122fdb3d4c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "submersible-sp-200",
      name: "Submersible Pump SP-200",
      category: "Irrigation",
      power: "2.2 kW",
      flow: "200 L/min",
      image: "https://images.unsplash.com/photo-1693463735697-73df1f35930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: "domestic-dp-100",
      name: "Domestic Pump DP-100",
      category: "Domestic",
      power: "0.75 kW",
      flow: "100 L/min",
      image: "https://images.unsplash.com/photo-1698031610511-c7a35d121b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Choose Product",
      description: "Select from our extensive range of high-quality water pumps",
    },
    {
      step: "02",
      title: "Delivery",
      description: "Fast and secure delivery across Uzbekistan",
    },
    {
      step: "03",
      title: "Installation",
      description: "Professional installation by certified technicians",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "5000+", label: "Satisfied Clients", icon: Users },
    { value: "100%", label: "Quality Guarantee", icon: Shield },
    { value: "First", label: "Chinese Importer", icon: Droplet },
  ];

  const trustBadges = [
    "Certified Quality Standards",
    "Direct China Import",
    "Professional Installation",
    "Nationwide Delivery",
  ];

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-primary via-primary to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm mb-6">
                <Award className="w-4 h-4" />
                <span>First Chinese Importer Since 2010</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Quality Water Pumps + Expert Installation
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Direct import from China | Professional installation | 15+ years trusted service across Uzbekistan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+998901395533"
                  className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-lg shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +998 90 139 55 33
                </a>
                <a
                  href="https://t.me/ocotechpoweradmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 inline-flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Telegram: @ocotechpoweradmin
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="inline-flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693463735697-73df1f35930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Industrial water pump equipment"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-4 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Delivery Across Uzbekistan</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              <span>Professional Installation Included</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Find the Right Pump for Your Needs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select your use case below to see the best pump solutions with installation service included
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCaseCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-48 bg-secondary overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <Icon className="w-6 h-6" />
                        <h3 className="text-2xl">{category.title}</h3>
                      </div>
                      <p className="text-gray-200 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-3">Perfect for:</div>
                      <ul className="space-y-2">
                        {category.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to={`/products?category=${category.slug}`}
                      className="w-full bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      {category.ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Not sure which pump you need?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent hover:underline text-lg"
            >
              Get Free Expert Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2">Best-Selling Water Pumps</h2>
              <p className="text-muted-foreground">
                Most popular models with installation service included
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all group border-2 border-transparent hover:border-accent"
              >
                <div className="relative h-56 bg-secondary overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 rounded-lg text-sm shadow-lg">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm">
                    + Free Installation
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{product.name}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-secondary px-3 py-2 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-0.5">Power</div>
                      <div className="text-foreground">{product.power}</div>
                    </div>
                    <div className="bg-secondary px-3 py-2 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-0.5">Flow Rate</div>
                      <div className="text-foreground">{product.flow}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 bg-accent text-white px-4 py-2.5 rounded-lg hover:bg-accent/90 transition-all text-center text-sm"
                    >
                      Order Now
                    </Link>
                    <Link
                      to={`/products/${product.id}`}
                      className="px-4 py-2.5 border-2 border-border rounded-lg hover:border-accent hover:text-accent transition-all text-sm"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-slate-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 text-white">
                <div className="inline-block bg-accent px-4 py-2 rounded-lg text-sm mb-6">
                  Our Key Advantage
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">
                  Professional Installation Service Included
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  We don't just sell pumps — we ensure they work perfectly. Every purchase includes expert installation by certified technicians.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg">Certified Technicians</h4>
                      <p className="text-sm text-gray-300">
                        15+ years of installation experience across all pump types
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg">Full Setup & Testing</h4>
                      <p className="text-sm text-gray-300">
                        Complete installation, configuration, and performance testing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg">Training & Support</h4>
                      <p className="text-sm text-gray-300">
                        Learn basic maintenance and get ongoing technical assistance
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+998901395533"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call Installer Now
                </a>
              </div>

              <div className="relative h-full min-h-[400px] lg:min-h-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709804250377-27ce2d57209e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                  alt="Professional installation service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent lg:from-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From choosing your pump to professional installation — we handle everything
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-accent/30">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-accent" />
                  </div>
                )}
                <div className="bg-white p-8 rounded-2xl text-center relative z-10 border-2 border-transparent hover:border-accent transition-all">
                  <div className="relative inline-block mb-6">
                    <div className="w-28 h-28 bg-gradient-to-br from-accent to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                      <span className="text-4xl text-white">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 text-lg shadow-xl"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-slate-900 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm mb-6">
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-5xl mb-6">
            Free Installation + Free Consultation
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Order any water pump this month and get professional installation absolutely free. Plus, our experts will help you choose the perfect model for your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-lg mb-1">Call Us</div>
              <a href="tel:+998901395533" className="text-accent hover:underline">
                +998 90 139 55 33
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Send className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-lg mb-1">Telegram</div>
              <a href="https://t.me/ocotechpoweradmin" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                @ocotechpoweradmin
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-lg mb-1">Response Time</div>
              <div className="text-accent">Within 30 Minutes</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+998901395533"
              className="bg-accent text-white px-10 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-lg shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              Call Now - Get Free Quote
            </a>
            <Link
              to="/products"
              className="bg-white/10 text-white px-10 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border-2 border-white/30 inline-flex items-center justify-center gap-2 text-lg"
            >
              Browse Products
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>15+ Years Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>5000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
