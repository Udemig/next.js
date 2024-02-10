import Link from 'next/link';
import { CiCircleCheck } from 'react-icons/ci';

const Success = () => {
  return (
    <div className="grid h-screen  place-items-center">
      <div className="border shadow shadow-white rounded p-5 text-lg flex flex-col gap-5 items-center border-green-500">
        <div className="flex justify-center text-3xl text-green-500">
          <CiCircleCheck />
        </div>

        <p>Ödeme İşlemi Başarılı</p>

        <Link
          className="text-purple-500 hover:text-purple-400"
          href={'/'}
        >
          Yeni Sipariş
        </Link>
        <Link
          className="text-purple-500 hover:text-purple-400"
          href={'/orders'}
        >
          Siparişlerim
        </Link>
      </div>
    </div>
  );
};

export default Success;
