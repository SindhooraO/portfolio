import React, { useState } from 'react';

const Projects = () => {
    const [category, setCategory] = useState('all');

    const filterProjects = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    return (
        <section className="projects">
            <h2>My Projects</h2>

            {/* Filter Buttons */}
            <div className="filter-buttons">
                <button 
                    className={category === 'all' ? 'active' : ''} 
                    onClick={() => filterProjects('all')}
                >
                    All
                </button>
                <button 
                    className={category === 'web' ? 'active' : ''} 
                    onClick={() => filterProjects('web')}
                >
                    Web Development
                </button>
                <button 
                    className={category === 'ml' ? 'active' : ''} 
                    onClick={() => filterProjects('ml')}
                >
                    Machine Learning
                </button>
            </div>

            {/* Projects Container */}
            <div className="projects-container">
                <div className={`card web ${category !== 'all' && category !== 'web' ? 'hidden' : ''}`}>
                    <img src="images/petAdoptionDatabase.jpg" alt="Pet Adoption Database" />
                    <div className="card-content">
                        <h3>Pet Adoption Database</h3>
                        <p>A web-based application to manage pet adoption with CRUD functionalities.</p>
                    </div>
                </div>

                <div className={`card web ${category !== 'all' && category !== 'web' ? 'hidden' : ''}`}>
                    <img src="images/WebScraper.png" alt="Web Scraper" />
                    <div className="card-content">
                        <h3>Web Scraper</h3>
                        <p>Python-based web scraper to extract useful data from websites.</p>
                    </div>
                </div>

                <div className={`card ml ${category !== 'all' && category !== 'ml' ? 'hidden' : ''}`}>
                    <img src="images/FR.png" alt="Face Reconstruction" />
                    <div className="card-content">
                        <h3>Face Reconstruction</h3>
                        <p>ML-based model focusing on image noising and denoising techniques.</p>
                    </div>
                </div>

                <div className={`card ml ${category !== 'all' && category !== 'ml' ? 'hidden' : ''}`}>
                    <img src="images/ASD.png" alt="Autism Detection" />
                    <div className="card-content">
                        <h3>Autism Detection</h3>
                        <p>Machine learning model for early detection of Autism Spectrum Disorder.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
