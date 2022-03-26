// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product/Product';
import { useEffect, useState } from 'react';
function App() {
  const [cars,setCars] = useState([]);
  useEffect(()=>{
    fetch('MOCK_DATA.json')
    .then(res => res.json())
    .then(data => setCars(data));
  },[]);
  return (
    <div className="App">
       <Header/>
       {
         cars.map(car => <Product key={car.id} car={car}/>)
       }
    </div>
  );
}

export default App;