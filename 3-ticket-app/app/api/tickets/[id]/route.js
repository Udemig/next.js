import { NextResponse } from 'next/server';
import Ticket from '../../../(models)/Ticket';

export async function DELETE(req, { params }) {
  try {
    await Ticket.findByIdAndDelete(params.id);

    return NextResponse.json(
      { message: 'Başarıyla Silindi' },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Silerken Hata oluştu', err },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const ticket = await Ticket.findById(params.id);

    return NextResponse.json({ ticket }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: 'Veri alınırken Hata oluştu', err },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    // isteğin body'sin eriş
    const body = await req.json();

    // veritbanında ticket'ı güncelle
    const updated = await Ticket.findByIdAndUpdate(params.id, {
      ...body.ticketData,
    });

    // client'a cevap gönder
    return NextResponse.json({ updated }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: 'Veriyi güncellerken Hata oluştu', err },
      { status: 500 }
    );
  }
}
