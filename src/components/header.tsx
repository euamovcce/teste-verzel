import { List, UserCircle } from 'phosphor-react';
import logoBlacks from '../assets/vercarblack.png'
export function Header() {
    return (
        <div className="max-w-7xl w-full mx-auto my-0">
            <div className="flex justify-between items-center text-black px-3">
                <a href='#'><img src={logoBlacks} /></a>
                <nav className='my-6'>
                    <ul className='flex gap-5 items-center font-vazirmatn font-medium text-gray-500 text-lg  max-lg:hidden'>
                        <li className='hover:text-gray-800'><a href='#'>Comprar carro</a></li>
                        <li className='hover:text-gray-800'><a href='#'>Vender carro</a></li>
                        <li className='hover:text-gray-800'><a href='#'>App Kavak</a></li>
                        <li className='hover:text-gray-800'><a href='#'>Sobre nós</a></li>
                        <li className='hover:text-gray-800'><a href='#'>País 🇧🇷</a></li>
                        <li className=' flex gap-2 items-center cursor-pointer'><UserCircle size={32} /><span className='hover:text-gray-800'>Cadastre-se</span></li>
                    </ul>
                    <List className='hidden max-lg:block' size={40}>
                    <ul className='flex gap-5 items-center font-vazirmatn font-medium text-gray-500 text-lg'>
                        <li className='hover:text-gray-800'><a href='#'>Comprar carro</a></li>
                        <li className='hover:text-gray-800'><a href='#'>Vender carro</a></li>
                        <li className='hover:text-gray-800'><a href='#'>App Kavak</a></li>
                        <li className='hover:text-gray-800'><a href='#'>Sobre nós</a></li>
                        <li className='hover:text-gray-800'><a href='#'>País 🇧🇷</a></li>
                        <li className=' flex gap-2 items-center cursor-pointer'><UserCircle size={32} /><span className='hover:text-gray-800'>Cadastre-se</span></li>
                    </ul>
                    </List>
                </nav>

            </div>


        </div>
    )
}