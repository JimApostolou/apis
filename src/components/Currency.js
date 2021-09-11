import React, { Component } from "react";
import { connect } from "react-redux";

import Menu from "./Menu";
import { buyBTC } from "../actions";
import "../Components.css";

class Currency extends Component {
    
    // action creator
    componentDidMount() {
        this.props.buyBTC();
    }

    render() {

        if (!this.props.value) {
            return null;
        }
        
        return (
            <div>
                <Menu/>
                <div className="content">
                    <h1>
                        Current exchange rate:
                    </h1>
                    <h3 className="h3-currency">
                        1 BTC = {this.props.value.amount}$
                    </h3>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {value: state.currency.data};
}

export default connect(mapStateToProps, { buyBTC })(Currency);