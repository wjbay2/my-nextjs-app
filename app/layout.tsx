import '@/css/global.scss';
import '@/css/custom.scss';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'My NextJS app',
  description: 'Hello this is Bay',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <body className="work-sans bg-white text-base leading-normal tracking-normal text-gray-600">
        <Nav />
        {children}
      </body>
    </html>
  );
}
