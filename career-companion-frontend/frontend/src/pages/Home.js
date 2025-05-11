import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import ParticlesEffect from '../components/ParticlesEffect';
const Home = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });
    const controls = useAnimation();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    // Animation variants
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return (_jsxs(_Fragment, { children: [_jsx(ParticlesEffect, {}), _jsx("div", { className: "relative min-h-screen overflow-hidden z-10", children: _jsxs("div", { className: "relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-text p-8", children: [_jsx(motion.h1, { initial: "hidden", animate: "visible", variants: {
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                            }, className: "text-4xl md:text-6xl font-bold mb-4 relative z-10", children: "Your Career's Next Chapter Starts Here." }), _jsx(motion.p, { initial: "hidden", animate: "visible", variants: {
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                            }, className: "text-lg md:text-xl mb-8 relative z-10", children: "Discover opportunities, resources, and community to guide your career journey." }), _jsxs(motion.div, { initial: "hidden", animate: "visible", variants: {
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
                            }, className: "flex space-x-4 relative z-10", children: [_jsx(Link, { to: "/explore", className: "bg-blue-500 hover:bg-blue-600 text-text font-semibold py-3 px-6 rounded-full", children: "Explore Careers" }), _jsx(Link, { to: "/resources", className: "bg-green-500 hover:bg-green-600 text-text font-semibold py-3 px-6 rounded-full", children: "Find Resources" })] }), _jsxs(motion.div, { ref: ref, initial: "hidden", animate: controls, variants: fadeInUpVariants, className: "mt-16 w-full md:w-2/3 relative z-10", children: [_jsx("h2", { className: "text-3xl font-semibold mb-4 relative z-10", children: "Featured Career Paths" }), _jsx("p", { className: "text-text relative z-10", children: "Explore trending and high-demand career paths with detailed insights and resources." }), _jsx("div", { className: "mt-4 text-text", children: "Add career path components here." })] })] }) })] }));
};
export default Home;
