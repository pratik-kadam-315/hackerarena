import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="hero-background">
                <img
                    src="/background.jpg"
                    alt="Medical Research"
                    className="hero-image"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="home-content">
                <h1 className="home-title">Smart MedAR Learning</h1>
                <p className="home-subtitle">
                    Experience the future of medical education. Interactive 3D models
                    and Augmented Reality visualizations at your fingertips.
                </p>
                <Link to="/learning" className="start-button">
                    Start Learning
                    <span className="button-icon">→</span>
                </Link>
            </div>
        </div>
    );
}

export default Home;
