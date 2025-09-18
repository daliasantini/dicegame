import Button from './Button';

export default function ErrorPage() {
  function handleClick() {
    window.location.href = '/';
  }

  return (
    <div className='flex flex-col min-h-screen bg-whiteds'>
      <div className='flex-grow flex-col flex justify-center items-center gap-6 mx-auto sm:mx-20 overflow-hidden'>
        <h1 className='text-9xl/24 font-black text-focus tracking-wider'>
          404
        </h1>
        <p className='mt-2 font-regular text-lg text-primary pb-2'>
          Sorry, we couldn’t find this page.
        </p>

        <Button onClick={handleClick}>go back</Button>
      </div>
    </div>
  );
}
