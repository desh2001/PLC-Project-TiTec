import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            background: 'var(--white)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid #e5e7eb'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                    <span style={{ color: '#FF0000' }}>TI</span>TEC AUTOMATION
                </Link>

                <div style={{ display: 'flex', gap: '30px' }}>
                    <Link to="/" style={{ color: 'var(--text-dark)', fontWeight: 500 }}>Home</Link>
                    <Link to="/about" style={{ color: 'var(--text-dark)', fontWeight: 500 }}>About</Link>
                    <Link to="/projects" style={{ color: 'var(--text-dark)', fontWeight: 500 }}>Projects</Link>
                    <Link to="/contact" style={{ color: 'var(--text-dark)', fontWeight: 500 }}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
