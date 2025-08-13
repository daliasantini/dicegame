import { useState } from 'react';
import { FaDice } from 'react-icons/fa';
import Button from './components/Button';
import Footer from './components/Footer';

const diceImages = [
  '/assets/dice1.png',
  '/assets/dice2.png',
  '/assets/dice3.png',
  '/assets/dice4.png',
  '/assets/dice5.png',
  '/assets/dice6.png',
];

function App() {
  const [imagePOne, setImagePOne] = useState(diceImages[5]);
  const [imagePTwo, setImagePTwo] = useState(diceImages[0]);
  const [message, setMessage] = useState('Hello!');
  const [btnText, setBtnText] = useState('Roll a dice!');

  function handleRollDice() {
    setMessage('Rolling...');
    setBtnText('Rolling...');

    const interval = setInterval(() => {
      const tempRoll1 = Math.floor(Math.random() * 6);
      const tempRoll2 = Math.floor(Math.random() * 6);

      setImagePOne(diceImages[tempRoll1]);
      setImagePTwo(diceImages[tempRoll2]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      const finalRoll1 = Math.floor(Math.random() * 6);
      const finalRoll2 = Math.floor(Math.random() * 6);

      setImagePOne(diceImages[finalRoll1]);
      setImagePTwo(diceImages[finalRoll2]);
      setBtnText('Roll again!');

      if (finalRoll1 > finalRoll2) {
        setMessage('P1 Wins!');
      } else if (finalRoll1 < finalRoll2) {
        setMessage('P2 Wins!');
      } else {
        setMessage('Draw!');
      }
    }, 1000);
  }

  return (
    <div className='flex flex-col min-h-screen gap-4 justify-center align-middle pt-8'>
      <header className='text-center'>
        <h1 className='font-extrabold text-sm  uppercase tracking-wide'>
          The dice game
        </h1>
      </header>

      <main className='flex-grow gap-4 justify-center items-center h-auto overflow-y-hidden overflow-x-hidden px-4 sm:px-10 md:px-20 lg:px-32 xl:px-32 max-w-screen-xl mx-auto flex flex-col'>
        <h1 className='text-6xl font-black uppercase'>{message}</h1>

        <p className='text-center font-medium text-xs tracking-wide'>
          Click the button to roll dice!
        </p>

        <div className='grid grid-cols-2 gap-10 pt-2 justify-center'>
          <div className='dice text-center inline-block'>
            <img
              className='w-58 pb-4 h-auto my-[4%]'
              src={imagePOne}
              alt='Dice face'
            ></img>
            <p className='tracking-wide font-medium text-[1.5rem]'>PLAYER 1</p>
          </div>

          <div className='dice text-center inline-block'>
            <img
              className='w-58 pb-4 h-auto my-[4%]'
              src={imagePTwo}
              alt='Dice face'
            ></img>
            <p className='tracking-wide font-medium text-[1.5rem]'>PLAYER 2</p>
          </div>
        </div>

        <div>
          <Button onClick={handleRollDice}>{btnText}</Button>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
