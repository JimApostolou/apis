import React, { Component } from "react";
import { Field,formValues,reduxForm } from "redux-form";
import { connect } from "react-redux";

import Menu from "./Menu";
import { fetchCocktails } from "../actions";
import "../Components.css";

class Cocktails extends Component {

    renderError({ error,touched }) {
        if (touched && error) {
            return (
                <div className="ui message error">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input,label,meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label className="label-txt">{label}</label>    
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    //Toggle active based on idDrink 
    //Maybe refactor!
    handleClickInLi(e,cocktails) {
        let flagId;
        cocktails.forEach(cocktail => {
            let drinksId = cocktail.idDrink;
            let allp = document.getElementsByClassName(`cocktail-ingredients ${drinksId}`);
            if (allp[0].classList.contains("active")) {
                flagId = drinksId;
                allp[0].classList.remove("active");
            }
        });
        let classNameOfLi = e.currentTarget.className;
        let drinkId = classNameOfLi.substring(12);      
        let p = document.getElementsByClassName(`cocktail-ingredients ${drinkId}`);
        if (drinkId !== flagId) {
            p[0].classList.add("active");
        }
    }

    arrayPropertyNeed() {
        let properties = ["strGlass"];
        for(let i = 1; i < 16; i++) {
            properties.push(`strIngredient${i}`);
            properties.push(`strMeasure${i}`);
        }
        return properties;
    }

    //Renders ingredients etc Need fix to show true ingredients
    //Maybe also needs refactor!
    renderDetails(cocktail) {
        const propertyNames = Object.keys(cocktail);
        const propertyValues = Object.values(cocktail);
        const propertiesNeed = this.arrayPropertyNeed();
        const lists = propertyNames.map((name,index) => {
            const value = propertyValues[index];
            if (propertiesNeed.includes(name) && value !== null) {
                return <li className="list-ingredients">{value}</li>;
            }
        })
        return (
            <ul className={`cocktail-ingredients ${propertyValues[0]}`}>
                {lists}
            </ul>
        );
    }

    renderCocktailsList(cocktails) {
        return (
            <div className="cocktail-list">
                <h3>Cocktails we recommend:</h3>
                <ul>
                    {cocktails.map((cocktail) => {
                        return (
                            <li 
                                className={`cocktail-li ${cocktail.idDrink}`}
                                key={cocktail.idDrink}
                                onClick={(e) => this.handleClickInLi(e,cocktails)}
                            >                                                            
                                {cocktail.strDrink}
                                {this.renderDetails(cocktail)}
                            </li>                           
                        )
                    })}
                </ul>
            </div>
        );
    }

    onSubmit = async (formValues) => {
        await this.props.fetchCocktails(formValues);
    }

    render() {

        let list;

        if(this.props.cocktails) {
            list = this.renderCocktailsList(this.props.cocktails);
        } else {
            list = null; // Add proper message for not showing any result
        }

        return (
            <div>
                <Menu/>
                <div>
                <form 
                    className="ui form error spacing"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field name="name" component={this.renderInput} label="Enter name of the cocktail"/>
                    <button className="ui button primary">Submit</button>
                </form>
                </div>
                {list}
            </div>
        );
    }

}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "You need to add a cocktail name first!";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {cocktails: state.cocktails.drinks};
}

const formWrapped = reduxForm({form: 'cocktailForm',validate})(Cocktails);

export default connect(mapStateToProps, { fetchCocktails } )(formWrapped);