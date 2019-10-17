import React from 'react';
import { LoginForm } from './LoginForm';


const Login: React.FC = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h2>Login</h2>
      <LoginForm onSubmit={({email, password}) => {
                        console.log(email, password)
       }}/>
    </div>
  );
}

export default Login;
