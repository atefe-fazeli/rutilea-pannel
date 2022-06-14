import './App.css';
import Navbar from './components/dashboard/Navbar';
import SideComponent from './components/dashboard/SideComponent';

function App() {
  return (
    <div id='maincontainer'>
      <SideComponent />
      <Navbar/>
    </div>
  );
}

export default App;
