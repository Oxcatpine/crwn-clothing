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
    // payload is optional if true/false , dont need to have payload 
}



user_reducer.jsx = {
    const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload
        };

        case CartActionTypes.ADD_ITEM :
          return {
            ...state,
            cartItems: addItemToCart(state.cartItems,action.payload)
          };// additemtocart from utils.js 
      default:
        return state;
    }
  };}


  app.js = {

    import {connect} from 'react-redux';

    const mapDispatchToProps = dispatch =>({
        setCurrentUser : user => dispatch(setCurrentUser (user) )
      })
  
      const mapDispatchToProps = dispatch =>({
        toggleCartHidden : ()=> dispatch(toggleCartHidden() )
      }); // onClick = {toggleCartHidden} // pass props 
      //onClick= {() =>addItem (item)}//
      // if only one action, do not need to pass mapdispatch to props to connect, just leave it blank.

      pass a dispatch props then {
      <CustomButton onClick = {()=> {
        history.push('/checkout');
        dispatch(toggleCartHidden())
        }}>CHECKOUT</CustomButton>}
      

  

  const mapStateToProps = (state ) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden, 
  
  }) // same as below

  const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect (null, mapDispatchToProps)(App);
  export default connect(mapStateToProps) (Header); }


  use of find () and map () = {
    export const addItemToCart = (cartItems, cartItemToAdd) => {
      const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
      );
    
      if (existingCartItem) {
        return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
    
      return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    };
  }

  use of reduce ()
  {
    const mapStateToProps = ({ cart: { cartItems } }) => ({
      itemCount: cartItems.reduce((acc,cartItem)=> acc + cartItem.quantity,0)
    }); // reduce ((), 0)
  }
  use of filter (when to remove an item) {
    cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
  }

  reselect library
  npm install reselect 

  import { createSelector} from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], // [item1, item2], (cart, user)
    (cart)=> cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce ((acc,cartItem)=>acc + cartItem.quantity,0)
);
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state)
});// pass the state as props in selectors , import the selector before use it; 

import { createStructuredSelector } from 'reselect';
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden

})// do not need to pass state , just use createstructuredselector ()