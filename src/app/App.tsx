import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Users,
  Code,
  Database,
  Palette,
  Film,
  ChevronRight,
  Sparkles,
  Heart,
  Star,
  Smile,
  Coffee,
  Briefcase,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! I will get back to you soon. ✨",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Hoppy Health Adventure",
      description:
        "Game Development – An interactive game designed to help children compare good lifestyle and bad lifestyle.",
      tags: ["Mobile App", "UI/UX", "Educational"],
      image:
        "https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/hoppyhealthadventure.png",
    },
    {
      title: "AR Stationary Shop App",
      description:
        "An augmented reality mobile application that allows users to visualize stationary items in their space before purchasing.",
      tags: ["AR", "3D", "Blender", "Mobile App", "Unity"],
      image:
        "https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/ARstationARyShop.png",
    },
    {
      title: "Tiny English Explorer",
      description:
        "A learning application focused on helping young children develop English language skills through interactive stories and games.",
      tags: ["Mobile App", "Educational", "UI/UX"],
      image:
        "https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/TinyEnglishExplorer.png",
    },
    {
      title: "Drive4U",
      description:
        "A transportation mobile application connecting drivers and passengers for convenient and safe ride-sharing experiences.",
      tags: ["Mobile App", "UI/UX", "Flutter"],
      image:
        "https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/drive4u.png",
    },
    {
      title: "Bobo The Bunny",
      description:
        "A creative 3D animation project showcasing modeling, texturing, and rendering skills using Blender.",
      tags: ["3D Animation", "Blender", "Design"],
      image:
        "https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/bobothebunny.png",
    },
    {
      title: "My Sport",
      description:
        "E-Commerce website in web development class project",
      tags: ["Web Development", "UI/UX", "HTML"],
      image:
        "https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/mysportecommerce.png",
    },
  ];

  const skills = {
    Frontend: ["HTML", "JavaScript", "CSS", "UI/UX", "Flutter"],
    Backend: ["Java", "C#", "PHP"],
    Database: ["MySQL"],
    "Design Tools": ["Figma", "Canva"],
    Others: ["Blender", "Unity", "CapCut", "DaVinci Resolve"],
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#f5ebe0]/30 to-[#e3d5ca]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-tr from-[#edede9]/30 to-[#d6ccc2]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-bl from-[#f5ebe0]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg z-50 border-b border-[#f5ebe0]/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-[#6b5d4f] font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={18} className="text-[#c4a57b]" />
              Nurainatasyah
            </motion.div>
            <div className="hidden md:flex gap-8">
              <a
                href="#about"
                className="text-[#8b7d6b] hover:text-[#6b5d4f] transition-all hover:scale-105"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-[#8b7d6b] hover:text-[#6b5d4f] transition-all hover:scale-105"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-[#8b7d6b] hover:text-[#6b5d4f] transition-all hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-[#8b7d6b] hover:text-[#6b5d4f] transition-all hover:scale-105"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-[#8b7d6b] hover:text-[#6b5d4f] transition-all hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-8"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#f5ebe0] via-[#e3d5ca] to-[#c4a57b] mx-auto mb-6 flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://r2.fivemanage.com/akhIrCmcgT65A6d5uYuPy/passportpicture.jpeg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-[#c4a57b] rounded-full p-2">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4 text-[#4a3f35] tracking-tight">
              Nurainatasyah Binti Badrol
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Coffee size={20} className="text-[#c4a57b]" />
            <p className="text-xl md:text-2xl text-[#8b7d6b]">
              Multimedia Computing Student
            </p>
            <Star size={20} className="text-[#c4a57b]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-[#a39485] mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate in software development, web development,
            and UI/UX design with a strong interest in creating
            meaningful digital experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(196, 165, 123, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-[#c4a57b] to-[#b8a394] text-white px-10 py-4 rounded-full hover:from-[#b8a394] hover:to-[#c4a57b] transition-all shadow-lg inline-flex items-center gap-2"
          >
            View My Projects
            <ChevronRight size={20} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex justify-center gap-4"
          >
            <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-[#f5ebe0]">
              <p className="text-sm text-[#8b7d6b]">
                💻 Software Developer
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-[#f5ebe0]">
              <p className="text-sm text-[#8b7d6b]">
                🎨 UI/UX Designer
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-[#f5ebe0]">
              <p className="text-sm text-[#8b7d6b]">
                ✨ 3D Modelling
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <Smile size={28} className="text-[#c4a57b]" />
              <h2 className="text-3xl md:text-4xl text-[#4a3f35] text-center">
                About Me
              </h2>
              <Heart size={28} className="text-[#c4a57b]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#f5ebe0]/50"
          >
            <p className="text-lg text-[#6b5d4f] leading-relaxed mb-6">
              Hi, I’m Nurainatasyah, a Multimedia Computing
              student passionate about software development, web
              development, and UI/UX design. I enjoy creating
              meaningful digital experiences while continuously
              learning and improving my skills. Currently, I am
              seeking internship opportunities to gain industry
              experience and grow professionally💡
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#f5ebe0] to-[#edede9] px-5 py-3 rounded-full shadow-sm"
              >
                <Award size={20} className="text-[#c4a57b]" />
                <span className="text-[#6b5d4f]">
                  Fast Learner
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#edede9] to-[#e3d5ca] px-5 py-3 rounded-full shadow-sm"
              >
                <Users size={20} className="text-[#c4a57b]" />
                <span className="text-[#6b5d4f]">
                  Team Player
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#e3d5ca] to-[#d6ccc2] px-5 py-3 rounded-full shadow-sm"
              >
                <Code size={20} className="text-[#c4a57b]" />
                <span className="text-[#6b5d4f]">
                  Adaptable
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-12">
              <Sparkles size={28} className="text-[#c4a57b]" />
              <h2 className="text-3xl md:text-4xl text-[#4a3f35] text-center">
                Skills & Tools
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(
              ([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 40px rgba(196, 165, 123, 0.2)",
                  }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-[#f5ebe0]/50 hover:border-[#c4a57b]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-[#f5ebe0] to-[#e3d5ca] p-3 rounded-xl">
                      {category === "Frontend" && (
                        <Code
                          size={24}
                          className="text-[#c4a57b]"
                        />
                      )}
                      {category === "Backend" && (
                        <Database
                          size={24}
                          className="text-[#c4a57b]"
                        />
                      )}
                      {category === "Database" && (
                        <Database
                          size={24}
                          className="text-[#c4a57b]"
                        />
                      )}
                      {category === "Design Tools" && (
                        <Palette
                          size={24}
                          className="text-[#c4a57b]"
                        />
                      )}
                      {category === "Others" && (
                        <Film
                          size={24}
                          className="text-[#c4a57b]"
                        />
                      )}
                    </div>
                    <h3 className="text-xl text-[#4a3f35]">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-[#fdfcfb] to-[#f5ebe0] text-[#6b5d4f] px-4 py-2 rounded-full text-sm shadow-sm border border-[#e3d5ca]/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star size={28} className="text-[#c4a57b]" />
              <h2 className="text-3xl md:text-4xl text-[#4a3f35] text-center">
                My Projects
              </h2>
            </div>
            <p className="text-center text-[#8b7d6b] mb-12">
              A collection of work I'm proud of ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#f5ebe0]/50 group"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#f5ebe0] to-[#e3d5ca] relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-[#4a3f35] group-hover:text-[#c4a57b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8b7d6b] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-r from-[#fdfcfb] to-[#f5ebe0] text-[#6b5d4f] px-3 py-1 rounded-full text-xs shadow-sm border border-[#e3d5ca]/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Co-curricular Section */}
      <section
        id="education"
        className="py-20 px-6 bg-white/50"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-12">
              <GraduationCap
                size={28}
                className="text-[#c4a57b]"
              />
              <h2 className="text-3xl md:text-4xl text-[#4a3f35] text-center">
                Education & Activities
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 40px rgba(196, 165, 123, 0.2)",
              }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#f5ebe0]/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#f5ebe0] to-[#e3d5ca] p-4 rounded-2xl">
                  <GraduationCap
                    size={32}
                    className="text-[#c4a57b]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-[#4a3f35]">
                    Education
                  </h3>
                  <p className="text-[#8b7d6b]">
                    Academic Background 📚
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#fdfcfb] to-[#f5ebe0] p-6 rounded-2xl">
                  <h4 className="text-lg text-[#4a3f35] mb-1">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-[#8b7d6b] mb-1">
                    Multimedia Computing
                  </p>
                  <p className="text-[#a39485] text-sm mb-3">
                    Universiti Tun Hussein Onn Malaysia (UTHM)
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                    >
                      <Award
                        size={16}
                        className="text-[#c4a57b]"
                      />
                      <span className="text-[#6b5d4f]">
                        CGPA: 3.38
                      </span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                    >
                      <Star
                        size={16}
                        className="text-[#c4a57b]"
                      />
                      <span className="text-[#6b5d4f]">
                        Dean Award
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Co-curricular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 40px rgba(196, 165, 123, 0.2)",
              }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#f5ebe0]/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#e3d5ca] to-[#d6ccc2] p-4 rounded-2xl">
                  <Users size={32} className="text-[#c4a57b]" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-[#4a3f35]">
                    Co-curricular
                  </h3>
                  <p className="text-[#8b7d6b]">
                    Leadership & Involvement 🌟
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-[#fdfcfb] to-[#f5ebe0] p-5 rounded-2xl"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#c4a57b] to-[#b8a394] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg text-[#4a3f35] mb-1">
                      Vice Secretary
                    </h4>
                    <p className="text-[#8b7d6b]">
                      Brass Band Club
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-[#f5ebe0] to-[#e3d5ca] p-5 rounded-2xl"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#c4a57b] to-[#b8a394] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg text-[#4a3f35] mb-1">
                      Event Facilitator
                    </h4>
                    <p className="text-[#8b7d6b]">
                      Various Campus Events
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart size={28} className="text-[#c4a57b]" />
              <h2 className="text-3xl md:text-4xl text-[#4a3f35] text-center">
                Get In Touch
              </h2>
            </div>
            <p className="text-center text-[#8b7d6b] mb-12">
              Open to internship opportunities in software
              development, IT, and game development. I really
              open to gained knowledge in your company💌
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
          {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl text-[#4a3f35] mb-6">
                Contact Information
              </h3>

              <motion.div
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 30px rgba(196, 165, 123, 0.2)",
                }}
                className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-lg border border-[#f5ebe0]/50"
              >
                <div className="bg-gradient-to-br from-[#f5ebe0] to-[#e3d5ca] p-3 rounded-xl flex-shrink-0">
                  <Mail size={24} className="text-[#c4a57b]" />
                </div>
                <div>
                  <p className="text-sm text-[#8b7d6b] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:nurainatasyahbadrol@gmail.com"
                    className="text-[#6b5d4f] hover:text-[#c4a57b] transition-colors"
                  >
                    nurainatasyahbadrol@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 30px rgba(196, 165, 123, 0.2)",
                }}
                className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-lg border border-[#f5ebe0]/50"
              >
                <div className="bg-gradient-to-br from-[#e3d5ca] to-[#d6ccc2] p-3 rounded-xl flex-shrink-0">
                  <Phone size={24} className="text-[#c4a57b]" />
                </div>
                <div>
                  <p className="text-sm text-[#8b7d6b] mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+60165798517"
                    className="text-[#6b5d4f] hover:text-[#c4a57b] transition-colors"
                  >
                    +60 16-5798517
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 30px rgba(196, 165, 123, 0.2)",
                }}
                className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-lg border border-[#f5ebe0]/50"
              >
                <div className="bg-gradient-to-br from-[#d6ccc2] to-[#c4a57b] p-3 rounded-xl flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#8b7d6b] mb-1">
                    Location
                  </p>
                  <p className="text-[#6b5d4f]">
                    Seremban, Negeri Sembilan, Malaysia 🇲🇾
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#f5ebe0] via-[#edede9] to-[#e3d5ca] py-12 px-6 border-t border-[#d6ccc2]/30">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={24} className="text-[#c4a57b]" />
              <p className="text-2xl text-[#4a3f35]">
                Nurainatasyah
              </p>
              <Heart size={24} className="text-[#c4a57b]" />
            </div>
            <p className="text-[#8b7d6b] mb-6">
              Creating meaningful digital experiences ✨
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-white p-3 rounded-full shadow-md cursor-pointer"
              >
                <Mail size={20} className="text-[#c4a57b]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="bg-white p-3 rounded-full shadow-md cursor-pointer"
              >
                <Briefcase
                  size={20}
                  className="text-[#c4a57b]"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-white p-3 rounded-full shadow-md cursor-pointer"
              >
                <Heart size={20} className="text-[#c4a57b]" />
              </motion.div>
            </div>
            <p className="text-sm text-[#a39485]">
              © 2026 Nurainatasyah Binti Badrol. Made with love
              and lots of coffee ☕
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
