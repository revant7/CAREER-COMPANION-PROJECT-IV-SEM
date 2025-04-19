import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background-secondary shadow-md relative z-50 text-text text-center p-4">
            <div className="container mx-auto">
                <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy" className="text-text hover:underline mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-text hover:underline mx-2">Terms of Service</a>
                    <a href="/contact" className="text-text hover:underline mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;