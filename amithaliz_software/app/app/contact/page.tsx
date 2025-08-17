
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'

export const metadata = {
  title: 'Contact Us - AmithaLiz Software Solutions',
  description: 'Get in touch with AmithaLiz Software for your web development, mobile app, and AI solution needs. Free consultation available for small businesses.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Build Something{' '}
            <span className="text-blue-600">Amazing Together</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Ready to transform your business with technology? We're here to help. 
            Get your free consultation and discover how we can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="tel:+14085550127">Call (408) 555-0127</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href="mailto:hello@amithaliz.com">Email Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  We're here to answer your questions and discuss how we can help 
                  your business succeed with technology solutions.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                        <p className="text-slate-600 mb-2">Call us for immediate assistance</p>
                        <a href="tel:+14085550127" className="text-blue-600 hover:text-blue-700 font-medium">
                          (408) 555-0127
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600 mb-2">Send us your project details</p>
                        <a href="mailto:hello@amithaliz.com" className="text-blue-600 hover:text-blue-700 font-medium">
                          hello@amithaliz.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                        <p className="text-slate-600 mb-2">Visit us in person</p>
                        <p className="text-slate-700">
                          1247 Innovation Drive, Suite 300<br />
                          San Jose, CA 95110
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="bg-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 mt-3 border-t border-slate-200">
                      <p className="text-blue-600 font-medium">Emergency support available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. Simple websites typically take 2-4 weeks, while complex applications can take 2-4 months. We provide detailed timelines during consultation.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes! We provide comprehensive support packages including maintenance, updates, and technical support. All projects include initial support, and we offer extended plans for long-term partnerships.'
              },
              {
                question: 'Can you work with our existing systems?',
                answer: 'Absolutely. We specialize in integrations and can work with most existing business systems, databases, and third-party services to ensure seamless operations.'
              },
              {
                question: 'What makes you different from other developers?',
                answer: 'We focus exclusively on small businesses, understanding their unique challenges and budget constraints. We provide enterprise-quality solutions at affordable prices with personalized service.'
              },
              {
                question: 'Do you provide training for our staff?',
                answer: 'Yes, comprehensive training is included with every project. We ensure your team is comfortable using the new systems through in-person or virtual training sessions.'
              },
              {
                question: 'What if we need changes after launch?',
                answer: 'We include a revision period with every project, and offer flexible support packages for ongoing changes and improvements as your business grows.'
              }
            ]?.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait to transform your business. Schedule your free consultation today 
            and take the first step toward digital success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="#contact-form">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
