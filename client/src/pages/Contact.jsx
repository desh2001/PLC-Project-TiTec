import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (err) {
            console.error('Error sending message:', err);
            setStatus('Error sending message.');
        }
    };

    return (
        <div className="container section">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>
                <div className="card" style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <p style={{ marginBottom: '10px', color: 'var(--text-light)' }}>
                        <strong>Address:</strong> No 190/3, Bulugahalanda, Yatiyana, Minuwangoda.
                    </p>
                    <p style={{ marginBottom: '10px', color: 'var(--text-light)' }}>
                        <strong>Email:</strong> <a href="mailto:madhusanka1171@gmail.com" style={{ color: 'var(--accent-color)' }}>madhusanka1171@gmail.com</a>
                    </p>
                    <p style={{ marginBottom: '10px', color: 'var(--text-light)' }}>
                        <strong>Phone:</strong> <a href="tel:+94770417564" style={{ color: 'var(--accent-color)' }}>+94 770-417-564</a>
                    </p>
                    <p style={{ color: 'var(--accent-glow)', fontWeight: 'bold', marginTop: '15px' }}>
                        Available 24/7 for Emergency Service
                    </p>
                </div>

                <p style={{ marginBottom: '30px', color: 'var(--text-dark)', textAlign: 'center' }}>
                    Ready to automate your business? Get in touch with us today.
                </p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                {status && <p style={{ marginTop: '20px', color: 'var(--accent-color)' }}>{status}</p>}
            </div>
        </div>
    );
};

export default Contact;
