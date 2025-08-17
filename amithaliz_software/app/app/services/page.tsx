
import { Code, Smartphone, Brain, CheckCircle, ArrowRight, Globe, ShoppingCart, Search, Zap, MessageSquare, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Our Services - AmithaLiz Software Solutions',
  description: 'Professional web development, mobile app development, and AI solutions for small businesses. Transform your business with our custom technology solutions.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technology Solutions for{' '}
            <span className="text-blue-600">Small Business Success</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            We specialize in creating custom technology solutions that help small businesses 
            compete, grow, and thrive in today's digital marketplace.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Web Development</h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform your business with a professional, mobile-responsive website that drives customers 
                and increases sales. Our web development services help you establish credibility and reach 
                customers 24/7.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Globe, title: 'Responsive Design', description: 'Perfect on all devices' },
                  { icon: ShoppingCart, title: 'E-commerce Integration', description: 'Secure online payments' },
                  { icon: Search, title: 'SEO Optimization', description: 'Get found on Google' },
                  { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast loading' }
                ]?.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <Icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-3">Perfect for:</h4>
                <ul className="space-y-2">
                  {[
                    'Restaurants wanting online ordering',
                    'Service businesses needing appointment booking',
                    'Retail stores expanding online',
                    'Professional practices building credibility'
                  ]?.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Web Development Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section id="mobile-apps" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Mobile App Development</h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Give your customers the convenience they expect with custom mobile applications. 
                Our iOS and Android apps enhance customer experience and keep your business 
                connected with customers wherever they are.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Customer Loyalty Programs',
                    description: 'Build lasting relationships with rewards and special offers',
                    icon: '🏆'
                  },
                  {
                    title: 'Push Notifications',
                    description: 'Keep customers informed about promotions and updates',
                    icon: '📱'
                  },
                  {
                    title: 'Appointment Scheduling',
                    description: 'Let customers book services anytime, anywhere',
                    icon: '📅'
                  },
                  {
                    title: 'Mobile Payments',
                    description: 'Secure, convenient payment processing',
                    icon: '💳'
                  }
                ]?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">AI Solutions for Small Business</h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Leverage artificial intelligence to automate routine tasks, improve customer service, 
                and gain valuable insights. Make your small business smarter and more efficient with AI.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: MessageSquare,
                    title: 'Smart Chatbots',
                    description: 'Automate customer service and FAQs',
                    color: 'blue'
                  },
                  {
                    icon: BarChart3,
                    title: 'Business Analytics',
                    description: 'Data-driven insights for better decisions',
                    color: 'green'
                  },
                  {
                    icon: Zap,
                    title: 'Process Automation',
                    description: 'Streamline repetitive tasks',
                    color: 'orange'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Smart Recommendations',
                    description: 'Personalized customer experiences',
                    color: 'purple'
                  }
                ]?.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <Icon className={`w-8 h-8 text-${feature.color}-600 mb-3`} />
                        <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-3">AI Benefits for Your Business:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    'Reduce customer response time',
                    'Optimize inventory management',
                    'Improve marketing effectiveness',
                    'Automate appointment scheduling',
                    'Enhance customer satisfaction',
                    'Make data-driven decisions'
                  ]?.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="AI Solutions for Business"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Affordable Solutions for Every Budget</h2>
            <p className="text-xl text-slate-600">Transparent pricing designed for small business budgets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                price: 'Starting at $2,999',
                features: [
                  'Custom responsive design',
                  'Content management system',
                  'Basic SEO optimization',
                  '3 months support included',
                  'Mobile-friendly design'
                ]
              },
              {
                title: 'Mobile Apps',
                price: 'Starting at $4,999',
                features: [
                  'iOS & Android versions',
                  'Custom design & features',
                  'App store deployment',
                  '6 months support included',
                  'Push notifications'
                ]
              },
              {
                title: 'AI Solutions',
                price: 'Starting at $1,999',
                features: [
                  'Custom AI implementation',
                  'Training & setup',
                  'Integration support',
                  'Performance monitoring',
                  'Ongoing optimization'
                ]
              }
            ]?.map((plan, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-slate-900">{plan.title}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              All projects include free consultation, project planning, and comprehensive training
            </p>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href="/contact">
                Schedule Your Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
