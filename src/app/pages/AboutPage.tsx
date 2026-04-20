import { Droplet, Target, Award, Users, Wrench, Truck, CheckCircle, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started as one of the first water pump importers from China to Uzbekistan",
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Introduced professional installation services to complement our product line",
    },
    {
      year: "2016",
      title: "Market Leader",
      description: "Became the trusted name in water pump solutions across Uzbekistan",
    },
    {
      year: "2020",
      title: "Service Network",
      description: "Established comprehensive service network covering all regions",
    },
    {
      year: "2026",
      title: "Innovation",
      description: "Continuing to bring cutting-edge pump technology to our customers",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We import only premium-grade pumps from certified Chinese manufacturers",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority - from selection to after-sales support",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Proven track record of delivering dependable solutions for 15+ years",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Staying ahead with the latest pump technology and installation techniques",
    },
  ];

  const services = [
    {
      icon: Droplet,
      title: "Premium Import",
      description: "Direct import of high-quality water pumps from leading Chinese manufacturers. We carefully select our partners to ensure every product meets international standards.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Efficient logistics network ensures quick and secure delivery to all regions of Uzbekistan. Track your order and receive it at your doorstep.",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Our certified technicians provide expert installation services. We ensure proper setup, optimal performance, and teach you basic maintenance procedures.",
    },
    {
      icon: CheckCircle,
      title: "After-Sales Support",
      description: "Comprehensive warranty coverage and ongoing technical support. We're here to help whenever you need assistance with your water pump system.",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-slate-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">About OCO</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Your trusted partner in water pump solutions since 2010
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm mb-6">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl mb-6">Pioneering Excellence in Water Solutions</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, OCO was established with a clear vision: to bring premium quality water pump equipment from China to Uzbekistan. As one of the first companies in the market to focus on Chinese imports, we recognized the potential of combining superior manufacturing with local expertise.
                </p>
                <p>
                  What started as a simple import business has evolved into a comprehensive water solutions provider. We don't just sell pumps - we deliver complete solutions including professional installation, maintenance, and ongoing support.
                </p>
                <p>
                  Over the past 15 years, we've built strong relationships with leading Chinese manufacturers, ensuring our customers receive only the highest quality products. Our team of certified technicians has installed thousands of pumps across Uzbekistan, from small domestic units to large industrial systems.
                </p>
                <p>
                  Today, OCO stands as a trusted name in the industry, known for reliability, expertise, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693463735697-73df1f35930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Water pump installation"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guided by principles that drive excellence in everything we do
            </p>
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Target className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-2xl mb-3">Our Mission</h3>
                <p className="text-gray-200 text-lg">
                  To provide Uzbekistan with world-class water pump solutions by combining premium Chinese manufacturing with local expertise and exceptional service. We strive to make reliable water access effortless for homes, farms, and industries across the nation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              15 years of growth, innovation, and service excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-secondary p-6 rounded-xl inline-block">
                      <div className="text-3xl text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white relative z-10 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions from import to installation and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl">
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709804250377-27ce2d57209e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Professional installation team"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Why Choose OCO?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">First Mover Advantage</h4>
                    <p className="text-muted-foreground text-sm">
                      As pioneers in the Chinese pump import market, we have established relationships and expertise unmatched in the industry
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">
                      Every pump is tested and certified to meet international quality standards before reaching our customers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Expert Installation</h4>
                    <p className="text-muted-foreground text-sm">
                      Our certified technicians ensure optimal installation, maximizing pump performance and longevity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Nationwide Coverage</h4>
                    <p className="text-muted-foreground text-sm">
                      Serving customers across all regions of Uzbekistan with fast delivery and local support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Long-term Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive warranties and ongoing technical assistance for peace of mind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
