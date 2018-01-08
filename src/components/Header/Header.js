import React from "react";

const styles = {
    heading: {
        minHeight: 60,
        lineHeight: 3.5,
        fontSize: "5rem",
        color: "white",
        padding: "0 0px"
    }
};



const Header = () => ( <
    header className = "header" >
    <
    h1 > Clicky Game! < /h1> <br></br > < h2 > Click on an image to earn points, but do not click on any more than once! < /h2>< /
    header >
);

export default Header;