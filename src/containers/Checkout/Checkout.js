import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';

const Checkout = props => {
    const checkoutCancelledHandler = () => {
        props.history.goBack();
    };

    const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact-data');
    };

    let summary = <Redirect to="/"/>;
    if (props.ingredients) {
        const purchasedRedirect = props.purchased ? <Redirect to="/"/> : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinueHandler}
                    ingredients={props.ingredients}/>
                <Route path={props.match.path + '/contact-data'}
                       component={ContactData}/>
            </div>
        );
    }

    return summary;
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);