import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { isTokenValid } from '../auth/authToken';
import { useNavigate } from 'react-router-dom';
import { RegisterNewCar } from './functions/registerNewCar';
import { ListCars } from './functions/listCars';


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

export function AdminControll() {
    const navigate = useNavigate();
    

    useEffect(() => {
        if (!isTokenValid()) {
            navigate('/login');
        }
    }, []);

   

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [main_photo, setMain_photo] = useState('');
    const [registeredCars, setRegisteredCars] = useState<Car[]>([]);

    useEffect(() => {
        api.get('/')
            .then((response) => {
                setRegisteredCars(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const token = localStorage.getItem('token');
      
        const formData = new FormData();
        formData.append('name', name);
        formData.append('model', model);
        formData.append('brand', brand);
        formData.append('price', price);
        formData.append('photo', main_photo);
      
        try {
          await api.post('/', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          console.log('Produto registrado com sucesso!');
          const response = await api.get('/home');
          setRegisteredCars(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const handleUpdate = async (id: number) => {
        try {
            console.log(`Atualizando carro com ID ${id}`);
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async (id: number) => {
        try {   
            console.log(`Deletar carro com ID ${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='w-full max-w-4xl my-11 mx-auto'>
           <RegisterNewCar/>
           <ListCars/>
        </div>
    );
}
