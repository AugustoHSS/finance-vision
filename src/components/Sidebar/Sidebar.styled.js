import styled from "styled-components";

export const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 30px;

  p {
    margin: 5px;
    font-size: 14px;
  }

  h3 {
    font-size: 18px;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffd700;
`;

export const ProfilePicture = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Navigation = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 5vh;

  &:hover {
    background-color: #333;
  }
`;

export const NavText = styled.span`
`;

export const StyledSidebar = styled.div`
  min-width: 14vw;
  height: 100vh;
  background-color: #2c2c2c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const LastNavItem = styled(NavItem)`
  margin-top: auto;
`;