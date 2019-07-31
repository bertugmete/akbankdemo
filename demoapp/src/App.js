import React, {Component} from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Products from './components/Products';
import AddProduct from './forms/AddProduct';
import NotFound from './pages/NotFound';
import ProductDetail from './components/ProductDetail';

class App extends Component {

  render(){
    return (
      <Router>
        <div>
          <Navbar title="Demo App"/>
          <div className="container">
            <Switch>
              <Route exact path='/'/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/add' component={AddProduct}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/detail/:id' component={ProductDetail}/>
              <Route component= {NotFound} />
            </Switch>
          </div>
        </div>
      </Router>

    )
  }
}

export default App;
