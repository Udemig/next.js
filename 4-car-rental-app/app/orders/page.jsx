import millify from 'millify';
import Image from 'next/image';
import Link from 'next/link';

const getOrders = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/orders', {
      cache: 'no-store',
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const Orders = async () => {
  const data = await getOrders();

  return (
    <div className="container p-10">
      <Link href={'/'}>Ürünler</Link>

      <div className="flex flex-col gap-10">
        {data.orders.map((order) => {
          const car = order.product;

          return (
            <div className="card-bg rounded-md flex gap-5 items-center">
              <Image
                src={car.imageUrl}
                width={100}
                height={100}
                alt="car"
              />

              <h2>
                <span>{car.make}</span>
                <span className="font-bold mx-2">{car.model}</span>
              </h2>

              <p className="flex max-md:flex-col gap-2">
                <span className="whitespace-nowrap">
                  Ödenen Tutar:
                </span>
                <span className="font-bold text-green-400">
                  ${millify(order.money_spend)}{' '}
                </span>
              </p>

              <p className="flex max-md:flex-col gap-2">
                <span className="whitespace-nowrap">
                  Alım Tarihi:
                </span>
                <span className="font-bold">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </p>

              <p className="flex max-md:flex-col gap-2 max-md:hidden">
                <span className="whitespace-nowrap">Ödeme Tipi:</span>
                <span className="font-bold">{order.type}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
