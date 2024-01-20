'use client';
import Image from 'next/image';
import { data } from './constants';
import Link from 'next/link';

const Galery = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-4">
        Dünyanın 7 Harikası
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {data.map((item) => (
          <Link href={`/galery/${item.id}`}>
            <Image
              src={item.src}
              alt={item.name}
              className="w-full object-cover aspect-square rounded-md cursor-pointer  shadow-lg"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Galery;
