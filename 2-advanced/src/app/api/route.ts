import { NextResponse } from 'next/server';

// api klasörünün içerisne bir route ts
// oluşturğumuz için http://localhost:3000/api
// yapılan api isteklerinde bu dosya devreye gireceke

// Route Handler
// Yapılan isteği ele alan ve cevap gönderen fonksiyonlar
export async function GET() {
  return NextResponse.json({ text: 'Selam burası backend' });
}
