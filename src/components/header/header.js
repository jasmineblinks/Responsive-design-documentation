import React from "react";
import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mobile}>
        <header className={classes.header}>
          <div className={classes.hero}>
            <h2>LOGOS</h2>
          </div>
          <div className={classes.menu}>
            <ul className={classes.listItem}>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>
        </header>
      </div>
      <div className={classes.desktop}>
        <header className={classes.header}>
          <div className={classes.hero}>
            <h2>LOGOS</h2>
          </div>
          <ul className={classes.listItem}>
            <li>features</li>
            <li>pricing</li>
            <li>resources</li>
          </ul>
        </header>
      </div>
    </div>
  );
};
export default Header;
