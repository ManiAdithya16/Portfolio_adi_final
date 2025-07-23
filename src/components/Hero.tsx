import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full-Stack Developer & AI Enthusiast'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center hero-bg relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 floating" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 floating" style={{animationDelay: '2s'}}></div>
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text hover-glow">Dasika Manidhara Adithya Avadhani</span>
            </motion.h1>
            
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl h-8" style={{color: 'var(--text-secondary)'}}>
                {displayText}
                <span className="animate-pulse gradient-text">|</span>
              </h2>
            </div>

            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              style={{color: 'var(--text-secondary)'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a passionate Computer Science and Engineering student specializing in full-stack development, AI/ML, and modern web technologies. I create innovative solutions that bridge the gap between complex problems and elegant user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center space-x-2 hover-lift"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary flex items-center justify-center space-x-2 hover-lift"
              >
                <span>Contact Me</span>
                <Mail className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="https://github.com/ManiAdithya16"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/d-adithya/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dasikamanidhara2@gmail.com"
                className="social-link"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative floating">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-3 pulse-glow">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHE-PfPmkZysg/profile-displayphoto-shrink_800_800/B56Zc5FYM5GoAo-/0/1749009401954?e=1756339200&v=beta&t=ycHV_14Y-lhgZ2WcRjohcXPLCy-MhC1u7jrqdRbRdts"
                  alt="Adithya - Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 glass-card flex items-center justify-center">
                <span className="text-white font-bold text-lg gradient-text">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 glass-card flex items-center justify-center">
                <span className="text-white font-bold gradient-text">FS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}