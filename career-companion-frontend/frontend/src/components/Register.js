import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for registration logic (e.g., API call)
        console.log('Register submitted:', formData);
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center p-4 relative z-10", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-6 text-text", children: "Join Career Companion" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-text mb-1", children: "Full Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "John Doe", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-text mb-1", children: "Email Address" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "you@example.com", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-text mb-1", children: "Password" }), _jsx("input", { type: "password", id: "password", name: "password", value: formData.password, onChange: handleInputChange, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-text py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200", children: "Register" })] }), _jsx("div", { className: "mt-4 text-center", children: _jsxs("p", { className: "text-sm text-text", children: ["Already have an account?", _jsx(Link, { to: '/login', className: "ml-1 text-blue-600 hover:underline font-medium", children: "Login" })] }) })] }) }));
};
export default Register;
