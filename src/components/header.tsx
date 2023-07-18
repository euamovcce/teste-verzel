import { List, UserCircle } from 'phosphor-react';
import logoBlacks from '../assets/vercarwhite.png';
import { isTokenValid } from '../auth/authToken';


export function Header() {

    function handleLogout() {
        localStorage.removeItem('token');
    }
    return (
        <div className='bg-black'>
            <div className="max-w-7xl w-full mx-auto my-0 py-5">
                <div className="flex justify-between items-center text-black px-3">
                    <a href='/'><img src={logoBlacks} /></a>
                    <nav className='my-6'>
                        <ul className='flex gap-5 items-center font-vazirmatn font-medium text-gray-500 text-lg  max-lg:hidden'>
                            <li className='hover:text-gray-800'><a href='/'>Comprar carro</a></li>
                            <li className='hover:text-gray-800'><a href='#'>Vender carro</a></li>
                            <li className='hover:text-gray-800'><a href='#'>App Kavak</a></li>
                            <li className='hover:text-gray-800'><a href='#'>Sobre nós</a></li>
                            <li className='hover:text-gray-800'><a href='#'>País 🇧🇷</a></li>
                            {!isTokenValid() &&
                            <li className=' flex gap-2 items-center cursor-pointer'><a href='/login' className='hover:text-gray-800'><UserCircle size={32} /></a></li>
                            }
                            {isTokenValid() && (
                                
                                <li className='flex gap-3'>
                                    <a href="/admin">Admin</a>
                                    <a href="/" className='cursor-pointer' onClick={handleLogout}>Sair</a>
                                </li>
                                
                            )}
                        </ul>
                        <List className='hidden max-lg:block text-white' size={40}>
                            <ul className='flex gap-5 items-center font-vazirmatn font-medium text-gray-500 text-lg'>
                                <li className='hover:text-gray-800'><a href='/'>Comprar carro</a></li>
                                <li className='hover:text-gray-800'><a href='#'>Vender carro</a></li>
                                <li className='hover:text-gray-800'><a href='#'>App Kavak</a></li>
                                <li className='hover:text-gray-800'><a href='#'>Sobre nós</a></li>
                                <li className='hover:text-gray-800'><a href='#'>País 🇧🇷</a></li>
                                <li className=' flex gap-2 items-center cursor-pointer'><a href='/login' className='hover:text-gray-800'><UserCircle size={32} /></a></li>
                            </ul>
                        </List>
                    </nav>

                </div>
            </div>
        </div>
    )
}