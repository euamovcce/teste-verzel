import React, { useState, useEffect } from 'react';
import { isTokenValid } from '../../auth/authToken';

export function RegisterNewCar() {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [imageLink, setImageLink] = useState('');

  useEffect(() => {
    if (!isTokenValid()) {
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = isTokenValid();
    console.log(token);
    console.log(name);
    console.log(brand);
    console.log(model);
    console.log(price);
    console.log(imageLink);


    fetch("http://localhost:8080/", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        brand: brand,
        model: model,
        price: price,
        main_photo: imageLink
      })
    })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div className='m-5 font-vazirmatn'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-5'>
        <input
          placeholder='Nome do veículo'
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          className='bg-white border border-black rounded-md p-2 text-zinc-800 placeholder:text-zinc-800'
        />
        <input
          placeholder='Marca do veículo'
          type='text'
          value={model}
          onChange={(event) => setModel(event.target.value)}
          className='bg-white border border-black rounded-md p-2 text-zinc-800 placeholder:text-zinc-800'
        />
        <input
          placeholder='Modelo do veículo'
          type='text'
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          className='bg-white border border-black rounded-md p-2 text-zinc-800 placeholder:text-zinc-800'
        />
        <input
          placeholder='Valor do veículo'
          type='number'
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className='bg-white border border-black rounded-md p-2 text-zinc-800 placeholder:text-zinc-800'
        />
        <input
          placeholder='Link da imagem do veículo'
          type='text'
          value={imageLink}
          onChange={(event) => setImageLink(event.target.value)}
          className='bg-white border border-black rounded-md p-2 text-zinc-800 placeholder:text-zinc-800'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
          Cadastrar novo veículo
        </button>
      </form>
    </div>
  );
}
