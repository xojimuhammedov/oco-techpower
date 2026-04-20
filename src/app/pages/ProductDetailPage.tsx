import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle, Truck, Wrench, Phone, ArrowRight, Send, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProductDetailPage() {
  const { id } = useParams();

  const productsData: Record<string, any> = {
    "centrifugal-cp-150": {
      name: "Centrifugal Pump CP-150",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1670843837803-8122fdb3d4c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "High-performance centrifugal pump designed for industrial applications. Features robust construction and reliable operation for continuous duty cycles.",
      specs: {
        power: "1.5 kW",
        voltage: "220V / 380V",
        flow: "150 L/min",
        head: "30 meters",
        inlet: "2 inches",
        outlet: "1.5 inches",
        material: "Cast Iron",
        impeller: "Brass",
      },
      useCases: [
        "Industrial water circulation",
        "Cooling systems",
        "Process water supply",
        "General industrial pumping",
      ],
      features: [
        "Energy-efficient motor",
        "Low noise operation",
        "Corrosion-resistant materials",
        "Easy maintenance design",
        "Thermal overload protection",
        "Sealed bearings for long life",
      ],
    },
    "submersible-sp-200": {
      name: "Submersible Pump SP-200",
      category: "Irrigation",
      image: "https://images.unsplash.com/photo-1693463735697-73df1f35930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Reliable submersible pump perfect for deep well applications and agricultural irrigation. Built to withstand harsh underground conditions.",
      specs: {
        power: "2.2 kW",
        voltage: "380V",
        flow: "200 L/min",
        head: "50 meters",
        diameter: "4 inches",
        cable: "20 meters",
        material: "Stainless Steel",
        stages: "Multi-stage",
      },
      useCases: [
        "Deep well water extraction",
        "Agricultural irrigation",
        "Water transfer",
        "Livestock water supply",
      ],
      features: [
        "Submersible design for quiet operation",
        "Stainless steel construction",
        "Sand-resistant impeller",
        "Built-in check valve",
        "Thermal protection",
        "Float switch compatible",
      ],
    },
    "domestic-dp-100": {
      name: "Domestic Pump DP-100",
      category: "Domestic",
      image: "https://images.unsplash.com/photo-1698031610511-c7a35d121b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Compact and efficient pump ideal for residential water supply. Perfect for homes, apartments, and small-scale applications.",
      specs: {
        power: "0.75 kW",
        voltage: "220V",
        flow: "100 L/min",
        head: "20 meters",
        inlet: "1 inch",
        outlet: "1 inch",
        material: "Cast Iron / Plastic",
        weight: "12 kg",
      },
      useCases: [
        "Home water supply",
        "Garden irrigation",
        "Well pumping",
        "Water tank filling",
      ],
      features: [
        "Compact design",
        "Easy installation",
        "Low power consumption",
        "Quiet operation",
        "Automatic pressure control",
        "Long service life",
      ],
    },
  };

  const product = id && productsData[id] ? productsData[id] : productsData["centrifugal-cp-150"];

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
