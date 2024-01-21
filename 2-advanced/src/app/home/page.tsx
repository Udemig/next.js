import React from 'react';

//1) veri çekme işlemi için 1 method tanımlanır
export const getData = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/1'
    // { cache: 'no-store', next: { revalidate: 30 } } // veriyi saklama
  );

  return res.json();
};

export const getData2 = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/2'
  );

  return res.json();
};

export const getData3 = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/3'
  );

  return res.json();
};

// api isteği yapılcak bileşn asny olmalı
const Home = async () => {
  //2) burada veri çekme methodlarını kullanırız
  const promise = getData();
  const promise2 = getData2();
  const promise3 = getData3();

  // Promise all methodu ile bütün istekleri aynanda yaparız
  // sonuç olarak cevaplardan oluşan bir dizi elde ederiz
  const [data1, data2, data3] = await Promise.all([
    promise,
    promise2,
    promise3,
  ]);

  return (
    <div>
      <h1>{data1.name}</h1>
      <h1>{data2.name}</h1>
      <h1>{data3.name}</h1>
    </div>
  );
};

export default Home;
