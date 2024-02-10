import Order from '@/app/(models)/Order';
import Vehicle from '@/app/(models)/Vehicle';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const orders = await Order.find().populate({
      path: 'product',
      model: Vehicle,
      strictPopulate: false,
    });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
