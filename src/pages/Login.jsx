import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Hexagon, ArrowLeft, GitBranch, Globe } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // authentication logic here
    console.log('Logging in...', email, password);
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
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Log in to your account to continue</p>
        </div>

        <form onSubmit={handleLogin}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label className="form-label" htmlFor="password" style={{ marginBottom: 0 }}>Password</label>
              <a href="#" style={{ fontSize: '0.875rem' }}>Forgot password?</a>
            </div>
            <input 
              type="password" 
              id="password"
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Lock className="input-icon" />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Log in
          </button>
        </form>

        <div className="divider">or continue with</div>

        <div className="social-buttons">
          <button className="btn-social" aria-label="Log in with Google">
            <Globe size={20} />
          </button>
          <button className="btn-social" aria-label="Log in with GitHub">
            <GitBranch size={20} />
          </button>
        </div>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
