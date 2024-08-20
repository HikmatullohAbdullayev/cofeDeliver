import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Succsess from './pages/Succsess/Succsess';
import Checkout from './pages/Checkout/Checkout';
// import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="succsess" element={<Succsess />} />
          <Route path="check-out" element={<Checkout />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;