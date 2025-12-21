"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">Safawala</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Jaipur's most trusted wedding turban specialists. Bringing royal elegance to your special day since 2004."
              }
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Safawalacom/61579176513014/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/safawalaofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Gallery", "Packages", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Wedding Turban Tying Service</li>
              <li>Safa & Pagdi Tying</li>
              <li>Groom Turban & Sehra</li>
              <li>Feta & Wedding Turban Design</li>
              <li>Barati Safa Service</li>
              <li>Destination Wedding Turbans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Shop No. 12-13, 1st Floor,
                    <br />
                    Near Ramganj Chaupar, Ramganj Bazaar,
                    <br />
                    Jaipur, Rajasthan – 302003, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919725295692"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 97252 95692
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@safawalajaipur.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  info@safawalajaipur.com
                </a>
              </div>

              {/* Removed timings section */}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Wedding Turban Service - All Areas of Jaipur</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            C-Scheme, Vaishali Nagar, Mansarovar, Malviya Nagar, Jagatpura, Raja Park, Sindhi Camp, Civil Lines, Bani Park, Ajmer Road, Tonk Road, JLN Marg, Sanganer, Ganj Katla, Ashok Nagar, Ram Nagar, Kalyan Vihar, Vidhyadhar Nagar, Shyam Nagar, Pal Road, Bahubali, Bapu Nagar, Ganesh Mandi, Lal Kothi, Niwaru Road, Ramganj, Ramesh Nagar, Bijnor Road, Pratap Nagar, Mahavir Nagar, Chaura Rasta, Alwar Bypass, Amber Fort Area, Seven Hills, Four Seasons Valley, Clarks Amer, Nahargarh, Naila Fort, and all surrounding areas of Jaipur
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Destination Wedding Turban Service | ✓ On-site Safa & Pagdi Tying | ✓ Groom & Baraati Coverage
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2025 Safawala. All rights reserved. | Jaipur's Premier Wedding Turban Service
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Wedding turban Jaipur, safa Jaipur, pagdi tying service, groom turban, Rajasthani turban, wedding safa, feta,
        sehra, barati safa, turban rental Jaipur, turban service Jaipur, wedding turban price, turban for groom, best
        turban service Jaipur, custom wedding turban, turban tying near me, groom pagdi, traditional turban Jaipur,
        premium safa design, wedding turban online, turban shop Jaipur, modern pagdi design, ethnic turban, fabric safa,
        gold embroidered turban, bridal groom turban, turban booking Jaipur, same day turban service, professional
        turban tying, handmade safa, silk pagdi, embellished turban, wedding turban rental, groom styling Jaipur
      </div>
    </footer>
  )
}
