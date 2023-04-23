console.log("Hejka!!!");
const people = [
    {
        name:"Michał",
        age: 10
    },
    {
        name: "Damian",
        age: 10
    },
    {
        name: "Wiktoria",
        age: 14
    },
    {
        name: "Agata",
        age: 8
    }
];


function getTheOldestPerson(people){

    let oldestPerson = "X";
    let years = 0;

    people.forEach(function(person){
        if(person.age > years){
            years = person.age;
            oldestPerson = person.name;
        }
    });
    return oldestPerson;
}

let result =  getTheOldestPerson(people);

console.log(`Najstarsza osoba to ${result}`);

const names20 = ["Marcel", "Julia", "Karol"];
names20.push("Jola");

let index = -1;
let myName = "";
for( let x in names20) {
    if (names20[x] == "Jola") {
        index = x;
        myName = names20[x];
    }
}
console.log(`Moje imię to ${myName}, jest w tablicy "names20" na indeksie ${index}`);

const shoe50 = {
    brand: "nike",
    color: 'white',
    size: 30
}

let size1 = 42;

if (shoe50.size == size1) {
    console.log(`Tojest TEN but !!!`);
} else if (shoe50.size > size1) {
    console.log(`Ten but rozmiar ${size1} jest mniejszy od mojego rozmiar ${shoe50.size}, jest za mały !!!`);
} else {
    console.log(`Ten but w rozmiarze ${size1} jest większy od mojego rozmiaru ${shoe50.size}, jest za duży !!!`);
}