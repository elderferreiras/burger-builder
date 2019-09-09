import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(
            {
                ...action.orderData,
                id: action.orderId
            }
        )
    });
};

const fetchOrders = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false,
    });
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false});
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, {loading: true});
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, {loading: false});
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrders(state, action);
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, {loading: false});
        default:
            return state;
    }
};

export default orderReducer;