import React from "react";
import hero_img from "../../assets/skyscraper-1.jpg"; // Ensure this file exists

const Hero = () => {
    return (
        <div className="hero">
            <img src={hero_img} alt="Luxury skyscraper" />
            <div className="hero-text">
                <h2>Discover Luxury Living <br /> Tailored to Your Lifestyle</h2>
                <p>Explore a curated selection of exquisite properties designed for comfort, elegance, and timeless sophistication. Your dream home awaits—start your journey today.</p>
            </div>
            <button className="hero-cta">Book An Inspection</button>
        </div>
    );
};

export default Hero;
