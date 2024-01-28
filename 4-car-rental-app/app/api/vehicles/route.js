import { NextResponse } from 'next/server';
import Vehicle from './../../(models)/Vehicle';

export async function GET() {
  try {
    const vehicles = await Vehicle.find();

    return NextResponse.json({ data: vehicles }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: 'Araç verilini alırken bir ahat oluştu' },
      { status: 500 }
    );
  }
}
