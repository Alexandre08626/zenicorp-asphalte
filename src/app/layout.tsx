import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ZeniCorp Asphalte | Pavage, scellant et réparation - Allées & stationnements',
  description: 'Scellant d\'asphalte, réparation de fissures et pavage professionnels. Allées résidentielles, stationnements commerciaux. Garantie, travail durable, fini uniforme. Soumission gratuite 24h.',
};

export const viewport: Viewport = { themeColor: '#f8fafc' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        {children}
      </body>
    </html>
  );
}
