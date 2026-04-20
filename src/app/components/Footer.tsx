import { Link } from "react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import logo from "../../assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                <img src={logo} alt="OCO Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">OCO</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Uzbekistan</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading supplier of premium water pump equipment from China with professional installation services across Uzbekistan.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Water Pump Supply</li>
              <li>Professional Installation</li>
              <li>Maintenance & Repair</li>
              <li>Technical Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+998 90 139 55 33</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Send className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>@ocotechpoweradmin</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@oco.uz</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tashkent, Uzbekistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 OCO Uzbekistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
