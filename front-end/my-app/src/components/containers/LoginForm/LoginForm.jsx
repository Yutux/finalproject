import React from "react";

export default function LoginForm() {
	
	return (
		<div>
			<h2>Connexion</h2>
			<form>
				<input
					autoComplete="email"
					placeholder="Email"
					value={emailInput}
					onChange={handleEmail}
				/>
				<input
					autoComplete="current-password"
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={handlePassword}
				/>
				<button onClick={login}>Valider</button>
				<p>{loginMeassage}</p>
			</form>
		</div>
	);
}