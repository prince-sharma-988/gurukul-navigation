import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import "../css/About.css";
import gunjan from "../assets/gunjan.png";
import prince from "../assets/prince.jpg";
import yaman from "../assets/yaman.png";
import pratik from "../assets/pratik.png";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(null); 

  const slides = [
    {
      name: "Yaman Bhattrai",
      role: "Data Analyzer",
      text: "“With expertise in web analytics, market research, and data visualization, I help organizations identify user behavior patterns, track performance metrics, and optimize digital strategies. My goal is to turn complex data into clear, actionable reports that improve efficiency and growth.”",
      more: "Whether it’s analyzing website traffic, customer engagement, or market opportunities, I provide data-driven solutions tailored to business needs. By combining advanced research techniques with practical insights, I ensure every decision is backed by reliable information and measurable outcomes.",
      img: yaman,
      fb: "https://www.facebook.com/yaman.bhattarai.31", 
    },
    {
      name: "Prince Sharma",
      role: "Developer",
      text: "“As a developer, I implemented advanced search and filtering systems in the School Navigator, ensuring students quickly find schools, colleges, and faculties based on their preferences.”",
      more: "I contributed to designing a scalable structure, improving search queries, and implementing caching mechanisms for a seamless user experience.",
      img: prince,
      fb: "https://www.facebook.com/Prince9880", 
    },
    {
      name: "Gunjan Katwal",
      role: "Designer",
      text: "“As the designer, I aimed to simplify student journeys by creating clean prototypes, responsive designs, and interactive layouts that highlight schools, faculties, and important details in an appealing way.”",
      more: "I emphasized accessibility, color balance, and typography, ensuring our design adapts beautifully across all devices.",
      img: gunjan,
      fb: "https://www.facebook.com/gunjan.katuwal.52", 
    },
    {
      name: "Pratik Kadel",
      role: "Info Gathers",
      text: "“As the researcher, I focused on gathering accurate and relevant information, ensuring that every detail about schools, courses, and facilities was up-to-date and reliable.”",
      more: "I used structured surveys, verified data sources, and organized insights clearly, making it easy for students to explore and compare their options effectively.",
      img: pratik,  
      fb: "https://www.facebook.com/puja.bhandari.77398", 
    },
  ];

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused, slides.length]);

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

                {expanded === index && (
                  <p className="more-info">{slide.more}</p>
                )}

                <div className="buttons">
                  <button
                    className="explore"
                    onClick={() => window.open(slide.fb, "_blank")}
                  >
                    Explore
                  </button>
                  <button
                    className="read"
                    onClick={() => {
                      setPaused(true);
                      setExpanded(expanded === index ? null : index);
                    }}
                  >
                    {expanded === index ? "Show Less" : "Read More"}
                  </button>
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
