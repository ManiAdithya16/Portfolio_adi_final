import { Github, ExternalLink, Code2 } from 'lucide-react'
import { ScrollAnimation } from './ScrollAnimation'
import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Voice-Vista: AI Assistant for Visually Impaired",
    description: "Developed modular voice assistant combining vision, NLP, and UI layers. Employed component-based design for accessibility and maintainability.",
    technologies: ["ReactJS", "JS", "HTML", "Bootstap", "Python"],
    githubUrl: "https://github.com/alexchen/ai-task-manager",
    liveUrl: "https://ai-taskmanager.vercel.app",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Impact of Climate Change On Crops ",
    description: "Developed a ML model to predict the impact of climate factors (rainfall, temperature, pesticides, etc.) on crop yield., Applied regression and clustering techniques to analyze agricultural data and identify key factors afecting crop productivity.",
    technologies: ["Python", "Pandas", "NumPy"],
    githubUrl: "https://github.com/ManiAdithya16/Impacct-of-climate-change-on-crops",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Secure File Sharing with QR Codes",
    description: "QRCryptX is a secure web-based file-sharing application that uses end-to-end AES-256 encryption and QR codes for secure retrieval and decryption of files. Built with Flask, it leverages PyCryptodome for encryption and the `qrcode` library for generating scannable codes, ensuring private and efficient data exchange.",
    technologies: ["Flask", "PyCryptodome", "qrcode", "PostgreSQL"],
    githubUrl: "https://github.com/ManiAdithya16/QRencryptx",
    liveUrl: "https://social-analytics-demo.netlify.app",
    imageUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Advanced Path-finding using A and D* lite algorithms",
    description: "Implemented advanced path-fnding algorithms (A and D* Lite) to navigate both static and dynamic environments efciently., Simulated real-time adaptive path planning using dynamic maps to handle changing obstacles and environments.",
    technologies: ["Python", "Unity" ],
    githubUrl: "https://github.com/alexchen/realtime-chat",
    liveUrl: "https://chat-app-demo.herokuapp.com",
    imageUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding section-bg">
      <div className="container">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Here are some of my recent projects that showcase my skills in full-stack development, 
            machine learning, and modern web technologies.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              delay={index * 0.1}
            >
              <motion.div
                className="card group cursor-pointer hover-lift hover-glow"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Code2 className="h-5 w-5" style={{color: 'var(--primary)'}} />
                    <h3 className="text-xl font-semibold" style={{color: 'var(--text-primary)'}}>
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-4 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 transition-colors duration-300 hover:text-purple-500"
                      style={{color: 'var(--text-secondary)'}}
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 transition-colors duration-300 hover:text-cyan-500"
                      style={{color: 'var(--text-secondary)'}}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-12" delay={0.4}>
          <a
            href="https://github.com/ManiAdithya16"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2 hover-lift"
          >
            <Github className="h-4 w-4" />
            <span>View More on GitHub</span>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}