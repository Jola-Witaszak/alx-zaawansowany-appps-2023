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