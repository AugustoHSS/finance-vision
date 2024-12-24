import React from "react";
import {
  ProfileSection,
  Logo,
  ProfilePicture,
  Navigation,
  NavItem,
  NavText,
  StyledSidebar,
  LastNavItem
} from "./Sidebar.styled";

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Logo>Empresa</Logo>
      <ProfileSection>
        <ProfilePicture src="https://via.placeholder.com/80" alt="Profile" />
        <p>Welcome Back,</p>
        <h3>Augusto Hansel</h3>
      </ProfileSection>
      <Navigation>
        <NavItem>
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavItem>
          <NavText>Services</NavText>
        </NavItem>
        <NavItem>
          <NavText>Settings</NavText>
        </NavItem>
        <LastNavItem>
          <NavText>Log Out</NavText>
        </LastNavItem>
      </Navigation>
    </StyledSidebar>
  );
}