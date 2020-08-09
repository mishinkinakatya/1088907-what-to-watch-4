import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {funcRequiredTypes, boolRequiredTypes} from "../../types/types.js";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import {ActionCreator} from "../../store/actions/user/user.js";
import {Operations as UserOperations} from "../../store/reducer/user/user.js";
import {getIsAuthorizationError} from "../../store/reducer/user/selectors.js";
import {AppPages, AppRoute} from "../../utils/const.js";


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
          <PageHeader activePage={AppPages.SIGN_IN_PAGE} />

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
                <Link to={AppRoute.MAIN_PAGE} className="sign-in__btn" type="submit" onClick={this.handleSignInClick}>Sign in</Link>
              </div>
            </form>
          </div>

          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

SignInPage.propTypes = {
  onSignInClick: funcRequiredTypes,
  onInputDataChange: funcRequiredTypes,
  isAuthorizationError: boolRequiredTypes,
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


export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
