// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import "../css/About.css";
import gunjan from "../assets/gunjan.png";
import prince from "../assets/prince.jpg";
import yaman from "../assets/yaman.png";
import pratik from "../assets/pratik.png";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      name: "Yaman Bhattrai",
      role: "Developer",
      text: "“As a developer, I focused on functionality—building navigation, search, and backend logic that connects students with the right schools and faculties in real time.”",
      img: yaman,
    },
    {
      name: "Prince Sharma",
      role: "Developer",
      text: "“As a developer, I implemented advanced search and filtering systems in the School Navigator, ensuring students quickly find schools, colleges, and faculties based on their preferences.”",
      img: prince,
    },
    {
      name: "Gunjan Katwal",
      role: "Designer",
      text: "“As the designer, I aimed to simplify student journeys by creating clean prototypes, responsive designs, and interactive layouts that highlight schools, faculties, and important details in an appealing way.”",
      img: gunjan,
    },
    {
      name: "Pratik Kadel",
      role: "Designer",
      text: "“As a designer, I crafted a visually clear interface for the School Navigator, prioritizing usability, readability, and responsive layouts so students can explore schools, colleges, and faculties without confusion.”",
      img: pratik,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 sec per slide
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
     
      <div className="home-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="text">
                <h2>{slide.name}</h2>
                <h4>{slide.role}</h4>
                <p>{slide.text}</p>
                 <div className="buttons">
                 <button className="explore">Explore</button>
                   <button className="read">Read More</button>
             </div>
              </div>
              <div className="image">
                <img src={slide.img} alt={slide.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
