import React, { useState } from "react";

import classes from "./header.module.css";
import { FaTimes, FaAlignRight } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <section className={classes.mobile}>
        <header className={classes.header}>
          <section className={classes.hero}>
            <h2>LOGOS</h2>
          </section>

          {isOpen !== true ? (
            <FaAlignRight
              size="35px"
              style={{
                color: "#fbec3e",
                border: "2px solid  #fbec3e",
                // display: "block",
                marginRight: "25px",
                // marginTop: "10px",
              }}
              onClick={() => setIsOpen(true)}></FaAlignRight>
          ) : (
            <FaTimes
              size="30px"
              style={{
                color: "#fbec3e",
                border: "2px solid  #fbec3e",
                // display: "block",
                marginRight: "25px",
                // marginTop: "15px",
              }}
              onClick={() => setIsOpen(false)}></FaTimes>
          )}
          {isOpen && (
            <section className={classes.menu}>
              <ul className={classes.listItem}>
                {/* <a href={"https://google.com"}> */}
                <li>Features</li>
                {/* </a> */}
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </section>
          )}
        </header>
      </section>
      <section className={classes.desktop}>
        <header className={classes.header}>
          <section className={classes.hero}>
            <h2>LOGOS</h2>
          </section>
          <ul className={classes.listItem}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </header>
      </section>
    </div>
  );
};
export default Header;
