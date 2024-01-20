import Image from 'next/image';
import { data } from '../constants';

const DetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  // veri içerisnden urldeki id'ye karşılık geleni al
  const item = data.find((i) => i.id === params.id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">
            {item.name}
          </h1>
        </div>

        <Image
          src={item.src}
          alt={item.name}
          className="w-full object-cover aspect-square rounded-md"
        />

        <div className="bg-white p-4 my-4 text-black rounded-md">
          <h3>Fotoğrafçı: {item.photographer}</h3>
          <h3>Lokasyon: {item.location}</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
