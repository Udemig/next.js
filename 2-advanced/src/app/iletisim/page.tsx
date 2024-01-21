// 'use client'; //directive

import { redirect } from 'next/navigation';
import Input from '../components/input';

const Contact = () => {
  // kullanıcyı koşula göre sayfaya girmesine izin verme
  if (false) {
    redirect('/home');
  }

  console.log('İletişim Sayfası Render Edildi');

  return (
    <div>
      <h1>İLETİTİŞ SYAFLARI</h1>

      <h2>KULLANCI ETKİŞELİMİ OLYANA DĞER VERİLER</h2>

      <Input />
    </div>
  );
};

export default Contact;
