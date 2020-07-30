import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./api.js";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import reducer from "./store/reducer.js";
import {Provider} from "react-redux";
import {Operations as DataOperations} from "./store/reducer/data/data.js";


const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperations.loadMovies());
store.dispatch(DataOperations.loadPromoMovie());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
