import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles, { initParticlesEngine } from '@tsparticles/react';
const ParticlesEffect = () => {
    const [init, setInit] = useState(false);
    // Initialize the particle engine once on mount
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            try {
                await loadSlim(engine);
            }
            catch (error) {
                console.error('Error loading tsparticles:', error);
            }
        }).then(() => {
            setInit(true);
        });
    }, []);
    // Animation controls for the "Featured Career Paths" section
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
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
    // Particle options with a beautiful design
    const particlesOptions = useMemo(() => ({
        background: {
            color: { value: '#F4F4F4' }, // Dark background to match your theme
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 120, // Dense particle field
                density: { enable: true, value_area: 1000 },
            },
            color: {
                value: ['#00FFFF', '#FF4500', '#32CD32', '#FF69B4', '#FFFF00'], // Vibrant multi-color particles
            },
            shape: {
                type: 'circle', // Clean, elegant shapes
            },
            opacity: {
                value: { min: 0.4, max: 0.8 },
                random: true,
                anim: { enable: true, speed: 0.6, opacity_min: 0.3 },
            },
            size: {
                value: { min: 2, max: 5 },
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.5 },
            },
            links: {
                enable: true,
                distance: 100,
                color: '#003366',
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2.5,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' }, // Bounce off edges
                attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onHover: { enable: false, mode: 'grab' }, // Connect particles to cursor
                onClick: { enable: false, mode: 'push' }, // Add particles on click
                resize: { enable: false },
            },
            modes: {
                grab: { distance: 200, links: { opacity: 0.7 } },
                push: { quantity: 4 },
            },
        },
        detectRetina: true,
    }), []);
    const particlesLoaded = async (container) => {
        console.log('Particles loaded:', container);
    };
    if (!init)
        return null; // Wait for particles engine to initialize
    return (_jsx(_Fragment, { children: _jsx(Particles, { id: "tsparticles", particlesLoaded: particlesLoaded, options: particlesOptions, className: "absolute inset-0 z-0 h-full" }) }));
};
export default ParticlesEffect;
