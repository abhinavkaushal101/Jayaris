import React, { useState, useEffect } from "react";
import './AuthPage.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom'; // Import useLocation for scroll-to-top logic

const AuthPage = () => {
  const [mode, setMode] = useState("login");
  const location = useLocation(); // Get location for scroll-to-top

  // State for form fields (add more as needed for actual data handling)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [projectType, setProjectType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Scroll to Top Logic
  useEffect(() => {
    if (location.state?.fromFooter && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Placeholder for actual authentication logic
  const handleAuthAction = (actionType, data) => {
    console.log(`${actionType} attempt:`, data);
    // In a real app, you'd integrate with Firebase Auth, your backend API, etc.
    if (actionType === "Create Account") {
        // Example: Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!agreeTerms) {
            alert("You must agree to the terms and privacy policy!");
            return;
        }
        // Proceed with API call or other logic
        console.log("Account Creation Data:", {
            firstName, lastName, businessEmail, phoneNumber, companyName,
            position, companyWebsite, teamSize, projectType, password, agreeTerms
        });
    }
  };
  const renderForm = () => {
    switch (mode) {
      case "signup":
        return (
          <>
            <h2 className="form-title">Create Client Account</h2> {/* Updated title */}

            {/* First Name & Last Name Row */}
            <div className="form-row">
              <div className="input-group-auth">
                <i className="fa fa-user auth-icon"></i> {/* User icon */}
                <input
                  type="text"
                  placeholder="First Name *"
                  className="glass-input-auth"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group-auth">
                <i className="fa fa-user auth-icon"></i> {/* User icon */}
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="glass-input-auth"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Business Email */}
            <div className="input-group-auth full-width">
              <i className="fa fa-envelope auth-icon"></i> {/* Envelope icon */}
              <input
                type="email"
                placeholder="Business Email *"
                className="glass-input-auth"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
              />
            </div>

            {/* Phone Number */}
            <div className="input-group-auth full-width">
              <i className="fa fa-phone auth-icon"></i> {/* Phone icon */}
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="glass-input-auth"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            {/* Company Name */}
            <div className="input-group-auth full-width">
              <i className="fa fa-building auth-icon"></i> {/* Building icon */}
              <input
                type="text"
                placeholder="Your Company Ltd."
                className="glass-input-auth"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {/* Your Position & Company Website Row */}
            <div className="form-row">
              <div className="input-group-auth">
                <i className="fa fa-briefcase auth-icon"></i> {/* Briefcase icon */}
                <input
                  type="text"
                  placeholder="Your Position *"
                  className="glass-input-auth"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div className="input-group-auth">
                <i className="fa fa-globe auth-icon"></i> {/* Globe icon */}
                <input
                  type="url"
                  placeholder="https://company"
                  className="glass-input-auth"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </div>
            </div>

            {/* Team Size & Project Type Row */}
            <div className="form-row">
              <div className="input-group-auth">
                <i className="fa fa-users auth-icon"></i> {/* Users icon */}
                <select
                  className="glass-input-auth custom-select"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                >
                  <option value="">Select Size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
              <div className="input-group-auth">
                <i className="fa fa-project-diagram auth-icon"></i> {/* Project Diagram icon */}
                <select
                  className="glass-input-auth custom-select"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="web-dev">Web Development</option>
                  <option value="app-dev">App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="seo">SEO</option>
                  <option value="cybersecurity">Cybersecurity</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div className="input-group-auth full-width">
              <i className="fa fa-lock auth-icon"></i> {/* Lock icon */}
              <input
                type="password"
                placeholder="Create a strong password"
                className="glass-input-auth"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa fa-eye auth-icon eye-toggle"></i> {/* Eye toggle icon */}
            </div>

            {/* Confirm Password */}
            <div className="input-group-auth full-width">
              <i className="fa fa-lock auth-icon"></i> {/* Lock icon */}
              <input
                type="password"
                placeholder="Confirm your password"
                className="glass-input-auth"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="fa fa-eye auth-icon eye-toggle"></i> {/* Eye toggle icon */}
            </div>

            {/* Terms Checkbox */}
            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="terms-agree"
                className="styled-checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="terms-agree">
                I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
              </label>
            </div>

            {/* Create Client Account Button */}
            <button
              onClick={() => handleAuthAction("Create Account", { /* pass all form state here */ })}
              className="auth-gradient-button"
            >
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFF'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>" alt="" className="button-plus-icon" /> {/* Plus icon */}
              Create Client Account
            </button>

            {/* Already have an account? Sign in here */}
            <p className="form-switch-text mt-4">
              Already have an account? <span onClick={() => setMode("login")} className="switch-link">Sign in here</span>
            </p>
          </>
        );
      case "forgot":
        return (
          <>
            <h2 className="form-title">Forgot Password</h2>
            <input type="email" placeholder="Enter your email" id="forgot-email" className="glass-input" />
            <button onClick={() => handleAuthAction("Forgot Password", {
              email: document.getElementById("forgot-email").value
            })} className="glass-button">Reset Password</button>
            <p className="form-switch-text">
              Remembered? <span onClick={() => setMode("login")} className="switch-link">Back to Login</span>
            </p>
          </>
        );
      default: // Login mode
        return (
          <>
            <h2 className="form-title">Login</h2>
            <input type="email" placeholder="Eg. coursecrates@gmail.com" id="login-email" className="glass-input" />
            <input type="password" placeholder="Password" id="login-password" className="glass-input" />
            <button onClick={() => handleAuthAction("Login", {
              email: document.getElementById("login-email").value,
              password: document.getElementById("login-password").value
            })} className="glass-button">Login</button>
            <p className="form-switch-text">
              <span onClick={() => setMode("forgot")} className="switch-link">Forgot Password?</span>
            </p>

            {/* Google Login Button (now part of the form content) */}
            <div className="google-login-separator">
              <span>Or</span>
            </div>
            <button className="google-login-button" onClick={() => handleAuthAction("Login with Google", {})}>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="google-logo" />
              Login with google
            </button>

            {/* "Not yet a member? Sign Up" (now part of the form content) */}
            <p className="form-switch-text mt-4"> {/* Added margin top for spacing */}
              Not yet a member? <span onClick={() => setMode("signup")} className="switch-link">Sign Up</span>
            </p>
          </>
        );
    }
  };

  return (
    <>
      <Navbar/>
      {/* Auth Body */}
      <div className="auth-page-wrapper">
        <div className="auth-container">

          {/* Right Column - Dynamic Form */}
          <div className="auth-right-panel">
            {renderForm()}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AuthPage;