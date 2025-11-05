// frontend/src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor",
    bloodType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
    await API.post("/auth/register", form);      alert("Registered successfully! You can now log in.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <select name="role" onChange={handleChange}>
          <option value="donor">Donor</option>
          <option value="hospital">Hospital</option>
        </select>
        {form.role === "donor" && (
          <input
            name="bloodType"
            placeholder="Blood Type (e.g. A+)"
            onChange={handleChange}
          />
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
