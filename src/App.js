import React from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Switch, Route} from 'react-router-dom';
import Orders from "./containers/Orders/Orders";

function App() {
  return (
        <div>
          <Layout>
              <Switch>
                  <Route path="/checkout" component={Checkout}/>
                  <Route path="/orders" component={Orders}/>
                  <Route path="/" component={BurgerBuilder} exact/>
              </Switch>
          </Layout>
        </div>
  );
}

export default App;
