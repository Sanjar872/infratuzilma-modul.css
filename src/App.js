import './App.css';
import InfratuzilmaApp from './Components/InfratuzilmaApp/Project'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init(
      // offset: 120,
      // delay: 0,
      // duration: 400,
    );
    AOS.refresh();
    
  
   
  }, [])
  
  return (
    <>
      <InfratuzilmaApp/>
    </>
  );
}

export default App;
