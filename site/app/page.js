'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink,
  ArrowRight,
  Calendar,
  Clock,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from '../lib/theme-context'
import JourneyVisualization from '../components/JourneyVisualization'
import { 
  siteConfig, 
  heroContent, 
  aboutContent, 
  projectsContent, 
  blogContent, 
  contactContent 
} from '../lib/content'

// Billboard Component for Hero
function BillboardScreen({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [cards.length])

  const currentCard = cards[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
            Current Updates
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
            {String(currentIndex + 1).padStart(2, '0')}/{String(cards.length).padStart(2, '0')}
          </span>
        </div>

        <div className="relative h-[180px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-start gap-4 mb-3">
                  <motion.span
                    key={`icon-${currentIndex}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="text-3xl"
                  >
                    {currentCard.icon}
                  </motion.span>
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-semibold text-gray-900 dark:text-gray-100 text-lg md:text-xl mb-1"
                    >
                      {currentCard.title}
                    </motion.h3>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {currentCard.content}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-4 pt-3 border-t border-gray-200 dark:border-gray-800">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6'
                  : 'w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              style={index === currentIndex ? { backgroundColor: '#0891B2' } : {}}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Hero Section Component
function HeroSection() {
  const dashboardCards = [
    {
      icon: '🧭',
      title: 'Current Focus',
      content: 'Building Justice Archive, an open-source platform to preserve human rights media safely.',
    },
    {
      icon: '💡',
      title: 'Idea Notebook',
      content: 'Exploring DAO-based funding models for civic and nonprofit ecosystems.',
    },
    {
      icon: '📚',
      title: 'Currently Reading',
      content: '"AI for Humanity 2025" – FastForward report on nonprofit innovation.',
    },
    {
      icon: '🧠',
      title: 'Favorite Quote',
      content: '"Technology for justice must outlive power."',
    },
    {
      icon: '🧩',
      title: 'Recent Inspiration',
      content: 'Witness.org\'s civic media verification framework — redefining trust in evidence.',
    },
    {
      icon: '⚙️',
      title: 'Stack of the Month',
      content: 'React ⚛️ + Next.js + IPFS + Arweave — experimenting with decentralized storage and UI minimalism.',
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight"
              >
                Building, advocating, and experimenting
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-400 leading-tight"
              >
                at the intersection of technology, data, and design
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body mb-8 text-balance leading-relaxed"
            >
              {heroContent.subtext}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {heroContent.ctaButtons.map((button, index) => (
                <Link 
                  key={index} 
                  href={button.href}
                  className={index === 0 ? 'btn-primary' : 'btn-secondary'}
                >
                  {button.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Billboard Display - Clean and Matched */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 -m-2 rounded-xl blur-xl opacity-40" style={{
              background: 'radial-gradient(circle at center, rgba(8, 145, 178, 0.15), transparent 70%)'
            }}></div>
            
            {/* Billboard Container */}
            <div className="relative">
              <BillboardScreen cards={dashboardCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Navigation Component
function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 navbar-minimal">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              James Shrestha
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link href="#projects" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#blog" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
              Writing
            </Link>
            <Link href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            
            <Link 
              href={contactContent.social.linkedin} 
              target="_blank" 
              className="text-sm hidden sm:inline-flex px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors font-medium"
            >
              Connect
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="py-4 space-y-3">
              <Link 
                href="#about" 
                className="block text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="block text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#blog" 
                className="block text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Writing
              </Link>
              <Link 
                href="#contact" 
                className="block text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href={contactContent.social.linkedin} 
                target="_blank" 
                className="inline-flex text-sm px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

// About Section Component
function AboutSection() {
  // Extract role cards from journey data
  const roleCards = [
    ...aboutContent.journey.organizations.map(org => ({
      title: org.role,
      subtitle: org.name,
      period: org.period
    })),
    // { title: "Builder of data platforms", subtitle: "Public Digital Products", period: "Ongoing" },
    // { title: "Community Fellowship Lead", subtitle: "Data-focused Programs", period: "Past & Present" }
  ]

  const skillsChips = [
    "Electronics & Communication",
    "Civic Tech",
    "Open Data",
    "Public Digital Products",
    "Research & Impact"
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-secondary mb-8 text-center">
            {aboutContent.title}
          </h2>

          {/* Short Story Paragraphs */}
          <div className="mb-10 space-y-6 text-justify">
            <p className="text-body leading-relaxed">
            My journey began in Electronics and Communication Engineering, but curiosity soon pulled me beyond circuits and code, into how data, design, and collaboration can drive systems change.
            </p>
            <p className="text-body leading-relaxed">
            Over the years, I’ve worked across open data, digital governance, and civic innovation, leading initiatives that translate research into practical digital tools. Many of these efforts aim to make public systems more transparent, participatory, and adaptive.
            </p>
            <p className="text-body leading-relaxed">
            Today, I see my work as an evolving practice of building, advocating, and experimenting at the intersection of technology, community, and emerging systems. Whether designing open platforms, exploring the possibilities of AI and decentralized technologies, or helping communities use data more effectively, I’m guided by a simple belief: tools can shape how people understand, organize, and act together.
            </p>
            <p className="text-body leading-relaxed">
            I operate at the intersection of research, implementation, and impact, bridging ideas and practice through applied experimentation and collaborative development, always learning, always building.
            </p>
          </div>

          {/* Timeline for Role Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-purple-400 hidden md:block"></div>
            
            <div className="space-y-6">
              {roleCards.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-4"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-sky-50 dark:from-blue-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 shadow-lg hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white dark:bg-gray-900"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex-1 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-sm">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {role.subtitle}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {role.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Highlights / Skills Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {skillsChips.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-800"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Journey Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <JourneyVisualization journeyData={aboutContent.journey} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section Component
function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            {projectsContent.title}
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsContent.projects.map((project, index) => {
            const isExpanded = expandedProject === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass group"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    {project.quickContext && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {project.quickContext}
                      </p>
                    )}
                  </div>
                  <div className="flex space-x-2 ml-4">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Short Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedProject(isExpanded ? null : index)}
                  className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors mb-4"
                >
                  <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
                
                {/* Expanded Detail View */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                        {/* Role / Involvement */}
                        {project.role && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">My Role</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {project.role}
                            </p>
                          </div>
                        )}
                        
                        {/* Tech / Tools */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Tech / Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-200 dark:border-cyan-800">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Outcome / Impact */}
                        {project.outcome && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Outcome / Impact</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {project.outcome}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Blog Section Component
function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            {blogContent.title}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {blogContent.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogContent.posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass group cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl text-gray-100 md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {contactContent.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {contactContent.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href={`mailto:${contactContent.email}`}
              className="btn-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              {contactContent.email}
            </Link>
            
            <div className="flex space-x-4">
              <Link href={contactContent.social.linkedin} target="_blank" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href={contactContent.social.twitter} target="_blank" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href={contactContent.social.github} target="_blank" className="p-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8">
            <p className="text-gray-400" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Built with curiosity, vibe and ❤️.
            </p>
            <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              © 2025 James Shrestha
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </main>
  )
}
