[Setup]
AppName=ChatGPT
AppVersion=1.0.0
AppPublisher=OpenAI
AppPublisherURL=https://chatgpt.com
DefaultDirName={autopf}\ChatGPT
DefaultGroupName=ChatGPT
UninstallDisplayIcon={app}\ChatGPT.exe
UninstallDisplayName=ChatGPT
OutputDir=dist_installer
OutputBaseFilename=ChatGPT-Setup
Compression=lzma2
SolidCompression=yes
PrivilegesRequired=admin

[Languages]
Name: "brazilianportuguese"; MessagesFile: "compiler:Languages\BrazilianPortuguese.isl"
Name: "english"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "dist_py\ChatGPT.exe"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{commondesktop}\ChatGPT"; Filename: "{app}\ChatGPT.exe"; WorkingDir: "{app}"; Tasks: desktopicon
Name: "{group}\ChatGPT"; Filename: "{app}\ChatGPT.exe"; WorkingDir: "{app}"
Name: "{group}\Desinstalar ChatGPT"; Filename: "{uninstallexe}"

[Tasks]
Name: "desktopicon"; Description: "Criar atalho na &Área de Trabalho"; GroupDescription: "Atalhos:"; Flags: checkedonce

[Run]
Filename: "{app}\ChatGPT.exe"; Description: "Executar ChatGPT"; Flags: postinstall nowait skipifsilent
