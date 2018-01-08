import React from "react";
import Card from "../Card";
import card from "../../card.json";

const styles = {
    panel: {
        margin: 20,
        background: "#e8eaf6"
    },
    heading: {
        background: "#3f51b5",
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: "1.2rem",
        color: "white",
        padding: "0 20px"
    },
    content: {
        padding: 20
    }
};


let i1 = Math.floor((Math.random() * 8));
if (i1 == 8) { i1 = 7; }

let i2 = (i1 + 1) % 8;
let i3 = (i2 + 1) % 8;
let i4 = (i3 + 1) % 8;
let i5 = (i4 + 1) % 8;
let i6 = (i5 + 1) % 8;
let i7 = (i6 + 1) % 8;
let i8 = (i7 + 1);


const Panel = (props) => {
    const handleClick = () => {

        i1 = Math.floor((Math.random() * 8));
        if (i1 == 8) { i1 = 7; }
        i2 = (i1 + 1) % 8;
        i3 = (i2 + 1) % 8;
        i4 = (i3 + 1) % 8;
        i5 = (i4 + 1) % 8;
        i6 = (i5 + 1) % 8;
        i7 = (i6 + 1) % 8;
        i8 = (i7 + 1);
        // };

        //const Panel = (props) =>

        return ( <
            div style = { styles.panel }
            refresh = "true" >

            <
            div className = "container"
            onClick = { handleClick }
            refresh = "true" >

            <
            Card image = { card[i1].image }
            name = { card[i1].name }
            / >    <
            Card image = { card[i2].image }
            name = { card[i2].name }
            / >   <
            Card image = { card[i3].image }
            name = { card[i3].name }
            / >  <
            Card image = { card[i4].image }
            name = { card[i4].name }
            / >  <
            Card image = { card[i5].image }
            name = { card[i5].name }
            / > <
            Card image = { card[i6].image }
            name = { card[i6].name }
            / > <
            Card image = { card[i7].image }
            name = { card[i7].name }
            / > <
            Card image = { card[i8].image }
            name = { card[i8].name }
            / >   < /
            div >
            <
            /
            div >
        );

    };
    alert(i1 + ',' + i2 + ',' + i3 + ',' + i4 + ',' + i5 + ',' + i6 + ',' + i7 + ',' + i8);

    return ( <
        div style = { styles.panel }
        refresh = "true" >

        <
        div className = "container"
        onClick = { handleClick }
        refresh = "true" >

        <
        Card image = { card[i1].image }
        name = { card[i1].name }
        / >   <
        Card image = { card[i2].image }
        name = { card[i2].name }
        / >   <
        Card image = { card[i3].image }
        name = { card[i3].name }
        / >  <
        Card image = { card[i4].image }
        name = { card[i4].name }
        / >  <
        Card image = { card[i5].image }
        name = { card[i5].name }
        / > <
        Card image = { card[i6].image }
        name = { card[i6].name }
        / > <
        Card image = { card[i7].image }
        name = { card[i7].name }
        / > <
        Card image = { card[i8].image }
        name = { card[i8].name }
        / >   < /
        div >
        <
        /
        div >
    );
}
export default Panel;