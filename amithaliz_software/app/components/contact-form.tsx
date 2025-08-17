
'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData?.name || !formData?.email || !formData?.service || !formData?.message) {
      toast({
        title: 'Required fields missing',
        description: 'Please fill in all required fields marked with *',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response?.ok) {
        toast({
          title: 'Message sent successfully!',
          description: 'Thank you for your inquiry. We\'ll get back to you within 24 hours.',
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: 'Error sending message',
        description: 'There was an error sending your message. Please try again or call us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            value={formData?.name || ''}
            onChange={(e) => handleChange('name', e?.target?.value || '')}
            required
            className="focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@company.com"
            value={formData?.email || ''}
            onChange={(e) => handleChange('email', e?.target?.value || '')}
            required
            className="focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            type="text"
            placeholder="Your company name"
            value={formData?.company || ''}
            onChange={(e) => handleChange('company', e?.target?.value || '')}
            className="focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={formData?.phone || ''}
            onChange={(e) => handleChange('phone', e?.target?.value || '')}
            className="focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In *</Label>
        <Select value={formData?.service || ''} onValueChange={(value) => handleChange('service', value)}>
          <SelectTrigger className="focus:ring-blue-500 focus:border-blue-500">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-app">Mobile App Development</SelectItem>
            <SelectItem value="ai-solutions">AI Solutions</SelectItem>
            <SelectItem value="e-commerce">E-commerce Platform</SelectItem>
            <SelectItem value="consultation">General Consultation</SelectItem>
            <SelectItem value="maintenance">Maintenance & Support</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Description *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          value={formData?.message || ''}
          onChange={(e) => handleChange('message', e?.target?.value || '')}
          required
          className="min-h-[120px] focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800 mb-2">
          <strong>What happens next?</strong>
        </p>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• We'll review your inquiry within 24 hours</li>
          <li>• Schedule a free 30-minute consultation call</li>
          <li>• Provide you with a detailed proposal and timeline</li>
          <li>• Answer all your questions about the project</li>
        </ul>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending Message...</span>
          </span>
        ) : (
          <span className="flex items-center space-x-2">
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </span>
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
      </p>
    </form>
  )
}

export default ContactForm
