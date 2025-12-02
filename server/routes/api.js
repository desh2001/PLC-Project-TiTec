const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Contact = require('../models/Contact');

// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a project (for seeding/admin)
router.post('/projects', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        outcomes: req.body.outcomes,
        technicalDetails: req.body.technicalDetails,
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Submit contact form
router.post('/contact', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
