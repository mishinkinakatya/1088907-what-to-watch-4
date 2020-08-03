import React, {PureComponent, createRef} from "react";
import {Operations as UserOperations} from "../../store/reducer/user/user.js";
import {connect} from "react-redux";
import {onSignInClickTypes, isAuthorizationErrorTypes, onInputDataChangeTypes} from "../../types/types.js";
import {getIsAuthorizationError} from "../../store/reducer/user/selectors.js";
import {ActionCreator} from "../../store/actions/user/user.js";

class SignInPage extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSignInClick = this.handleSignInClick.bind(this);
  }

  handleSignInClick(evt) {
    const {onSignInClick} = this.props;

    evt.preventDefault();

    onSignInClick({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {isAuthorizationError, onInputDataChange} = this.props;

    return (
      <React.Fragment>
        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <form action="#" className="sign-in__form">

              {isAuthorizationError
                ? <div className="sign-in__message">
                  <p>Please enter a valid email address</p>
                </div>
                : ``
              }

              <div className="sign-in__fields">
                <div className={isAuthorizationError ? `sign-in__field sign-in__field--error` : `sign-in__field`}>
                  <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={this.loginRef} onChange={onInputDataChange} />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={this.passwordRef} />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit" onClick={this.handleSignInClick}>Sign in</button>
              </div>
            </form>
          </div>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

SignInPage.propTypes = {
  onSignInClick: onSignInClickTypes,
  onInputDataChange: onInputDataChangeTypes,
  isAuthorizationError: isAuthorizationErrorTypes,
};


const mapStateToProps = (state) => {
  return {
    isAuthorizationError: getIsAuthorizationError(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSignInClick(login) {
    dispatch(UserOperations.login(login));
  },
  onInputDataChange() {
    dispatch(ActionCreator.hideAuthorizationError());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
