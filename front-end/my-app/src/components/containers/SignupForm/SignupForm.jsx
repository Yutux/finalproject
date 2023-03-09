import React, { useState } from "react";

export default function SignupForm() {
	
	return (
		<div>
			<h2>Inscription</h2>
			<p>{emailInput}</p>
			<form>
				<input
					autoComplete="email"
					placeholder="Email"
					value={emailInput}
					onChange={handleEmail}
				/>
				<input
					autoComplete="new-password"
					placeholder="Mot de passe"
					type="password"
					value={passwordInput}
					onChange={handlePassword}
				/>
				<input
					autoComplete="new-password"
					placeholder="Confirmez le mot de passe"
					type="password"
					value={confirmPasswordInput}
					onChange={handleConfirmPassword}
				/>
				<button onClick={signup}>Valider</button>
				<p>{signupMessage}</p>
			</form>
		</div>
	);
}