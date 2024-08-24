import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  background-color: #0F0F0F;
  height: 100vh;
  position: fixed;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
  p{
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2C2C2C;
  }
`;

export const SidebarContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SidebarItem = styled.div`
  padding: 15px 20px;
  width: 100%;
  height: 55px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
