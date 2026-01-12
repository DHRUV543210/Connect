import React, { useState } from 'react';
import '../Css/SignInSignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

const SignInSignUp: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-toggle">
          <button
            className={mode === 'signin' ? 'active' : ''}
            onClick={() => setMode('signin')}
          >
            Sign In
          </button>
          <button
            className={mode === 'signup' ? 'active' : ''}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
        </div>
        <h2>{mode === 'signin' ? 'Welcome Back!' : 'Create Your Account'}</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {mode === 'signup' && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit" className="auth-btn">
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="auth-divider">
          <span>or</span>
        </div>
        <div className="auth-social">
          <button className="social-btn google"><FcGoogle /> Google</button>
          <button className="social-btn facebook"><FaFacebook /> Facebook</button>
          <button className="social-btn x"><FaXTwitter /> X</button>
        </div>
        {mode === 'signin' && (
          <div className="auth-links">
            <a href="#">Forgot password?</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInSignUp;
