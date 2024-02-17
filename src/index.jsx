import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css' 
import {cities} from './cz-cities.js'
import { City } from './components/city/City.jsx';



const App = () => {
  return(
    <>
    <div className="display-flex">
      {cities.map((city) => (
        <City 
          key={city.name} 
          name={city.name}
          population={city.population}
          area={city.area}
          district={city.district}
          photo={city.photo}
          >
        </City>))
    }
    </div>
     
    </>
  )}
    

createRoot(
  document.querySelector('#app'),
).render(<App />);

