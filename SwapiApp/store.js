import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleWare from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';



const client = axios.create({
    responseType: 'json'
  });
  
export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        axiosMiddleware(client),
        thunkMiddleware.withExtraArgument({axios}),
        loggingMiddleWare
    ))
)