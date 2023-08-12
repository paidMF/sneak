import React from 'react'
import { comments, projectExperience, projectExperience2, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js'
const Hotsales = () => {
    return (
        <section className={css.wrapper}>
            <a className="anchor" id="hotsales"></a>
            <div className="flexCenter primaryText"><span>Hot Sales</span></div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


                {/* left side */}
                <div className={css.leftSide}>
                    {
                        projectExperience.map((exp, i) => {

                            // the item fade in one after the other
                            return <motion.div variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)} className={css.exp} key={i}>
                                <div style={{ background: exp.bg }} className="flexCenter">
                                    <exp.icon size={25} color="white" />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    {/* <span className='secondaryText'>{exp.projects} Projects</span> */}
                                </div>
                            </motion.div>
                        })
                    }
                </div>


                {/* right */}
                <motion.div
                    variants={textVariant(0.5)}
                    className={css.leftSide}> {

                        projectExperience2.map((exp, i) => {

                            // the item fade in one after the other
                            return <motion.div variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)} className={css.exp} key={i}>
                                <div style={{ background: exp.bg }} className="flexCenter">
                                    <exp.icon size={25} color="white" />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    {/* <span className='secondaryText'>{exp.projects} Projects</span> */}
                                </div>
                            </motion.div>
                        })




                    }


                </motion.div>

                
            </motion.div>
        </section>
    )
}

export default Hotsales;