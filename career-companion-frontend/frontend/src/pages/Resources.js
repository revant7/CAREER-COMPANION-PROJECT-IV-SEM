import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "resources-page min-h-screen bg-gray-100 p-6", children: [_jsxs("header", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl font-bold", children: "Resources" }), _jsx("p", { className: "mt-2 text-lg", children: "Explore our curated resources to help you in your career journey." })] }), _jsx("main", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: resources.map((resource, index) => (_jsxs("div", { className: "resource-card bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105", children: [_jsx("h3", { className: "text-lg font-semibold", children: resource.title }), _jsx("p", { className: "text-gray-600", children: resource.description }), _jsx("a", { href: resource.link, target: "_blank", rel: "noopener noreferrer", className: "mt-4 inline-block text-blue-600 hover:underline", children: "Read More" })] }, index))) }), _jsx("div", { className: "text-center mt-12", children: _jsx("button", { className: "cta-button px-6 py-2 bg-blue-600 text-text rounded-lg hover:bg-blue-700 transition-colors duration-300", children: "Get Started" }) })] }));
};
export default ResourcesPage;
