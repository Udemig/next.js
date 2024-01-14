'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type AuthProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthProps) {
  const path = usePathname();
  const [text, setText] = useState('');

  return (
    <div className="flex gap-5 p-5">
      <nav className="flex flex-col gap-2 bg-gray-800 textasdasdasd-white p-4 rounded">
        <Link
          className={path === '/login' ? 'active' : ''}
          href="/login"
        >
          Giriş Yap
        </Link>
        <Link
          className={path === '/signup' ? 'active' : ''}
          href="/signup"
        >
          Kaydol
        </Link>
        <Link
          className={path === '/forgotpass' ? 'active' : ''}
          href="/forgotpass"
        >
          Şifremi Unuttum
        </Link>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-black"
          type="text"
        />

        <p>{text}</p>
      </nav>

      {children}
    </div>
  );
}
