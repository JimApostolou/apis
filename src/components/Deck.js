import React, { Component } from "react";
import { connect } from "react-redux";

import Menu from "./Menu";
import { fetchDeck,increaseValue,resetValue,setHand } from "../actions";

class Deck extends Component {

    // action creator call
    componentDidMount() {
        this.props.fetchDeck();
    }

    // Draws 4 cards its time and uses an action creator
    // to put it in your hand in case the deck has no more
    // cards "calls" a new one
    drawCard = async () => {
        
        const images = [];
        let image;

        if (this.props.counter === 52) {
            await this.props.fetchDeck();
            await this.props.resetValue();
        }

        for(let i = 0; i < 4; i++) {
            image = this.props.myDeck.cards[this.props.counter].image;
            await this.props.increaseValue();
            images.push(image);
        }

        await this.props.setHand(images);
    }

    render() {

        let img;

        if(this.props.hand) {
            img = (
              <div className="hand">
                  <img src={this.props.hand[0]} alt="card image"/>
                  <img src={this.props.hand[1]} alt="card image"/>
                  <img src={this.props.hand[2]} alt="card image"/>
                  <img src={this.props.hand[3]} alt="card image"/>
              </div>  
            );
        } else {
            img = null;
        }

        return (
            <div>
                <Menu/>
                {img}
                <button onClick={this.drawCard} className="draw-btn">
                    Draw 4  
                </button>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {myDeck: state.deck.newDeck,counter: state.deck.counter,hand: state.deck.hand};
}

export default connect(mapStateToProps, { fetchDeck,increaseValue,resetValue,setHand })(Deck);