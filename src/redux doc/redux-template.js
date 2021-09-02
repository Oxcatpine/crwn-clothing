index. js = {import {Provider} from 'react-redux' 
import store from './redux/store';

<Provider store = {store}>
< BrowserRouter >
  <App />
</BrowserRouter>
</Provider> }



root_reducer.js= {import { CombineReducers } from 'redux';  
export default combineReducers ({
    user: userReducer
}) }



store.js = {import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger'

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;}



user_action.ls = {
    export const setCurrentUser = user => ({
        type: 'SET_CURRENT_USER',
        payload: user
    })
    
}



user_reducer.jsx = {
    const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };}


  app.js = {

    import {connect} from 'react-redux';

    const mapDispatchToProps = dispatch =>({
        setCurrentUser : user => dispatch(setCurrentUser (user) )
      })
  
  

  const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
  
  })
  
  export default connect (null, mapDispatchToProps)(App);
  export default connect(mapStateToProps) (Header); }
