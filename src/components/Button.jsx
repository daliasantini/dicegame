export default function Button({ onClick, children, ...props }) {
  return (
    <button
      className='w-full flex justify-center text-center py-2 px-4 text-md bg-foreground text-background  rounded-lg font-medium
       hover:bg-red-700 hover:text-background transition-colors duration-150 cursor-pointer'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
