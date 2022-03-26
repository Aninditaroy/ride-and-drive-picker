// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items/Items';
function App() {
  return (
    <div className="App">
       <Header/>
       <Items/>
    </div>
  );
}

export default App;