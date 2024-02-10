import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_KEY);

const getActiveProducts = async () => {
  // stipe'raan ürün verileri al
  const stripeProducts = await stripe.products.list();

  //   aktif olanları döndrür
  return stripeProducts.data.filter((i) => i.active === true);
};

export const POST = async (req) => {
  const product = await req.json();

  //1) stripe'a kaydedilmiş ürünleri al
  const stripeProducts = await getActiveProducts();

  try {
    //2) satın almak isteddğimiz ürün daha önce stripe'a kaydedildi mi?
    let stripeProduct = stripeProducts?.find(
      (item) => item.name === product.model
    );

    //3) stripe'ta bu ürün kaydedilmemişse > ürünü stripe'a kaydet
    if (!stripeProduct) {
      stripeProduct = await stripe.products.create({
        name: product.model,
        images: [product.imageUrl],
        default_price_data: {
          unit_amount: product.price,
          currency: 'USD',
        },
        metadata: {
          product_id: product._id,
        },
      });
    }

    // 4) ürünün id'sini ve miktarını bir objeye koy
    const product_info = {
      price: stripeProduct?.default_price, // stripe id
      quantity: 1, // miktar
    };

    //5) ödeme oturumu oluştur
    const session = await stripe.checkout.sessions.create({
      line_items: [product_info], // satın alınacaklar
      mode: 'payment',
      success_url: 'http://localhost:3001/success',
      cancel_url: 'http://localhost:3001/cancel',
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        err: err,
        message: 'Ödeme oturmu oluşturulurken hata oluştu',
      },
      { status: 400 }
    );
  }
};
