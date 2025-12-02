import React from 'react';

const About = () => {
    return (
        <div className="container section">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '40px' }}>About Us</h2>

                <div className="card" style={{ marginBottom: '40px' }}>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>Our Mission</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                        “To be the trusted leader in automation and energy solutions, dedicated to driving innovation, sustainability, and excellence in every project. We aim to enrich the lives of our clients, employees, and communities while delivering innovative solutions that adapt to the ever-evolving needs of a rapidly changing world.”
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
                    <div className="card">
                        <h4 style={{ color: 'var(--accent-glow)' }}>Experience</h4>
                        <p>Serving our clients for over 5 years with professional excellence.</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--accent-glow)' }}>Availability</h4>
                        <p>We provide 24/7 emergency services to ensure your operations never stop.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
