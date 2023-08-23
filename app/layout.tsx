import './globals.css';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
