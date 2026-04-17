import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Hexagon, ArrowLeft, GitBranch, Globe } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // registration logic here
    console.log('Signing up...', name, email, password);
  };

  return (
    <div className="auth-layout">
      <Link to="/" style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={20} /> Back
      </Link>
      
      <div className="glass-panel auth-card animate-fade-in">
        <div className="auth-header">
          <Link to="/" className="logo" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Hexagon size={32} />
            <span className="logo-text">Nexus</span>
          </Link>
          <h2 className="auth-title">Create an account</h2>
          <p className="auth-subtitle">Join us to start your journey</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              className="form-input" 
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <User className="input-icon" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              className="form-input" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Mail className="input-icon" />
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              className="form-input" 
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Lock className="input-icon" />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Create Account
          </button>
        </form>

        <div className="divider">or sign up with</div>

        <div className="social-buttons">
          <button className="btn-social" aria-label="Sign up with Google">
            <Globe size={20} />
          </button>
          <button className="btn-social" aria-label="Sign up with GitHub">
            <GitBranch size={20} />
          </button>
        </div>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
