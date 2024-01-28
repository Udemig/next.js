'use client';

import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:3000/api/tickets/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FaTrash onClick={handleDelete} className="cursor-pointer" />
  );
};

export default DeleteBlock;
