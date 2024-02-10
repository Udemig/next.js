'use client';

import { SessionProvider } from 'next-auth/react';

// Oturmu açık olan kullancın biilgierin
// uygulama içerisnden erişimimizi sağlar

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  );
};

export default Provider;
