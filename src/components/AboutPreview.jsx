import { useEffect, useState } from "react";
function AboutPreview() {
  return (
    <section className="text-left font-bold text-4xl text-white bg-[#000000c2] bg-opacity-50 backdrop-blur-md rounded-2xl p-5 space-y-6 mr-10 ml-10 mb-10 ">
      <h3 className="text-3xl font-bold">About Me</h3>
      <p className="text-2xl font-light">
         I'm <span className="font-semibold text-[#7159d9]">Shaurya Manhas</span>, a frontend developer passionate about crafting
        beautiful and responsive web interfaces using React.js, Tailwind CSS, and modern web technologies.
        
        </p>
        <p className="text-lg font-light">
        Currently focusing on building projects that combine great UI with performance and accessibility.
        I'm also exploring animation tools like Framer Motion to make interfaces more dynamic.
        </p>
    </section>
  );
}

export default AboutPreview;
