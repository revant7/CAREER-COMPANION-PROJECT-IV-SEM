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

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">
                    Join Career Companion
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-white mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-white">
                        Already have an account?
                        <Link to='/login' className="ml-1 text-blue-600 hover:underline font-medium">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;