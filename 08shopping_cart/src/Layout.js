import { Header, Footer } from './components/index';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
