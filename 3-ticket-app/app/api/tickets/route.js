import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

// atılan post isteğinde ne yapılacağını belirle
export async function POST(req) {
  try {
    // isteğin body içeriğine eriş
    const body = await req.json();

    // veritabanına ticket'ı kaydet
    await Ticket.create(body.ticketData);

    // olumlu cevap gönder
    return NextResponse.json(
      { message: 'Ticket Oluşturuldu' },
      { status: 201 }
    );
  } catch (err) {
    // olumsuz cevap gönder
    return NextResponse.json(
      { message: 'Ticket oluşturuken hata' },
      { status: 500 }
    );
  }
}

// bütün verileri getirir
export async function GET(req) {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json(
      {tickets},
      {status: 200}
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Üzgünüz bir hata oluştu',
        err,
      },
      { status: 500 }
    );
  }
}
