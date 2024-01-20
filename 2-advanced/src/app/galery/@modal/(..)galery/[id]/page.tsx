'use client';

import { data } from '@/app/galery/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const ModalPreview = ({ params }: { params: { id: string } }) => {
  // detayı gösterlicek elemnın referansını al
  const item = data.find((i) => params.id === i.id)!;

  const router = useRouter();
  const overlay = useRef(null);

  // tıklanma olayını izle
  const handleClose = (e: any) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      onClick={handleClose}
      className="fixed z-10 inset-0 mx-auto bg-black/60 p-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:2/5 p-6">
        <Image
          src={item.src}
          alt={item.name}
          className="w-full object-cover aspect-square rounded-md"
        />

        <div className="bg-white text-black p-4">
          <h2 className="text-xl font-semibold">{item.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ModalPreview;
