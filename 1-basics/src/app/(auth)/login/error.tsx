'use client';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      {error.message}
      <button className="border-gray-400 border p-3" onClick={reset}>
        Tekrar Dene
      </button>
    </div>
  );
}
