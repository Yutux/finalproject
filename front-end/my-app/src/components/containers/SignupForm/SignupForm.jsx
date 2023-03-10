import React, { useState } from "react";
import request from "../../utils/request";

export default function SignupForm() {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [signupMessage, setSignupMessage] = useState("");
	const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
	const [pseudoInput, setPseudoInput] = useState("");
	const [nameInput, setNameInput] = useState("");

	

	function signup(e) {
		e.preventDefault();
		if (passwordInput !== confirmPasswordInput) {
			setSignupMessage("Les mots de passe ne correspondent pas");
		} else {
			request('/user/signup', 'POST', {
				email: emailInput,
				password: passwordInput,
				pseudo: pseudoInput,
				name: nameInput
			}, (res) => {
				if (res.status === 200) {
					setSignupMessage("Inscription réussie");
				} else {
					setSignupMessage("Erreur lors de l'inscription");
				}
			}
			);
		}
	}
	return (
		<div>
			<h2>Inscription</h2>
			<form>
				<input
					autoComplete="pseduo"
					placeholder="Pseudo"
					value={pseudoInput} onChange={(e) => setPseudoInput(e.target.value)}
				/>
				<input
					autoComplete="name"
					placeholder="name"
					value={nameInput} onChange={(e) => setNameInput(e.target.value)}
				/>
				<input
					autoComplete="email"
					placeholder="Email"
					value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
				/>
				
				<input
					autoComplete="new-password"
					placeholder="Mot de passe"
					type="password"
					value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
				/>
				<input
					autoComplete="new-password"
					placeholder="Confirmez le mot de passe"
					type="password"
					value={confirmPasswordInput} onChange={(e) => setConfirmPasswordInput(e.target.value)}
				/>
				<button onClick={signup}>Valider</button>
				<p>{signupMessage}</p>
			</form>
		</div>
	);
}