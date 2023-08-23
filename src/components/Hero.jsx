import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { ComputersCanvas } from "./index.js";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary-red" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

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

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
