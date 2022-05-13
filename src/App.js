import "./App.css";
import Header from "./Header";
import Home from "./Home";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//older version, now Switch is replaces by Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		//will only run once when the app component loads.

		// when the app loads, we attach this listener, and it refires this code, each time we login,logout.
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>> ", authUser);

			if (authUser) {
				//the user just logged in / the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
					//this is adding the user into the data layer
				});
			} else {
				//the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
					//this is removing the user from the data layer
				});
			}
		});
	}, []);
	return (
		// BEM convention
		<Router>
			<div className="app">
				<Routes>
					<Route
						path="/login"
						element={
							<>
								<Login />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Payment />
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
