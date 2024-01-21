'use client';
import Image from 'next/image';
import { data } from './constants';
import Link from 'next/link';

// Kaynağı local olan yani indirip projeye dahil ettiğimiz resimler
import localImage from './photos/1.jpg';

// kaynağı projenin dışarısı olan url yarıdmıla eriştiğimiz resimler
const remoteImage =
  'https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format';

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

      <h1 className="my-10">Resim Bileşeni</h1>

      <h1>REMOTE Resim</h1>
      <Image
        quality={100} // resmin kalitesini belirler
        src={remoteImage}
        alt="next"
        width={300}
        height={300}
        unoptimized // bütün optimzasyonlar devre dışı kalır
      />

      <h1>REMOTE Resim 2</h1>
      <div className="relative w-full h-32">
        <Image src={remoteImage} alt="next" fill />
      </div>

      <h1>Locale Resim </h1>
      <Image src={localImage} alt="harika" className="h-44" />

      <h1>Blur Loading</h1>
      <Image
        src={localImage}
        alt="harika"
        placeholder="blur"
        priority
      />
    </main>
  );
};

export default Galery;
