import React, { useState } from 'react';
import { Container, FormsContainer, Input, Icon, Button } from './Login.styled.js';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Login() {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function submit(e) {
    e.preventDefault();

  }

  return (
    <Container>
      <FormsContainer>   
        <h1>Login</h1>
        <form onSubmit={(e) => submit(e)}>
          <div>
            <Icon icon={faUser} isFocused={isUsernameFocused} />
            <Input
              type="text"
              id="username"
              placeholder="Type your username"
              onFocus={() => setIsUsernameFocused(true)} 
              onBlur={() => setIsUsernameFocused(false)} 
              isFocused={isUsernameFocused}
            />
          </div>
          <div>
            <Icon icon={faUser} isFocused={isPasswordFocused} />
            <Input
              type="password"
              id="password"
              placeholder="Type your password"
              onFocus={() => setIsPasswordFocused(true)} 
              onBlur={() => setIsPasswordFocused(false)} 
              isFocused={isPasswordFocused}
            />
          </div>
          <Button type="submit" variant="contained">LOGIN</Button>
        </form>
      </FormsContainer>
    </Container>
  );
}

export default Login;
