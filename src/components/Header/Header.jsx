import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (

    // responsible for the motion of the header at first appearance
    <motion.div
      // variants refers to how the header will be hidden and how it will be displayed
      variants={headerVariants}
      // means that initially, the header will be hidden (while the page is loading)
      initial="hidden"
      // after the page has loaded, the header will show
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      //  the viewport to false ensures that the animation shows as many times as possible. set to true means, the animation shows only once
      viewport={{ once: true, amount: 0.25 }}
      // shadow under the header but only when scrolling
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>LaLa</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#collections">Collections</a></li>
          <li><a href="#newrelease">New Release</a></li>
          <li><a href="#hotsales">Hot Sales</a></li>
          {/* <li><a href="#discounted">Discounted</a></li> */}
          <li className={`flexCenter ${css.phone}`}>
            <p>+234 811 848 2498</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}

          // if the menu is closed before clicking, it becomes opened. if it is opened befor clicking, it becomes closed
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
