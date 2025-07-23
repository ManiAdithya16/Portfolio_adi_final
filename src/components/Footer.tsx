import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/ManiAdithya16",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/d-adithya/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:dasikamanidhara2@gmail.com",
      label: "Email"
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t" style={{background: 'var(--surface)', borderColor: 'var(--border)'}}>
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8" style={{color: 'var(--primary)'}} />
              <span className="text-xl font-bold gradient-text">
              Adithya
              </span>
            </div>
            <p className="mb-6 max-w-md" style={{color: 'var(--text-secondary)'}}>
              Computer Science & Engineering student passionate about building innovative solutions 
              that make a difference. Always excited to learn and take on new challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="transition-colors duration-300 hover:text-purple-500"
                    style={{color: 'var(--text-secondary)'}}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--text-primary)'}}>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2" style={{color: 'var(--text-secondary)'}}>
                <Mail className="h-4 w-4" />
                <span className="text-sm">dasikamanidhara2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2" style={{color: 'var(--text-secondary)'}}>
                <Code2 className="h-4 w-4" />
                <span className="text-sm">Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8" style={{borderColor: 'var(--border)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2" style={{color: 'var(--text-secondary)'}}>
              <span>© {currentYear} Adithya. Made with</span>
              <Heart className="h-4 w-4 fill-current" style={{color: 'var(--error)'}} />
              <span>using React & TypeScript</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-sm transition-colors duration-300 flex items-center space-x-1 hover:text-purple-500"
              style={{color: 'var(--text-secondary)'}}
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <svg className="h-4 w-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}