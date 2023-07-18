import { useState,FormEvent, useEffect } from 'react';
import { api } from '../lib/axios';
import { useNavigate } from 'react-router-dom';
import { isTokenValid } from '../auth/authToken';

export function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isTokenValid()) {
        navigate('/admin');
    }
}, []);
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [emptyFields, setEmptyFields] = useState<Boolean>(false);
  const [LoginInvalid, setLoginInvalid] = useState<Boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (login && password) {
      api.post('/auth/login', { login, password })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          navigate('/admin');
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            setLoginInvalid(true);
            setEmptyFields(false);
          } else {
            console.error(error);
          }
        });
      setLogin('');
      setPassword('');
    } else {
      setEmptyFields(true);
    }
  };

  return (
    <div className="max-h-96">
      <div className='max-w-xl w-full mx-auto my-44'>
      {emptyFields &&
        <div className='text-center text-white bg-red-600/70 rounded-md mb-5 py-1'>
          <p>Porfavor preencha todos os campos.</p> 
          </div>
        }
         {LoginInvalid &&
         <div className='text-center text-white bg-red-600/70 rounded-md mb-5 py-1' >
         <p>Credenciais invalida.</p>
       </div>
        }
      <h1 className='text-black font-vazirmatn font-bold text-2xl mb-3'>Login</h1>
        <form className="flex gap-3 flex-col mb-2" >
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            autoComplete="username"
            required
            className='p-2 rounded-md bg-white border border-blue-400 text-zinc-800 placeholder:text-zinc-800'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className='p-2 rounded-md bg-white border border-blue-400 text-zinc-800  placeholder:text-zinc-800'
          />
          <button type="button" onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md'>
            Login
          </button>
        </form>
        <span className='text-blue-500'><a href='/register'>Registrar-se</a></span>
        
      </div>
    </div>


  );
}
