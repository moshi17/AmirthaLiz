
import { ExternalLink, ArrowRight, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Our Portfolio - AmithaLiz Software Success Stories',
  description: 'See how AmithaLiz Software has helped small businesses grow with custom web development, mobile apps, and AI solutions. Real results from real clients.',
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: 'Bella Vista Restaurant',
      category: 'Web Development',
      description: 'Modern dining experience with online reservations and menu showcase',
      image: 'https://s3-alpha.figma.com/hub/file/6106048976/1ddaf391-3e50-4870-9fd7-5d26b6ecf11c-cover.png',
      results: [
        { label: 'Reservations', value: '+40%' },
        { label: 'Takeout Orders', value: '+25%' },
        { label: 'Customer Engagement', value: 'High' }
      ],
      technologies: ['React', 'Node.js', 'Reservation System', 'Payment Integration'],
      challenge: 'Local family restaurant needed an online presence to compete with chain restaurants and enable online reservations.',
      solution: 'Developed a stunning responsive website featuring online table reservations, menu showcase, and integration with food delivery platforms.',
      link: '#'
    },
    {
      title: 'QuickFix Plumbing',
      category: 'Mobile App',
      description: 'Mobile scheduling app for efficient service management',
      image: 'https://www.pipeapp.co.uk/wp-content/uploads/2024/10/Features-Page-Overview--1024x576.png',
      results: [
        { label: 'Scheduling Conflicts', value: '-60%' },
        { label: 'Customer Satisfaction', value: '+35%' },
        { label: 'Time Saved', value: '10hrs/week' }
      ],
      technologies: ['React Native', 'GPS Tracking', 'Real-time Updates', 'Payment Processing'],
      challenge: 'Growing plumbing service needed efficient scheduling system to manage emergency calls and routine appointments.',
      solution: 'Created mobile app allowing customers to book services, track technician arrival, and manage billing with GPS integration.',
      link: '#'
    },
    {
      title: 'StyleHub Boutique',
      category: 'E-commerce',
      description: 'Complete e-commerce platform with personalized shopping experience',
      image: 'https://images.ctfassets.net/lzny33ho1g45/78B8YPMVGUMAPbgbyyjXYG/3cc006ef3dc811c9a0ee00c15b809200/image22.png',
      results: [
        { label: 'Online Sales', value: '+300%' },
        { label: 'Customer Base', value: 'Nationwide' },
        { label: 'Inventory Management', value: '-50% time' }
      ],
      technologies: ['Next.js', 'Stripe', 'Inventory Management', 'AI Recommendations'],
      challenge: 'Local clothing boutique wanted to expand sales online while maintaining personalized customer service.',
      solution: 'Built comprehensive e-commerce website with virtual styling consultations, size recommendation engine, and seamless inventory management.',
      link: '#'
    },
    {
      title: 'Wellness Family Practice',
      category: 'Healthcare Platform',
      description: 'HIPAA-compliant patient portal with telemedicine integration',
      image: 'https://uizard.io/static/8802732bfa5d89ab716a038f698b209b/a8e47/5a51aa1a16ee845d2f21d1e1e61a748f3d64506c-1440x835.png',
      results: [
        { label: 'Phone Calls', value: '-50%' },
        { label: 'No-shows', value: '-30%' },
        { label: 'Patient Satisfaction', value: 'Improved' }
      ],
      technologies: ['HIPAA Compliance', 'Telemedicine', 'Appointment Scheduling', 'Secure Messaging'],
      challenge: 'Medical practice needed secure patient communication system and online appointment booking to improve efficiency.',
      solution: 'Developed HIPAA-compliant patient portal with appointment scheduling, secure messaging, and telemedicine integration.',
      link: '#'
    },
    {
      title: 'FitCore Studio',
      category: 'Mobile App',
      description: 'Class booking system with member engagement features',
      image: 'https://simplybook.me/build/images/video-tutorials/categories/video-mockup__sport.f66f28c1.png',
      results: [
        { label: 'Class Attendance', value: '+45%' },
        { label: 'Member Retention', value: '+30%' },
        { label: 'Community Engagement', value: 'Enhanced' }
      ],
      technologies: ['React Native', 'Payment Integration', 'Social Features', 'Workout Tracking'],
      challenge: 'Fitness studio struggled with manual class scheduling and wanted to improve member retention through better engagement.',
      solution: 'Created mobile app with class booking, workout tracking, member challenges, and social features with payment processing.',
      link: '#'
    },
    {
      title: 'Sweet Dreams Bakery',
      category: 'E-commerce',
      description: 'Custom cake ordering platform with visual designer',
      image: 'https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/b1077688b07e3ec35f43af3a8eca03df15fbd985feb94060005df5e2043c3f751717680936799.jpg',
      results: [
        { label: 'Custom Orders', value: '+70%' },
        { label: 'Catering Business', value: 'Expanded' },
        { label: 'Order Processing', value: 'Streamlined' }
      ],
      technologies: ['Visual Designer', 'Automated Pricing', 'Delivery Scheduling', 'Social Integration'],
      challenge: 'Artisan bakery needed online ordering system for custom cakes and catering with complex pricing and scheduling.',
      solution: 'Built custom ordering platform with visual cake designer, automated pricing calculator, and delivery scheduling.',
      link: '#'
    },
    {
      title: 'HomeFinder Realty',
      category: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with MLS integration',
      image: 'https://justcoded.com/wp-content/uploads/2019/06/building-a-website-for-a-real-estate-agent-3-1100x625.png',
      results: [
        { label: 'Qualified Leads', value: '+200%' },
        { label: 'Conversion Rate', value: 'Improved' },
        { label: 'Professional Credibility', value: 'Enhanced' }
      ],
      technologies: ['MLS Integration', 'Virtual Tours', 'Lead Capture', 'Mortgage Calculator'],
      challenge: 'Real estate agent needed professional website to showcase listings and generate leads in competitive market.',
      solution: 'Developed comprehensive real estate platform with MLS integration, virtual tour capabilities, and lead capture system.',
      link: '#'
    },
    {
      title: 'AutoCare Pro',
      category: 'Business Management',
      description: 'Complete shop management system for auto repair',
      image: 'https://images.squarespace-cdn.com/content/v1/55c27c1ae4b0cc6fe89048b8/1568757356174-JULKTK7WEG2S0QBVQRNP/Shop%252BDashboard%252BHome%252B-%252Bdesktop',
      results: [
        { label: 'Operational Efficiency', value: '+40%' },
        { label: 'Paperwork Reduction', value: '-80%' },
        { label: 'Profit Margins', value: 'Improved' }
      ],
      technologies: ['Inventory Management', 'Work Order Tracking', 'Customer Communication', 'Payment Processing'],
      challenge: 'Auto repair shop needed comprehensive management system for scheduling, inventory, customer communication, and billing.',
      solution: 'Created all-in-one management platform with appointment scheduling, work order tracking, inventory management, and automated customer updates.',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Success Stories from{' '}
            <span className="text-blue-600">Small Business Partners</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses like yours grow and succeed with custom technology solutions. 
            Real results from real clients across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">Start Your Success Story</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioItems?.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative aspect-video bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 py-4 bg-slate-50 rounded-lg px-4">
                      {item.results?.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-slate-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies?.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-semibold text-slate-900">Challenge:</h4>
                        <p className="text-slate-600">{item.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Solution:</h4>
                        <p className="text-slate-600">{item.solution}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button asChild variant="outline" className="w-full group/btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Link href="/contact" className="flex items-center justify-center space-x-2">
                          <span>Get Similar Results</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Measurable Results Across All Projects
            </h2>
            <p className="text-xl text-slate-600">
              Our clients see real, quantifiable improvements in their business metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: '150%',
                label: 'Average Revenue Increase',
                description: 'Clients see significant growth in sales and revenue'
              },
              {
                icon: Star,
                metric: '95%',
                label: 'Client Satisfaction Rate',
                description: 'Consistently high satisfaction across all projects'
              },
              {
                icon: ExternalLink,
                metric: '40%',
                label: 'Average Efficiency Gain',
                description: 'Streamlined operations save time and resources'
              },
              {
                icon: TrendingUp,
                metric: '200+',
                label: 'Projects Delivered',
                description: 'Successful implementations across various industries'
              }
            ]?.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.metric}</div>
                    <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                    <p className="text-slate-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="tel:+14085550127">Call (408) 555-0127</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
