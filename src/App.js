import { Route } from 'router';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import FooterHome from './layout/FooterHome';
import HeaderHome from './layout/HeaderHome';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeProduct from './page/HomeProduct';
function App() {
  return (
    <>
      <HomeProduct />
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
