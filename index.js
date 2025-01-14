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
  let arr = drivers.slice();
  arr.push(name);
  return arr;
}

function prependDriver(name) {
  let arr = drivers.slice()
  arr.unshift(name);
  return arr;
}

function removeLastDriver() {
  let arr = drivers.slice();
  arr.pop();
  return arr;
}

function removeFirstDriver() {
  let arr = drivers.slice();
  arr.shift();
  return arr;
}
