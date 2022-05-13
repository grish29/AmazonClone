import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const signIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log(userCredential);
				if (userCredential) {
					navigate("/");
				}
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log(userCredential);
				if (userCredential) {
					navigate("/");
				}

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>
				<form action="">
					<h5>Email : </h5>
					<input
						type="text"
						value={email}
						name=""
						id=""
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password : </h5>
					<input
						type="password"
						name=""
						id=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className="login__signInButton"
						onClick={signIn}
						type="Submit"
					>
						Sign In
					</button>
					<p>
						By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
						Sale. Please see our Privacy Notice, our Cookies Notice and our
						Interest-Based Ads Notice.
					</p>
					<button className="login__registerButton" onClick={register}>
						Create your Amazon account
					</button>
				</form>
			</div>
		</div>
	);
}
export default Login;
