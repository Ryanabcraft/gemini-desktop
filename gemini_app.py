import subprocess
import os
import sys
from pathlib import Path

BROWSERS = [
    # Chrome
    r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe",
    r"%PROGRAMFILES%\Google\Chrome\Application\chrome.exe",
    r"%PROGRAMFILES(X86)%\Google\Chrome\Application\chrome.exe",
    # Chrome Canary
    r"%LOCALAPPDATA%\Google\Chrome SxS\Application\chrome.exe",
    # Chrome Beta
    r"%LOCALAPPDATA%\Google\Chrome Beta\Application\chrome.exe",
    # Chrome Dev
    r"%LOCALAPPDATA%\Google\Chrome Dev\Application\chrome.exe",
    # Edge
    r"%LOCALAPPDATA%\Microsoft\Edge\Application\msedge.exe",
    r"%PROGRAMFILES%\Microsoft\Edge\Application\msedge.exe",
    r"%PROGRAMFILES(X86)%\Microsoft\Edge\Application\msedge.exe",
    # Edge Beta
    r"%LOCALAPPDATA%\Microsoft\Edge Beta\Application\msedge.exe",
    # Edge Dev
    r"%LOCALAPPDATA%\Microsoft\Edge Dev\Application\msedge.exe",
    # Brave
    r"%LOCALAPPDATA%\BraveSoftware\Brave-Browser\Application\brave.exe",
    r"%PROGRAMFILES%\BraveSoftware\Brave-Browser\Application\brave.exe",
    r"%PROGRAMFILES(X86)%\BraveSoftware\Brave-Browser\Application\brave.exe",
    # Brave Beta
    r"%LOCALAPPDATA%\BraveSoftware\Brave-Browser-Beta\Application\brave.exe",
    # Brave Nightly
    r"%LOCALAPPDATA%\BraveSoftware\Brave-Browser-Nightly\Application\brave.exe",
    # Opera
    r"%PROGRAMFILES%\Opera\launcher.exe",
    r"%PROGRAMFILES(X86)%\Opera\launcher.exe",
    # Opera GX
    r"%LOCALAPPDATA%\Programs\Opera GX\launcher.exe",
    # Vivaldi
    r"%LOCALAPPDATA%\Vivaldi\Application\vivaldi.exe",
    r"%PROGRAMFILES%\Vivaldi\Application\vivaldi.exe",
    # Chromium (ungoogled)
    r"%LOCALAPPDATA%\Chromium\Application\chrome.exe",
    r"%PROGRAMFILES%\Chromium\Application\chrome.exe",
    # Yandex Browser
    r"%LOCALAPPDATA%\Yandex\YandexBrowser\Application\browser.exe",
    r"%PROGRAMFILES%\Yandex\YandexBrowser\Application\browser.exe",
    # Epic Privacy Browser
    r"%LOCALAPPDATA%\Epic Privacy Browser\Application\epic.exe",
    # Comodo Dragon
    r"%PROGRAMFILES%\Comodo\Dragon\browser.exe",
    # Slimjet
    r"%PROGRAMFILES%\Slimjet\slimjet.exe",
    # Cốc Cốc
    r"%LOCALAPPDATA%\CocCoc\Browser\Application\browser.exe",
]

def find_browser():
    for path in BROWSERS:
        expanded = os.path.expandvars(path)
        if os.path.isfile(expanded):
            return expanded
    return None

def main():
    browser = find_browser()
    if not browser:
        try:
            import tkinter as tk
            from tkinter import messagebox
            root = tk.Tk()
            root.withdraw()
            messagebox.showerror(
                "Google Gemini",
                "Nenhum navegador compatível encontrado!\n\n"
                "Instale Chrome, Edge, Brave ou Opera para usar este app."
            )
        except:
            print("Nenhum navegador encontrado.")
        return

    subprocess.Popen([
        browser,
        "--app=https://gemini.google.com",
        "--new-window",
        "--no-first-run",
    ])

if __name__ == "__main__":
    main()
