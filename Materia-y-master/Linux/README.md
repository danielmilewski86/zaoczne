###Uruchomienie środowiska
pobranie obrazu
```
docker pull ubuntu
```

wyświetlenie wszystkich działających kontenerów
```
docker ps
```

uruchomienie kontenera wraz z przekierowaniem portu
```
docker run -it -d -p 2222:22 -p 8080:80 ubuntu
```

wejście do kontenera
```
docker exec -it *nazwa kontenera* bash
```

###Zarządzanie użytkownikami
stworzenie konta użytkownika
```
useradd USER
adduser USER
```

usunięcie użytkownika
```
userdel USER
deluser USER
```

zmiana hasła użytkownika
```
passwd USER
```

dodanie użytkownika do grupy
```
usermod -a -G GROUP USER
```

wyświetlenie informacji o użytkowniku
```
id USER
```

przełączenie się na użytkownika
```
su USER
```
###Zarządzanie prawami dostępu
nadawanie uprawnień
```
chmod [opcje uprawnień] plik/katalog
```

zmiana właściciela pliku
```
chown *nazwa użytkownika* plik
```

zmiana grupy dla pliku
```
chgrp *nazwa grupy* plik
```
###Tworzenie dowiązań
Soft link
```
ln -s LOKALIZACJA POWIĄZANIE
```

Hard link
```
ln LOKALIZACJA POWIĄZANIE
```

###zarządzanie pakietami
update listy repozytorium
```
apt-get update
```

instalowanie pakietu
```
apt-get install PAKIET
```

usuwanie pakietu
```
apt-get remove PAKIET
```

wyświetlanie zainstalowanych pakietów
```
dpkg -l
```

szukanie pakietów
```
apt-cache search PAKIET
```

informacje o pakietach
```
apt-cache policy PAKIET
```

apt-file
```
apt-get install apt-file
apt-file update
apt-file search PAKIET
```

###zarządzanie aplikacjami
uruchamianie/zatrzymywanie/restartowanie usługi
```
service USLUGA start/stop/restart
```

wyświetlenie działających usług
```
ps aux
```

zabicie usługi - brutal way
```
kill -9 USŁUGA
```

która aplikacja wykorzystuje teraz zasoby?
```
top - procesor i pamięć
dstat/iotop - dysk
df - miejsce na dysku
```

###przydatne narzędzia
**mc** - midnight commander :)

**vim** - edytor tekstu

**mcedit** - bardziej user friendly edytor

**less** - czyli jak przeglądać pliki

**cat** vs **vim** vs **less** - który lepszy?

**gzip/gunzip** - zmniejszmy rozmiar
```
gzip plik - pakowanie
gunzip plik - rozpakowanie
```

**tar** - spakujmy kilka plików
```
tar zcfp PLIK.tar.gz plik1 plik2 - pakowanie
tar zxfp PLIK.tar.gz - rozpakowanie
```

**wget** - pobieranie plikow z WWW

**ssh** - jakoś trzeba się łączyć
```
ssh USER@IP
ssh -L PORT_LOKALNY:IP_ZDALNE:PORT_ZDALNY USER@IP - forward lokalnego portu
ssh -R PORT_LOKALNY:IP_LOKALNE:PORT_ZDALNY USER@IP - forward zdalnego portu
```

**scp** - pliki też fajnie przesyłać

**grep** - najlepszy przyjaciel

**cron** - tez sie przyda

**logrotate** - aby nam nigdy nie zabrakło miejsca

**tail** - przeglądanie logu
```
tail -f plik
```
**find** - kiedy trzeba coś znaleść
