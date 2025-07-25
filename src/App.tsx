import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Users, Award, MapPin, Calendar, GraduationCap } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Object-Oriented Programming', level: 50, category: 'Programming' },
    { name: 'Java', level: 55, category: 'Programming' },
    { name: 'C#', level: 50, category: 'Programming' },
    { name: 'C++', level: 75, category: 'Programming' },
    { name: 'Python', level: 80, category: 'Programming' },
    { name: 'SQL & Database Development', level: 75, category: 'Database' },
    { name: 'Project Management', level: 45, category: 'Management' },
    { name: 'Networking (Cisco)', level: 70, category: 'Networking' }
  ];

  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A comprehensive inventory management system built with C# and SQL Server, featuring real-time stock tracking and automated reporting.',
      technologies: ['C#', 'SQL Server', 'WPF', 'Entity Framework'],
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Electronic Voting System',
      description: 'A collaborative group project developing a secure electronic voting system using JavaFX. Citizens can vote for ruling parties including ANC, DA, and EFF with real-time vote counting and results visualization.',
      technologies: ['Java', 'JavaFX', 'FXML', 'CSS', 'MVC Architecture'],
      githubUrl: 'https://github.com/TrustMlambo2002/LibertyVirtual',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Network Topology Simulator',
      description: 'A Java-based network simulation tool that helps visualize network configurations and troubleshoot connectivity issues.',
      technologies: ['Java', 'JavaFX', 'Network Protocols'],
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Student Grade Management',
      description: 'A Python application for managing student grades with statistical analysis and performance tracking capabilities.',
      technologies: ['Python', 'SQLite', 'Tkinter', 'Pandas'],
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">Trust Mlambo</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
              Trust Mlambo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Passionate Software Developer & Final-Year BSc IT Student
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems that solve real-world problems through innovative programming and critical thinking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-80 h-80 rounded-full mx-auto mb-8 flex items-center justify-center">
                <div className="bg-white w-72 h-72 rounded-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a self-motivated and curious final-year BSc Information Technology student with a strong foundation in structured logic, programming, and debugging. My passion lies in building intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Detail-oriented and eager to learn, I thrive in environments that reward innovation and critical thinking. Through extensive coursework and collaborative projects, I've developed expertise in multiple programming languages and modern development practices.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <MapPin className="w-5 h-5 text-teal-500" />
                <span>Soshanguve, Pretoria</span>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Podcast Listening', 'Reading', 'Gaming', 'Hardware Optimization', 'System Analysis', 'Political Systems'].map((hobby) => (
                    <span
                      key={hobby}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {/* University Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-900">North-West University (NWU)</h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Feb 2022 – Dec 2025</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-teal-600 mb-4">BSc Information Technology</p>
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-lg font-semibold text-gray-700">Current GPA: 64.72</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Currently pursuing a rigorous academic journey in IT, developing strong proficiency in multiple programming languages including C#, Java, C++, and Python.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-900">Key Areas of Study:</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        OOP principles in Java and C#
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        Networking fundamentals with Cisco Packet Tracer
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        Database and inventory management systems
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        Software development methodologies
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        GUI development with JavaFX
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        Collaborative software development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* High School Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-teal-600 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-900">Amogelang Secondary School</h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Jan 2018 – Dec 2020</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-teal-600">National Senior Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-blue-900">{skill.name}</h3>
                  <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-400 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-teal-600 hover:text-teal-800 font-semibold transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work together!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a 
                    href="mailto:trust.mlambo2002@gmail.com"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    trust.mlambo2002@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a 
                    href="tel:074-923-3654"
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    074-923-3654
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-blue-200">Soshanguve, Pretoria, 0152</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors duration-200 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-500 p-4 rounded-full transition-colors duration-200 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">Quick Message</h4>
                <p className="text-blue-200 text-sm">
                  Ready to collaborate on exciting projects or discuss opportunities in software development. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 Trust Mlambo. Designed and developed with passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;