import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bozzetto Probe Next',
};

/** Root layout for the probe repo. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
