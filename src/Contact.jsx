import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faUser, faMessage, faLocationDot, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from "./components/Footer";

const ContactCard = ({ icon, label, value, href, delay }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`perspective(600px) rotateX(${-y / 8}deg) rotateY(${x / 8}deg) scale(1.05)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-2xl p-6 border border-gray-800 hover:border-[#7159d9]/50 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{
        transform: transform || "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.15s ease-out, border-color 0.5s",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7159d9]/0 to-[#7159d9]/0 group-hover:from-[#7159d9]/10 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
      <div className="relative flex items-center gap-4">
        <div className="bg-gradient-to-br from-[#7159d9] to-[#9b59b6] p-3 rounded-xl w-14 h-14 flex items-center justify-center shadow-lg shadow-[#7159d9]/20 group-hover:shadow-[#7159d9]/40 transition-shadow duration-500">
          <FontAwesomeIcon icon={icon} className="text-xl text-white" />
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">{label}</p>
          <p className="text-white font-semibold group-hover:text-[#a78bfa] transition-colors">{value}</p>
        </div>
      </div>
    </a>
  );
};

const FloatingParticle = ({ style }) => (
  <div
    className="absolute rounded-full bg-[#7159d9]/20 animate-pulse pointer-events-none"
    style={style}
  />
);

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xkgzrokj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus("ERROR");
      setTimeout(() => setStatus(""), 5000);
    }
    setLoading(false);
  };

  const particles = Array.from({ length: 6 }, (_, i) => ({
    width: `${Math.random() * 100 + 40}px`,
    height: `${Math.random() * 100 + 40}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${i * 0.5}s`,
    filter: `blur(${Math.random() * 40 + 20}px)`,
  }));

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* Background particles */}
        {particles.map((style, i) => (
          <FloatingParticle key={i} style={style} />
        ))}

        {/* Radial glow behind the form */}
        <div className="absolute w-[600px] h-[600px] bg-[#7159d9]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-16 relative">
          <p className="text-[#7159d9] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            — Contact —
          </p>
          <h1 className="text-white font-extrabold text-6xl md:text-7xl mb-4 leading-tight">
            Let's Build
            <br />
            <span className="bg-gradient-to-r from-[#7159d9] via-[#a78bfa] to-[#7159d9] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              Something Great
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl relative">
          {/* Left: Contact Cards */}
          <div className="flex flex-col gap-4 lg:w-2/5">
            <ContactCard
              icon={faEnvelope}
              label="Email"
              value="shauryamanhas64@gmail.com"
              href="mailto:shauryamanhas64@gmail.com"
              delay={0}
            />
            <ContactCard
              icon={faGithub}
              label="GitHub"
              value="Shauryamanhas"
              href="https://github.com/SHAURYAMANHAS64"
              delay={100}
            />
            <ContactCard
              icon={faLinkedin}
              label="LinkedIn"
              value="Shaurya manhas"
              href="https://www.linkedin.com/in/shaurya-manhas-7a50b1324/"
              delay={200}
            />
            <ContactCard
              icon={faLocationDot}
              label="Location"
              value="Chandigarh, India"
              href="#"
              delay={300}
            />

            {/* Mini CTA */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#7159d9]/20 to-transparent border border-[#7159d9]/20">
              <p className="text-gray-300 text-sm leading-relaxed">
                💡 <strong className="text-white">Quick response guaranteed.</strong>{" "}
                I typically reply within 24 hours. For urgent matters, reach out via LinkedIn.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:w-3/5 relative"
          >
            {/* Form glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#7159d9]/30 via-transparent to-[#7159d9]/10 rounded-3xl pointer-events-none" />
            <div className="relative bg-[#0d0d1a]/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-gray-800/50">
              <h2 className="text-white text-2xl font-bold">Send a Message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className={`relative group rounded-xl transition-shadow duration-300 ${focused === "name" ? "shadow-[0_0_20px_rgba(113,89,217,0.15)]" : ""}`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === "name" ? "text-[#7159d9]" : "text-gray-500"}`}
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full pl-11 pr-4 py-4 bg-[#1a1a2e]/80 text-white border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#7159d9] focus:bg-[#1a1a2e] transition-all duration-300 placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>

                <div className={`relative group rounded-xl transition-shadow duration-300 ${focused === "email" ? "shadow-[0_0_20px_rgba(113,89,217,0.15)]" : ""}`}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === "email" ? "text-[#7159d9]" : "text-gray-500"}`}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full pl-11 pr-4 py-4 bg-[#1a1a2e]/80 text-white border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#7159d9] focus:bg-[#1a1a2e] transition-all duration-300 placeholder-gray-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className={`relative group rounded-xl transition-shadow duration-300 ${focused === "subject" ? "shadow-[0_0_20px_rgba(113,89,217,0.15)]" : ""}`}>
                <input
                  type="text"
                  name="subject"
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-[#1a1a2e]/80 text-white border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#7159d9] focus:bg-[#1a1a2e] transition-all duration-300 placeholder-gray-500"
                  placeholder="Subject (optional)"
                />
              </div>

              <div className={`relative group rounded-xl transition-shadow duration-300 ${focused === "message" ? "shadow-[0_0_20px_rgba(113,89,217,0.15)]" : ""}`}>
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`absolute left-4 top-5 transition-colors duration-300 ${focused === "message" ? "text-[#7159d9]" : "text-gray-500"}`}
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows="5"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full pl-11 pr-4 py-4 bg-[#1a1a2e]/80 text-white border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#7159d9] focus:bg-[#1a1a2e] transition-all duration-300 placeholder-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative bg-gradient-to-r from-[#7159d9] to-[#9b59b6] hover:from-[#5a45b5] hover:to-[#8344a0] text-white px-8 py-4 rounded-xl cursor-pointer transition-all duration-500 font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden shadow-lg shadow-[#7159d9]/20 hover:shadow-[#7159d9]/40"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {loading ? (
                  <span className="animate-spin w-6 h-6 border-3 border-white border-t-transparent rounded-full inline-block" />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages with slide-in animation */}
              {status === "SUCCESS" && (
                <div className="flex items-center gap-3 text-green-400 font-semibold bg-green-900/20 border border-green-800/50 rounded-xl p-4 animate-[slideUp_0.4s_ease-out]">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="font-bold">Message sent!</p>
                    <p className="text-green-400/70 text-sm font-normal">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              {status === "ERROR" && (
                <div className="flex items-center gap-3 text-red-400 font-semibold bg-red-900/20 border border-red-800/50 rounded-xl p-4 animate-[slideUp_0.4s_ease-out]">
                  <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faXmark} className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="font-bold">Something went wrong</p>
                    <p className="text-red-400/70 text-sm font-normal">Please try again or reach out via email directly.</p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Contact;
