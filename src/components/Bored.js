import React, { Component } from "react";
import { connect } from "react-redux";

import Menu from "./Menu";
import { findActivity } from "../actions";

class Bored extends Component {

    componentDidMount() {
        this.props.findActivity();
    }

    render() {
        console.log(this.props);
        const { bored } = this.props;

        if (!bored) {
            return null;
        }

        return (
            <div>
                <Menu/>
                <div className="content">
                    <h1 className="bored-content"> 
                        {bored}
                    </h1>
                    <button 
                        onClick={this.props.findActivity}
                        className="btn-bored"
                    >
                        <i className="redo icon"></i>
                    </button>
                </div>                
            </div>
        );
    
    }
}

const mapStateToProps = (state) => {
    return {bored: state.bored.activity};
}

export default connect(mapStateToProps, { findActivity } )(Bored);