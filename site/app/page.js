'use client'

import { motion } from 'framer-motion'
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
import { 
  siteConfig, 
  heroContent, 
  aboutContent, 
  projectsContent, 
  blogContent, 
  contactContent 
} from '../lib/content'

// Hero Section Component
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
            
            <Link href="/cv-james.pdf" target="_blank" className={`text-sm hidden sm:inline-flex px-4 py-2 rounded-lg transition-all duration-200 ${
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
                href="/cv-james.pdf" 
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
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6">
              {aboutContent.title}
            </h2>
            
            <p className="text-body mb-6 leading-relaxed">
              {aboutContent.description}
            </p>
            
            <p className="text-body mb-6 leading-relaxed">
              {aboutContent.currentRole}
            </p>
            
            <p className="text-body mb-8 leading-relaxed">
              {aboutContent.mission}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Highlights</h3>
              <ul className="space-y-2">
                {aboutContent.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/james.jpeg"
                alt="James Shrestha"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 dark:from-blue-400/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
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
              Built with curiosity, AI and ❤️.
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
