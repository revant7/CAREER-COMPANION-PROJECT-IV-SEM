import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { type Container, type ISourceOptions } from '@tsparticles/engine';

const Home = () => {
  const [init, setInit] = useState(false);

  // Initialize the particle engine once on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
      } catch (error) {
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
  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: '#1a202c' }, // Dark background to match your theme
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 120, // Dense particle field
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d'], // Vibrant multi-color particles
        },
        shape: {
          type: 'circle', // Clean, elegant shapes
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.2 },
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
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
          onHover: { enable: true, mode: 'grab' }, // Connect particles to cursor
          onClick: { enable: true, mode: 'push' }, // Add particles on click
          resize: true,
        },
        modes: {
          grab: { distance: 200, links: { opacity: 0.7 } },
          push: { quantity: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded:', container);
  };

  if (!init) return null; // Wait for particles engine to initialize

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white p-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your Career's Next Chapter Starts Here.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="text-lg md:text-xl mb-8"
        >
          Discover opportunities, resources, and community to guide your career journey.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
          className="flex space-x-4"
        >
          <Link
            to="/explore"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            Explore Careers
          </Link>
          <Link
            to="/resources"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full"
          >
            Find Resources
          </Link>
        </motion.div>

        {/* Animated Section Example */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUpVariants}
          className="mt-16 w-full md:w-2/3"
        >
          <h2 className="text-3xl font-semibold mb-4">Featured Career Paths</h2>
          <p className="text-gray-300">
            Explore trending and high-demand career paths with detailed insights and resources.
          </p>
          <div className="mt-4 text-gray-400">Add career path components here.</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;