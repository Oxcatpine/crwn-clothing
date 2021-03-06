import React from 'react';
import {
 
  Switch,
  Route,
  Redirect
 
} from "react-router-dom";

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shoppage/shoppage.component';
import CheckOut from './pages/checkoutpage/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser}from './redux/user/user.selectors';



class App extends React.Component  {
  

  unSubscribeFromAuth= null;

  componentDidMount () {

    const {setCurrentUser } = this.props; 
    this.unSubscribeFromAuth= auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef= await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data(),

            });
          });
        }
        setCurrentUser (userAuth)
    });
     }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render () {
    return (
    <div >
     <Header />
     
     <Switch>
      <Route exact path ='/' component = {HomePage}/>
      <Route  path ='/shop' component = {shopPage}/>
      <Route exact path ='/checkout' component = {CheckOut}/>
      <Route  exact path ='/signin' render = {()=> this.props.currentUser?
       (<Redirect to='/'/>)
        :
        (<SignInAndSignUpPage/>)}/>
      </Switch>
     
     
    </div>
  );
  }
  
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  

})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser (user) )
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
