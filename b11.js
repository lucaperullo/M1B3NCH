const print = function () {
  let x = "Jhon";
  let y = "Doe";
  console.log(x + "<>" + y);
};
const createObject = function () {
  let myObj = {
    name: "Luca",
    surname: "Perullo",
    email: "lucaperullo@outlook.it",
  };
  delete myObj.surname;
};

console.log(createObject());
