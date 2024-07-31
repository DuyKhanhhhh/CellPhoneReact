import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterHome from './layout/FooterHome';
import HeaderHome from './layout/HeaderHome';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeProduct from './page/HomeProduct';
import DetailProduct from './page/DetailProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeProduct />}></Route>
          <Route path='/detailProduct/:id' element={<DetailProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
