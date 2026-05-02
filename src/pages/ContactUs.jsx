import React, { useState } from "react";
import API from "../services/api";
import MainNavBar from "./MainNavBar";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", contactNumber: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.contactNumber || !form.email || !form.message) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await API.post("/contact/send", form);
      alert("Message sent successfully! Check your email ✅");
      setForm({ name: "", contactNumber: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message ❌: " + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MainNavBar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>

          <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} style={inputStyle} />
          <input name="contactNumber" placeholder="Contact Number *" value={form.contactNumber} onChange={handleChange} style={inputStyle} />
          <input name="email" type="email" placeholder="Your Email ID *" value={form.email} onChange={handleChange} style={inputStyle} />
          <textarea name="message" placeholder="Your Message *" value={form.message} onChange={handleChange} style={textareaStyle} />

          <button onClick={handleSubmit} disabled={loading} style={btnStyle}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}

const containerStyle = { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", padding: "20px" };
const cardStyle = { background: "white", padding: "40px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", width: "100%", maxWidth: "500px" };
const inputStyle = { width: "100%", padding: "12px", margin: "8px 0", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px", boxSizing: "border-box" };
const textareaStyle = { ...inputStyle, minHeight: "120px", resize: "vertical" };
const btnStyle = { width: "100%", padding: "12px", marginTop: "10px", backgroundColor: "#1f4f4f", color: "white", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" };
