import React, { useState } from 'react';

// Sample career data
const careers = [
    {
        title: "Software Engineer",
        description: "Develop and maintain software applications.",
        icon: "path/to/icon-software-engineer.png", // Replace with actual icon path
        details: "Software engineers design, develop, and maintain software systems. They work with programming languages and frameworks to create applications that meet user needs."
    },
    {
        title: "Data Scientist",
        description: "Analyze and interpret complex data to help organizations make decisions.",
        icon: "path/to/icon-data-scientist.png", // Replace with actual icon path
        details: "Data scientists use statistical methods and machine learning to analyze data and provide insights that drive business decisions."
    },
    {
        title: "Product Manager",
        description: "Oversee the development and delivery of products.",
        icon: "path/to/icon-product-manager.png", // Replace with actual icon path
        details: "Product managers are responsible for defining the vision and strategy for a product, working with cross-functional teams to bring it to market."
    },
    {
        title: "UX/UI Designer",
        description: "Design user-friendly interfaces and experiences.",
        icon: "path/to/icon-ux-ui-designer.png", // Replace with actual icon path
        details: "UX/UI designers focus on creating intuitive and engaging user experiences through research, design, and testing."
    },
    {
        title: "Marketing Specialist",
        description: "Develop and implement marketing strategies.",
        icon: "path/to/icon-marketing-specialist.png", // Replace with actual icon path
        details: "Marketing specialists create campaigns to promote products and services, analyze market trends, and engage with customers."
    },
    {
        title: "Project Manager",
        description: "Plan, execute, and close projects effectively.",
        icon: "path/to/icon-project-manager.png", // Replace with actual icon path
        details: "Project managers oversee projects from inception to completion, ensuring they are delivered on time and within budget."
    },
    {
        title: "Cybersecurity Analyst",
        description: "Protect an organization's computer systems and networks.",
        icon: "path/to/icon-cybersecurity-analyst.png", // Replace with actual icon path
        details: "Cybersecurity analysts monitor and protect systems from cyber threats, implementing security measures and responding to incidents."
    },
    {
        title: "Data Analyst",
        description: "Interpret data and provide actionable insights.",
        icon: "path/to/icon-data-analyst.png", // Replace with actual icon path
        details: "Data analysts collect, process, and analyze data to help organizations make informed decisions."
    },
    {
        title: "Sales Executive",
        description: "Drive sales and build customer relationships.",
        icon: "path/to/icon-sales-executive.png", // Replace with actual icon path
        details: "Sales executives are responsible for selling products and services, managing client relationships, and achieving sales targets."
    },
    // Add more careers as needed
];

const ExploreCareers = () => {
    const [selectedCareer, setSelectedCareer] = useState(null);

    const openModal = (career) => {
        setSelectedCareer(career);
    };

    const closeModal = () => {
        setSelectedCareer(null);
    };

    return (
        <div className="explore-careers min-h-screen bg-gray-100 p-6">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Explore Careers</h1>
                <p className="mt-2 text-lg">Discover various career paths and find the right one for you.</p>
            </header>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {careers.map((career, index) => (
                    <div
                        className="career-card bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
                        key={index}
                        onClick={() => openModal(career)}
                    >
                        <img src={career.icon} alt={`${career.title} icon`} className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">{career.title}</h3>
                        <p className="text-gray-600">{career.description}</p>
                    </div>
                ))}
            </main>
            <div className="text-center mt-12">
                <button className="cta-button px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Get Started
                </button>
            </div>

            {selectedCareer && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-content bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">{selectedCareer.title}</h2>
                        <p className="text-gray-700 mb-4">{selectedCareer.details}</p>
                        <button className="close-button px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExploreCareers;