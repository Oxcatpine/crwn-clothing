import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(props){
      super(props)
      
      this.state = {
          displayName:'',
          email: '',
          password : '',
          confirmedPassword: '',
      }

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email,password,confirmedPassword } = this.state
        const {user} = await auth.createUserWithEmailAndPassword (email, password)

        try {
            await createUserProfileDocument (user,{displayName});
             this.setState ({  displayName:'',
             email: '',
             password : '',
             confirmedPassword: '',});

        }catch (error) {console.error(error);

        }};

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
   
    

    render () { 
        const { displayName, email,password,confirmedPassword } = this.state
        
        return (
           

            <div className ='sign-up'>

            
             <h2>I DO NOT HAVE AN ACCOUNT</h2>
             <span>Please sign up with email and password</span>
            
            <form onSubmit = {this.handleSubmit}>
            
               <FormInput name = 'displayName' type = 'text' value = {displayName} label ='displayName' 
                handleChange = {this.handleChange} required />

                <FormInput name = 'email' type = 'email' value = {email} label ='email' 
                handleChange = {this.handleChange} required />
               
              
              <FormInput name = 'password' type = 'password' label ='password'
                value = {password} 
                handleChange  = {this.handleChange} 
                required />
                <FormInput name = 'confirmedPassword' type = 'password' label ='confirmed password'
                value = {confirmedPassword} 
                handleChange  = {this.handleChange} 
                required />

             
                <CustomButton type ='submit' >SIGN UP </CustomButton>
                  
            
                
                
            </form>
             

            </div>
        )

    }
}

export default SignUp; 