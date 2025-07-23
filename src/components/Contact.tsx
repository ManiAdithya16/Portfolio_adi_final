import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react'
import { ScrollAnimation } from './ScrollAnimation'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      return
    }
    
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real app, you would send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "dasikamanidhara2@gmail.com",
      href: "mailto:dasikamanidhara2@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7569650691",
      href: "tel:+91 7569650691"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/ManiAdithya16",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/d-adithya/n",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com/alexchen",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="section-padding section-bg">
      <div className="container">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Feel free to reach out if you'd like to work together!
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollAnimation>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2" style={{color: 'var(--text-primary)'}}>
                <MessageCircle className="h-6 w-6" style={{color: 'var(--primary)'}} />
                <span>Get In Touch</span>
              </h3>
              <p className="leading-relaxed mb-6" style={{color: 'var(--text-secondary)'}}>
                I'm currently looking for new opportunities in software engineering and would love to hear from you. 
                Whether you have a question, want to collaborate, or just want to say hello, I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-card transition-colors duration-300 group hover-lift"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 glass-card" style={{color: 'var(--primary)'}}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm" style={{color: 'var(--text-muted)'}}>{info.label}</p>
                    <p className="font-medium" style={{color: 'var(--text-primary)'}}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={0.2}>
            <div className="card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-primary)'}}>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 hover-lift ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="status-success text-center">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-error text-center">
                    Please fill in all required fields with valid information.
                  </div>
                )}
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}