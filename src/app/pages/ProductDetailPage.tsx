import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle, Truck, Wrench, Phone, ArrowRight, Send, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import pump1100 from "../../assets/products/pump-1100w.jpg";
import pump750 from "../../assets/products/pump-750w.jpg";
import pump550 from "../../assets/products/pump-550w.jpg";
import pump370 from "../../assets/products/pump-370w.jpg";
import regulator1000 from "../../assets/products/regulator-1000va.jpg";
import heaterUltra from "../../assets/products/heater-ultra-50l.jpg";
import heaterDay from "../../assets/products/heater-day-50l.jpg";
export function ProductDetailPage() {
  const { id } = useParams();

  const productsData: Record<string, any> = {
    "avtomatik-suv-nasosi-1100": {
      name: "Avtomatik Suv Nasos 1100W",
      category: "Domestic",
      image: pump1100,
      description: "High-performance automatic water pump with 100% copper winding. Ideal for continuous domestic water supply with high head and excellent flow capacity.",
      specs: {
        power: "1100 W",
        voltage: "220V",
        frequency: "50 Hz",
        max_head: "55 meters",
        flow_capacity: "4.8 m³/h",
        suction_height: "8 meters",
        hole_diameter: "25 mm",
        speed: "3000 RPM",
        material: "100% Copper Winding",
      },
      useCases: ["Home water supply", "Garden irrigation", "Well pumping", "Pressure boosting"],
      features: ["Automatic operation", "100% Copper winding", "Durable construction", "Energy efficient"]
    },
    "avtomatik-suv-nasosi-750": {
      name: "Avtomatik Suv Nasos 750W",
      category: "Domestic",
      image: pump750,
      description: "Efficient automatic water pump perfect for standard residential use. Features an all-copper motor for maximum lifespan.",
      specs: {
        power: "750 W",
        voltage: "220V",
        frequency: "50 Hz",
        max_head: "50 meters",
        flow_capacity: "3.4 m³/h",
        suction_height: "8 meters",
        hole_diameter: "25 mm",
        speed: "3000 RPM",
        material: "100% Copper Winding",
      },
      useCases: ["Residential water supply", "Lawn irrigation", "Shallow well extraction", "Tank filling"],
      features: ["Energy saving 750W motor", "100% Copper winding", "Overheat protection", "Quiet operation"]
    },
    "avtomatik-suv-nasosi-550": {
      name: "Avtomatik Suv Nasos 550W",
      category: "Domestic",
      image: pump550,
      description: "Compact and reliable automatic pump for daily domestic tasks. Built with premium copper winding for safe and continuous running.",
      specs: {
        power: "550 W",
        voltage: "220V",
        frequency: "50 Hz",
        max_head: "42 meters",
        flow_capacity: "2.2 m³/h",
        suction_height: "8 meters",
        hole_diameter: "25 mm",
        speed: "3000 RPM",
        material: "100% Copper Winding",
      },
      useCases: ["Apartment water supply", "Small garden watering", "Secondary pressure boosting"],
      features: ["Stable water pressure", "Compact size", "100% Copper winding", "Easy installation"]
    },
    "avtomatik-suv-nasosi-370": {
      name: "Avtomatik Suv Nasos 370W",
      category: "Domestic",
      image: pump370,
      description: "Economical and compact automatic water pump. Delivers steady flow with minimal power consumption, ideal for light domestic applications.",
      specs: {
        power: "370 W",
        voltage: "220V",
        frequency: "50 Hz",
        max_head: "30 meters",
        flow_capacity: "2.2 m³/h",
        suction_height: "8 meters",
        hole_diameter: "25 mm",
        speed: "3000 RPM",
        material: "100% Copper Winding",
      },
      useCases: ["Light domestic use", "Small scale irrigation", "Secondary circulation"],
      features: ["Highly economical", "100% Copper winding", "Quiet performance", "Long lifespan"]
    },
    "stabilizator-dnb-1000va": {
      name: "Stabilizator OCO DNB-1000VA",
      category: "Accessories",
      image: regulator1000,
      description: "Automated relay-type voltage regulator to protect all your sensitive appliances from voltage fluctuations and electrical surges.",
      specs: {
        capacity: "1000 VA",
        amperage: "3.6 A",
        type: "Relay (Релейный)",
        input_voltage: "100 - 260 V",
        output_voltage: "220 V",
        precision_error: "± 10 %",
        net_weight: "2.35 kg",
        gross_weight: "2.5 kg",
      },
      useCases: ["Protecting water pumps", "Home electronics safety", "Unstable grid areas", "Voltage stabilization"],
      features: ["Wide input range (100-260V)", "Fast relay response", "Safety cut-off", "Digital parameter display"]
    },
    "heater-ultra-50l": {
      name: "Delfin Ultra EJT50L",
      category: "Water Heaters",
      image: heaterUltra,
      description: "Premium electric water heater featuring precise temperature control and high-efficiency insulation to guarantee hot water availability at all times.",
      specs: {
        model: "EJT50L",
        capacity: "50 Liters",
        power: "2 kW",
        voltage: "220 V",
        net_weight: "15 kg",
        gross_weight: "17 kg",
        thermostat: "Temperature Control dial included",
      },
      useCases: ["Residential bathrooms", "Kitchen hot water", "Shower supply", "Consistent heating"],
      features: ["Precision temp control", "50L ample capacity", "Energy-efficient element", "Enhanced insulation"]
    },
    "heater-day-50l": {
      name: "Delfin Day AJ50L",
      category: "Water Heaters",
      image: heaterDay,
      description: "Dependable electric water heater designed for daily use. Ensures rapid heating with a reliable 2kW heating element and compact design.",
      specs: {
        model: "AJ50L",
        capacity: "50 Liters",
        power: "2 kW",
        voltage: "220 V",
        net_weight: "15 kg",
        gross_weight: "17 kg",
        thermostat: "Standard",
      },
      useCases: ["Bathroom hot water", "Kitchen supply", "Daily regular use"],
      features: ["Fast 2kW heating", "Durable inner tank", "50L capacity", "Modern design"]
    },
  };

  const product = id && productsData[id] ? productsData[id] : productsData["avtomatik-suv-nasosi-1100"];

  return (
    <div className="w-full">
      <section className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="sticky top-24">
                <div className="bg-secondary rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="bg-accent text-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Wrench className="w-7 h-7" />
                    <span className="text-xl">FREE Installation Included</span>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Professional setup by certified technicians • Full testing • Performance guarantee
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

              <div className="bg-secondary rounded-xl p-6 mb-8">
                <h2 className="text-2xl mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-b border-border pb-3">
                      <div className="text-sm text-muted-foreground capitalize mb-1">{key.replace(/_/g, " ")}</div>
                      <div className="text-foreground">{value as string}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl mb-4">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl mb-4">Ideal Use Cases</h2>
                <div className="space-y-2">
                  {product.useCases.map((useCase: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-2xl p-8 border-4 border-accent/30 shadow-2xl">
                <div className="inline-block bg-accent px-4 py-2 rounded-lg text-sm mb-4">
                  Special Offer
                </div>
                <h3 className="text-3xl mb-2">Order Today & Get</h3>
                <div className="text-2xl text-accent mb-6">FREE Professional Installation</div>

                <div className="space-y-3 mb-8 bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Premium Chinese import quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Free delivery to your location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Expert installation & testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Full warranty coverage</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+998901395533"
                    className="w-full bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-lg shadow-xl"
                  >
                    <Phone className="w-6 h-6" />
                    Call Now: +998 90 139 55 33
                  </a>
                  <a
                    href="https://t.me/ocotechpoweradmin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border-2 border-white/30 inline-flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-6 h-6" />
                    Order via Telegram
                  </a>
                  <Link
                    to="/contact"
                    className="w-full bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 inline-flex items-center justify-center gap-2"
                  >
                    Request Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="text-center text-sm text-gray-300">
                  <p>✓ Same-day response guaranteed</p>
                  <p>✓ 15+ years trusted service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(productsData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, relatedProduct]) => (
                <Link
                  key={key}
                  to={`/products/${key}`}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all group border border-border"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs mb-3">
                      {relatedProduct.category}
                    </div>
                    <h3 className="text-lg mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center text-accent group-hover:gap-2 transition-all text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
