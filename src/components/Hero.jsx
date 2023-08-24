import { motion } from "framer-motion"; // Import motion for animations
import { styles } from "../styles.js"; // Import custom styles
import { ComputersCanvas } from "./index.js"; // Import 3D Computers Canvas component

// Hero Component: Represents the main banner or hero section of a webpage
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Container to hold the hero content */}
      <div
        className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Vertical line decoration */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary-red" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

        {/* Hero text section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-secondary-red">Marlon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            FullStack Developer
            <br className="sm:block hidden" /> Driven by Creativity
          </p>
        </div>
      </div>

      {/* 3D Computer models rendering */}
      <ComputersCanvas />

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* Animated scroll down button */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], // Animation to move the indicator up and down
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop", // Loop the animation
              }}
              className="w-3 h-3 rounded-full bg-secondary-red mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
