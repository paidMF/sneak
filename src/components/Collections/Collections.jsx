import React from "react";
import { NavLink } from "react-router-dom";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import "./Collections"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import Slider from "react-slick";
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Collections = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="collections"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Collections</span>
          
        </div>


  
        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          
            <Slider {...sliderSettings} className={css.slider}>
              
              

              {comments.map((comment, i) => {
                return (
                  // <NavLink to="/Shoes/">
                  <div className={`flexCenter ${css.comment}`}>


                    <img src={comment.img} alt="" width={"434"} height={"380"} />
                    <span className="secondaryText r-price">
                      <span style={{ color: "orange" }}>#</span>
                      <span>{comment.price}</span>
                    </span>
                    <span className="primaryText">{comment.name}</span>
                    <br />
                    <span className="secondaryText">{comment.comment}</span>

                  </div>
                  // </NavLink>
                );
              })}
            </Slider>
          
        </div>


      </motion.div>

    </motion.section>
  );
};

export default Collections;


