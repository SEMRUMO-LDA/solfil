import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Solfil | Materiais de Construção - Algarve',
  description:
    'Líder no fornecimento de materiais de construção no Algarve. Qualidade, rigor e marcas de excelência desde 1986.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-gray-50 text-solfil-black">{children}</body>
    </html>
  );
}
