import React from 'react';

const resources = [
    {
        title: "Career Development Guide",
        description: "A comprehensive guide to help you navigate your career path.",
        link: "https://example.com/career-development-guide", // Replace with actual link
    },
    {
        title: "Resume Writing Tips",
        description: "Learn how to craft a compelling resume that stands out.",
        link: "https://example.com/resume-writing-tips", // Replace with actual link
    },
    {
        title: "Interview Preparation Checklist",
        description: "Essential tips and a checklist to prepare for your next interview.",
        link: "https://example.com/interview-preparation-checklist", // Replace with actual link
    },
    {
        title: "Networking Strategies",
        description: "Effective strategies to build and maintain professional relationships.",
        link: "https://example.com/networking-strategies", // Replace with actual link
    },
    {
        title: "Online Learning Platforms",
        description: "Explore various platforms to enhance your skills online.",
        link: "https://example.com/online-learning-platforms", // Replace with actual link
    },
    {
        title: "Job Search Resources",
        description: "Tools and resources to help you in your job search.",
        link: "https://example.com/job-search-resources", // Replace with actual link
    },
    // Add more resources as needed
];

const ResourcesPage = () => {
    return (
        <div className="resources-page min-h-screen bg-gray-100 p-6">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Resources</h1>
                <p className="mt-2 text-lg">Explore our curated resources to help you in your career journey.</p>
            </header>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <div className="resource-card bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105" key={index}>
                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                        <p className="text-gray-600">{resource.description}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:underline">
                            Read More
                        </a>
                    </div>
                ))}
            </main>
            <div className="text-center mt-12">
                <button className="cta-button px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default ResourcesPage;