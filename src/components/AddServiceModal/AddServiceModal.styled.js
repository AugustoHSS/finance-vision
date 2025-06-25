import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  width: 450px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 6px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  background: #8b8efa;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #7b7eea;
  }
`;

export const ToggleTypeButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 10px;
  border: 2px solid ${({ active }) => (active ? '#8b8efa' : '#ccc')};
  background: ${({ active }) => (active ? '#8b8efa' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #8b8efa;
  }
`;
