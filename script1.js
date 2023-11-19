const fs = require('fs');
const form = document.querySelector('form');

function readFile(filename) {
    let words = fs.readFileSync(filename, 'utf-8').split('\n');
    return words;
  }

function findValidWords(words, letters) {
    let updated_words = [];
    
    for (let word of words) {
      let add = true;
  
      for (let letter of letters) {
        if (word.includes(letter)) {
          add = false;
        }
  
        if (!word.includes(letter) && add === false) {
          add = false;
        }
      }
  
      if (add === true) {
        updated_words.push(word);
      }
    }
  
    return updated_words;
  }

form.addEventListener('submit', (e) => {

e.preventDefault();
// Prevents HTML submission and page refresh

const fd = new FormData(form);
// Attaches all elements in form with name attribute to new FormData object

let letters = [];
let unavailable_letters = [];

// Creates array into which letters will be pushed if checked
document.querySelectorAll('[type="checkbox"]').forEach(item => {
// Iterates through all checkbox elements
if (item.checked === true) {
  letters.push(item.value);
  // Pushes checkbox value into letters array if checked
} 
else if (item.checked === false) {
    unavailable_letters.push(item.value)
}
})

fd.append('letters', JSON.stringify(letters));
// Stringify array to JSON and append to FormData object



console.log(Array.from(fd)); 
// Prints result as array

console.log(unavailable_letters)
let filename = 'database/taylor_swift.txt'
let words = readFile(filename)
valid_phrases = findValidWords(words, unavailable_letters)
console.log(valid_phrases)
});
