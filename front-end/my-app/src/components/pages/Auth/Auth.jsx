import React from 'react'
import SignupForm from '../../containers/SignupForm/SignupForm';
import LoginForm from '../../containers/LoginForm/LoginForm';


export default function Auth() {
  const [isSignUp, setIsSignUp] = React.useState(false);

  function handleSignUp() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div>
      <h1>Auth</h1>
      {isSignUp ? <SignupForm /> : <LoginForm />}
      <button onClick={handleSignUp}>{isSignUp ? "sign up" : "sign in"}</button>
    </div>
  )
}