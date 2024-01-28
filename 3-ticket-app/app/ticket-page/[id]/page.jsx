import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Verileri alırken problem oldu');
  }

  return res.json();
};

// url parametreyi al
const TicketPage = async ({ params }) => {
  // parama göre hangi modda olduğumuza karar ver
  const editMode = params.id === 'new' ? false : true;
  let updatedItem = null;

  if (editMode) {
    // id'ye göre ticket versini al
    const res = await getTicketById(params.id);
    updatedItem = res.ticket;
  }

  // ticket verisini forma gönder
  return (
    <div>
      <TicketForm updatedItem={updatedItem} />
    </div>
  );
};

export default TicketPage;
