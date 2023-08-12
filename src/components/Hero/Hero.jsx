import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
          
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          {/*  the span should fade in (from left) to the right with the animation type of "tween" and a delay of 0.2 sec, and animation duration of 1 sec */}
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            LaLa
            <br />
            Sneakers
          </motion.span>

          
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          {/* slidein is responsible for making the background paint and the person move separately */}
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./ad.png" alt="" />
        </motion.div>

        

        <div className={css.lowerElements}>
          

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className= {css.certificate}>
            
            <h2>Get Your</h2>
            <h2>Sneakers On</h2>
            <h2>Get Your Groove</h2>
            <h2>Started</h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
