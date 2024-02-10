import Link from 'next/link';
import { ImCancelCircle } from 'react-icons/im';

const Cancel = () => {
  return (
    <div className="grid h-screen  place-items-center">
      <div className="border shadow shadow-white rounded p-5 text-lg flex flex-col gap-5 items-center border-red-500">
        <div className="flex justify-center text-3xl text-red-500">
          <ImCancelCircle />
        </div>

        <p>Ödeme İşlemi Başarısız</p>

        <Link
          className="text-purple-500 hover:text-purple-400"
          href={'/'}
        >
          Tekrar Deneyin
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
