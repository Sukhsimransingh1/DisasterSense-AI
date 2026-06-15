import { Link } from "react-router-dom";
import {
  FaRobot,
  FaImage,
  FaDatabase,
  FaExclamationTriangle,
  FaChartLine,
  FaHistory,
  FaBookOpen,
  FaLock,
  FaChevronRight,
  FaReact,
  FaPython,
  FaBrain,
  FaSearch,
  FaDatabase as FaDb,
  FaRocket,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: FaRobot, title: "AI Emergency Assistant", description: "Get instant emergency guidance powered by advanced AI" },
  { icon: FaImage, title: "Image-Based Disaster Detection", description: "Upload disaster images for automatic incident analysis" },
  { icon: FaDatabase, title: "Retrieval-Augmented Generation", description: "Access verified disaster knowledge base" },
  { icon: FaExclamationTriangle, title: "Real-Time Incident Reporting", description: "Report and track incidents in real-time" },
  { icon: FaChartLine, title: "Analytics Dashboard", description: "Monitor disaster data and statistics" },
  { icon: FaHistory, title: "Chat History", description: "Access past conversations and analysis" },
  { icon: FaBookOpen, title: "Disaster Knowledge Base", description: "Comprehensive emergency preparedness resources" },
  { icon: FaLock, title: "Secure Authentication", description: "Enterprise-grade security and data protection" },
];

const techStack = [
  { icon: FaReact, name: "React", category: "Frontend" },
  { icon: FaReact, name: "TypeScript", category: "Frontend" },
  { icon: FaReact, name: "Tailwind CSS", category: "Frontend" },
  { icon: FaPython, name: "FastAPI", category: "Backend" },
  { icon: FaPython, name: "SQLAlchemy", category: "Backend" },
  { icon: FaBrain, name: "Gemini 2.5 Flash", category: "AI" },
  { icon: FaBrain, name: "Sentence Transformers", category: "AI" },
  { icon: FaSearch, name: "FAISS", category: "Vector Search" },
  { icon: FaDb, name: "PostgreSQL / NeonDB", category: "Database" },
  { icon: FaRocket, name: "Deployment Ready", category: "Production" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#071226] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071226]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
              <FaShieldAlt className="text-white" />
            </div>
            <span className="text-xl font-bold">DisasterSense AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
            <a href="#tech" className="text-slate-300 hover:text-white transition-colors">Tech</a>
            
            <Link to="/login" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
              <FaBolt className="text-amber-500" />
              <span className="text-sm text-slate-300">AI-Powered Disaster Intelligence & Emergency Response Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              AI-Powered Disaster Intelligence & Emergency Response Platform
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              AI Assistant, Disaster Analytics, Incident Reporting, Image Analysis, and Emergency Guidance all in one platform.
            </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2">
                  Get Started <FaChevronRight />
                </Link>
                <a href="#features" className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-slate-700">
                  Explore Features
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-[#0B1D33] border border-slate-700/50 rounded-3xl p-6 shadow-2xl overflow-hidden">
                {/* Dashboard Container */}
                <div className="aspect-video grid grid-cols-12 gap-4">
                  {/* Map Section */}
                  <div className="col-span-8 bg-[#071226] rounded-2xl border border-slate-700/50 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      {/* Map Grid */}
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: `
                          linear-gradient(to right, #334155 1px, transparent 1px),
                          linear-gradient(to bottom, #334155 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    {/* Map Markers */}
                    <div className="absolute top-1/4 left-1/4 animate-pulse">
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                        <span className="text-xs">🔥</span>
                      </div>
                    </div>
                    <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                        <span className="text-xs">🌊</span>
                      </div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
                      <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50">
                        <span className="text-xs">🌍</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#071226] to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700">
                      <span className="text-xs text-slate-300">Disaster Map</span>
                    </div>
                  </div>
                  {/* Analytics & Chat Sidebar */}
                  <div className="col-span-4 flex flex-col gap-4">
                    {/* Analytics Cards */}
                    <div className="grid grid-rows-3 gap-3">
                      <div className="bg-slate-800/70 backdrop-blur border border-slate-700/50 rounded-xl p-3 hover:border-cyan-500/50 transition-all">
                        <div className="text-xs text-slate-400 mb-1">Active Incidents</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-cyan-500">12</div>
                          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-slate-800/70 backdrop-blur border border-slate-700/50 rounded-xl p-3 hover:border-amber-500/50 transition-all">
                        <div className="text-xs text-slate-400 mb-1">AI Alerts</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-amber-500">8</div>
                          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-slate-800/70 backdrop-blur border border-slate-700/50 rounded-xl p-3 hover:border-red-500/50 transition-all">
                        <div className="text-xs text-slate-400 mb-1">Risk Level</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-red-500">High</div>
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    {/* Chat Panel */}
                    <div className="flex-1 bg-slate-800/70 backdrop-blur border border-slate-700/50 rounded-xl p-3 flex flex-col">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700/50">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                          <FaRobot className="text-xs" />
                        </div>
                        <div className="text-xs font-semibold">AI Assistant</div>
                        <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                      <div className="flex-1 space-y-2 overflow-hidden">
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs">🤔</span>
                          </div>
                          <div className="bg-slate-700/70 rounded-lg px-3 py-2 text-xs text-slate-300 max-w-[80%]">
                            What to do in a flood?
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg px-3 py-2 text-xs text-white max-w-[80%]">
                            Move to higher ground, avoid floodwaters.
                          </div>
                          <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                            <FaRobot className="text-xs" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="bg-slate-900/70 rounded-lg px-3 py-2 text-xs text-slate-500">
                          Ask about emergencies...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Subtle Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0B1D33]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need for emergency preparedness and disaster management.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#071226] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                  <feature.icon className="text-2xl text-cyan-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A simple 4-step process to get emergency guidance.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "User Input", description: "Ask question or upload image", icon: FaRobot },
              { step: 2, title: "Knowledge Retrieval", description: "FAISS retrieves disaster knowledge", icon: FaDatabase },
              { step: 3, title: "AI Analysis", description: "Gemini AI analyzes context", icon: FaBrain },
              { step: 4, title: "Response", description: "DisasterSense AI returns emergency guidance", icon: FaShieldAlt },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative text-center"
              >
                {idx < 3 && (
                  <div className="hidden md:block absolute top-16 left-[calc(50%+40px)] right-0 h-0.5 bg-gradient-to-r from-slate-700 to-transparent"></div>
                )}
                <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <item.icon className="text-3xl text-red-500" />
                </div>
                <div className="text-sm text-amber-500 font-semibold mb-2">Step {item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-6 bg-[#0B1D33]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Built with modern, enterprise-grade technologies.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#071226] border border-slate-800 rounded-xl p-4 text-center hover:border-slate-700 transition-colors"
              >
                <tech.icon className="text-3xl text-cyan-500 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">{tech.name}</h4>
                <p className="text-xs text-slate-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DisasterSense AI Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why DisasterSense AI?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">See how we compare to traditional solutions.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-400">Traditional Search</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No AI reasoning capabilities</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No image understanding</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Limited context awareness</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>General purpose, not disaster specialized</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-cyan-500/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">DisasterSense AI</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Advanced AI reasoning and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Image-based disaster detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Context-aware responses with RAG</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span>Specialized disaster knowledge base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                  <FaShieldAlt className="text-white" />
                </div>
                <span className="text-xl font-bold">DisasterSense AI</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                AI-powered disaster response platform designed for emergency preparedness and life-saving assistance.
              </p>
            </div>
            
            
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2025 DisasterSense AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
