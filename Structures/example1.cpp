#include <iostream>
using namespace std;

struct daneOsobowe {
    string imie;
    string nazwisko;
    int wiek;
    string adres;
    string kraj;
};

void clearInput() {
    cin.clear();
    cin.ignore(1000, '\n');
}

int main() {
    const int MAX_OSOB = 5;
    daneOsobowe tablica[MAX_OSOB];
    int liczba_osob = 0;

    cout << "Ile osob chcesz wprowadzic (max " << MAX_OSOB << "): ";

    while (!(cin >> liczba_osob) || liczba_osob < 1 || liczba_osob > MAX_OSOB) {
        cout << "Blad! Wprowadz liczbe od 1 do " << MAX_OSOB << ": ";
        clearInput();
    }

    for (int i = 0; i < liczba_osob; i++) {
        cout << "\n=== Osoba " << i + 1 << " ===\n";

        cout << "Imie: ";
        while (!(cin >> tablica[i].imie)) {
            cout << "Blad! Podaj poprawne imie: ";
            clearInput();
        }

        cout << "Nazwisko: ";
        while (!(cin >> tablica[i].nazwisko)) {
            cout << "Blad! Podaj poprawne nazwisko: ";
            clearInput();
        }

        cout << "Wiek: ";
        while (!(cin >> tablica[i].wiek) || tablica[i].wiek <= 0) {
            cout << "Blad! Wiek musi byc liczba > 0. Podaj ponownie: ";
            clearInput();
        }

        cout << "Adres (bez spacji): ";
        while (!(cin >> tablica[i].adres)) {
            cout << "Blad! Podaj poprawny adres (bez spacji): ";
            clearInput();
        }

        cout << "Kraj (bez spacji): ";
        while (!(cin >> tablica[i].kraj)) {
            cout << "Blad! Podaj poprawny kraj: ";
            clearInput();
        }
    }

    cout << "\n--- Wprowadzone dane ---\n";
    for (int i = 0; i < liczba_osob; i++) {
        cout << "Osoba " << i + 1 << ": "
             << tablica[i].imie << " "
             << tablica[i].nazwisko << ", wiek: "
             << tablica[i].wiek << ", adres: "
             << tablica[i].adres << ", kraj: "
             << tablica[i].kraj << endl;
    }

    return 0;
}
