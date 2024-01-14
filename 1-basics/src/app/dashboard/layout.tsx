// @ işareti ile tanımlana sayfalar
// layout tardından prop olarak alınır

import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
};
export default function Layout({
  children,
  users,
  notifications,
  revenue,
}: LayoutProps) {
  return (
    <div className="p-5">
      <h1 className="my-4">{children}</h1>

      <div className="flex gap-5 my-5">
        <Link href={'/dashboard'}>Admin Paneli</Link>
        <Link href={'/dashboard/settings'}>Ayarlar</Link>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col gap-5">
          <div className="border border-gray-700 p-5">{users}</div>
          <div className="border border-gray-700 p-5">{revenue}</div>
        </div>
        <div className="border border-gray-700 p-5 w-full">
          {notifications}
        </div>
      </div>
    </div>
  );
}
