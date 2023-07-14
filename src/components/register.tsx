import { useState, FormEvent } from 'react';
import {api} from '../lib/axios';

export function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(login && password){
        api.post('/auth/register', { login, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    setLogin('');
    setPassword('');
    }else {
        console.log('Inserir os campos')
    }

  };

  return (
    <div className="flex justify-center">
      <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
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
          className='p-2 rounded-md bg-white border border-blue-400 text-zinc-800 placeholder:text-zinc-800'
        />
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
      </form>
    </div>
  );
}

