import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimatedText from "./components/AnimatedText.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bouncypic from "./components/Bouncypic.jsx";
import AboutPreview from "./components/AboutPreview.jsx";
import Card from "./components/Card.jsx";
import ProjectText from "./components/ProjectText.jsx";
import SkillText from "./components/SkillText.jsx";
import Skill from "./components/Skills.jsx";
import Languages from "./components/Languages.jsx";
import ContactPrompt from "./components/ContactPrompt.jsx";
import Footer from "./components/Footer.jsx";
const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.type = "text/javascript";

    script.onload = () => {
      new window.FinisherHeader({
        count:150,
        size: {
          min: 1,
          max: 20,
          pulse: 0,
        },
        speed: {
          x: { min: 0, max: 0.4},
          y: { min: 0, max: 0.1},
        },
        colors: {
          background: "#7159d9",
          particles: [
            "#ffffff",
            "#87ddfe",
            "#acaaff",
            "#1bffc2",
            "#f88aff",
          ],
        },
        blending: "screen",
        opacity: {
          center: 0,
          edge: 0.4,
        },
        skew: 0,
        shapes: ["c", "t"],
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
 
  return (
    <>
      <Navbar  />

      <div
      id="home"
        className="finisher-header flex flex-col justify-between items-center "
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: 0,
          background: "#7159d9",
        }}
        >
        <div  className="text-white text-center  text-4xl font-bold z-10 relative flex flex-col items-center gap-7 top-60">
          <AnimatedText />
          
          <div className="  left-0 right-0   flex items-center justify-center  ">
            <Bouncypic />
          </div>

         <div className=" flex  items-center justify-center space-x-6 bg-transparent z-50 ml-5 mr-5">

            <a
              href="https://drive.google.com/file/d/1Q58QQ6SLWDKvTSVU78yh3hD89sRoqtTo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-700"
              >
              {/* <FontAwesomeIcon icon={faDownload} className="mr-2" /> */}
              CV
            </a>
            <a
              href="https://www.linkedin.com/in/shaurya-manhas-7a50b1324/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-700"
              >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              {/* LinkedIn */}
            </a>

            <a
              href="https://github.com/SHAURYAMANHAS64"
              target="_blank"
              rel="noopener noreferrer"   
              className="text-3xl hover:text-blue-700"
              id="about"
              >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              {/* GitHub */}
            </a>
          </div>
        </div>
        <div  className="mt-120"><AboutPreview /> </div>
        <div id="projects"  >

        <ProjectText />
        </div>
        
        <motion.div
        
        className="flex flex-wrap justify-center gap-20 md:gap-12 lg:gap-16 mt-20 ">
          <Card  link={"https://binary-brains-eta.vercel.app/"} 
                                                      name = "She-Complaint Portal" 
                                                      desc={"An initiative for women's safety, allowing secure and anonymous complaint submissions."}
                                                      pic={"/final 2.jpg"} />
          <Card  link={"https://spotify-clone-azure-nu.vercel.app/"} 
                                                      name="Spotify Clone" 
                                                      desc={" A responsive Spotify web clone using HTML, CSS, and JS. with a clean UI and music controls."}
                                                      pic={"/spotify.jpg"} />
          <Card  link={"https://netfilx-clone-seven.vercel.app/"} 
                                                      name = "Netflix Clone" 
                                                      desc={"A responsive Netflix web clone using HTML, CSS. Designed with a clean UI and movie controls."}
                                                      pic={"/Netflix-Logo.jpg"} />
          <Card  link={"https://pulse-link-q9y7.vercel.app/"} 
                                                      name = "Pulse Link" 
                                                      desc={"Discover a wide range of workouts tailored to your fitness level and goals."}
                                                      pic={"/Screenshot 2025-11-02 123510.png"} />
          
        </motion.div>

        
      <div className="p-10" id="skills"><SkillText name={"Skills"}/></div>
      <div className="flex flex-wrap justify-center gap-20 md:gap-12 lg:gap-16 mt-10 "><Skill/></div>
      <div className="p-10"><SkillText name={"Languages"}/></div>
      <div className="flex flex-wrap justify-center gap-20 md:gap-12 lg:gap-16 mt-10 "><Languages/></div>

      
      <div className="flex flex-wrap justify-center gap-20 md:gap-12 lg:gap-16 mt-10"><ContactPrompt /></div>
      
      <Footer />
      </div>
    </>
  );
};

export default Home;

