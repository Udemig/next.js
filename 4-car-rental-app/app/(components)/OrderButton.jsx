'use client';

const redirectUser = (vehicle) => {
  // stripe ortamı oluştur
  fetch('http://localhost:3001/api/checkout', {
    method: 'POST',
    body: JSON.stringify(vehicle),
  })
    .then((res) => res.json())
    // kullanıcyı bu ortama yönlendir
    .then((res) => {
      if (res.url) {
        window.location.href = res.url;
      }
    });
};

const OrderButton = ({ vehicle }) => {
  return (
    <button
      className="bg-blue-600 text-center border py-1 px-3 w-full rounded-md text-sm cursor-pointer transition hover:bg-blue-800"
      onClick={() => redirectUser(vehicle)}
    >
      Satın Al
    </button>
  );
};

export default OrderButton;
