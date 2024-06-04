import React from 'react';
import { Navigate } from 'react-router-dom';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { EmailAuthProvider, getAuth } from 'firebase/auth'

// Code modified from authentication lecture (mentioned by the professor was ok to use)
const configObj = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false //don't do anything special on signin
  },
  credentialHelper: 'none'
}

export function LoginScreen(props) {
  const currentUser = props.currentUser;
  const loginFunction = props.loginCallback;

  const auth = getAuth(); //the authenticator

    //little hacky
  if (currentUser.userId) { //if signed in
    return <Navigate to="/homepage" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <StyledFirebaseAuth uiConfig={configObj} firebaseAuth={auth} />

      </div>
    </div>
  )
}