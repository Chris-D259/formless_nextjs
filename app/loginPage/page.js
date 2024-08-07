'use client'
import 'tailwindcss/tailwind.css';
import {useAuth} from "./_utils/auth_context";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function page() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const {login} = useAuth();
    const [error, setError] = useState(false);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            setMessage("Login Successful... Redirecting to Dashboard");
            setError(false);
            setTimeout(() => {
                router.push("/loginPage/mainpage");
            }, 1000);
        } catch(error){
            setMessage("Invalid username or Password Contact your Administrator for assistance")
            setError(true);
        }
    };

    return (
    <>
    <header className="bg-gray-800 text-white p-4">
      <h1 className='text-xl'>Formless</h1>
      </header>
      <main className='bg-gray-200 flex justify-center items-center h-screen'>
        <div className=' p-4 rounded-lg'>
          <h2 className='text-2xl'>Welcome to Formless</h2>
          <p className='text-lg'>Login</p>
          <input type='text' className='border border-gray-300 p-2 rounded-lg w-full' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type='password' className='border border-gray-300 p-2 rounded-lg w-full mt-2' placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input type='submit' className='bg-gray-800 text-white p-2 rounded-lg w-full mt-2 hover:bg-orange-500 hover:text-black' onClick={handleSubmit} value='Login'/>
          {message && <p className={error ? 'text-red-500' : 'text-green-500'}>{message}</p>}
        </div>
      </main>
    </>
  );
}
