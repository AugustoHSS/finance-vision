import React, { useState } from 'react';
import { Container, FormsContainer, Input, Icon, Button } from './Login.styled.js';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api.js';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      await api.login({ email, password });
      navigate('/');
    } catch (error) {
      alert(error?.message || 'error');
    }
  }

  return (
    <Container>
      <FormsContainer>   
        <h1>Login</h1>
        <form onSubmit={(e) => submit(e)}>
          <div>
            <Icon icon={faUser} isFocused={isUsernameFocused} />
            <Input
              type="email"
              id="username"
              placeholder="Type your username"
              onFocus={() => setIsUsernameFocused(true)} 
              onBlur={() => setIsUsernameFocused(false)} 
              isFocused={isUsernameFocused}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Icon icon={faLock} isFocused={isPasswordFocused} />
            <Input
              type="password"
              id="password"
              placeholder="Type your password"
              onFocus={() => setIsPasswordFocused(true)} 
              onBlur={() => setIsPasswordFocused(false)} 
              isFocused={isPasswordFocused}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" variant="contained">LOGIN</Button>
        </form>
        <Link to="/signup">Or Sign Up Using An Email</Link>
      </FormsContainer>
    </Container>
  );
}

export default Login;
