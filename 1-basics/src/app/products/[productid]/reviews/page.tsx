import React from 'react';
import { PropType } from '../page';

export default function Reviews({ params }: PropType) {
  return (
    <div>
      <h1>{params.productid} ürünü için Yorumlar</h1>

      <h1>Yorum 1</h1>
      <h1>Yorum 2</h1>
      <h1>Yorum 3</h1>
      <h1>Yorum 4</h1>
      <h1>Yorum 5</h1>
    </div>
  );
}
