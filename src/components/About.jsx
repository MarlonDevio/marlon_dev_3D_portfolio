import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Marlon, a full-stack developer with a genuine love for all
        things coding. My expertise in JavaScript, Python, and frameworks like
        React is matched only by my passion for software and my dedication to
        continuous learning. Whether it's collaborating on a team or diving deep
        into a new challenge, I approach every project with curiosity and
        enthusiasm. My friendly nature and can-do attitude enable me to adapt to
        various needs and deliver exceptional results. Let's build something
        amazing together! Your success is my success, and together we can
        transform the virtual landscape.
      </motion.p>
    </>
  );
};

export default About;
