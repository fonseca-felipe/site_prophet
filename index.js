import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider  } from 'react-redux'
import { addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import pt from 'react-intl/locale-data/pt';
import rootReducer from './reducers/rootReducer'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// import '../node_modules/startbootstrap-freelancer/vendor/fontawesome-free/css/all.min.css';
// import './assets/fonts/montserrat.css';
// import './assets/fonts/lato.css';
// import '../node_modules/startbootstrap-freelancer/css/freelancer.min.css';

// import $ from 'jquery';
// // import jQuery from 'jquery';
// // window.$ = window.jQuery=jQuery;
// import '../node_modules/startbootstrap-freelancer/vendor/jquery/jquery.slim';
// import '../node_modules/startbootstrap-freelancer/vendor/bootstrap/js/bootstrap.bundle';
// import '../node_modules/startbootstrap-freelancer/vendor/jquery-easing/jquery.easing';
// // require('../node_modules/startbootstrap-freelancer/js/jqBootstrapValidation');
// // require('../node_modules/startbootstrap-freelancer/js/contact_me');
// // require('../node_modules/startbootstrap-freelancer/js/freelancer');


addLocaleData(en);
addLocaleData(pt);
addLocaleData(es);

const store = createStore(rootReducer)

if(localStorage.lang){
    store.dispatch({type:'CHANGE_LOCALE', lang: localStorage.lang});
}

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
