type PropType = {
  params: {
    slug: string[];
  };
};

export default function Docs({ params }: PropType) {
  if (params.slug.length === 2) {
    return (
      <h1>
        Şuan {params.slug[0]} kategorisinin {params.slug[1]}
        dökümanını okuyorusnuz
      </h1>
    );
  }

  return <h1>Şuan {params.slug[0]} kategorisini görüntülüyosunuz</h1>;
}
