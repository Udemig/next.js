import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
  try {
    // cahce'i devre dışı bıraktık
    // her saniye yeni ticket oluşturulabileceğinden bu işlemi yaptık
    const res = await fetch('http://localhost:3000/api/tickets', {
      cache: 'no-store',
    });

    return res.json();
  } catch (err) {
    console.log('Vierleri alırken hata', err);
  }
};

const Home = async () => {
  const { tickets } = await getTickets();

  // kaç farklı benzersiz kategori var tespi etme
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      {tickets &&
        uniqueCategories?.map((category, i) => (
          <div key={i} className="mb-4">
            <h2>{category}</h2>

            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets
                ?.filter((ticket) => ticket.category === category)
                ?.map((ticket, i) => (
                  <TicketCard key={i} ticket={ticket} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
