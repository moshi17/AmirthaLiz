
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="https://cdn.abacus.ai/images/78fd793c-e609-4a53-a6c9-a216b95a4faf.png"
                  alt="AmithaLiz Software Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">AmithaLiz Software</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Empowering small businesses through smart technology solutions. We create custom web applications, 
              mobile apps, and AI tools that drive growth and efficiency.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">1247 Innovation Drive, Suite 300, San Jose, CA 95110</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+14085550127" className="text-slate-300 hover:text-white transition-colors">
                  (408) 555-0127
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:hello@amithaliz.com" className="text-slate-300 hover:text-white transition-colors">
                  hello@amithaliz.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="text-slate-300 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="text-slate-300 hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services#ai-solutions" className="text-slate-300 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Business Hours</span>
            </h4>
            <div className="space-y-2 text-slate-300">
              <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 2:00 PM</div>
              <div>Sunday: Closed</div>
              <div className="text-sm text-blue-400 mt-3">Emergency support available</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 AmithaLiz Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
