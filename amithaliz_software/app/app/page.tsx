
import { ArrowRight, CheckCircle, Star, Users, Clock, Award, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AnimatedCounter from '@/components/animated-counter'
import ServicePreview from '@/components/service-preview'
import TestimonialCarousel from '@/components/testimonial-carousel'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Empowering Small Businesses Through{' '}
                  <span className="text-blue-600 relative">
                    Smart Technology
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded-full" />
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Transform your business with custom web applications, mobile solutions, and AI-powered tools 
                  that drive growth and compete in today's digital marketplace.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <AnimatedCounter end={150} duration={2000} className="text-2xl font-bold text-blue-600" />
                  <p className="text-sm text-slate-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={200} duration={2000} className="text-2xl font-bold text-blue-600" />
                  <p className="text-sm text-slate-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <p className="text-sm text-slate-600">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="AmithaLiz Software Team Working"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicePreview />

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Small Businesses Choose AmithaLiz
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique challenges facing small businesses and provide 
              tailored technology solutions that deliver real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Affordable Excellence',
                description: 'Enterprise-quality solutions designed for small business budgets with transparent pricing.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Local Focus',
                description: 'We understand the unique challenges facing small and medium businesses in your area.',
                color: 'green'
              },
              {
                icon: Zap,
                title: 'Rapid Delivery',
                description: 'Quick turnaround times that get your business online fast without compromising quality.',
                color: 'purple'
              },
              {
                icon: CheckCircle,
                title: 'Partnership Approach',
                description: 'We\'re not just developers; we\'re your technology partners for long-term success.',
                color: 'orange'
              },
              {
                icon: Clock,
                title: 'Ongoing Support',
                description: 'Comprehensive maintenance and support to keep your systems running smoothly 24/7.',
                color: 'red'
              },
              {
                icon: Star,
                title: 'Proven Results',
                description: 'Track record of helping businesses increase efficiency, revenue, and customer satisfaction.',
                color: 'teal'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-${feature.color}-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 150 successful small businesses who have grown with our technology solutions. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="tel:+14085550127">
                Call (408) 555-0127
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
