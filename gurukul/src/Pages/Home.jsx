import React, { useEffect, useState } from 'react';
import '../css/home.css';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">Learn a New Skill</h1>
            <h2 className="gradient-title">Everyday, Anytime,</h2>
            <h2 className="mixed-title">
              and <span className="gradient-text">Anywhere</span>
            </h2>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=700&fit=crop" alt="Student with books" />
          </div>
        </div>
        <div className="hero-decorations">
          <div className="yellow-ellipse"></div>
          <div className="orange-dot"></div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-content">
          <h2 className="section-title">Clear Paths, Smarter Campuses Experience</h2>
          <p className="section-description">
            Lost on campus? We've all been there! Students rushing to class, visitors trying to find the right building, or staff needing to reach a department quickly. Navigating a large campus shouldn't be a challenge. beComap's Indoor Navigation solves this by providing clear, step-by-step directions across the campus, guiding everyone to the right classrooms, offices, and campus services. Our system keeps the campus organized, informed, and easy to navigate, creating a smoother experience for all.
          </p>
        </div>
        <div className="progress-lines">
          <div className="progress-line active"></div>
          <div className="progress-line"></div>
          <div className="progress-line"></div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <h2 className="services-title">We Offer Best Services</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=80&h=80&fit=crop" alt="Location" />
            </div>
            <h3 className="service-title">📡 Calculated Location</h3>
            <p className="service-description">
              We show you top colleges based on your exact location with accurate results.
            </p>
          </div>
          
          <div className="service-card active">
            <div className="service-icon">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop" alt="Travel" />
            </div>
            <h3 className="service-title">✈️ Best Colleges</h3>
            <p className="service-description">
              Get a curated list of the best colleges near you with details about their courses, rankings, and facilities.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=80&h=80&fit=crop" alt="Events" />
            </div>
            <h3 className="service-title">🎤 Local Events</h3>
            <p className="service-description">
              Stay updated on local college events, fests, and admission programs happening around you.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80&h=80&fit=crop" alt="Settings" />
            </div>
            <h3 className="service-title">⚙️ Customization</h3>
            <p className="service-description">
              Filter colleges by stream, courses, fees, and facilities to find the one that best fits your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="confusion-section">
        <img 
          src="https://images.unsplash.com/photo-1706016899218-ebe36844f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjEzNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Campus background" 
          className="confusion-background"
        />
        <div className="confusion-overlay">
          <div className="confusion-content">
            <h2 className="confusion-title">Say Goodbye to Campus Confusion</h2>
            <p className="confusion-description">
              Managing a large campus requires more than navigation, it involves tracking assets, assigning tasks, and optimizing resource use. For new students and visitors, navigating a campus with numerous buildings and hallways can be confusing. beComap simplifies this by providing clear, step-by-step directions, helping everyone find their way effortlessly. From the first day to daily routines, beComap makes campus operations and navigation easy and stress-free.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Easily Integrate Maps</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Multi-Language Support</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Stay Updated with Campus Alerts</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Stay Updated with Campus Alerts</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Stress-Free Parking for Students and Staff</span>
              </div>
            </div>
          </div>
          <div className="campus-image">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop" alt="Campus" />
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <div className="subscribe-content">
          <h2 className="subscribe-title">
            Subscribe to get information, latest news and other interesting events
          </h2>
          <div className="subscribe-form">
            <div className="email-input-container">
              <input type="email" placeholder="Your email" className="email-input" />
            </div>
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="subscribe-decorations">
          <div className="decoration-circles"></div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=100&fit=crop" alt="Gurukul Navigation" />
            <h3>Gurukul Navigation</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}