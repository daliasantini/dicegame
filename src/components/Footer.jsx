import { FaDiceOne } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex justify-center font-medium gap-2 w-full items-center text-xs h-16 text-center pt-1 pb-2'>
      <FaDiceOne className='rotate-45' />
      <p>
        {' '}
        Developed by{' '}
        <span>
          <a
            href='https://www.behance.net/gallery/234517427/Portfolio-2025-Front-End-Design'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-[#ac212a] transition-colors duration-150'
          >
            Dalia Santini
          </a>
        </span>{' '}
        © 2025
      </p>
      <FaDiceOne className='rotate-45' />
    </footer>
  );
}
