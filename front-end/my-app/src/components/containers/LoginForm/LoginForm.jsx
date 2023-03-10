import React from "react";
import request from "../../utils/request";

export default function LoginForm() {
	const [emailInput, setEmailInput] = React.useState("");
	const [passwordInput, setPasswordInput] = React.useState("");
	const [loginMeassage, setLoginMessage] = React.useState("");

	function handleSubmit(e) {
		e.preventDefault();
		request('/user/login', 'POST', { 
			email: emailInput, 
			password: passwordInput 
		}).then((response) => {
			if (response.status === 200) {
				setLoginMessage("Connexion réussie");
				
			} else {
				setLoginMessage("Erreur lors de la connexion");
			}
		});
	}
	
	return (
		<div>
			<h2>Connexion</h2>
			<p>{loginMeassage}</p>
			<form>
				<input
					autoComplete="email"
					placeholder="Email"
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
				/>
				<input
					autoComplete="current-password"
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={(e) => setPasswordInput(e.target.value)}
				/>
				<button onClick={handleSubmit}>Valider</button>
				
			</form>
		</div>
	);
}