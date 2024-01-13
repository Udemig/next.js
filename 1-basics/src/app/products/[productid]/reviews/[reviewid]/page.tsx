import React from 'react';

type ParamType = {
  params: {
    productid: string;
    reviewid: string;
  };
};

export default function ReviewDetail({ params }: ParamType) {
  return (
    <div>
      <h1>
        {params.productid} Ürünü İçin {params.reviewid} Yorumu
      </h1>

      <h1>Yorum Detay sayfası</h1>
    </div>
  );
}
