import { NextResponse } from 'next/server';

// bu route'daki handler methodlarına çalışmaya zorlar
// cachde veri olsa dahi fonksiyonlar tekrar çalışıp sonuç üretir
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ time: new Date().toLocaleTimeString() });
}
