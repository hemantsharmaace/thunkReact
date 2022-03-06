import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import SearchUsers from './UsersList'; 
import SearchTodos from './TodoList';

function App() {
  return (
    <div className="App">
      <h2>Higher order component</h2>
      
      {/* <div> <SearchUsers /></div>

     <div> <SearchTodos /></div> */}
  <Header />
        <Router>
      
        <Routes>
       
        <Route path="/" element={<ProductListing />} />
        
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route> 404 not found </Route>
        </Routes>

        </Router> 
    </div>
  );
}

export default App;
