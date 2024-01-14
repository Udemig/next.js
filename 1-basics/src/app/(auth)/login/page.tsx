import React from 'react';

export default function Login() {
  const number = Math.round(Math.random() * 10);

  console.log('NUMBER', number);

  if (number > 2 && number < 5) {
    //örn: api isteği sonucu oluşan hata
    throw new Error('Verileri alırken bir hata oluştu');
  }

  if (number > 6) {
    //örn: api isteği sonucu oluşan hata
    throw new Error('Suunu kaynaklı bir hata oluştu');
  }

  return <div>Login</div>;
}
