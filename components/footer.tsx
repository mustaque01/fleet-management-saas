import { Truck, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Track Package", href: "/track" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "API Docs", href: "/docs" },
    { name: "Status", href: "/status" },
    { name: "Contact Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Security", href: "/security" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-lg">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xl font-bold text-foreground">FleetFlow</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Modern fleet management solutions that help businesses streamline their logistics operations with 
              real-time tracking and intelligent routing.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Follow us on Twitter" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Connect with us on LinkedIn" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="View our GitHub repository" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">support@fleetflow.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">+91 6202699935</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-muted-foreground">
                  123 Business Ave<br />
                  Indore 452010, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 FleetFlow. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
