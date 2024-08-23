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
    padding: 45px 55px 55px 54px;

    p{
      color: #333;
      font-size: 14px;
      margin-top: 20px;
    }

    h1{
        font-weight: bold;
        font-size: 39px;
        color: #333;
        margin-bottom: 49px;
        line-height: 1.2;
    }

    a{
        all: unset;
        cursor: pointer;
        color: #666;
        font-size: 14px;
        line-height: 24px;
    }
    form {
      label{
            margin-top: 8px;
        }
    }
`
export const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 16px;
  height: 55px;
  width: 375px;
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
  margin-right: -18px; 
  color: ${({ isFocused }) => (isFocused ? 'purple' : '#ccc')};
  transition: color 0.15s ease;
`;


export const Button = styled.button`
    background: linear-gradient(to right, #0fcee0, #816bef, #ef0cfd);
    background-position: left;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    width: 100%;
    height: 50px;
    margin: 30px 0px 30px;

    &:hover {
      background: linear-gradient(to right, #0bb4c2, #6a57cc, #c009d1);
}
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 80px;
  width: 200px;

  a {
    font-size: 35px;
  }
`;

export const FormsSeparetor = styled.div`
margin-top: 10px;
  display: flex;
  justify-content: space-between;
  a{
    margin-top: -5px;
  }
`