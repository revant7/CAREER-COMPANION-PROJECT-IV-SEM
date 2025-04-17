import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';

const ParticlesEffect = () => {
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
          value: 60, // Dense particle field
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
          anim: { enable: true, speed: 0.6, opacity_min: 0.2 },
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.5 },
        },
        links: {
          enable: true,
          distance: 100,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
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
    }),
    []
  );

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded:', container);
  };

  if (!init) return null; // Wait for particles engine to initialize

  return (
    <>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
    </>
  );
}

export default ParticlesEffect;
