import React, { useState } from 'react';
import { Container, FormsContainer, Input, Icon } from './Login.styled.js';
import { faUser } from '@fortawesome/free-regular-svg-icons'


function Login() {

  const [isFocused, setIsFocused] = useState(false);
  if(isFocused){
    //alert("foquei")
  }
  return (
    <Container>
      <FormsContainer>   

        <h1>Login</h1>
        <form action="">
          <>
            <Icon icon={faUser} isFocused={isFocused} />
            <Input
              type="text"
              id="username"
              placeholder="Type your username"
              onFocus={() => setIsFocused(true)} 
              onBlur={() => setIsFocused(false)} 
              isFocused={isFocused}
            />
          </>
        </form>
      </FormsContainer>
    </Container>
  );
}


export default Login;