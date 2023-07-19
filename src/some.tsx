import { Route, Routes } from 'react-router-dom';

import { NavigationDrawer } from '../components/navigation-drawer';

import About from '../pages/about';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

function Nav() {
  return (
    <>
      <NavigationDrawer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default Nav;
