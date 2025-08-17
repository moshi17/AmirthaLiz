
import { Linkedin, Mail, Code, Smartphone, Brain, Palette, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Our Team - AmithaLiz Software Experts',
  description: 'Meet the talented team behind AmithaLiz Software. Experienced developers, designers, and AI specialists dedicated to helping small businesses succeed.',
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      position: 'Chief Technology Officer & Co-Founder',
      image: 'https://blog.diffbot.com/wp-content/uploads/ElenaCzubiakHeadshot.jpg',
      bio: 'Sarah brings over 8 years of experience in full-stack development and project management. She specializes in creating scalable web applications and has helped dozens of small businesses establish their digital presence. Sarah holds a Computer Science degree from UC Berkeley and is passionate about making enterprise-level technology accessible to small businesses.',
      expertise: ['Full-stack Development', 'Database Architecture', 'Cloud Deployment', 'Project Management'],
      icon: Code,
      color: 'blue'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Lead Mobile Developer & Co-Founder',
      image: 'https://img.freepik.com/premium-photo/focused-web-developer-workstation-professional-portrait_886588-57464.jpg',
      bio: 'Marcus is a mobile development expert with 6 years of experience creating iOS and Android applications. He has a proven track record of delivering user-friendly mobile solutions that drive customer engagement. Marcus is committed to helping small businesses leverage mobile technology to reach their customers wherever they are.',
      expertise: ['iOS Development', 'Android Development', 'Cross-platform Solutions', 'UI/UX Design'],
      icon: Smartphone,
      color: 'green'
    },
    {
      name: 'David Kim',
      position: 'Senior Software Engineer',
      image: 'https://img.freepik.com/free-photo/portrait-professional-working-laptop_23-2148499902.jpg?semt=ais_hybrid&w=740&q=80',
      bio: 'David is a versatile software engineer with expertise in both web and mobile development. With 5 years of experience in the industry, he specializes in creating efficient, maintainable code and has a keen eye for detail. David enjoys working closely with clients to understand their unique business needs and translate them into technical solutions.',
      expertise: ['JavaScript Frameworks', 'Python Development', 'API Integration', 'Performance Optimization'],
      icon: Code,
      color: 'purple'
    },
    {
      name: 'Maria Gonzalez',
      position: 'AI Solutions Specialist',
      image: 'https://robinhood.org/wp-content/uploads/2024/03/SergioMarrero-jpg.webp',
      bio: 'Maria leads our AI initiatives, helping small businesses harness the power of artificial intelligence. With a background in data science and machine learning, she has 4 years of experience implementing AI solutions that solve real business problems. Maria is dedicated to making AI technology practical and affordable for small business owners.',
      expertise: ['Machine Learning', 'Data Analysis', 'Chatbot Development', 'Process Automation'],
      icon: Brain,
      color: 'orange'
    },
    {
      name: 'Jordan Williams',
      position: 'UI/UX Designer',
      image: 'https://pics.craiyon.com/2023-07-06/9f758df5790042cab54ede1f9836c992.webp',
      bio: 'Jordan is our creative force, ensuring that every application we build is not only functional but also beautifully designed and user-friendly. With 4 years of experience in digital design, Jordan understands how good design can directly impact a small business\'s success by improving customer experience and engagement.',
      expertise: ['User Interface Design', 'User Experience Research', 'Branding', 'Responsive Design'],
      icon: Palette,
      color: 'teal'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet the{' '}
            <span className="text-blue-600">Expert Team</span>
            {' '}Behind Your Success
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Our talented team of developers, designers, and AI specialists are dedicated to helping 
            your small business thrive with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers?.map((member, index) => {
              const Icon = member.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                    {/* Image Section */}
                    <div className="md:col-span-2 relative bg-slate-100">
                      <div className="aspect-square md:aspect-auto md:h-full relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 bg-${member.color}-100 rounded-full flex items-center justify-center shadow-lg`}>
                          <Icon className={`w-6 h-6 text-${member.color}-600`} />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                          <p className="text-blue-600 font-medium">{member.position}</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed text-sm">{member.bio}</p>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise?.map((skill, skillIndex) => (
                              <span key={skillIndex} className={`px-3 py-1 bg-${member.color}-100 text-${member.color}-700 text-xs rounded-full font-medium`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100">
                        <div className="flex space-x-3">
                          <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-600">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-600">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What drives us to deliver exceptional results for small businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence First',
                description: 'We never compromise on quality. Every project receives our full attention and expertise.',
                color: 'blue'
              },
              {
                icon: Code,
                title: 'Continuous Learning',
                description: 'We stay ahead of technology trends to bring you the latest and most effective solutions.',
                color: 'green'
              },
              {
                icon: Brain,
                title: 'Innovation Focus',
                description: 'We love solving complex problems with creative, practical solutions that work.',
                color: 'purple'
              },
              {
                icon: Smartphone,
                title: 'Client Partnership',
                description: 'Your success is our success. We build long-term relationships, not just software.',
                color: 'orange'
              },
              {
                icon: Palette,
                title: 'User-Centric Design',
                description: 'Every interface we create is designed with your customers\' experience in mind.',
                color: 'teal'
              },
              {
                icon: Award,
                title: 'Small Business Focus',
                description: 'We understand small business challenges because we are a small business too.',
                color: 'red'
              }
            ]?.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-${value.color}-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${value.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Our Story: From Small Business to Small Business
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2019, AmithaLiz Software emerged from a simple observation: small businesses 
                  often struggle to access the same quality technology solutions available to large corporations.
                </p>
                
                <p>
                  Our founders, Sarah Chen and Marcus Rodriguez, started the company after witnessing firsthand 
                  how the right technology could transform a small business's operations and growth potential. 
                  We began by helping a local restaurant streamline their operations with a custom ordering system.
                </p>
                
                <p>
                  The immediate impact – increased efficiency, better customer satisfaction, and significant 
                  revenue growth – confirmed our belief that every small business deserves access to 
                  professional-grade technology solutions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <p className="text-sm text-slate-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <p className="text-sm text-slate-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <p className="text-sm text-slate-600">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="AmithaLiz Software Team Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our experienced team can help transform your business with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Schedule Free Consultation</Link>
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
