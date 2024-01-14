import { resolve } from 'path';
import React from 'react';

// 2 saniye sonra cevap verir
export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// kaydol bileşeni
export default async function Signup() {
  // await delay(2000);

  return <div>Kaydol</div>;
}
