import { applyMiddleware, combineReducers, createStore } from 'redux';
import { statePageReduser } from './statePageReduser';
import { showSignInReduser } from './showSignInReduser';
import { showSignUpReduser } from './showSignUpReduser';
import { authorizationReduser } from './authorizationstatReduser';
import { userReduser } from './userReduser';
import { newContactReduser } from './newContactReduser';
import { registrationReduser } from './registrationReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { searchReduser } from "./searchReuser";

const rootReduser = combineReducers({
    statePage: statePageReduser,
    showSignIn: showSignInReduser,
    showSignUp: showSignUpReduser,
    authorization: authorizationReduser,
    user: userReduser,
    newContact: newContactReduser,
    newUser: registrationReduser,
    search: searchReduser
  });
export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));