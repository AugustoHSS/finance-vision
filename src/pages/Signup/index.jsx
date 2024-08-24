import React, { useState } from 'react';
import { Container, FormsContainer, Input, Icon, Button } from '../Login/Login.styled.js';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { createUser } from '../../services/authApi.js';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não são iguais. Tente novamente.');
      return;
    }
    try {
        await createUser({ email, password });
        navigate('/login');
        alert("usuario criado com sucesso");
      } catch (error) {
        alert(error?.message || 'error');
      }
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
          <p>Confirm Password</p>
          <div>
            <Icon icon={faLock} isFocused={isConfirmPasswordFocused} />
            <Input
              type="password"
              id="password"
              placeholder="Type your password"
              onFocus={() => setIsConfirmPasswordFocused(true)} 
              onBlur={() => setIsConfirmPasswordFocused(false)} 
              isFocused={isConfirmPasswordFocused}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button type="submit" variant="contained">REGISTER</Button>
        </form>
        <Link to="/login">Already Have An Acoount?</Link>
      </FormsContainer>
    </Container>
  );
}
