import React from 'react';
import { SignupForm } from './SignupForm';


const Signup: React.FC = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h2>Signup</h2>
      <SignupForm onSubmit={({email, password}) => {
                        console.log(email, password)
       }}/>
    </div>
  );
}

export default Signup;
