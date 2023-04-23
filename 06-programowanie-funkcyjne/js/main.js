console.log(`Hello DOM !!!`);

// Programowanie funkcyjne polega na uzywaniu funkcji jako domyslnego sposobu opisywania dzialania programu.

// Zasady:

// 1. Opisywanie funkcji wedlug swojego przeznaczenia
  // Dobre nazwy: handleFilterChange, handleClick, sendMessage, fetchMessages
  // Zle nazwy: click, add, message, chat, x

// 2. KISS, DRY, SOLID.
  // KISS - Keep it stupid simple - Pisz kod w najprostszy mozliwy sposob
  // DRY - Don't repeat yourself - Nie powtarzaj tego samego kawalka kodu. Lepiej wynies to do osobnej funkcji
  // SOLID - 5 patternow opisywania kodu
  // S - Single Responsibility Pattern - 1 funkcja = 1 przeznaczenie

// 3. Funkcje powinny być Pure i polegać na swoich argumentach

// Przyklad funkcji unpure
let authorName = 'Damian';

const sayHello = () => {
  return `Hey ${authorName}`
}

sayHello();
authorName = 'Paweł';
sayHello();

// Przyklad funkcji pure
const sayHello2 = (authorName) => {
  return `Hey ${authorName}`
}

sayHello('Damian');
sayHello('Paweł');


// --------------------- Przyklady ----------------------------

// 1. Napisz funkcje getNames, ktora przyjmie tablice obiektów, a zwróci liste imion z tej tablicy. Jesli tablica obiektow bedzie pusta, zwroc null.

const names = [
  {
    name: 'Damian',
    age: 50
  },
  {
    name: "Paweł",
    age: 40
  },
  {
    name: "Dominika",
    age: 25
  }
]

const getNames = (collection) => {
  // Funkcje czasami potrzebuja zrobic walidacje
  // tzw. Early return
  if(collection.length === 0) return null

  // Zmienne tworzone w funkcjach, sa widoczne tylko w nich
  const results = [];

  for (let item of collection) {
    results.push(item.name)
  }

  // console.log(results);

  // Funkcje powinny zwracac wartosci. Wyswietlenie rzeczy w konsoli, powinno dziac sie poza funkcja
  return results;
}

// Jesli chcemy wyswietlic wynik funkcji, mozemy opakowac ja w console.log

// Sposob #1
console.log(getNames(names));

// Sposob #2
// const result = getNames(names);
// console.log(result);



// Zadanie nr 2

// Napisz funkcje getAverage, ktora przyjmie tablice obiektów produktów, a następnie zwróci średnią cenę elementów

const products = [
  {
    name: "Bread",
    price: 9.99
  },
  {
    name: "Banan",
    price: 3.25
  }
];


const getAverage = (collection) => {
  let sum = 0;

  for(let element of collection) {
    sum += element.price
  }

  return sum;
}

console.log(getAverage(products))


// Napisz funkcje getFruits, ktora przyjmie tablice obiektów produktów, a następnie zwróci te produkty, ktorych kategoria to owoce

const products2 = [
  {
    name: "Bread",
    price: 9.99,
    category: "Bakery"
  },
  {
    name: "Banan",
    price: 3.25,
    category: "Fruits"
  },
  {
    name: "Jabłka",
    price: 4.00,
    category: "Fruits"
  }
];

const getFruits = (collection) => {
  const results = [];

  for(let element of collection) {
    if(element.category === 'Fruits') {
      results.push(element)
    }
  }

  return results
}

console.log(getFruits(products2))

const fruits = getFruits(products2);

console.log(getAverage(fruits));

// Reuzywalna funkcja do pobierania rzeczy z danej kategorii

const getElementsFromCategory = (collection, category) => {
  const results = [];

  for(let element of collection) {
    if(element.category === category) {
      results.push(element)
    }
  }

  return results
}

console.log(getElementsFromCategory(products2, 'Fruits'))
console.log(getElementsFromCategory(products2, 'Bakery'))


// ------------------------------------------------------------------------



// 1. Napisz funkcje greeting(), ktora przyjmie jako argument imie a nastepnie zwroci "Hello + imie"

const greeting = (personName) => {
  return `Hello ${personName} !`;
}

console.log(greeting("Anka"));

// -----------------

// 2. Napisz funkcje sumElements(), ktora przyjmie tablice obiektow z polami name i price.

const elements = [
    {
        name: "Nikkon",
        price: 8.900
    },
    {
        name: "Cannon",
        price: 19.900
    },
    {
        name: "Panas",
        price: 3.600
    }
];

const sumElements = (collection) => {
    const sum = 0;
    for (let item of collection) {
        sum += sum + item.price;
    }
}

console.log(sumElements(elements));
// -----------------

// 3. Napisz funkcje getLetters(), ktora przyjmie tablice imion, a nastepnie zwroci tablice zawierajaca ile jest liter w kazdym slowie

// getLetters(['Damian', 'Ania']) -> [6,4]

const personNames = ['Damian', 'Ania', 'Marek', 'Daria', 'Ewa'];

const getLetters = (collection, personName) => {
    const numbers = [];
    let index = -1;
    for (let x in collection) {
        if (collection[x] === personName) {
            index = x;
            numbers.push(index);
        }
    }

    return numbers;
}

console.log(getLetters(personNames));

// -----------------

// 4. Napisz funckje getTheMostExpensiveProduct, ktora przyjmie tablice z zadania 2 i zwróci obiekt, zawierający najdrozszy produkt

// getTheMostExpensiveProduct([{name:"Komputer", price: 100}, {name:"Lampa", price: 10}]) -> {name: "Komputer", price: 100}

const getTheMostExpensiveProduct = (collection) => {
    const theMostExpensive = collection[0];
    for (let item of collection) {
        if (item.price > theMostExpensive.price) {
            theMostExpensive = item;
        }
    }
    return theMostExpensive;
}

console.log (getTheMostExpensiveProduct(elements))

// -----------------

// 5. Napisz funkcje findNameIndex, ktora przyjmie tablice imion i imie, ktore ma wyszukac, a nastepnie zwroci indeks tego elementu

const findNameIndex = (collection) => {
    let index = -1;
    for (let x in collection) {
        if (collection[x] === personName) {
            index = x;
        }
    }
    return index;
}

console.log(personNames);

// findNameIndex(['Damian', 'Ania'], 'Ania') -> 1
// findNameIndex(['Damian', 'Ania'], 'Damian') -> 0