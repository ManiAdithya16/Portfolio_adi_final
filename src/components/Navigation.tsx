import { useState, useEffect } from 'react'
import { Menu, X, Download, Code2 } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const downloadResume = () => {
    // Open PDF resume in the same tab
    window.open('/resume.pdf', '_self')
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'nav-blur shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8" style={{color: 'var(--primary)'}} />
            <span className="text-xl font-bold gradient-text">
              Adithya Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-medium transition-colors duration-300 hover:text-purple-500"
                style={{color: 'var(--text-secondary)'}}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={downloadResume}
              className="btn-primary flex items-center space-x-2 hover-lift"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors duration-300 hover:text-purple-500"
              style={{color: 'var(--text-secondary)'}}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 nav-blur shadow-lg border-t" style={{borderColor: 'var(--border)'}}>
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left font-medium py-2 transition-colors duration-300 hover:text-purple-500"
                  style={{color: 'var(--text-secondary)'}}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  downloadResume()
                  setIsOpen(false)
                }}
                className="btn-primary flex items-center justify-center space-x-2 w-full mt-4 hover-lift"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}