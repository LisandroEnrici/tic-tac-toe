import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Containers/Game';
import { Provider } from 'react-redux';
import reducer from './reducer'

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = redux.createStore(reducer);
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <Game />
        </Provider>
    </React.StrictMode>
);