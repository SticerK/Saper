import randomNumber from '../ulils/random';

const Mines = () => {
  let number = randomNumber(4, 0);
  return number === 4 ? <span className='mine'></span> : '';
};

export default Mines;
