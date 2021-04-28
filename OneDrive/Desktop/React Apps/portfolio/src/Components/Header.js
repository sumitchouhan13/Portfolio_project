import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
      <div className = "header-wraper">
          <div className = "main-info">
              <h1>Web Development</h1>
              <Typed
              className = "typed-text"
              strings = {["Frontend Development" , "Android Development" , "Backend Development" , "Machine Learning"]}
              typeSpeed = {40}
              backSpeed = {60}
              loop
              />
              <a href = "#" className = "btn-main-offer">contact me</a>
          </div>
      </div>
  )
}

export default Header
