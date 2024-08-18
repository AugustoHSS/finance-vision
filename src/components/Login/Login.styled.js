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
        font-weight: 700;
        font-size: 40px
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

