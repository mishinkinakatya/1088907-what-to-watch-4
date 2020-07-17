import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {genreReducer} from "./store/reducer.js";
import {Provider} from "react-redux";


const store = createStore(
    genreReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
