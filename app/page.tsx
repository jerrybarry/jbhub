'use client'

import { useState, useEffect, useMemo } from 'react'
import { Github, Linkedin, Mail, Menu, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import boutiqueSettersImage from '@/images/boutiquesetters.png'
import kbycOnlineImage from '@/images/kbyconline.png'
import njaSpirit from '@/images/9jaspirit.png'
import sexAcademyImage from '@/images/sexacademy.png'

type Project = {
  id: number
  title: string
  description: string
  url: string
  image: any
  tags: string[]
}

type Skill = {
  name: string
  level: number
}

type Logo = {
  id: number
  name: string
  url: string
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>({})

  const projects: Project[] = [
    {
      id: 1,
      title: 'Boutique Setters',
      description: 'A membership-based e-commerce platform for exclusive fashion items.',
      url: 'boutiquesetters.com',
      image: boutiqueSettersImage,
      tags: ['WordPress', 'WooCommerce', 'Membership']
    },
    {
      id: 2,
      title: 'KBYC Online',
      description: 'Dynamic e-commerce website with advanced product management.',
      url: 'kbyconline.org',
      image: kbycOnlineImage,
      tags: ['WordPress', 'E-commerce', 'Custom Theme']
    },
    {
      id: 3,
      title: '9ja Spirit',
      description: 'Entertainment blog with dynamic content management.',
      url: '9jaspirit.com.ng',
      image: njaSpirit,
      tags: ['WordPress', 'Blog', 'Content Management']
    },
    {
      id: 4,
      title: 'Sex Academy',
      description: 'Learning Management System with integrated e-commerce.',
      url: 'sexacademy.eu',
      image: sexAcademyImage,
      tags: ['WordPress', 'LMS', 'E-commerce']
    }
  ]

  const skills: Skill[] = useMemo(() => [
    { name: 'WordPress', level: 95 },
    { name: 'PHP', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'MySQL', level: 85 },
    { name: 'REST API', level: 80 },
    { name: 'Figma', level: 75 },
    { name: 'Graphics Design', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ], [])

  const logos: Logo[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Logo ${i + 1}`,
    url: 'https://example.com'
  }))

  useEffect(() => {
    setMounted(true)
    skills.forEach(skill => {
      setTimeout(() => {
        setSkillProgress(prev => ({
          ...prev,
          [skill.name]: skill.level
        }))
      }, 300)
    })
  }, [skills])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-violet-500/30 via-transparent to-fuchsia-500/30" />
      <div className="fixed inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative w-full">
        {/* Header */}
        <header className="sticky top-0 left-0 right-0 z-10 w-full bg-black/50 backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center px-4 py-4">
            <div className="w-full flex items-center justify-between md:justify-center">
              {/* Mobile Logo */}
              <Link href="/" className="md:hidden text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                JbHub
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1 rounded-full bg-white/10 px-3 py-2 backdrop-blur">
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1.5 mr-6">
                  JbHub
                </Link>
                <div className="hidden md:flex items-center space-x-2">
                  <Link href="#about" className="relative rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    About
                  </Link>
                  <Link href="#projects" className="relative rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    Projects
                  </Link>
                  <Link href="#skills" className="relative rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    Skills
                  </Link>
                  <Link href="#logos" className="relative rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    Logos
                  </Link>
                  <Link href="#contact" className="relative rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 backdrop-blur-md">
            <div className="fixed inset-y-0 w-full p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  JbHub
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="space-y-2">
                <Link
                  href="#about"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#logos"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Logos
                </Link>
                <Link
                  href="#contact"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}

        <main className="w-full">
          <div className="w-full">
            <section id="about" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 mb-32 text-center">
              <div className="max-w-3xl mx-auto">
               
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  WordPress Developer Extraordinaire
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Crafting high-performance WordPress solutions with custom themes, plugins, and seamless e-commerce integration.
                </p>
              </div>
            </section>

            <section id="projects" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-32">
              <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="group bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                          {project.title}
                        </h3>
                        <Link href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                            <ExternalLink className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section id="skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-32">
              <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
              <div className="grid gap-6 max-w-2xl mx-auto">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-300">{skillProgress[skill.name] || 0}%</span>
                    </div>
                    <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                  </div>
                ))}
              </div>
            </section>

            <section id="logos" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-32">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {logos.map((logo) => (
                  <Link key={logo.id} href={logo.url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex items-center justify-center h-16 transition-opacity group-hover:opacity-80">
                      <Image
                        src={`/placeholder.svg?height=64&width=120`}
                        alt={logo.name}
                        width={120}
                        height={64}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            

            <section id="contact" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-32 text-center">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Ready to start your next project? Let's create something amazing together.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="https://github.com/jerrybarry" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-white/10 bg-white/5 hover:bg-white/10">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/barjeremiah/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-white/10 bg-white/5 hover:bg-white/10">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:barnabasjeremiah01@gmail.com">
                  <Button variant="outline" size="icon" className="border-white/10 bg-white/5 hover:bg-white/10">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </main>

        <footer className="w-full border-t border-white/10 backdrop-blur-sm">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} JbHub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}