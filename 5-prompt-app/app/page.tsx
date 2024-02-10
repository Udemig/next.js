import Feed from '@/components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Keşfet & Paylaş
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI ile Güçlendirilmiş Prompt'lar
        </span>
      </h1>

      <p className="desc text-center">
        Promptmania, Moden dünya için açık kaynaklı ai prompt aracı.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
