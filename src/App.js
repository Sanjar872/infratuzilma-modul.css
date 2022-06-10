import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Infratuzilma from './Components/infratuzilma/infratuzilma'
import ItiMarkaz from './Components/ItiMarkaz/ItiMarkaz';
import Andijon from './Components/NewAndijon/Andijon'
import Rejalar from './Components/Rejalar/Rejalar';
function App() {
  return (
    <div className="app">
      {/* <Navbar/> */}
      <Infratuzilma/>
      {/* <ItiMarkaz/> */}
      <Andijon/>
      <Rejalar/>
    </div>
  );
}

export default App;
