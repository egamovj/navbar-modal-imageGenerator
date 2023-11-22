import { useState } from 'react';
import PropTypes from 'prop-types';
import './image-generate.css';

const RandomImageGenerator = ({imageArray}) => {
  const [randomIndex, setRandomIndex] = useState(null);

  const generateRandomIndex = () => {
    const newIndex = Math.floor(Math.random() * imageArray.length);
    setRandomIndex(newIndex);
  };

  return (
    <div className='image__wrapper'>
      <button onClick={generateRandomIndex} className='image__random'>Generate Random Image</button>
      {randomIndex !== null && (
        <img src={imageArray[randomIndex]} alt={`Random Image ${randomIndex + 1}`}/>
      )}
    </div>
  );
};

RandomImageGenerator.propTypes = {
    imageArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default RandomImageGenerator;
