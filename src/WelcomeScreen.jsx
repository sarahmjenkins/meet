import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
  (
      <div className="WelcomeScreen">
        <h1>Welcome to the Meet app</h1>
        <h4>Log in to see upcoming events around the world for full-stack developers</h4>
        <div className="button_cont" align="center">
          <div clasName="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
            </div>
            <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" className="btn-text">
              <b>Sign in with Google</b>
            </button>
          </div>
        </div>
        <a className="privacy-policy" href="https://sarahmjenkins.github.io/meet/privacy.html" rel="nofollow noopener">
          Privacy Policy
        </a>
      </div>
  )
  : null
}

export default WelcomeScreen;