import Footer from '../../Component/SharedComponent/Footer';
import Navbar from '../../Component/SharedComponent/Navbar';
import {Outlet} from 'react-router-dom'
const MainLayout = () => {
    return (
        <div className='max-w-7xl m-auto font-poppins ' >
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default MainLayout;