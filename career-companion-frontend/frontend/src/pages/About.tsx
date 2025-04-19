import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us min-h-screen bg-navy-blue bg-fixed text-text relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('path/to/your/particle-effect-image.png')" }}></div>
            <header className="relative z-10 p-6 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
            </header>
            <main className="relative z-10 p-6">
                <section className="my-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is to empower individuals to achieve their career goals through personalized guidance and resources.
                    </p>
                </section>
                <section className="my-12">
                    <h2 className="text-2xl font-semibold mb-4">Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="team-member bg-gray-800 p-4 rounded-lg shadow-lg">
                            <img src="path/to/photo1.jpg" alt="Team Member 1" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-lg font-semibold mt-2">Name 1</h3>
                            <p className="text-gray-400">Role 1</p>
                            <p className="text-gray-300 mt-1">Short bio about team member 1.</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="team-member bg-gray-800 p-4 rounded-lg shadow-lg">
                            <img src="path/to/photo2.jpg" alt="Team Member 2" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-lg font-semibold mt-2">Name 2</h3>
                            <p className="text-gray-400">Role 2</p>
                            <p className="text-gray-300 mt-1">Short bio about team member 2.</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="team-member bg-gray-800 p-4 rounded-lg shadow-lg">
                            <img src="path/to/photo3.jpg" alt="Team Member 3" className="w-full h-48 object-cover rounded-t-lg" />
                            <h3 className="text-lg font-semibold mt-2">Name 3</h3>
                            <p className="text-gray-400">Role 3</p>
                            <p className="text-gray-300 mt-1">Short bio about team member 3.</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </section>
                <section className="my-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-lg">
                        The idea for our platform was conceived from a passion for helping others navigate their career paths.
                        We believe that everyone deserves access to the resources and support they need to succeed.
                    </p>
                </section>
                <div className="text-center my-12">
                    <button className="cta-button px-6 py-2 bg-blue-600 text-text rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Join Us
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AboutUs;