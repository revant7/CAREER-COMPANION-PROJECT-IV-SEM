import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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

  return (
    <div className="relative min-h-screen overflow-hidden z-10">

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