'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  signIn,
  signOut,
  useSession,
  getProviders,
} from 'next-auth/react';

const Nav = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    getProviders().then((res: any) => setProviders(res));
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={'/'} className="flex gap-2 flex-center">
        <Image
          src={'/assets/images/logo.svg'}
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptmania</p>
      </Link>

      {/* Masaüstü Navigasyon */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={'/create-prompt'} className="black_btn">
              Gönderi Oluştur
            </Link>

            <button type="button" className="outliine_btn">
              Çıkış Yap
            </button>

            <Link href={'/profile'}>
              <Image
                src={'/assets/images/logo.svg'}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button key={provider.name} className="black_btn">
                  Giriş Yap
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigasyon */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Image
              src={'/assets/images/logo.svg'}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {isDropdownOpen && (
              <div className="dropdown">
                <Link
                  href={'/profile'}
                  className="dropdown_link"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profilim
                </Link>
                <Link
                  href={'/create-prompt'}
                  className="dropdown_link"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Gönderi Oluştur
                </Link>
                <button
                  className="black_btn mt-5 w-full"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button key={provider.name} className="black_btn">
                  Giriş Yap
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
