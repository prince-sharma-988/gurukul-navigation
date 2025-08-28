import "../css/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import heroImg from "../assets/student.png";
import locationIcon from "../assets/location.png";
import airplaneIcon from "../assets/airplane.png";
import micIcon from "../assets/mic.png";
import settingsIcon from "../assets/settings.png";
import locationPin from "../assets/location-pin.png";
import graduateCap from "../assets/graduation.png";
import barChart from "../assets/chart.png";
import starIcon from "../assets/star.png";

export default function Home() {
  const [coursesCount, setCoursesCount] = useState(0);
  const [collegeCount, setCollegeCount] = useState(0);

  
  useEffect(() => {
    let courses = 0;
    let colleges = 0;

    const coursesInterval = setInterval(() => {
      courses += 5;
      if (courses >= 100) {
        courses = 100;
        clearInterval(coursesInterval);
      }
      setCoursesCount(courses);
    }, 20);

    const collegesInterval = setInterval(() => {
      colleges += 2;
      if (colleges >= 32) {
        colleges = 32;
        clearInterval(collegesInterval);
      }
      setCollegeCount(colleges);
    }, 40);

    return () => {
      clearInterval(coursesInterval);
      clearInterval(collegesInterval);
    };
  }, []);

  return (
    <>
  
      <section className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Navigate Your <span className="highlight-pink">Future</span> <br />
            with the Right <span className="highlight-pink">College</span>
          </h1>
          <p className="sub-text">
            650+ colleges and schools for you to learn and explore new
            opportunities. Learn from top colleges and graduated teachers.
          </p>
          <div className="hero-buttons">
            <Link to={"/College"}>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(209, 72, 199, 0.6)" }}
              >
                Start Find
              </motion.button>
            </Link>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(90, 56, 211, 0.5)" }}
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }}
            >
              How it works
            </motion.button>
          </div>
          <div className="stats">
            <div>
              <h3 className="yellow">{coursesCount}+</h3>
              <p>Courses to choose from</p>
            </div>
            <div>
              <h3 className="blue">{collegeCount}+</h3>
              <p>Colleges and schools</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={heroImg}
            alt="student"
            className="student"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

   
      <motion.section
        className="section about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Clear Paths, Smarter Campuses <br /> Experience
        </h2>
        <p>
          Lost on campus? We’ve all been there! Students rushing to class,
          visitors trying to find the right building, or staff needing to reach
          a department quickly...
        </p>

        <h2>
          Why <span className="highlight-pink">Choose</span> Us?
        </h2>
        <div className="features-grid">
          {[ 
            { img: locationIcon, title: "Calculated Location", text: "We show you top colleges..." },
            { img: airplaneIcon, title: "Best Colleges", text: "Get a curated list..." },
            { img: micIcon, title: "Local Events", text: "Stay updated on local events..." },
            { img: settingsIcon, title: "Customization", text: "Filter colleges by stream..." }
          ].map((feature, i) => (
            <motion.div
              className="feature-card"
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={feature.img} alt="" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section how-it-works"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="how-it-works"
      >
        <h2>
          How Our College Finder <span className="highlight-pink">Works</span>
        </h2>
        <div className="steps-grid">
          {[
            { img: locationPin, title: "Enter Your Location", text: "Type the city name..." },
            { img: graduateCap, title: "Smart College Search", text: "We scan the database..." },
            { img: barChart, title: "Compare and Explore", text: "See a list of colleges..." },
            { img: starIcon, title: "Choose the Best College", text: "After checking all the options..." }
          ].map((step, i) => (
            <motion.div
              className="step-card"
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={step.img} alt="" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
