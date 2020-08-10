import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {createAPI} from "./api.js";
import reducer from "./store/reducer.js";
import {Operations as DataOperations} from "./store/reducer/data/data.js";
import {Operations as UserOperations} from "./store/reducer/user/user.js";
import {ActionCreator} from "./store/actions/user/user.js";
import {AuthorizationStatus} from "./utils/const.js";


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperations.checkAuth());
store.dispatch(DataOperations.loadMovies());
store.dispatch(DataOperations.loadPromoMovie());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
