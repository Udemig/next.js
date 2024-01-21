import { NextResponse } from 'next/server';
import { products } from '../../data';

type ParamType = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: ParamType) {
  const product = products.find((i) => i.id == params.id);

  return NextResponse.json({ product: product });
}

export async function PATCH(req: Request, { params }: ParamType) {
  // isteğin body kısmına erişme
  const body = await req.json();

  const index = products.findIndex((i) => i.id == params.id);

  products[index].price = body.price;

  return NextResponse.json({ product: products[index] });
}

export async function DELETE(req: Request, { params }: ParamType) {
  const index = products.findIndex((i) => i.id == params.id);
  products.splice(index, 1);

  return NextResponse.json({ products: products });
}
