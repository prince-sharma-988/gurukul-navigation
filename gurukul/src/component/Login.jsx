import { useState } from "react";
import { motion } from "framer-motion";
import "../css/auth.css";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (isSignup && !formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`${isSignup ? "Signed up" : "Logged in"} successfully!`);
      console.log(formData);
    }
  };

  return (
    <div className="auth-container">
      <motion.div
        className="auth-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isSignup ? "Sign up to get started" : "Login to continue"}
        </p>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <button type="submit" className="btn-auth">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="switch-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={toggleForm}>
            {isSignup ? "Login here" : "Sign up here"}
          </span>
        </p>
      </motion.div>
    </div>
  );
}
