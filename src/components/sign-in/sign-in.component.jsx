import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
      super(props)
      
      this.state = {
          email: '',
          password : ''
      }

    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState ({ email: '',
        password : ''});
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState ({[name]:value})
    }
   
    

    render () {
        return (
            <div className ='sign-in'>
             <h2>I HAVE AN ACCOUNT</h2>
             <span>Please sign in with email and password</span>
            
            <form onSubmit = {this.handleSubmit}>
                <FormInput name = 'email' type = 'email' value = {this.state.email} label ='email' 
                handleChange = {this.handleChange} required />
              
                <FormInput name = 'password' type = 'password' label ='password'
                value = {this.state.password} 
                handleChange  = {this.handleChange} 
                required />

                <div className = 'buttons'>
                  <CustomButton type ='submit' >SIGN IN </CustomButton>
                  <CustomButton type = 'button' onClick = {SignInWithGoogle} isGoogleSignIn >SIGN IN with Google </CustomButton>  
                </div>
                
                
            </form>
             

            </div>
        )

    }
}

export default SignIn; 