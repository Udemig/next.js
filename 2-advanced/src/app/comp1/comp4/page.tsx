import Link from 'next/link';

const Comp4 = () => {
  return (
    <div>
      <h1>COMP 4</h1>
      <Link href={'/comp1/comp3'}>COMP3 Yönlendir</Link>
    </div>
  );
};

export default Comp4;
