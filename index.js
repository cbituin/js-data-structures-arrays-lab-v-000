// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let arr = drivers.slice()
  arr.push(name);
  // return arr;
}

function prependDriver(name) {
  drivers.slice().unshift(name);
}

function removeLastDriver() {
  drivers.slice().pop();
}

function removeFirstDriver() {
  drivers.slice().shift();
}
