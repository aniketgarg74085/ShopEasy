import Header from "./Header"
import Product from "./Product"
import ShoppingCart from "./ShoppingCart";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="banner">
              <img src="/images/banner.jpg" />
            </div>
            <Product />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/cart">
            <Header/>
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
