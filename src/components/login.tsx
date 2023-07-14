import { useState } from 'react';
import { api } from '../lib/axios';

export function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Verifica se os campos de login e senha foram preenchidos
    if (loginData.username && loginData.password) {
      // Faz a chamada para a API de login
      api.post('/auth/login', loginData)
        .then((response) => {
          // Manipule a resposta da API aqui
          console.log(response.data);
        })
        .catch((error) => {
          // Manipule erros aqui
          console.error(error);
        });
    } else {
      // Campos de login e senha vazios, exiba uma mensagem de erro ou faça algo apropriado
      console.error('Por favor, preencha todos os campos de login e senha');
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex gap-3 flex-col">
        <input
          type="text"
          placeholder="Login"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          autoComplete="username" 
          required
          className='p-2 rounded-md bg-white border border-blue-400 text-zinc-800 placeholder:text-zinc-800'
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          autoComplete="current-password" 
          required
          className='p-2 rounded-md bg-white border border-blue-400 text-zinc-800  placeholder:text-zinc-800'
        />
        <button type="button" onClick={handleLogin} className='bg-blue-500 text-white p-2 rounded-md'>
          Login
        </button>
      </form>
    </div>
  );
}
