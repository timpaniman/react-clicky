import React from "react";
import "./Card.css";

let total = 0;
let topScore = 0;
let cards = [];

class Card extends React.Component {
    state = {
        count: 0,
    };

    handleClick = () => {

        if (total > this.props.topScore) { this.topScore = total; }



        if (cards.includes(this.props.name)) {
            alert("Game Over. The total guessed is " + total);
            this.setState({ count: 0 });
            total = 0;
            cards = [];
            window.location.reload();
        } else {
            cards.push(this.props.name);
            alert("You guessed Correct.")
            total = total + 1;
            this.setState({ count: this.state.count + 1 });
            if (total == 8) {
                alert("Game Success. You win");
                return;
            }

        }
    }


    render() {
        return ( <
            div className = "card" > <
            div role = "img"
            className = "click-item" >
            <
            img alt = { this.props.name }
            src = { this.props.image }
            onClick = { this.handleClick }
            /> < /
            div > <
            /div>
        );
    }
}

export default Card;