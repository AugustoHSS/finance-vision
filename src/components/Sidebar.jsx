import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBell, faUser, faList, faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { SidebarContainer, MenuButton, SidebarItem, SidebarContent } from './Sidebar.styled';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <MenuButton onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faList} />
      </MenuButton>
        <SidebarContent>
          <SidebarItem>
            <FontAwesomeIcon icon={faHome} />
            <p>Início</p>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faCompass} />
            <p>Explorar</p>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faBell} />
            <p>Notificações</p>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faUser} />
            <p>Perfil</p>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faDoorOpen} />
            <p>Sair</p>
          </SidebarItem>  
        </SidebarContent>      
    </SidebarContainer>
  );
}
