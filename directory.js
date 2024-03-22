//init readline-sync
var input = require("readline-sync");

//create Person object
function Person(iname, inumber) {
  (this.name = iname),
    (this.number = inumber),
    (this.getInfo = () => {
      return this.name + " - " + this.number;
    });
}

//create dummy Person data
let person1 = new Person("Pekka", "0401234");
let person2 = new Person("Saku", "0402345");
let person3 = new Person("Mirja", "0403456");
let person4 = new Person("Eeva", "0404567");

//create directory array
const Directory = [person1, person2, person3, person4];

//Adds a person and their number to directory
AddPerson = () => {
  userInput = input.question("Anna henkilön nimi:");
  let name = userInput;
  userInput = input.question("Anna henkilön numero:");
  let number = userInput;
  if (name == "" || number == "") {
    console.log("Tyhjä syöte");
    return;
  }
  let person = new Person(name, number);
  Directory.push(person);
  console.log("Tiedot lisätty: " + person.getInfo());
};

//Searches person from directory using persons name
SearchNumber = (directory) => {
  userInput = input.question("Anna henkilön nimi:");
  let name = userInput;
  name = name.toLowerCase();
  let foundCheck = false;

  for (let i = 0; i < directory.length; i++) {
    const person = directory[i];
    let pName = person.name.toLowerCase();
    if (pName == name) {
      foundCheck = true;
      return person.number;
    }
  }
  if (!foundCheck) {
    return null;
  }
};

//loop to run the program in
let runProgram = true;

while (runProgram == true) {
  console.log("\n\t---Puhelinluettelo---");
  console.log("1. Lisää henkilö puhelinluetteloon");
  console.log("2. Hae numeroa nimen perusteella");
  console.log("3. Sulje ohjelma");
  var userInput = input.question("");
  if (userInput == 1) {
    AddPerson();
  } else if (userInput == 2) {
    console.log("Haulla löytynyt numero: " + SearchNumber(Directory));
  } else if (userInput == 3) {
    runProgram = false;
  }
}
