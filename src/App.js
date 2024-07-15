import { Route } from 'router';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import FooterHome from './layout/FooterHome';
import HeaderHome from './layout/HeaderHome';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <HeaderHome />
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
