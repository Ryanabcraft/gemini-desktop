import {
  ArrowDownTrayIcon,
  CommandLineIcon,
  GlobeAltIcon,
  KeyIcon,
  PuzzlePieceIcon,
  WindowIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    title: 'Janela Limpa',
    description:
      'Sem abas, sem barras de endereço, sem distrações. Apenas o Gemini em uma janela dedicada.',
    icon: WindowIcon,
  },
  {
    title: 'Login Automático',
    description:
      'Usa seu navegador real. Se você já está logado no Google, o login é automático.',
    icon: KeyIcon,
  },
  {
    title: '20+ Navegadores',
    description:
      'Compatível com Chrome, Edge, Brave, Opera, Vivaldi e muitos outros navegadores Chromium.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Open Source',
    description:
      'Código 100% aberto no GitHub. Leve, simples e auditável por qualquer um.',
    icon: CommandLineIcon,
  },
  {
    title: 'Instalação Completa',
    description:
      'Instalador profissional com atalho na área de trabalho, menu iniciar e desinstalador.',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'Apenas 10 MB',
    description:
      'Leve e rápido. O instalador tem apenas 12 MB e o app roda instantaneamente.',
    icon: ArrowDownTrayIcon,
  },
];

const browsers = [
  { name: 'Google Chrome', icon: 'chrome' },
  { name: 'Chrome Canary', icon: 'chrome' },
  { name: 'Chrome Beta', icon: 'chrome' },
  { name: 'Chrome Dev', icon: 'chrome' },
  { name: 'Microsoft Edge', icon: 'edge' },
  { name: 'Edge Beta', icon: 'edge' },
  { name: 'Edge Dev', icon: 'edge' },
  { name: 'Brave', icon: 'brave' },
  { name: 'Brave Beta', icon: 'brave' },
  { name: 'Brave Nightly', icon: 'brave' },
  { name: 'Opera', icon: 'opera' },
  { name: 'Opera GX', icon: 'opera' },
  { name: 'Vivaldi', icon: 'vivaldi' },
  { name: 'Chromium', icon: 'chromium' },
  { name: 'Yandex Browser', icon: 'yandex' },
  { name: 'Epic Privacy', icon: 'epic' },
  { name: 'Comodo Dragon', icon: 'dragon' },
  { name: 'Slimjet', icon: 'slimjet' },
  { name: 'Cốc Cốc', icon: 'coccoc' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/5 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-yellow-400 flex items-center justify-center text-sm font-bold">
              G
            </div>
            <span className="font-semibold text-sm">Gemini Desktop</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ryanabcraft/gemini-desktop"
              target="_blank"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Ryanabcraft/gemini-desktop/releases"
              target="_blank"
              className="text-sm bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Download
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-green-400 to-yellow-400 p-0.5 shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="Gemini"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Google Gemini
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            Desktop
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Acesse o Google Gemini em uma janela limpa e dedicada, sem abas ou
          distrações. Login automático com seu navegador real. Rápido, leve e
          open source.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/Ryanabcraft/gemini-desktop/releases/download/v1.0.0/Google-Gemini-Setup.exe"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Baixar para Windows
          </a>
          <a
            href="https://github.com/Ryanabcraft/gemini-desktop"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-white/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Código Aberto
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            10 MB
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Windows
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Open Source
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Grátis
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que usar o{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Gemini Desktop
            </span>
            ?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Uma experiência limpa e profissional para acessar o Google Gemini no
            seu computador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/[0.07] hover:border-white/10 transition-all group"
            >
              <feature.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como{' '}
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              funciona
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simples, direto e sem complicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-yellow-500/20" />

          {[
            {
              step: '01',
              title: 'Baixe e Instale',
              desc: 'Baixe o instalador e execute. Em segundos o app está pronto.',
            },
            {
              step: '02',
              title: 'Abra o App',
              desc: 'O app detecta seu navegador e abre o Gemini em janela limpa.',
            },
            {
              step: '03',
              title: 'Use o Gemini',
              desc: 'Pronto! Você já está logado e pode usar o Gemini sem distrações.',
            },
          ].map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 via-green-500/10 to-yellow-500/10 border border-white/5 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Browsers */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Navegadores{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              compatíveis
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Funciona com qualquer navegador baseado em Chromium.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {browsers.map((browser) => (
            <div
              key={browser.name}
              className="bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3 text-center text-sm text-slate-300 hover:bg-white/[0.06] hover:border-white/10 transition-all"
            >
              {browser.name}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 via-green-500/10 to-yellow-500/10 border border-white/5 rounded-2xl p-12 md:p-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              testar?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Baixe agora e comece a usar o Google Gemini em uma janela limpa e
            sem distrações.
          </p>
          <a
            href="https://github.com/Ryanabcraft/gemini-desktop/releases/download/v1.0.0/Google-Gemini-Setup.exe"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Baixar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-yellow-400 flex items-center justify-center text-[9px] font-bold">
              G
            </div>
            <span>Gemini Desktop</span>
          </div>
          <p>
            Não afiliado ao Google. Google Gemini é marca registrada do Google
            LLC.
          </p>
          <a
            href="https://github.com/Ryanabcraft/gemini-desktop"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
