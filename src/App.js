import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';


function App() {
  return (
    <div class="grid grid-cols-3" >
      <Navbar/>
      <Card/>
    </div>
  );
}

export default App;
