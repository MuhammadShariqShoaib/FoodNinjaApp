import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Card from './component/Card';


function App() {
  return (
    <div class="grid grid-cols-3" >
      <Navbar/>
      <Card/>
    </div>
  );
}

export default App;
