import { NextResponse } from 'next/server';
import { products } from './../data/index';

export async function GET() {
  return NextResponse.json({ data: products });
}
