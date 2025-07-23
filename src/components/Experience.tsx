import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'
import { ScrollAnimation } from './ScrollAnimation'
import { motion } from 'framer-motion'

interface ExperienceItem {
  id: number
  company: string
  role: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  type: 'work' | 'internship' | 'education'
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "IIT Bombay",
    role: "Machine Learning Engineer Intern",
    duration: "Jun 2024 - Present",
    location: "Mumbai, Maharashtra",
    description: [
      "Developed a CNN model for detecting cracks on roads and structures, achieving 99% accuracy.",
      "Managed data preprocessing, model training, and evaluation for the project, enhancing infrastructure safety.",
      "Collaborated with a team under Prof. Ganesh Ramakrishnan at IIT Bombay as part of the Maharashtra Drone Mission."
    ],
    technologies: ["Machine Learning","Deep Learning","AI"],
    type: "internship"
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2024 - May 2024",
    location: "Remote",
    description: [
      "Built responsive web applications using Next.js and TypeScript",
      "Integrated third-party APIs and payment systems (Stripe, PayPal)",
      "Implemented automated testing with Jest and Cypress, achieving 85% code coverage",
      "Mentored 2 junior developers and conducted code reviews"
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Vercel"],
    type: "internship"
  }
]

const achievements = [
  "Internship Completion Letter of IIT-Bombay",
  "Winner of Machine Learning Hackathon 2025",
  "Google Cloud Certified Associate Dev"
]

export function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="h-5 w-5" />
      case 'internship':
        return <Briefcase className="h-5 w-5" />
      default:
        return <Briefcase className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'education':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="experience" className="section-padding" style={{background: 'var(--background)'}}>
      <div className="container">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
            <span className="gradient-text">Experience & Achievements</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            My professional journey and key accomplishments in software development and computer science research.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <ScrollAnimation>
              <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-2" style={{color: 'var(--text-primary)'}}>
                <Briefcase className="h-6 w-6" style={{color: 'var(--primary)'}} />
                <span>Professional Experience</span>
              </h3>
            </ScrollAnimation>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollAnimation
                  key={exp.id}
                  delay={index * 0.1}
                >
                  <motion.div
                    className="card p-6 hover-lift"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-start space-x-3 mb-3 sm:mb-0">
                        <div className="w-10 h-10 glass-card flex items-center justify-center flex-shrink-0" style={{color: 'var(--primary)'}}>
                          {getIcon(exp.type)}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold" style={{color: 'var(--text-primary)'}}>
                            {exp.role}
                          </h4>
                          <p className="font-medium gradient-text">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </span>
                        <div className="flex items-center space-x-4 text-sm" style={{color: 'var(--text-muted)'}}>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2" style={{color: 'var(--text-secondary)'}}>
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{background: 'var(--primary)'}}></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center space-x-2">
              <Award className="h-6 w-6 text-yellow-600" />
              <span>Achievements</span>
            </h3>

            <div className="card p-6 fade-in">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Skills
              </h4>
              <div className="card p-6 fade-in-delay">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Programming Languages</h5>
                    <div className="flex flex-wrap gap-2">
                      {["C", "Java", "Python", "SQL"].map((skill) => (
                        <span key={skill} className="tech-badge text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Frameworks & Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {[ "HTML", "CSS", "Java Script", "Git", "MySQL", "IntelliJ", "Slack"].map((skill) => (
                        <span key={skill} className="tech-badge text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* New: Areas of Interest Section */}
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Areas of Interest</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Deep Learning", "AI", "Web Development"].map((interest) => (
                        <span key={interest} className="tech-badge text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}