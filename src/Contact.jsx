import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Contact = () => {
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xkgzrokj", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return(<>
  
  <form onSubmit={handleSubmit}

        className="flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-16  py-15"
  >   
  <div className="flex flex-col  gap-4 sm:gap-6 lg:gap-8 mt-20 py-16 bg-[#000000c2]   rounded-2xl p-5 sm:p-6 lg:p-8 md:w-1/2 lg:w-1/3">
    <h1 className="text-white font-bold text-4xl text-center ">Contact Me !</h1>
  <input type="text" name="name" className="border-black-2 p-2 bg-[#aea1d4]  rounded-sm" placeholder="Name"/>
  <input type="email"name="email" className = "border-black-2 p-2 bg-[#aea1d4] rounded-sm"  placeholder="Email"/>
   <textarea name="message" placeholder="Your Message" required className="border-black-2 p-2 w-full bg-[#aea1d4] rounded-sm "></textarea>
   <button type="submit" className="bg-[#7159d9] text-white px-4 py-2 rounded cursor-pointer hover:">Send</button>
  <div className="flex flex-col gap-2 mt-4">
    {status === "SUCCESS" && (
      <p className="text-green-600 font-semibold text-xl text-center">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        Thanks! Your message has been sent.
      </p>
    )}
    {status === "ERROR" && (
      <p className="text-red-600 font-semibold text-xl text-center">
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        Oops! Something went wrong. Please try again later.
      </p>
    )}
  </div>
  </div>
  
  </form>
  <Footer/>
  
  </>);
  
};

export default Contact;

