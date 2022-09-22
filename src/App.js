import { useEffect, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/Shopping/shoppingContext";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Element } from "@stripe/react-stripe-js";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const API_KEY =
  "pk_test_51LkPCsEDBrrlnz2gJiVEoBuaXn8XtuFx411MlgoJAOHnU1D6Au0sp6VwFCdMZmCrxDv5Q8MFkzeFH29hvSXKZnM200CyjbQO2Y";
const promise = loadStripe(API_KEY);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Element stripe={promise}>
              <Payment />
            </Element>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

// Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)
