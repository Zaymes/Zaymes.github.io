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
  Clock
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance"
          >
            {heroContent.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 text-balance leading-relaxed"
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
                className={index === 0 ? 'btn-primary' : 'btn-secondary'}
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
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <span className="font-bold text-gray-900">James Shrestha</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Writing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/cv-james.pdf" target="_blank" className="btn-secondary text-sm">
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// About Section Component
function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {aboutContent.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {aboutContent.description}
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {aboutContent.currentRole}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutContent.mission}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Highlights</h3>
              <ul className="space-y-2">
                {aboutContent.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies I Work With</h3>
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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              className="card group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <Link href={project.github} target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={project.live} target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
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
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blogContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="card group cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
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
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {contactContent.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
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
              <Link href={contactContent.social.linkedin} target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href={contactContent.social.twitter} target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href={contactContent.social.github} target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              Built with curiosity, open data, and too much coffee ☕
            </p>
            <p className="text-gray-500 text-sm mt-2">
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
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
