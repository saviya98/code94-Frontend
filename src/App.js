import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FavProduct from './components/favProductPage/favProduct';
import Header from './components/header/header';
import MainPage from './components/main_page/mainPage';
import NewProduct from './components/newProductPage/newProduct';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/favourite-products' element={<FavProduct />} />
          <Route path='/new-product' element={<NewProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
