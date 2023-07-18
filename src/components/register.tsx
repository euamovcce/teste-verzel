import { useState, FormEvent } from 'react';
import { api } from '../lib/axios';

export function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState<Boolean>(false);
  const [emptyFields, setEmptyFields] = useState<Boolean>(false);
  const [LoginUnavailable, setLoginUnavailable] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    if (login && password) {
      
      api.post('/auth/register', { login, password })
        .then(response => {
          console.log(response.data);
          setRegisterSuccess(true);
          setLoginUnavailable(false);
          setEmptyFields(false);
        })
        .catch(error => {
          if (error.response && error.response.status === 409) {
            setLoginUnavailable(true);
          } else {
            console.error(error);
          }
        })
        .catch(() => {}); // Adicione esse catch vazio para evitar que o erro seja exibido no console
  
      setLogin('');
      setPassword('');
    } 
    setEmptyFields(true);
  };

  return (
    <div className="max-h-96 mx-5">
      <div className='max-w-xl w-full mx-auto my-44'>
        {registerSuccess &&
          <div className='text-center text-white bg-green-500 rounded-md mb-5 py-1'>
            <p>Cadastro realizado com sucesso! </p>
          </div>
        }
        {emptyFields &&
        <div className='text-center text-white bg-red-600/70 rounded-md mb-5 py-1'>
          <p>Porfavor preencha todos os campos.</p> 
          </div>
        }
        {LoginUnavailable &&
         <div className='text-center text-white bg-red-600/70 rounded-md mb-5 py-1' >
         <p>Login indisponivel.</p>
       </div>
        }
        <h1 className='text-black font-vazirmatn font-bold text-2xl mb-3'>Register</h1>
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
        <span className='text-blue-500'><a href='/login'>Login</a></span>
      </div>
    </div>
  );
}

