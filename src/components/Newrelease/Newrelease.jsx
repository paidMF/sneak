import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Newrelease = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="newrelease"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">New Release</span>
            <p style={{marginTop: "10px"}}>Based On Current Trends</p>
          </div>
          <span className="secondaryText">Explore More Shoes</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./Nike.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./S2.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./Sn.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Newrelease;
