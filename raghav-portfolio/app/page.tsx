"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ExternalLink, Database, Award, Terminal, Code, GraduationCap, FileText, ChevronRight, Briefcase, Activity, Cloud,ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

// --- STARFIELD COMPONENT ---
const Starfield = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const stars = useMemo(() => {
    if (!mounted) return { layer1: [], layer2: [], layer3: [] };
    return {
      layer1: [...Array(100)].map(() => ({
        width: Math.random() * 1.5 + 'px', height: Math.random() * 1.5 + 'px',
        top: Math.random() * 100 + '%', left: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 4 + 3) + 's'
      })),
      layer2: [...Array(50)].map(() => ({
        width: Math.random() * 2 + 1 + 'px', height: Math.random() * 2 + 1 + 'px',
        top: Math.random() * 150 - 25 + '%', left: Math.random() * 100 + '%'
      })),
      layer3: [...Array(25)].map(() => ({
        width: Math.random() * 3 + 1 + 'px', height: Math.random() * 3 + 1 + 'px',
        top: Math.random() * 150 - 25 + '%', left: Math.random() * 100 + '%'
      }))
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
      <div className="absolute inset-0 z-0 opacity-40">
        {stars.layer1.map((style, i) => (
          <div key={`star-1-${i}`} className="absolute rounded-full bg-white" style={{ ...style, animationName: 'twinkle', animationIterationCount: 'infinite', animationDirection: 'alternate' }} />
        ))}
      </div>
      <div className="absolute inset-0 z-0 animate-[moveUp_100s_linear_infinite] opacity-60">
        {stars.layer2.map((style, i) => (
          <div key={`star-2-${i}`} className="absolute rounded-full bg-blue-200" style={{ ...style, boxShadow: '0 0 5px rgba(191, 219, 254, 0.5)' }} />
        ))}
      </div>
      <div className="absolute inset-0 z-0 animate-[moveUp_50s_linear_infinite] opacity-80">
        {stars.layer3.map((style, i) => (
          <div key={`star-3-${i}`} className="absolute rounded-full bg-indigo-100" style={{ ...style, boxShadow: '0 0 8px rgba(224, 231, 255, 0.8)' }} />
        ))}
      </div>
      <style jsx>{`
        @keyframes twinkle { 0% { opacity: 0.2; } 100% { opacity: 1; } }
        @keyframes moveUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
      `}</style>
    </div>
  );
};

// --- MAIN APP ---
export default function Home() {
  const [activeTab, setActiveTab] = useState("HOME");

  const tabs = [
    "HOME", "EDUCATION", "SKILLS", "EXPERIENCE", 
    "PROJECTS", "CERTIFICATIONS", "RESUME", "CONTACT"
  ];

  const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.6-5-2.5-5-3"></path></svg>;
  const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

  const tabVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    enter: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <main className="min-h-screen bg-transparent text-gray-300 font-sans relative overflow-hidden selection:bg-blue-500/30">
      <Starfield />

      {/* FIXED TOP NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-widest text-white flex items-center gap-2 shrink-0 hidden md:flex">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            RAGHAVENDRA SAITEJA BASANI
          </div>
          
          <div className="flex overflow-x-auto scrollbar-hide space-x-1 md:space-x-2 w-full md:w-auto px-2 md:px-0 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeTab === tab 
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-32 pb-24 min-h-screen flex items-center">
        <AnimatePresence mode="wait">
          
          {/* --- TAB: HOME --- */}
          {activeTab === "HOME" && (
            <motion.div key="HOME" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-mono text-xs mb-8 backdrop-blur-sm">
                  <Terminal size={12} /> Hey Welcome !
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.05]">
                  Engineering <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Autonomous</span> Scale.
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
                  I am an AI Engineer & Full-Stack Developer specializing in Autonomous Agents, LLM Integration, and Industrial IoT. 150+ LeetCode problems solved with strict algorithmic discipline.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://leetcode.com/u/23245A0204/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium text-sm rounded-full">
                    <Code size={18} /> LeetCode
                  </a>
                  <a href="https://github.com/Raghavsai12" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium text-sm rounded-full">
                    <GithubIcon /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/RaghavendraSaitejaBasani" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 transition-colors font-medium text-sm rounded-full">
                    <LinkedinIcon /> LinkedIn
                  </a>
                </div>
              </div>
              <div className="w-64 h-80 md:w-80 md:h-[26rem] relative flex-shrink-0 group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <img src="/profile.jpg" alt="Raghavendra Sai Teja" className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          )}

          {/* --- TAB: EDUCATION --- */}
          {activeTab === "EDUCATION" && (
            <motion.div key="EDUCATION" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><GraduationCap className="text-blue-500"/> Academic Background</h2>
              <div className="space-y-6">
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">Gokaraju Rangaraju Institute of Engineering and Technology</h3>
                    <span className="font-mono text-blue-400 text-sm">2023 — 2026</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">B-Tech in Electrical and Electronics Engineering</p>
                  <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-mono text-sm">
                    GPA: 8.67
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">Government Polytechnic College Masabtank</h3>
                    <span className="font-mono text-purple-400 text-sm">2020 — 2023</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">Diploma in Electrical and Electronics Engineering</p>
                  <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-mono text-sm">
                    GPA: 9.81
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- TAB: SKILLS --- */}
          {activeTab === "SKILLS" && (
            <motion.div key="SKILLS" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Code className="text-blue-500"/> Technical Arsenal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Languages", icon: <Terminal size={20}/>, skills: ["Python", "JavaScript (ES6+)", "Java", "SQL"], color: "blue" },
                  { title: "Backend & APIs", icon: <Database size={20}/>, skills: ["Node.js", "Express.js", "REST API Design", "Playwright"], color: "purple" },
                  { title: "Frontend", icon: <ExternalLink size={20}/>, skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"], color: "pink" },
                  { title: "Database & Cloud", icon: <Cloud size={20}/>, skills: ["MongoDB (Time-Series)", "MySQL", "PostgreSQL", "MQTT (HiveMQ)", "Render", "Vercel"], color: "emerald" },
                  { title: "AI Integration", icon: <Activity size={20}/>, skills: ["LLM API (OpenAI/Claude)", "Prompt Engineering", "NLP Parsers"], color: "orange" },
                  { title: "Core CS", icon: <Briefcase size={20}/>, skills: ["Data Structures & Algorithms", "OOP", "Git/GitHub", "VS Code","Computer Networks","DBMS"], color: "indigo" }
                ].map((category, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className={`text-${category.color}-400`}>{category.icon}</span> {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, i) => (
                        <span key={i} className={`px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:scale-105 hover:bg-${category.color}-500/20 hover:border-${category.color}-500/50 hover:text-white transition-all cursor-default`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* --- TAB: EXPERIENCE --- */}
          {activeTab === "EXPERIENCE" && (
            <motion.div key="EXPERIENCE" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Briefcase className="text-blue-500"/> Professional Experience</h2>
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-colors relative overflow-hidden backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Engineer Intern</h3>
                    <p className="text-blue-400 font-medium">Nhancio Technologies</p>
                  </div>
                  <div className="text-gray-500 font-mono text-sm mt-2 md:mt-0 bg-white/5 px-4 py-1 rounded-full w-fit h-fit">
                    Jan 2026 — May 2026
                  </div>
                </div>
                <ul className="space-y-4 text-gray-400 mb-8">
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Autonomous Web Automation:</strong> Architecting an end-to-end AI recruitment agent utilizing Browser-use and Playwright to autonomously navigate complex job board workflows.</span></li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Intelligent Information Extraction:</strong> Developing a dynamic parsing pipeline that actively scrapes candidate profiles and leverages LLMs (GPT-4/Claude) to synthesize high-quality, ATS-optimized resumes.</span></li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Resume Scoring Engine:</strong> Prototyping a semantic analysis NLP tool to evaluate candidate experience against target job descriptions, building towards a fully automated matching score algorithm.</span></li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Form-Filling Intelligence:</strong> Integrating an autonomous logic layer designed to interpret dynamic web forms and map unstructured user experience data.</span></li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* --- TAB: PROJECTS --- */}
          {activeTab === "PROJECTS" && (
            <motion.div key="PROJECTS" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Database className="text-blue-500"/> Featured Architecture</h2>
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-colors backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Industrial IoT Digital Twin for CNC Laser Systems</h3>
                    <p className="text-gray-500 font-mono text-xs mt-2">Node.js | React | ESP32 | MQTT | MongoDB | AWS</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href="https://github.com/Raghavsai12" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white transition-colors border border-white/10">
                      <GithubIcon /> Source Code
                    </a>
                    <a href="https://cnc-digital-twin.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-sm transition-colors border border-blue-500/30">
                      <ExternalLink size={16}/> Live Dashboard
                    </a>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Real-time Data Pipeline:</strong> Engineered a high-frequency telemetry pipeline using MQTT and WebSockets to stream live 3D vibration (ADXL345) and thermal data from ESP32 edge sensors with sub-500ms latency.</span></li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>High-Availability Backend:</strong> Developed a dual-layer storage strategy using Redis for caching and MongoDB Time-Series collections for historical logging, preventing UI crashes.</span></li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Machine Learning Watchdog:</strong> Deployed a Python microservice running Scikit-Learn&apos;s Isolation Forest algorithm to establish a dynamic CNC baseline, detecting tool chatter.</span></li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 w-5 h-5" /><span><strong>Deployment:</strong> Orchestrated decoupled cloud infrastructure on Render (Backend) and Vercel Edge Network (React Dashboard).</span></li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* --- TAB: CERTIFICATIONS --- */}
          {activeTab === "CERTIFICATIONS" && (
            <motion.div key="CERTIFICATIONS" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full">
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Award className="text-blue-500"/> Certifications & Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://www.credly.com/badges/92c7c411-2afc-42d5-ba21-2280aa2ceaec/linked_in_profile" target="_blank" rel="noreferrer" className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group backdrop-blur-sm block cursor-pointer">
                  <Cloud className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">AWS Certified Developer</h3>
                  <p className="text-gray-400 text-sm mb-4">Associate Level Certification validating proficiency in developing, deploying, and debugging cloud-based applications using AWS.</p>
                  <span className="text-orange-400 font-mono text-xs flex items-center gap-1">VIEW CREDENTIAL <ExternalLink size={12}/></span>
                </a>
                
                <a href="https://smartinterviews.in/certificate/1938ef7f" target="_blank" rel="noreferrer" className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group backdrop-blur-sm block cursor-pointer">
                  <Terminal className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">Smart Coder Certificate</h3>
                  <p className="text-gray-400 text-sm mb-4">Smart Interviews certification demonstrating advanced problem-solving capabilities and mastery of Data Structures & Algorithms.</p>
                  <span className="text-blue-400 font-mono text-xs flex items-center gap-1">VIEW CERTIFICATE <ExternalLink size={12}/></span>
                </a>

                <a href="https://leetcode.com/u/23245A0204/" target="_blank" rel="noreferrer" className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all group backdrop-blur-sm block cursor-pointer">
                  <Code className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">LeetCode Algorithmic Discipline</h3>
                  <p className="text-gray-400 text-sm mb-4">150+ Problems Solved. Earned consecutive Monthly Challenge Badges (Feb/March) and the prestigious 50-Day & 100-Day Coding Streak Badges.</p>
                  <span className="text-yellow-400 font-mono text-xs flex items-center gap-1">VIEW PROFILE <ExternalLink size={12}/></span>
                </a>
              </div>
            </motion.div>
          )}

          {/* --- TAB: RESUME --- */}
          {activeTab === "RESUME" && (
            <motion.div key="RESUME" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
                <FileText className="w-16 h-16 text-red-500" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">My Resume</h2>
              <p className="text-gray-400 max-w-md mb-10">A comprehensive overview of my academic background, technical skills, projects, and professional experience tailored for ATS parsing.</p>
              
              <a href="/resume.pdf" download="Raghavendra_Resume.pdf" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Download PDF Resume <ArrowRight size={18} />
              </a>
            </motion.div>
          )}

          {/* --- TAB: CONTACT --- */}
          {activeTab === "CONTACT" && (
            <motion.div key="CONTACT" variants={tabVariants} initial="hidden" animate="enter" exit="exit" className="w-full max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Initiate Contact.</h2>
              <p className="text-gray-400 mb-12 text-lg">Whether you are looking to build highly scalable backend infrastructure, deploy autonomous agents, or just want to connect, my inbox is always open.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <a href="mailto:raaghavsaii@gmail.com" className="flex items-center justify-center gap-4 bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group">
                  <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors"><Mail size={24}/></div>
                  <span className="text-lg text-white font-mono tracking-wide">G-Mail</span>
                </a>
                
                <a href="tel:+919390921929" className="flex items-center justify-center gap-4 bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:bg-green-500/10 hover:border-green-500/30 transition-all group">
                  <div className="bg-green-500/20 p-3 rounded-full text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors"><Phone size={24}/></div>
                  <span className="text-lg text-white font-mono tracking-wide">+91 9390921929</span>
                </a>
              </div>
              
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/RaghavendraSaitejaBasani" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/50 hover:border-blue-500 transition-all">
                  <LinkedinIcon />
                </a>
                <a href="https://github.com/Raghavsai12" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:border-white/50 transition-all">
                  <GithubIcon />
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}