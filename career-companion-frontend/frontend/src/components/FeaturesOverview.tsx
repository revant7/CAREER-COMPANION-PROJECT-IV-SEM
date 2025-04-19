import React from 'react';

const features = [
  {
    title: "Personalized Career Path Recommendations",
    description: "Get tailored career paths based on your skills and interests.",
    icon: "assets/images/careerpath.jpg", // Replace with actual icon path
  },
  {
    title: "Skill Gap Analysis",
    description: "Identify the skills you need to develop to reach your career goals.",
    icon: "assets/images/skillgap.jpg", // Replace with actual icon path
  },
  {
    title: "Real-Time Job Insights",
    description: "Stay updated with the latest job trends and market demands.",
    icon: "assets/images/realtimejobs.jpg", // Replace with actual icon path
  },
  {
    title: "Mentorship Matching",
    description: "Connect with experienced mentors in your field.",
    icon: "assets/images/mentorship.jpg", // Replace with actual icon path
  },
  {
    title: "Project & Certification Suggestions",
    description: "Get recommendations for projects and certifications to enhance your skills.",
    icon: "assets/images/certification.jpg", // Replace with actual icon path
  },
  {
    title: "AI Resume Analyzer",
    description: "Optimize your resume with our AI-powered analysis tool.",
    icon: "assets/images/airesume.jpg", // Replace with actual icon path
  },
];

const FeaturesOverview = () => {
  return (
    <div className="features-overview p-6 text-center z-10 relative bg-background">
      <h2 className="text-2xl font-bold mb-6 text-text">Key Features</h2>
      <div className="features-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center">
        {features.map((feature, index) => (
          <div className="w-full sm:w-auto feature-card border bg-[url('/assets/images/feature.avif')] bg-no-repeat bg-cover bg-center rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300" key={index}>
            <img src={feature.icon} alt={`${feature.title} icon`} className="feature-icon w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-text">{feature.title}</h3>
            <p className="text-text">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="cta-button mt-6 px-4 py-2 bg-blue-600 text-text rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Try It Now
      </button>
    </div>
  );
};

export default FeaturesOverview;