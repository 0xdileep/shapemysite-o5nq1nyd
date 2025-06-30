```tsx
import React, { useState } from 'react';
import { ChevronDownIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, ShieldCheckIcon, ServerIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Enterprise Network Security Assessment",
      description: "Comprehensive penetration testing and vulnerability assessment for a Fortune 500 company's network infrastructure.",
      tech: ["Nmap", "Metasploit", "Wireshark", "Python"],
      category: "Network Security"
    },
    {
      title: "AI-Powered Malware Detection System",
      description: "Machine learning model capable of detecting zero-day malware with 97% accuracy using behavioral analysis.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Docker"],
      category: "Machine Learning"
    },
    {
      title: "Blockchain-Based Identity Management",
      description: "Decentralized identity verification system using smart contracts to prevent identity theft and fraud.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      category: "Blockchain"
    },
    {
      title: "Real-time Threat Intelligence Platform",
      description: "Dashboard aggregating threat data from multiple sources with automated incident response capabilities.",
      tech: ["Node.js", "React", "MongoDB", "Redis"],
      category: "Threat Intelligence"
    },
    {
      title: "Mobile App Security Framework",
      description: "Comprehensive security testing framework for iOS and Android applications with automated vulnerability scanning.",
      tech: ["Java", "Swift", "OWASP ZAP", "Burp Suite"],
      category: "Mobile Security"
    }
  ];

  const skills = [
    { name: "Penetration Testing", level: 95 },
    { name: "Network Security", level: 90 },
    { name: "Incident Response", level: 85 },
    { name: "Python/Java", level: 92 },
    { name: "Cloud Security", level: 88 },
    { name: "Cryptography", level: 80 }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Mark</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <ShieldCheckIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mark</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MIT Cybersecurity Student & Security Researcher
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about protecting digital infrastructure and developing innovative security solutions. 
              Experienced in penetration testing, threat analysis, and secure system design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View My Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <ChevronDownIcon className="w-6 h-6 text-gray-400 animate-bounce mx-auto" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Currently pursuing advanced studies in cybersecurity at MIT while gaining hands-on experience through challenging projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm">
                <AcademicCapIcon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Focus</h3>
                <p className="text-gray-600 mb-6">
                  Studying at one of the world's leading institutions for technology and cybersecurity research. 
                  My coursework covers advanced topics in network security, cryptography, and threat intelligence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Advanced Network Security</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cryptographic Systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Incident Response & Forensics</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-sm">
                <BriefcaseIcon className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience & Projects</h3>
                <p className="text-gray-600 mb-6">
                  Through 5 major projects, I've developed expertise in various cybersecurity domains, 
                  from penetration testing to AI-powered security solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Major Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my major cybersecurity projects demonstrating expertise across various security domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <CodeBracketIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1