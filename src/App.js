import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Order from "./Order";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NLNdaSA2gDnvoeYnCTMYabJljz72gNJsf64GunhxpS7EoVH9Y6RmNWRogtpiGCCQbV6KuRqjUkuv17orMuJr9B800caKLxoLd"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
          <Route
            path="/orders"
            element={
              <React.Fragment>
                <Header />
                <Order />
              </React.Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
          <Route
            path="/payment"
            element={
              <React.Fragment>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Home />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
