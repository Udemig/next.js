import Link from 'next/link';
import React from 'react';

export default function page() {
  const products = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-5">
      <h1>ÜRÜNLER SAYFASI</h1>

      {products.map((id) => (
        <Link key={id} href={`products/${id}`}>
          Ürün {id}
        </Link>
      ))}
    </div>
  );
}
