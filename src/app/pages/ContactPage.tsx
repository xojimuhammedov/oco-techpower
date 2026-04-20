import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, CheckCircle } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-slate-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm mb-4">
              Free Consultation Available
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Get Your Free Quote Today</h1>
            <p className="text-xl text-gray-200 mb-6">
              Talk to our pump specialists • Get expert recommendations • Free installation included
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Response within 30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>15+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>5000+ satisfied clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="tel:+998901395533"
              className="bg-gradient-to-br from-accent to-cyan-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-all shadow-xl group"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                <Phone className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-2">Call Us Now</h3>
              <div className="text-3xl mb-2">+998 90 139 55 33</div>
              <p className="text-sm text-white/90">Mon-Sat, 9AM-6PM • Instant response</p>
            </a>

            <a
              href="https://t.me/ocotechpoweradmin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-primary to-slate-800 p-8 rounded-2xl text-white text-center hover:scale-105 transition-all shadow-xl group"
            >
              <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/40 transition-all">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-2">Message on Telegram</h3>
              <div className="text-3xl mb-2">@ocotechpoweradmin</div>
              <p className="text-sm text-gray-300">24/7 available • Quick replies</p>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-secondary p-6 rounded-xl text-center border-2 border-transparent hover:border-accent transition-all">
              <Mail className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="text-lg mb-1">Email</h3>
              <a href="mailto:info@oco.uz" className="text-accent hover:underline text-lg">
                info@oco.uz
              </a>
              <p className="text-sm text-muted-foreground mt-1">Reply within 24 hours</p>
            </div>

            <div className="bg-secondary p-6 rounded-xl text-center border-2 border-transparent hover:border-accent transition-all">
              <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="text-lg mb-1">Business Hours</h3>
              <p className="text-lg">Monday - Saturday</p>
              <p className="text-sm text-muted-foreground mt-1">9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're here to help you find the perfect water pump solution.
              </p>

              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-accent">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+998 90 139 55 33"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your water pump needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}

              <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-6">Visit Our Office</h2>
              <div className="bg-secondary rounded-xl p-8 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Main Office</h4>
                    <p className="text-muted-foreground">
                      Tashkent, Uzbekistan
                      <br />
                      Chilanzar District
                      <br />
                      Building 12, Office 45
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Phone:</span>
                    <a href="tel:+998901395533" className="text-accent hover:underline">
                      +998 90 139 55 33
                    </a>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Email:</span>
                    <a href="mailto:info@oco.uz" className="text-accent hover:underline">
                      info@oco.uz
                    </a>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Telegram:</span>
                    <a href="https://t.me/ocotechpoweradmin" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      @ocotechpoweradmin
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5989824477564!2d69.2036454!3d41.3115424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OCO Office Location"
                />
              </div>

              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h4 className="mb-3">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We understand that water pump issues can be urgent. Our team is committed to responding to all inquiries within 24 hours during business days. For emergency situations, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">
            Have a question? Check out our most common inquiries below
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-2">Do you offer installation services?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, we provide professional installation services by certified technicians for all our water pumps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-2">What is the warranty period?</h4>
              <p className="text-sm text-muted-foreground">
                All our pumps come with a comprehensive manufacturer warranty, typically 1-2 years depending on the model.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-2">Do you deliver nationwide?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, we deliver to all regions of Uzbekistan with fast and secure shipping services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-2">Can I get a custom quote?</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! Contact us with your specific requirements and we'll provide a tailored solution and quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
