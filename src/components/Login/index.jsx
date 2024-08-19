import React, { useState } from 'react';
import { Container, FormsContainer, Input, Icon, Button, SocialIcons } from './Login.styled.js';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
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

  }

  return (
    <Container>
      <FormsContainer>   
        <h1>Login</h1>
        <form onSubmit={(e) => submit(e)}>
        <p>Username</p>
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
          <p>Password</p>
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
          <Link to="/signup" >Forgot password?</Link>
          <Button type="submit" variant="contained">LOGIN</Button>
        </form>
        <p>Or Sign Up Using</p>
        <SocialIcons>
          <Link to="/signup"><Icon icon={faFacebookF} style={{ color: '#1877F2' }}/></Link>
          <Link to="/signup"><Icon icon={faXTwitter } style={{ color: 'black' }}/></Link>
          <Link to="/signup"><Icon icon={faGoogle} style={{ color: '#DB4437' }}/></Link>
        </SocialIcons>
        <Link to="/signup">Or Sign Up Using An Email</Link>
      </FormsContainer>
    </Container>
  );
}

export default Login;
