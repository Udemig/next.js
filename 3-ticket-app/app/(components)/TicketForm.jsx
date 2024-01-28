'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const TicketForm = ({ updatedItem }) => {
  const router = useRouter();

  // ticket varsqayılan verisi
  const initialData = {
    title: '',
    description: '',
    category: 'Bağlantı Sorunu',
    priority: 1,
    progress: 0,
    status: 'Başlamadı',
  };

  const [ticketData, setTicketData] = useState(
    updatedItem ? updatedItem : initialData
  );

  //  inputtaki veriyi ilgili state'e aktarır
  const handleChange = (e) => {
    const name = e.target.name; // title / description
    const value = e.target.value;

    setTicketData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updatedItem) {
      // ticcket'I güncelle
      const res = await fetch(`/api/tickets/${updatedItem._id}`, {
        method: 'PUT',
        body: JSON.stringify({ ticketData }),
        'content-type': 'application/json',
      });

      // başarısız olursa hata ver
      if (!res.ok) {
        throw new Error('Ticket"ı güncellerken hata meydana geldi');
      }
    } else {
      //yeni ticket'ı veritabanına kaydet
      const res = await fetch('/api/tickets', {
        method: 'POST',
        body: JSON.stringify({ ticketData }),
        'content-type': 'application/json',
      });

      // başarısız olursa hata ver
      if (!res.ok) {
        throw new Error('Ticket oluştururken hata meydana geldi');
      }
    }

    // başarılı olursa
    // ansayfaya yönlendir
    router.push('/');
    // sayfayı yenile
    router.refresh();
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-3/4 md:w-1/2 my-4"
      >
        <h3>{updatedItem ? "Ticket'ı Düzenle" : 'Ticket Oluştur'}</h3>

        <label>Başlık</label>
        <input
          type="text"
          name="title"
          required
          value={ticketData.title}
          onChange={handleChange}
        />

        <label>Açıklama</label>
        <textarea
          type="text"
          name="description"
          required
          value={ticketData.description}
          onChange={handleChange}
        />

        <label>Kategori</label>
        <select
          type="text"
          name="category"
          value={ticketData.category}
          onChange={handleChange}
        >
          <option>Yazılım Sorunu</option>
          <option>Donanım Sorunu</option>
          <option>Bağlantı Sorunu</option>
        </select>

        <label>Öncelik</label>

        <div>
          <input
            id="pri-1"
            type="radio"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={ticketData.priority == 1}
          />
          <label htmlFor="pri-1">1</label>

          <input
            id="pri-2"
            type="radio"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={ticketData.priority == 2}
          />
          <label htmlFor="pri-2">2</label>

          <input
            id="pri-3"
            type="radio"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={ticketData.priority == 3}
          />
          <label htmlFor="pri-3">3</label>

          <input
            id="pri-4"
            type="radio"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={ticketData.priority == 4}
          />
          <label htmlFor="pri-4">4</label>

          <input
            id="pri-5"
            type="radio"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={ticketData.priority == 5}
          />
          <label htmlFor="pri-5">5</label>
        </div>

        <label>İlerleme</label>
        <input
          type="range"
          name="progress"
          min={0}
          max={100}
          value={ticketData.progress}
          onChange={handleChange}
        />

        <label>Durum</label>
        <select
          type="text"
          name="status"
          value={ticketData.status}
          onChange={handleChange}
        >
          <option>Başlamadı</option>
          <option>Başladı</option>
          <option>Bitti</option>
        </select>

        <button className="btn" type="submit">
          {updatedItem ? "Ticket'ı Güncelle" : "Ticket'ı Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
