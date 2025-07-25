import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <>
        <div className="flex flex-col items-center justify-center bg-[#000000c2] text-white py-4 w-full">
        <p className="text-sm">© 2023 Shaurya Manhas. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 p-4">
          <a href="https://github.com/SHAURYAMANHAS64" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/shaurya-manhas-7a50b1324/" target="_blank" rel="noopener noreferrer">
        
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/shaurya_manhas/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <p className="text-sm text-gray-500">Email: shauryamanhas64@gmail.com</p>

        <p className="text-sm text-gray-500">Built with React.</p>
        
        
      
        </div>
        </>
    );
}

export default Footer;