import 'tailwindcss/tailwind.css';

export default function page() {
  return (
    <>
    <header className="bg-gray-800 text-white p-4">
      <h1 className='text-xl'>Formless</h1>
      </header>
      <main className='flex justify-center items-center h-screen'>
        <div className='bg-gray-200 p-4 rounded-lg'>
          <h2 className='text-2xl'>Welcome to Formless</h2>
          <p className='text-lg'>Login</p>
          <input type='text' className='border border-gray-300 p-2 rounded-lg w-full' placeholder='Username' />
          <input type='password' className='border border-gray-300 p-2 rounded-lg w-full mt-2' placeholder='Password' />
          <button className='bg-gray-800 text-white p-2 rounded-lg w-full mt-2 hover:bg-orange-500 hover:text-black'>Login</button>
        </div>
      </main>
    </>
  );
}
