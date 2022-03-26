// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items/Items';
import QandA from './components/QandA/QandA';
function App() {
  return (
    <div className="App">
      <Header />
      <Items />
      <QandA />
    </div>
  );
}

export default App;