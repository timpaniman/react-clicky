import React from "react";

const styles = {
    panel: {
        margin: 0,
        background: "#5133a4"
    },
    heading: {
        background: "#5133a4",
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: "3rem",
        color: "white",
        padding: "0 0px"
    }
};


const topScore = 1;

const Navbar = () => ( <
    div style = { styles.panel }
    className = "navbar" >
    <
    ul style = { styles.ul } > < /ul>

    <
    li style = { styles.heading }
    className = "li" > Clicky Game! < /li>

    <
    li style = { styles.heading }
    className = "li" > Click an image to begin! < /li>

    <
    li style = { styles.heading }
    className = "li" > Scores will show in Alert. < /li>

    <
    /div>

);

export default Navbar;