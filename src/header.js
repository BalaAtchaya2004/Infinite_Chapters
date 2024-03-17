import React from "react";

import "../src/sass/style.css";

const Header = () => {
  return (
    <>
      <div>

          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "3rem",
              width: "3rem",
              padding: "3px",
              cursor: "pointer",
            }}
            
          />
        
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",

              marginBottom: 50,
              color: "#333",
              textAlign: "center",
            
              textShadow: "2px 2px 3px #b0b0b0",
            }}
          >
             Navigate the World of Books with Ease!
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
