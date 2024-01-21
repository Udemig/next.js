'use client';
import { Inter, Open_Sans, Poppins } from 'next/font/google';
import { useSearchParams, usePathname } from 'next/navigation';
import Script from 'next/script';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const inter = Inter({ weight: '800', subsets: ['latin'] });

const Article = () => {
  const handleReady = () => {
    // $('h1').append("Jquey'den eklendi");
  };

  // search params
  const params = useSearchParams();
  const length = params.get('length');

  // path name
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="container p-4">
      <h1>{length} Makaleler</h1>

      <br />

      <p className={poppins.className}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam fugit nemo cum neque dolor qui cupiditate, nesciunt
        expedita repudiandae odit possimus numquam, adipisci fugiat?
        Sed a hic magni temporibus quidem?,
      </p>

      <br />
      <br />

      <p className={inter.className}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
        modi error laudantium? Illum sapiente laudantium id facilis
        soluta natus? Deleniti iure totam possimus quisquam maxime
        fugiat nulla beatae culpa quas?
      </p>

      <Script
        onReady={handleReady}
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      />
    </div>
  );
};

export default Article;
