import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const FormsContainer = styled.div`
    width: 500px;
    height: 96vh;
    border-radius: 10px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;

    h1{
        font-weight: bold;
        font-size: 39px;
        color: #333;
        margin-bottom: 49px;
        line-height: 1.2;
    }
`
export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  width: 350px;
  color: #333;
  margin-bottom: 30px;

  &::placeholder {
    color: #ccc;
  }

  border-bottom: 2px solid;
  padding: 10px 0 10px 35px;
  border-bottom-color: ${({ isFocused }) => (isFocused ? '#000' : '#ccc')};
  transition: border-bottom-color 1s ease;

`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: -16px; 
  color: ${({ isFocused }) => (isFocused ? 'purple' : '#ccc')};
  transition: color 0.15s ease;
`;


export const Button = styled.button`
    background: linear-gradient(to right, #0fcee0, #816bef, #ef0cfd);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    width: 100%;
    height: 50px;
`;