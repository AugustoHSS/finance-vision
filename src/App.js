import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './pages/DashBoard';
import GlobalStyles from './GlobalStyles';
import Sidebar from './components/Sidebar';

function Layout() {
    const location = useLocation();
    const hideSidebar = ['/login', '/signup'].includes(location.pathname); // Condição para esconder a Sidebar

    return (
        <div style={{ display: 'flex' }}>
            {!hideSidebar && <Sidebar />}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/DashBoard" element={<DashBoard />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Layout />
        </BrowserRouter>
    );
}

export default App;
