import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = () => {
        alert("Your message has been sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container" id="contact">
            <h2>Let's Connect!</h2>
            
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name" 
                placeholder="Enter your name..." 
                value={formData.name} 
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                placeholder="Enter your email..." 
                value={formData.email} 
                onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea 
                id="message" 
                placeholder="Write your message..." 
                value={formData.message} 
                onChange={handleChange}
            ></textarea>

            <button onClick={handleSubmit}>Send Message</button>
        </div>
    );
};

export default Contact;
