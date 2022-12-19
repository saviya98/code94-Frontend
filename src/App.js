import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FavProduct from './components/favProductPage/favProduct';
import Header from './components/header/header';
import MainPage from './components/main_page/mainPage';
import NewProduct from './components/newProductPage/newProduct';
import SearchResults from './components/searchResults/searchResults';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/favourite-products' element={<FavProduct />} />
          <Route path='/new-product' element={<NewProduct />} />
          <Route path='/search-results' element={<SearchResults />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
