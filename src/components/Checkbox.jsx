import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ isChecked, onChange, label }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={isChecked} onChange={onChange} />
    <StyledCheckbox isChecked={isChecked} />
    {label}
  </CheckboxContainer>
);

export default Checkbox;



const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isChecked ? '#2196F3' : '#fff')};
  border: 2px solid #2196F3;
  border-radius: 4px;
  display: inline-block;
  transition: all 150ms;
  margin-right: 8px;

  &:after {
    content: "";
    position: absolute;
    display: ${props => (props.isChecked ? 'block' : 'none')};
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;