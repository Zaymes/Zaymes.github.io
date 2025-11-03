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
      <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-800">
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
              style={index === currentIndex ? { backgroundColor: '#95D6DF' } : {}}
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
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-gray-50 via-cyan-50 to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-primary mb-6 text-balance"
            >
              {heroContent.headline}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  className={index === 0 ? 'btn-primary' : 'btn-glass'}
                >
                  {button.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Billboard Display with Vibrant Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Clean Vibrant Background Glow - Sharp variants of #95D6DF */}
            <div className="absolute inset-0 -m-4 rounded-2xl blur-2xl" style={{
              background: 'linear-gradient(135deg, rgba(149, 214, 223, 0.3), rgba(180, 228, 235, 0.2), rgba(123, 197, 208, 0.25))'
            }}></div>
            <motion.div
              className="absolute inset-0 -m-4 rounded-2xl"
              animate={{
                background: [
                  `radial-gradient(circle at 30% 50%, rgba(149, 214, 223, 0.35), transparent 60%)`,
                  `radial-gradient(circle at 70% 50%, rgba(180, 228, 235, 0.3), transparent 60%)`,
                  `radial-gradient(circle at 50% 30%, rgba(123, 197, 208, 0.35), transparent 60%)`,
                  `radial-gradient(circle at 30% 50%, rgba(149, 214, 223, 0.35), transparent 60%)`,
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Clean decorative gradient border - sharp cyan variants */}
            <div className="absolute -inset-1 rounded-2xl opacity-25 dark:opacity-15 blur-sm" style={{
              background: 'linear-gradient(to right, #B4E4EB, #95D6DF, #7BC5D0)'
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'navbar-glass-scrolled' 
          : 'navbar-glass-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <span className={`font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              isScrolled 
                ? 'text-gray-900 dark:text-gray-100' 
                : 'text-gray-900 dark:text-gray-100'
            }`}>
              James Shrestha
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              About
            </Link>
            <Link href="#projects" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              Projects
            </Link>
            <Link href="#blog" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              Writing
            </Link>
            <Link href="#contact" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled 
                  ? 'bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 border border-white/20 dark:border-gray-600/30 backdrop-blur-sm' 
                  : 'bg-white/20 dark:bg-gray-800/30 hover:bg-white/30 dark:hover:bg-gray-700/40 border border-white/30 dark:border-gray-600/40 backdrop-blur-sm'
              }`}
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className={`h-5 w-5 ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300' 
                    : 'text-white dark:text-gray-300'
                }`} />
              ) : (
                <Sun className={`h-5 w-5 ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300' 
                    : 'text-white dark:text-gray-300'
                }`} />
              )}
            </button>
            
            <Link href="/" target="_blank" className={`text-sm hidden sm:inline-flex px-4 py-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 border border-white/20 dark:border-gray-600/30 backdrop-blur-sm text-gray-700 dark:text-gray-200' 
                : 'bg-white/20 dark:bg-gray-800/30 hover:bg-white/30 dark:hover:bg-gray-700/40 border border-white/30 dark:border-gray-600/40 backdrop-blur-sm text-gray-700 dark:text-gray-200'
            }`}>
              Download CV
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                isScrolled 
                  ? 'bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30 border border-white/20 dark:border-gray-600/30 backdrop-blur-sm' 
                  : 'bg-white/20 dark:bg-gray-800/30 hover:bg-white/30 dark:hover:bg-gray-700/40 border border-white/30 dark:border-gray-600/40 backdrop-blur-sm'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-5 w-5 ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300' 
                    : 'text-white dark:text-gray-300'
                }`} />
              ) : (
                <Menu className={`h-5 w-5 ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300' 
                    : 'text-white dark:text-gray-300'
                }`} />
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
            className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20"
          >
            <div className="py-4 space-y-4">
              <Link 
                href="#about" 
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#blog" 
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Writing
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/" 
                target="_blank" 
                className="btn-glass text-sm inline-flex"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        )}
        </div>
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
    { title: "Builder of data platforms", subtitle: "Public Digital Products", period: "Ongoing" },
    { title: "Community Fellowship Lead", subtitle: "Data-focused Programs", period: "Past & Present" }
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
          <div className="mb-10 space-y-6">
            <p className="text-body leading-relaxed">
              My background in Electronics and Communication Engineering gradually evolved into designing data and digital products for civic use.
            </p>
            <p className="text-body leading-relaxed">
              Over the years, I&apos;ve led initiatives and experiments that bring together open data, user-centered design, and digital collaboration — aiming to make governance more transparent and communities more informed.
            </p>
            <p className="text-body leading-relaxed">
              I operate at the intersection of research, implementation, and impact — bridging technology, data, and social systems through applied experimentation and collaborative development.
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 hidden md:block"></div>
            
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
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 shadow-lg hidden md:flex items-center justify-center">
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
          {projectsContent.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <Link href={project.github} target="_blank" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={project.live} target="_blank" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </main>
  )
}
