
'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'Maria Santos',
      position: 'Owner, Bella Vista Restaurant',
      image: 'https://i.pinimg.com/originals/e2/cc/9e/e2cc9e2f2545443113be3cc3a99abb18.jpg',
      content: 'AmithaLiz transformed our restaurant with their online reservation system. We saw a 40% increase in bookings within the first month. Their team understood our needs perfectly.',
      rating: 5
    },
    {
      name: 'David Thompson',
      position: 'CEO, QuickFix Plumbing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The mobile app they built for our plumbing service has been a game-changer. Customer satisfaction is up 35% and scheduling conflicts are virtually eliminated.',
      rating: 5
    },
    {
      name: 'Jennifer Chen',
      position: 'Founder, StyleHub Boutique',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Our e-commerce platform exceeded all expectations. Online sales increased by 300% and we can now serve customers nationwide. Best investment we ever made.',
      rating: 5
    },
    {
      name: 'Dr. Michael Rodriguez',
      position: 'Wellness Family Practice',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The patient portal has revolutionized our practice. 50% fewer phone calls, happier patients, and our staff can focus on providing better care.',
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            Real results from real small businesses
          </p>
        </div>

        <div className="relative">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-blue-100">
                  <Image
                    src={testimonials[currentSlide]?.image || ''}
                    alt={testimonials[currentSlide]?.name || ''}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentSlide]?.rating || 5)]?.map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed max-w-3xl">
                  &ldquo;{testimonials[currentSlide]?.content}&rdquo;
                </blockquote>

                <div>
                  <div className="font-bold text-slate-900">{testimonials[currentSlide]?.name}</div>
                  <div className="text-blue-600">{testimonials[currentSlide]?.position}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-white shadow-lg hover:shadow-xl border-blue-200 hover:bg-blue-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-white shadow-lg hover:shadow-xl border-blue-200 hover:bg-blue-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
