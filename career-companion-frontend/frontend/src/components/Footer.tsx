import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-md text-white text-center p-4">
            <div className="container mx-auto">
                <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy" className="text-white hover:underline mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-white hover:underline mx-2">Terms of Service</a>
                    <a href="/contact" className="text-white hover:underline mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;