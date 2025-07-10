import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  User, 
  Code, 
  Database,
  Brain,
  BarChart3,
  Globe,
  Calendar,
  ExternalLink,
  Menu,
  X,
  Award,
  Target,
  Zap,
  TrendingUp
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
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
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
        activeSection === href 
          ? 'text-blue-600' 
          : 'text-gray-600'
      }`}
    >
      {children}
      {activeSection === href && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
      )}
    </button>
  );

  const SkillBadge = ({ skill, delay = 0 }: { skill: string; delay?: number }) => (
    <span 
      className={`inline-block px-3 py-1 m-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-lg ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );

  const StatCard = ({ value, label, icon: Icon, delay = 0 }: { 
    value: string; 
    label: string; 
    icon: any; 
    delay?: number;
  }) => (
    <div 
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg mb-4 mx-auto">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );

  const ExperienceCard = ({ 
    role, 
    company, 
    location, 
    period, 
    achievements, 
    delay = 0 
  }: {
    role: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
    delay?: number;
  }) => (
    <div 
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-blue-600 ${
        isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>
          <h4 className="text-lg font-semibold text-blue-600">{company}</h4>
          <p className="text-sm text-gray-500 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </p>
        </div>
        <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {period}
        </div>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <Zap className="w-4 h-4 mr-2 mt-0.5 text-teal-500 flex-shrink-0" />
            <span className="text-sm leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Noor Aldeen Al-Harahsheh
              </h3>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="education">Education</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="experience">Experience</NavLink>
                <NavLink href="education">Education</NavLink>
                <NavLink href="skills">Skills</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`text-white transform transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Noor Aldeen Al-Harahsheh
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Data Scientist & AI Engineer
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Results-driven Data Scientist with expertise in machine learning, natural language processing, 
                and scalable data systems. Passionate about leveraging AI to solve complex problems and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Get In Touch
                </button>
                <a
                  href="https://www.linkedin.com/in/nooraldeen-samer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View LinkedIn
                </a>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                    <img 
                      src="/profile.jpg" 
                      alt="Noor Aldeen Al-Harahsheh"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to icon if image doesn't load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                      <User className="w-32 h-32 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate Data Scientist based in Amman, Jordan, with a strong foundation in machine learning, 
                natural language processing, and scalable data systems. As part of Jordan's first cohort to earn a 
                bachelor's degree in Data Science, I ranked third in my class, demonstrating my dedication to academic 
                excellence and passion for advancing the field.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience spans across diverse industries, from legal tech to telecommunications, where I've 
                successfully deployed AI solutions that impact hundreds of thousands of users. I specialize in 
                building production-ready ML pipelines, developing multilingual NLP models, and creating intelligent 
                systems that deliver measurable business value.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard value="280K+" label="Legal cases impacted" icon={Target} delay={100} />
              <StatCard value="5K+" label="Monthly chatbot users" icon={User} delay={200} />
              <StatCard value="85%+" label="User satisfaction rate" icon={TrendingUp} delay={300} />
              <StatCard value="60%" label="Data processing improvement" icon={BarChart3} delay={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <ExperienceCard
              role="Data Scientist"
              company="Qistas for Information Technology"
              location="Amman, Jordan"
              period="Sep 2023 - Present"
              achievements={[
                "Led AI/ML projects in legal tech sector across Gulf countries, impacting 280,000+ legal cases",
                "Developed \"Araf\" multilingual AI legal chatbot serving 5,000+ users monthly with 85%+ satisfaction",
                "Built NLP models for legislative analysis, reducing legal research time by 30%",
                "Created interactive dashboards improving decision-making efficiency by 45%",
                "Implemented Elasticsearch semantic search across 800,000+ legal documents",
                "Designed dynamic function routing with GPT-4, reducing query response time by 35%"
              ]}
              delay={100}
            />
            
            <ExperienceCard
              role="Data Scientist Intern"
              company="Orange Company"
              location="Amman, Jordan"
              period="May - Jul 2023"
              achievements={[
                "Conducted comprehensive data collection, cleansing, and preprocessing",
                "Engineered and fine-tuned machine learning models with focus on performance and scalability",
                "Collaborated with cross-functional teams to align technical solutions with business objectives",
                "Led full-cycle data science projects from problem definition to model deployment"
              ]}
              delay={200}
            />
            
            <ExperienceCard
              role="Data Scientist Intern"
              company="SHAI For AI Company"
              location="Amman, Jordan"
              period="Sep 2022 - Feb 2023"
              achievements={[
                "Developed computer vision, ML, and NLP models achieving up to 84% accuracy",
                "Processed large-scale datasets exceeding 100,000 records with 99% data integrity",
                "Engineered Python library for real-time face recognition with 87% accuracy",
                "Designed custom search engine improving Arabic semantic search by 35%",
                "Built real-time object detection system for live-streamed games using YOLOv5"
              ]}
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-200 transform transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Data Science</h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Balqa Applied University</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Amman, Al-Salt, Balqa
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2019 - 2023
                    </span>
                    <span className="flex items-center">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      GPA: 3.25 (Very Good)
                    </span>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      🏆 Graduated as part of Jordan's first cohort to earn a bachelor's degree in Data Science, 
                      ranking third in my class. This achievement highlights my dedication to academic excellence 
                      and passion for advancing the field of data science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap">
                <SkillBadge skill="Python" delay={150} />
                <SkillBadge skill="SQL" delay={200} />
                <SkillBadge skill="NoSQL" delay={250} />
              </div>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Machine Learning & AI</h3>
              </div>
              <div className="flex flex-wrap">
                <SkillBadge skill="Scikit-learn" delay={300} />
                <SkillBadge skill="PyTorch" delay={350} />
                <SkillBadge skill="OpenAI" delay={400} />
                <SkillBadge skill="NLTK" delay={450} />
                <SkillBadge skill="OpenCV" delay={500} />
              </div>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Data Analysis & Visualization</h3>
              </div>
              <div className="flex flex-wrap">
                <SkillBadge skill="Numpy" delay={550} />
                <SkillBadge skill="Pandas" delay={600} />
                <SkillBadge skill="Matplotlib" delay={650} />
                <SkillBadge skill="Seaborn" delay={700} />
                <SkillBadge skill="Plotly" delay={750} />
                <SkillBadge skill="Power BI" delay={800} />
              </div>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Development & Deployment</h3>
              </div>
              <div className="flex flex-wrap">
                <SkillBadge skill="FastAPI" delay={850} />
                <SkillBadge skill="Jupyter Notebook" delay={900} />
                <SkillBadge skill="Elasticsearch" delay={950} />
                <SkillBadge skill="Ollama" delay={1000} />
              </div>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Databases & Tools</h3>
              </div>
              <div className="flex flex-wrap">
                <SkillBadge skill="MySQL" delay={1050} />
                <SkillBadge skill="SSMS" delay={1100} />
                <SkillBadge skill="Kibana" delay={1150} />
                <SkillBadge skill="Postman" delay={1200} />
              </div>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Scientific Computing</h3>
              </div>
              <div className="flex flex-wrap">
                <SkillBadge skill="Scipy.stats" delay={1250} />
                <SkillBadge skill="Math" delay={1300} />
                <SkillBadge skill="JSON" delay={1350} />
                <SkillBadge skill="Requests" delay={1400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in the field of data science and AI. Feel free to reach out!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <a href="mailto:nooraldeen529@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                      nooraldeen529@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <a href="tel:+962791298522" className="text-blue-200 hover:text-white transition-colors">
                      +962 79 129 8522
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Location</h4>
                    <p className="text-blue-200">Amman, Jordan</p>
                  </div>
                </div>
              </div>
              
              <div className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/nooraldeen-samer" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-200 hover:text-white transition-colors flex items-center"
                    >
                      linkedin.com/in/nooraldeen-samer
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className={`transform transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                <p className="text-lg text-blue-100 mb-6">
                  Ready to collaborate on your next data science project?
                </p>
                <a
                  href="mailto:nooraldeen529@gmail.com"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Noor Aldeen Al-Harahsheh
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Data Scientist & AI Engineer | Turning Data into Insights
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="mailto:nooraldeen529@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nooraldeen-samer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                &copy; 2025 Noor Aldeen Al-Harahsheh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;