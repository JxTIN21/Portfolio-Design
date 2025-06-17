import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Download,
  ChevronDown,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Hotel,
  Users,
  Building,
  Star,
  Calendar,
  MapPin,
  Coffee,
  Shield,
  Trophy,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skills",
        "certifications",
        "contact",
      ];

      let current = sections[0]; // Default to home
      
      // Check if we're near the bottom of the page (for contact section)
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        current = "contact";
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              current = sections[i];
              break;
            }
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadCertificate = (certName) => {
    const link = document.createElement("a");
    link.href = `/certificates/${certName}.pdf`;
    link.download = `${certName}.pdf`;
    link.click();
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Siddharth Resume.pdf";
    link.download = "Siddharth Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="fixed inset-0 z-0">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

        {/* Animated Mesh Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-64 right-32 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-2 h-20 bg-gradient-to-b from-cyan-500/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-16 bg-gradient-to-b from-purple-500/30 to-transparent -rotate-45"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-24 bg-gradient-to-b from-blue-500/20 to-transparent rotate-12"></div>

        {/* Scattered Dots */}
        <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-3/4 left-1/5 w-0.5 h-0.5 bg-indigo-400/60 rounded-full animate-ping delay-1400"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-gray-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Siddharth Verma
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Education",
                "Experience",
                "Skills",
                "Certifications",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg transform scale-105"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 border-t border-gray-700">
              {[
                "Home",
                "About",
                "Education",
                "Experience",
                "Skills",
                "Certifications",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg transform scale-[1.02]"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden z-10"
      >
        <div className="text-center z-10">
          <div className="mb-12 relative">
            <div className="w-56 h-56 mx-auto group mt-8">
              <div className="relative w-full h-full transition-all duration-1000 group-hover:scale-110">
                {/* Circle Border/Frame */}
                <div className="absolute inset-0 w-full h-full rounded-full bg-gray-900 p-1.5 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>

                {/* Photo Coming Out of Circle */}
                <div className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] z-10">
                  <img
                    src="/images/Me.png"
                    alt="Siddharth Verma"
                    className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-110 shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Enhanced Fallback */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-black hidden flex-col items-center justify-center text-white shadow-2xl">
                    <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      SV
                    </div>
                    <Hotel className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                {/* Floating Particles */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute -top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute bottom-2 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute -bottom-2 right-2 w-3 h-3 bg-pink-400 rounded-full animate-fbounce opacity-60"></div>

                {/* Animated Rings */}
                <div className="absolute inset-0 w-full h-full rounded-full border-2 border-cyan-400/30 animate-ping"></div>
                <div className="absolute inset-0 w-full h-full rounded-full border border-purple-400/50 animate-pulse"></div>
                <div className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] rounded-full border border-cyan-300/20 animate-spin"></div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
            Siddharth Verma
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 animate-pulse flex items-center justify-center gap-2">
            <Hotel className="w-6 h-6" />
            Hotel Management Professional
          </p>
          <button
            onClick={downloadResume}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse"
          >
            <Download className="inline-block w-5 h-5 mr-2" />
            Download Resume
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <div className="flex items-center justify-center gap-3 mb-8">
              <User className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl font-bold text-white">About Me</h2>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Passionate hotel management professional with a strong
                foundation in hospitality operations and customer service
                excellence. I bring dedication, attention to detail, and a
                commitment to creating exceptional guest experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in hospitality has equipped me with comprehensive
                skills in front office operations, culinary arts, and
                hospitality management. I thrive in dynamic environments and am
                always eager to contribute to team success while continuously
                learning and growing in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
<section id="education" className="py-20 px-4 relative z-10">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center justify-center gap-3 mb-12">
      <GraduationCap className="w-8 h-8 text-cyan-400" />
      <h2 className="text-4xl font-bold text-white">Education</h2>
    </div>
    <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Bachelor in Hotel Management and Catering Technology
          </h3>
          <p className="text-cyan-300 text-lg flex items-center gap-2">
            <Building className="w-5 h-5" />
            Babu Banarasi Das University (BBDU)
          </p>
          <p className="text-gray-400 mt-2">
            Comprehensive program covering all aspects of hospitality
            management, culinary arts, and business operations.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Experience</h2>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Internship - Hyatt Regency Lucknow
                </h3>
                <p className="text-cyan-300 text-lg mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  January 2023 - June 2023 (6 months)
                </p>
                <p className="text-gray-400 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Lucknow, India
                </p>
                <div className="space-y-3">
                  <p className="text-gray-300 flex items-start gap-2">
                    <Users className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                    Collaborated with Hyatt Regency team on daily operations
                  </p>
                  <p className="text-gray-300 flex items-start gap-2">
                    <Trophy className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                    Managed IPL events at Ekana Stadium
                  </p>
                  <p className="text-gray-300 flex items-start gap-2">
                    <Star className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                    Gained hands-on experience in luxury hospitality operations
                  </p>
                  <p className="text-gray-300 flex items-start gap-2">
                    <Shield className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                    Developed skills in guest relations and event management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Hotel Management",
                icon: Hotel,
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Front Office Operations",
                icon: Users,
                color: "from-green-500 to-teal-500",
              },
              {
                name: "Event Management",
                icon: Calendar,
                color: "from-orange-500 to-red-500",
              },
              {
                name: "Hospitality Management",
                icon: Coffee,
                color: "from-purple-500 to-pink-500",
              },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Internship Certificate",
                desc: "Hyatt Regency Lucknow",
                image: "/certificates/certificate.png",
                icon: Hotel,
              },
              {
                name: "Certificate of Appreciation",
                desc: "Outstanding Performance",
                image: "/certificates/appreciation.png",
                icon: Trophy,
              },
              {
                name: "Gratitude Certificate",
                desc: "Excellence in Service",
                image: "/certificates/gratitude.png",
                icon: Star,
              },
            ].map((cert, index) => (
              <div
                key={cert.name}
                className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
              >
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-800/50 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 hidden items-center justify-center">
                      <div className="text-center">
                        <cert.icon className="w-16 h-16 text-white mx-auto mb-2" />
                        <div className="text-white font-bold text-sm">
                          {cert.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{cert.desc}</p>
                  <button
                    onClick={() =>
                      downloadCertificate(
                        cert.name.toLowerCase().replace(/\s+/g, "_")
                      )
                    }
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Download className="inline-block w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Mail className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Contact</h2>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-8">
                Let's connect and explore opportunities together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:siddharthverma2911@gmail.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                <a
                  href="https://linkedin.com/in/siddharth-verma-21b365274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;