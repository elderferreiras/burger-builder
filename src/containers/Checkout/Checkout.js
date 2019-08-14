import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: {},
        price: 0
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()) {
            if(param[0] !== 'price') {
                ingredients[param[0]] = +param[1];
            } else {
                price = param[1];
            }
        }
        console.log(ingredients);
        console.log(price);

        this.setState({ingredients: ingredients, price: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients}/>
                    <Route path={this.props.match.path + '/contact-data'}
                           render={(props) =>
                               (<ContactData
                                   ingredients={this.state.ingredients}
                                   price={this.state.price}
                                   {...props}
                               />)}/>
            </div>
        );
    }
}

export default Checkout;