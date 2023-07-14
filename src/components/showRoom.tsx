import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Car {
    id: number;
    name: string;
    brand: string;
    model: string;
    price: number;
    main_photo: string;
    second_photo: string;
    third_photo: string;
    fourth_photo: string;
    active: boolean;
}

export function ShowRoom() {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        // Faz a chamada GET para obter os dados de carros
        api.get('/home')
            .then((response) => {
                // Atualiza o estado com os dados recebidos da API
                setCars(response.data);
            })
            .catch((error) => {
                // Manipule erros aqui
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1 className='text-black'>Lista de Carros</h1>
            <div className='max-w-6xl w-full mx-auto my-0'>
                <ul className='text-black grid grid-cols-3 gap-3'>
                    {cars.map((car) => (
                        <li key={car.id}
                            className=''
                        >
                            <div><img src={car.main_photo} /></div>
                            <div className='bg-zinc-600'> 
                                <span className=''>{car.name}</span>
                                <span>{car.brand}</span>
                                <span>{car.model}</span>
                                <p className=''>{car.price}R$</p>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
