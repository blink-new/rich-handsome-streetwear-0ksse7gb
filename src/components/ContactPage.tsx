import { useState } from 'react'
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react'
import RHHeart from './ui/RHHeart'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a backend
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background py-8 relative">
      {/* Decorative hearts */}
      <div className="absolute top-12 left-8">
        <RHHeart size="sm" opacity={0.2} />
      </div>
      <div className="absolute top-32 right-16">
        <RHHeart size="xs" animate opacity={0.3} />
      </div>
      <div className="absolute bottom-20 left-1/4">
        <RHHeart size="sm" opacity={0.25} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-anton text-5xl md:text-6xl chrome-text mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-white/80 text-lg font-inter max-w-2xl mx-auto">
            Have questions about our products, need styling advice, or want to collaborate? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-anton text-3xl chrome-text mb-8">
              SEND US A MESSAGE
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-white mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-muted/20 border border-white/20 text-white px-4 py-3 font-inter focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-white mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-muted/20 border border-white/20 text-white px-4 py-3 font-inter focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-inter font-medium text-white mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-muted/20 border border-white/20 text-white px-4 py-3 font-inter focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-inter font-medium text-white mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-muted/20 border border-white/20 text-white px-4 py-3 font-inter focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-white py-4 font-anton text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                SEND MESSAGE
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h2 className="font-anton text-3xl chrome-text mb-8">
                CONNECT WITH US
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-inter font-semibold text-white mb-2">EMAIL</h3>
                    <p className="text-white/70 font-inter">hello@richhandsome.com</p>
                    <p className="text-white/70 font-inter">support@richhandsome.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Instagram className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-inter font-semibold text-white mb-2">INSTAGRAM</h3>
                    <p className="text-white/70 font-inter">@richhandsome</p>
                    <p className="text-white/50 font-inter text-sm">
                      Follow us for behind-the-scenes content and style inspiration
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageCircle className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-inter font-semibold text-white mb-2">TIKTOK</h3>
                    <p className="text-white/70 font-inter">@richhandsome</p>
                    <p className="text-white/50 font-inter text-sm">
                      Watch our latest drops and styling videos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-muted/10 p-6 rounded-lg">
              <h3 className="font-anton text-xl chrome-text mb-4">
                FREQUENTLY ASKED
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-inter font-medium text-white mb-1">
                    What's your return policy?
                  </h4>
                  <p className="text-white/70 font-inter text-sm">
                    30-day returns on unworn items with tags attached.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-white mb-1">
                    Do you ship internationally?
                  </h4>
                  <p className="text-white/70 font-inter text-sm">
                    Currently shipping to US, Canada, and EU. More regions coming soon.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-white mb-1">
                    How do I know my size?
                  </h4>
                  <p className="text-white/70 font-inter text-sm">
                    Check our size guide on each product page or contact us for personalized advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted/10 p-6 rounded-lg">
              <h3 className="font-anton text-xl chrome-text mb-4">
                CUSTOMER SERVICE
              </h3>
              <div className="space-y-2">
                <p className="text-white/70 font-inter text-sm">
                  <span className="text-white font-medium">Monday - Friday:</span> 9AM - 6PM EST
                </p>
                <p className="text-white/70 font-inter text-sm">
                  <span className="text-white font-medium">Saturday:</span> 10AM - 4PM EST
                </p>
                <p className="text-white/70 font-inter text-sm">
                  <span className="text-white font-medium">Sunday:</span> Closed
                </p>
              </div>
              <p className="text-white/50 font-inter text-xs mt-4">
                We typically respond to emails within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}