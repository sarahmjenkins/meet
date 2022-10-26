import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
  (
      <div className="WelcomeScreen">
        <div className="content">
          <h1>Meet App</h1>
          <h4>Log in to see upcoming events around the world for full-stack developers.</h4>
          <div className="button_cont" align="center">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
              </div>
              <button className="btn-text" onClick={() => { props.getAccessToken() }} rel="nofollow noopener">
                <b>Sign in with Google</b>
              </button>
            </div>
          </div>
          <div className="verification-links">
            <a className="oauth-homepage" href="https://sarahmjenkins.github.io/meet/homepage.html">
              Google OAuth2 Homepage
            </a>
            <a className="privacy-policy" href="https://sarahmjenkins.github.io/meet/privacy.html" rel="nofollow noopener">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
  )
  : null
}

export default WelcomeScreen;