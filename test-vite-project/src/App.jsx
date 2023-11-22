import RandomImageGenerator from './components/image-generate';
import Modal from './components/modal';
import Navbar from './components/navbar';
import Car from '../src/assets/car.jpeg';
import Car1 from '../src/assets/car1.jpeg';
import Car2 from '../src/assets/car2.jpeg';
import Car3 from '../src/assets/car3.jpeg';
import Car4 from '../src/assets/car4.jpeg';
import Car5 from '../src/assets/car5.jpeg';
import Car6 from '../src/assets/car6.jpeg';
import Car7 from '../src/assets/car7.jpeg';
import Car8 from '../src/assets/car8.jpeg';
import Car9 from '../src/assets/car9.jpeg';


const imageArray = [Car, Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8, Car9];

function App() {
  return (
    <>
      <Navbar />
      <Modal />
      <RandomImageGenerator imageArray={imageArray} />
    </>
  );
}

export default App;
