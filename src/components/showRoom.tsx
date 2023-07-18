import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { Car } from "../interface/CarData";


export function ShowRoom() {
  const [cars, setCars] = useState<Car[]>([]);
  const [sortedCars, setSortedCars] = useState<Car[]>([]);
  const [sortByPrice, setSortByPrice] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/');
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sorted = [...cars];
    if (sortByPrice) {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => a.id - b.id);
    }
    setSortedCars(sorted);
  }, [sortByPrice, cars]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortByPrice(value === 'price');
  };

  return (
    <div className='h-full'>
      <div className='max-w-6xl w-full mx-auto my-5'>
        <div className='m-2'>
          <select
            value={sortByPrice ? 'price' : 'default'}
            onChange={handleSortChange}
            className='bg-white border border-black text-zinc-900 my-5 py-1 px-2'
          >
            <option value='default'>Ordenação Padrão</option>
            <option value='price'>Ordenado por Preço</option>
          </select>
          <ul className='text-black grid grid-cols-4 gap-3 max-xl:grid-cols-2 max-md:grid-cols-1'>
            {sortedCars.map((car) => (
              <li key={car.id} className='shadow-md bg-zinc-600 shadow-black flex flex-col justify-between'>
                <div className='text-white font-vazirmatn font-normal text-1xl  bg-zinc-600 w-full p-2'>{car.brand} </div>
                <div className='w-full'>
                  <img src={car.main_photo} alt={car.name} className='w-full object-cover' />
                </div>
                <div className='bg-zinc-600 p-4'>
                  <span className='text-white font-vazirmatn font-normal text-1xl'>{car.name} </span>
                  <span className='text-white font-vazirmatn font-normal text-1xl'>{car.model} </span>
                  <p className='text-white font-vazirmatn font-bold text-3xl'>{formatPrice(car.price)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
