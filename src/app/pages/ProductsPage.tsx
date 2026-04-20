import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { Filter, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import pump1100 from "../../assets/products/pump-1100w.jpg";
import pump750 from "../../assets/products/pump-750w.jpg";
import pump550 from "../../assets/products/pump-550w.jpg";
import pump370 from "../../assets/products/pump-370w.jpg";
import regulator1000 from "../../assets/products/regulator-1000va.jpg";
import heaterUltra from "../../assets/products/heater-ultra-50l.jpg";
import heaterDay from "../../assets/products/heater-day-50l.jpg";

export function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl);
  const [selectedPower, setSelectedPower] = useState<string>("all");

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const products: any[] = [
    {
      id: "avtomatik-suv-nasosi-1100",
      name: "Avtomatik Suv Nasos 1100W",
      category: "domestic",
      power: "1.1kw",
      flow: "4.8 m³/h",
      head: "55m",
      usage: "100% Copper Winding, 8m Suction",
      image: pump1100,
    },
    {
      id: "avtomatik-suv-nasosi-750",
      name: "Avtomatik Suv Nasos 750W",
      category: "domestic",
      power: "0.75kw",
      flow: "3.4 m³/h",
      head: "50m",
      usage: "100% Copper Winding, 8m Suction",
      image: pump750,
    },
    {
      id: "avtomatik-suv-nasosi-550",
      name: "Avtomatik Suv Nasos 550W",
      category: "domestic",
      power: "0.55kw",
      flow: "2.2 m³/h",
      head: "42m",
      usage: "100% Copper Winding, 8m Suction",
      image: pump550,
    },
    {
      id: "avtomatik-suv-nasosi-370",
      name: "Avtomatik Suv Nasos 370W",
      category: "domestic",
      power: "0.37kw",
      flow: "2.2 m³/h",
      head: "30m",
      usage: "100% Copper Winding, 8m Suction",
      image: pump370,
    },
    {
      id: "stabilizator-dnb-1000va",
      name: "Stabilizator OCO DNB-1000VA",
      category: "accessories",
      power: "1000VA",
      powerLabel: "Capacity",
      flow: "3.6A",
      flowLabel: "Amperage",
      head: "100-260V",
      headLabel: "Input",
      usage: "Relay Voltage Regulator, ±10% precision",
      image: regulator1000,
    },
    {
      id: "heater-ultra-50l",
      name: "Delfin Ultra EJT50L",
      category: "heaters",
      power: "2kw",
      flow: "50 L",
      flowLabel: "Capacity",
      head: "220V",
      headLabel: "Voltage",
      usage: "Electric Water Heater with Temp Control",
      image: heaterUltra,
    },
    {
      id: "heater-day-50l",
      name: "Delfin Day AJ50L",
      category: "heaters",
      power: "2kw",
      flow: "50 L",
      flowLabel: "Capacity",
      head: "220V",
      headLabel: "Voltage",
      usage: "Electric Water Heater",
      image: heaterDay,
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "domestic", label: "Domestic" },
    { value: "industrial", label: "Industrial" },
    { value: "irrigation", label: "Agriculture" },
    { value: "heaters", label: "Water Heaters" },
    { value: "accessories", label: "Accessories" },
  ];

  const powerRanges = [
    { value: "all", label: "All Power Ranges" },
    { value: "low", label: "Up to 1kW" },
    { value: "medium", label: "1-3kW" },
    { value: "high", label: "Above 3kW" },
  ];

  const getPowerCategory = (power: string) => {
    const value = parseFloat(power);
    if (value <= 1) return "low";
    if (value <= 3) return "medium";
    return "high";
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const powerMatch = selectedPower === "all" || getPowerCategory(product.power) === selectedPower;
    return categoryMatch && powerMatch;
  });

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-slate-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm mb-4">
                All Products Include Free Installation
              </div>
              <h1 className="text-4xl md:text-5xl mb-4">Premium Water Pumps</h1>
              <p className="text-lg text-gray-200">
                Direct import from China | Professional installation | Warranty included
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+998901395533"
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Need Help? Call Now
              </a>
              <Link
                to="/contact"
                className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 inline-flex items-center justify-center gap-2"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-16 z-40 border-b-2 border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-accent" />
              <h3 className="text-lg">Filter by:</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-1 md:max-w-2xl">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-lg border-2 border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <select
                value={selectedPower}
                onChange={(e) => setSelectedPower(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-lg border-2 border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                {powerRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              <span className="text-accent">{filteredProducts.length}</span> of {products.length} products
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all group border-2 border-transparent hover:border-accent"
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 rounded-lg text-sm capitalize shadow-lg">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Free Install
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.usage}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="bg-secondary px-2 py-2 rounded-lg text-center">
                      <div className="text-muted-foreground mb-0.5">{product.powerLabel || "Power"}</div>
                      <div className="text-foreground">{product.power}</div>
                    </div>
                    <div className="bg-secondary px-2 py-2 rounded-lg text-center">
                      <div className="text-muted-foreground mb-0.5">{product.flowLabel || "Flow"}</div>
                      <div className="text-foreground">{product.flow}</div>
                    </div>
                    <div className="bg-secondary px-2 py-2 rounded-lg text-center">
                      <div className="text-muted-foreground mb-0.5">{product.headLabel || "Head"}</div>
                      <div className="text-foreground">{product.head}</div>
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
                      className="px-4 py-2.5 border-2 border-border rounded-lg hover:border-accent hover:text-accent transition-all text-sm flex items-center gap-1"
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedPower("all");
                }}
                className="text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Can't Find What You Need?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Our pump specialists will help you choose the perfect model based on your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+998901395533"
              className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Expert: +998 90 139 55 33
            </a>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border-2 border-white/30 inline-flex items-center justify-center gap-2"
            >
              Request Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Expert Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Custom Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Free Installation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
