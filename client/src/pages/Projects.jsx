import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching projects:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container section">Loading...</div>;

    return (
        <div className="container section">
            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {projects.map(project => (
                    <div key={project._id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        {project.imageUrl && (
                            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        )}
                        <div style={{ padding: '24px' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-dark)', marginBottom: '15px' }}>{project.description}</p>
                            {project.outcomes && (
                                <div style={{ marginBottom: '10px' }}>
                                    <strong style={{ color: 'var(--white)' }}>Key Outcomes:</strong>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{project.outcomes}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {projects.length === 0 && <p style={{ textAlign: 'center' }}>No projects found.</p>}
        </div>
    );
};

export default Projects;
