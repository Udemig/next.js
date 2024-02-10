import Order from '@/app/(models)/Order';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_KEY);

// nextjs'in body üzerinde müdahalesini iptal
export const config = {
  api: {
    bodyParser: false,
  },
};

// Öndemi işlemi başarılı olursa stripe
// Buraya post isteği atsın
export const POST = async (req) => {
  //1)  isteğin body kısmını text'e çevir
  const body = await req.text();

  //2) stripe-signature header'ına eriş
  const signature = headers().get('stripe-signature');

  let event;

  try {
    //3) geçekeleşn ödeme ile alakalı verileri
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.WEBHOOK_KEY
    );
  } catch (err) {
    return NextResponse.json({}, { status: 400 });
  }

  //4) ödeme başarılı olduysa satın alınan ürünün verisine eriş
  if (event.type === 'checkout.session.completed') {
    // ödeme
    const session = event.data.object;

    // ödeme oturumndaki ürünleri al
    const line_items = await stripe.checkout.sessions.listLineItems(
      session.id
    );

    // ürünün ödemeyle alakalı bütün verisini al
    const item = await stripe.products.retrieve(
      line_items.data[0].price.product
    );

    const orderItem = {
      product: item.metadata.product_id,
      money_spend: line_items.data[0].amount_total,
      currency: line_items.data[0].price.currency,
      type: line_items.data[0].price.type,
    };

    //5) satın alınan ürünü siparişler kollkeisyonuna ekle
    await Order.create(orderItem);

    //6) client'a cevap gönder
    return NextResponse.json(
      { order: orderItem, status: 'success' },
      { status: 200 }
    );
  }

  //7) ödeme başarısız olura
  return NextResponse.json({ status: 'fail' }, { status: 400 });
};
