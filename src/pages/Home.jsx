import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      <header className="nav-header">
        <Link to="/" className="logo">
          <Hexagon size={28} />
          <span className="logo-text">Nexus</span>
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/login" className="btn btn-secondary">Log in</Link>
          <Link to="/signup" className="btn btn-primary">Sign up</Link>
        </div>
      </header>

      <main className="hero-section animate-fade-in">
        <h1 className="hero-title">Experience the future of digital interaction</h1>
        <p className="hero-subtitle">
          Join a platform that bridges the gap between imagination and reality with cutting-edge technology and seamless user experiences.
        </p>
        <div className="hero-actions">
          <Link to="/signup" className="btn btn-primary">
            Get Started <ArrowRight size={20} />
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Learn more
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
