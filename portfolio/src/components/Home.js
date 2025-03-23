import React, { useState, useEffect } from "react";

const roles = ["Web Developer", "Full Stack Developer"];

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [greeting, setGreeting] = useState(""); // New state for greeting

    const typingSpeed = isDeleting ? 100 : 150;

    // Function to set greeting based on time
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting("Good Morning! ☀️");
        } else if (hour >= 12 && hour < 18) {
            setGreeting("Good Afternoon! 🌤️");
        } else {
            setGreeting("Good Evening! 🌙");
        }
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText(text.substring(0, text.length - 1));
            }, typingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && text === currentRole) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <>
            <section className="home">
                <h1>{greeting}</h1> {/* Dynamic Greeting Here */}
                <h1>I'm Sindhoora</h1>
                <div className="typewriter">
                    <h2>I'm a <span className="typing-text">{text}</span></h2>
                </div>
                <img src="../Images/image.png" alt="Loading..." />
                <hr />
            </section>
        </>
    );
}

export default Home;
