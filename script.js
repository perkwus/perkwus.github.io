import { virgil } from "/virgil.js"

let lines = virgil
let getVerse = function() {return Math.floor(Math.random() * lines.length)}
let rollVirgil = function() {
  let i = getVerse()
  return `${lines[i]} (Line ${i+1})`
}
document.getElementById("lots").innerHTML = rollVirgil();
