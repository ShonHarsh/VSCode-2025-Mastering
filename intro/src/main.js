function square(arg, second) {
  return arg * arg;
}

function cube(arg) {
  return arg * arg * arg;
}

const printMessage = (message) => {
  console.log(message);
};

const a = square(2);
const b = cube(a);

console.log("Finished awesome program");
