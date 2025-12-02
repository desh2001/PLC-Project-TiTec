require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/titec-automation')
    .then(() => console.log('MongoDB connected for seeding'))
    .catch(err => console.error('MongoDB connection error:', err));

const sampleProjects = [
    {
        title: "Automatic Bottle Filling Machine",
        description: "Designed and implemented a high-speed automatic bottle filling system for a beverage company. The system integrates PLC control with precision sensors for accurate filling.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        outcomes: "Increased production speed by 40% and reduced wastage by 15%.",
        technicalDetails: "Siemens S7-1200 PLC, KTP700 HMI, Pneumatic Actuators."
    },
    {
        title: "Water Treatment Plant SCADA",
        description: "Developed a comprehensive SCADA system for a municipal water treatment plant. Provides real-time monitoring of water quality, flow rates, and pump status.",
        imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
        outcomes: "Improved response time to faults and ensured 24/7 water quality compliance.",
        technicalDetails: "Ignition SCADA, Allen Bradley CompactLogix, Remote IOs."
    },
    {
        title: "Conveyor Belt Sorting System",
        description: "Automated sorting system using computer vision and PLC logic to sort packages based on size and barcode.",
        imageUrl: "https://images.unsplash.com/photo-1565514020176-892eb1036631?auto=format&fit=crop&w=800&q=80",
        outcomes: "Reduced manual labor costs by 60% and minimized sorting errors.",
        technicalDetails: "Delta PLC, Cognex Vision System, VFD driven motors."
    },
    {
        title: "Smart Home Energy Management",
        description: "Integrated smart home solution for a luxury villa, controlling lighting, HVAC, and security based on occupancy and time of day.",
        imageUrl: "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=800&q=80",
        outcomes: "Achieved 30% energy savings and enhanced resident comfort.",
        technicalDetails: "Home Assistant, Zigbee Sensors, Smart Relays."
    }
];

const seedDB = async () => {
    try {
        await Project.deleteMany({}); // Clear existing data
        console.log('Cleared existing projects');

        await Project.insertMany(sampleProjects);
        console.log('Sample projects inserted');

        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
        mongoose.connection.close();
    }
};

seedDB();
