'use client';

const redirectUser = (vehicle) => {
  // stripe ortamı oluştur
  // kullanıcyı bu ortama yönlendir
};

const OrderButton = ({ vehicle }) => {
  return (
    <button
      className="bg-blue-600 text-center border py-1 px-3 w-full rounded-md text-sm cursor-pointer transition hover:bg-blue-800"
      onClick={() => redirectUser(vehicle)}
    >
      Kirala
    </button>
  );
};

export default OrderButton;
