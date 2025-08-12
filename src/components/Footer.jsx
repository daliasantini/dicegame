import { FaDiceOne } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex justify-center font-medium gap-2 w-full items-center text-xs h-16 text-center pt-1 pb-2'>
      <FaDiceOne className='rotate-45' />
      <p> Developed by Dalia Santini © 2025</p>
      <FaDiceOne className='rotate-45' />
    </footer>
  );
}
