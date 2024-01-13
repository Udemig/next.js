import { notFound } from 'next/navigation';

export type PropType = {
  params: {
    productid: string;
  };
};

// dinamik metadata tanımlama
export const generateMetadata = ({params}) => ({
  title: `Ürün ${params.productid}`
})

export default function ProductDetail({ params }: PropType) {
  // eğer ürünün id'si 100 den büyükse
  if (parseInt(params.productid) > 100) {
    // kullanıcyı 404 sayfasına yönlendirir
    notFound();
  }
  return <h1>{params.productid} ÜRÜN DETAY</h1>;
}
