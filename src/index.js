import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameContainer from './Containers/GameContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <GameContainer />
        </Provider>
    </React.StrictMode>
);