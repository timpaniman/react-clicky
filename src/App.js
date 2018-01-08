import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Card from "./components/Card";
import card from "./card.json";

let topScore = 0;

const App = () => ( < div >
    <
    Navbar / >
    <
    Header / >

    <
    Panel topScore = { topScore }
    / >


    <
    /
    div >

);

export default App;