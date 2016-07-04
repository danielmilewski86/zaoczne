Przykład
```
#!/bin/bash
#Tu jest komentarz.
echo "Hello world"
```

if
```
#!/bin/bash
if [ -e ~/.bashrc ]
then
  echo "Masz plik.bashrc"
else
  echo "Nie masz pliku .bashrc"
fi
```

case
```
#!/bin/bash
echo "Podaj cyfrę dnia tygodnia"
read d
case "$d" in
  "1") echo "Poniedziałek" ;;
  "2") echo "Wtorek" ;;
  "3") echo "Środa" ;;
  "4") echo "Czwartek" ;;
  "5") echo "Piątek" ;;
  "6") echo "Sobota" ;;
  "7") echo "Niedziela" ;;
  *) echo "Nic nie wybrałeś"
esac
```

for
```
#!/bin/bash
for x in jeden dwa trzy
do
  echo "To jest $x"
done
```

while
```
#!/bin/bash
x=1;
while [ $x -le 10 ]; do
echo "Napis pojawił się po raz: $x"
x=$[x + 1]
done
```

until
```
#!/bin/bash
x=1;
until [ $x -ge 10 ]; do
echo "Napis pojawił się po raz: $x"
x=$[x + 1]
done
```
