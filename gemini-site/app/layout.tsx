import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Google Gemini Desktop',
  description:
    'Acesse o Google Gemini diretamente do seu computador com janela limpa, login automático e suporte a 20+ navegadores.',
  openGraph: {
    title: 'Google Gemini Desktop',
    description:
      'Acesse o Google Gemini diretamente do seu computador com janela limpa, login automático e suporte a 20+ navegadores.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
