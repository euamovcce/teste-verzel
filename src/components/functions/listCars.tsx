import { useState } from 'react';
import { api } from '../../lib/axios';

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

export function ListCars() {
  const [carList, setCarList] = useState<Car[]>([]);
  const [showTable, setShowTable] = useState(false);

  const handleFetchCars = async () => {
    try {
      const response = await api.get('/');
      setCarList(response.data);
      setShowTable(!showTable); // Alterna o valor do estado
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      // Implemente a lógica de atualização do carro com o ID fornecido
      console.log(`Atualizando carro com ID ${id}`);
    } catch (error) {
      // Trate o erro adequadamente
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      // Implemente a lógica de atualização do carro com o ID fornecido
      console.log(`Deletar carro com ID ${id}`);
    } catch (error) {
      // Trate o erro adequadamente
      console.error(error);
    }
  };

  return (
    <div className="m-5 font-vazirmatn">
      <button onClick={handleFetchCars} className="bg-blue-500 text-white p-2 rounded-md mb-5">
        {showTable ? 'Ocultar carros registrados' : 'Mostrar carros registrados'}
      </button>

      {showTable && (
        <div className="overflow-x-auto">
          <table className="border border-zinc-400 w-full rounded-md">
            <thead>
              <tr className="bg-blue-500">
                <th className="text-white px-3 border-r border-zinc-400">Id</th>
                <th className="text-white px-3 border-r border-zinc-400">Nome</th>
                <th className="text-white px-3 border-r border-zinc-400">Marca</th>
                <th className="text-white px-3 border-r border-zinc-400">Modelo</th>
                <th className="text-white px-3 border-r border-zinc-400">Preço</th>
                <th className="text-white px-3">Ação</th>
              </tr>
            </thead>
            <tbody>
              {carList.map((car) => (
                <tr key={car.id}>
                  <td className="text-black px-3 border-r border-b border-zinc-400">{car.id}</td>
                  <td className="text-black px-3 border-r border-b border-zinc-400">{car.name}</td>
                  <td className="text-black px-3 border-r border-b border-zinc-400">{car.brand}</td>
                  <td className="text-black px-3 border-r border-b border-zinc-400">{car.model}</td>
                  <td className="text-black px-3 border-r border-b border-zinc-400">{car.price}</td>
                  <td className="text-black px-3  border-zinc-400 flex justify-around">
                    <button onClick={() => handleUpdate(car.id)}>Atualizar</button>
                    <button onClick={() => handleDelete(car.id)}>Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
