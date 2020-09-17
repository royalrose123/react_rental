import React from "react";
// import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

// Components

// Lib MISC

// Variables / Functions
const cx = classnames.bind(styles);

export const propTypes = {};

function Home(props) {
  // const { } = props;

  return <div className={cx("home")}>Home</div>;
}

Home.propTypes = propTypes;

export default Home;
