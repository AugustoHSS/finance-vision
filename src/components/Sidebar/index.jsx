import {
    ProfileSection,
    Logo,
    ProfilePicture,
    Navigation,
    NavItem,
    NavText,
    StyledSidebar,
    LastNavItem,
} from './Sidebar.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddServiceModal from '../AddServiceModal';

export default function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <StyledSidebar>
                <Logo>Nome</Logo>
                <ProfileSection>
                    <ProfilePicture src="https://picsum.photos/200" alt="Profile" />
                    <p>Welcome Back,</p>
                    <h3>Augusto Hansel</h3>
                </ProfileSection>
                <Navigation>
                    <NavItem onClick={() => setIsModalOpen(true)}>
                        <NavText>Add Service</NavText>
                    </NavItem>
                    <Link to="/dashboard" style={{ all: 'unset', cursor: 'pointer' }}>
                        <NavItem>
                            <NavText>Dashboard</NavText>
                        </NavItem>
                    </Link>
                    <Link to="/services" style={{ all: 'unset', cursor: 'pointer' }}>
                        <NavItem>
                            <NavText>Services</NavText>
                        </NavItem>
                    </Link>
                    <LastNavItem>
                        <NavText>Log Out</NavText>
                    </LastNavItem>
                </Navigation>
            </StyledSidebar>

            {isModalOpen && (
                <AddServiceModal onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
}
