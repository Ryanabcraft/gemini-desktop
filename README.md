# Google Gemini Desktop

Um aplicativo desktop elegante para acessar o **Google Gemini** diretamente do seu computador, sem precisar abrir o navegador toda vez.

## ✨ Funcionalidades

- 🚀 **Acesso rápido** ao Google Gemini com um clique
- 🌐 **Usa seu navegador real** — login funciona normalmente com sua conta Google
- 🧩 **Compatível com 20+ navegadores** (Chrome, Edge, Brave, Opera, Vivaldi, e mais)
- 🪟 **Janela limpa** — sem barra de endereço, abas ou distrações
- 📦 **Instalador completo** — atalho na área de trabalho, menu iniciar, desinstalador

## 📸 Preview

![Google Gemini Desktop](icon.png)

## 🚀 Como usar

### Instalação rápida
1. Baixe o instalador na [página de Releases](https://github.com/Ryanabcraft/gemini-desktop/releases)
2. Execute `Google-Gemini-Setup.exe`
3. Pronto! O app aparece na sua área de trabalho

### Ou execute direto (sem instalar)
```bash
python gemini_app.py
```

## 🔧 Navegadores suportados

| Navegador | Suporte |
|-----------|---------|
| Google Chrome | ✅ |
| Chrome Canary | ✅ |
| Chrome Beta/Dev | ✅ |
| Microsoft Edge | ✅ |
| Edge Beta/Dev | ✅ |
| Brave | ✅ |
| Brave Beta/Nightly | ✅ |
| Opera | ✅ |
| Opera GX | ✅ |
| Vivaldi | ✅ |
| Chromium | ✅ |
| Yandex Browser | ✅ |
| Epic Privacy Browser | ✅ |
| Comodo Dragon | ✅ |
| Slimjet | ✅ |
| Cốc Cốc | ✅ |

## 🛠️ Como funciona

O app localiza o navegador Chromium instalado no seu sistema e abre o Gemini em modo `--app`, que cria uma janela dedicada sem abas nem barras de endereço — igual um aplicativo nativo.

Como usa o **seu navegador real**, você já fica logado automaticamente com sua conta Google.

## 📦 Build do zero

```bash
# Instalar PyInstaller
pip install pyinstaller

# Compilar o executável
pyinstaller --onefile --windowed --icon=icon.png --name "Google Gemini" gemini_app.py

# Gerar instalador (precisa do Inno Setup)
iscc installer.iss
```

## 📄 Licença

Este projeto não é afiliado ao Google. O logotipo do Gemini é propriedade do Google LLC.
