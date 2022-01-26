import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
	return (
		<div className="login">
			<h3>I'm the Login page</h3>

			<img
				src="https://stas-mihaylov.ru/wp-content/uploads/2020/02/spotify_white.png"
				alt=""
			/>

			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
