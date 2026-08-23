import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ZeniCorp Asphalte | Pavage résidentiel & commercial',
  description: 'Pavage professionnel d\'asphalte : entrées, parkings, voies d\'accès. Résidentiel et commercial. Québec.',
};

export const viewport: Viewport = { themeColor: '#14100a' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} dark`}>
      <body className="bg-[#14100a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}