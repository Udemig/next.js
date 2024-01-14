'use client';

import { useRouter } from 'next/navigation';

export default function Basket() {
  const router = useRouter();

  const handleClick = () => {
    console.log('deneme');
    // bir fonksiyon içerisnde kullanıcyı yönlendmek
    // itedğimizde router'ın kurumunu yapıp push metodunu kullanırız
    router.push('/products');

    // router.back() > önceki sayfaya git
    // router.forward() > sonraki sayfaya git
    // router.refresh() > sayfayı yenile
  };

  return (
    <div>
      <button onClick={handleClick}>Sepeti Onayla</button>
    </div>
  );
}
