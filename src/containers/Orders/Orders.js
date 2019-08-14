import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json').then(res => {
            const fetchedOrders = [];
            for(let key in res.data) {
                if(res.data.hasOwnProperty(key)) {
                    fetchedOrders.push({...res.data[key], id: key});
                }
            }
            this.setState({orders: fetchedOrders, loading:false});
        }).catch(err => {
            this.setState({loading:false});
        })
    }

    render() {
        return (
            <div>
               {this.state.orders.map(order => (
                   <Order key={order.id}
                          ingredients={order.ingredients}
                          price={+order.price}/>
               ))}
            </div>
        );
    }
}

export default Orders;