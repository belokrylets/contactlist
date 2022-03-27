import { combineReducers, createStore } from 'redux';
import { statePageReduser } from './statePageReduser';
import { showSignInReduser } from './showSignInReduser';
import { showSignUpReduser } from './showSignUpReduser';
import { authorizationReduser } from './authorizationstatReduser';
import { userReduser } from './userReduser';
import { newContactReduser } from './newContactReduser';
import { registrationReduser } from './registrationReduser';

const rootReduser = combineReducers({
    statePage: statePageReduser,
    showSignIn: showSignInReduser,
    showSignUp: showSignUpReduser,
    authorization: authorizationReduser,
    user: userReduser,
    newContact: newContactReduser,
    newUser: registrationReduser,
})
export const store = createStore(rootReduser);