//import logo from './logo.svg';
import taylorSwift from './data/taylor_swift.json';
import Coldplay from './data/coldplay.json';
import harryStyles from './data/harry_styles.json';
import oneDirection from './data/one_direction.json';

// IMPORT OTHERS
import './Main.css';
import React, { useState } from 'react';

function readFile(selectedTheme) {
    let wordy = []
    if (selectedTheme === 'taylor_swift') {
        let taylor_swift = taylorSwift.taylor_swift
        wordy = taylor_swift
    } else if (selectedTheme === 'coldplay') {
        let coldplay = Coldplay.coldplay
        wordy = coldplay
    } else if (selectedTheme === 'harry_styles') {
        let harry_styles = harryStyles.harry_styles
        wordy = harry_styles
    } else if (selectedTheme === 'one_direction') {
        let one_direction = oneDirection.one_direction
        wordy = one_direction
    }
  let words = []
for (let x of wordy) {
    words.push(x.toLowerCase())
}
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

function App() {

const [selectedTheme, setSelectedTheme] = useState('taylor_swift');
const [wordList, setWordList] = useState([]);

const handleThemeChange = (event) => {
      setSelectedTheme(event.target.value);
      console.log(selectedTheme)
    };


const handleSubmit = (e) => {
console.log(selectedTheme)
e.preventDefault();
// Prevents HTML submission and page refresh
const form = e.target;
const fd = new FormData(form);
// Attaches all elements in form with name attribute to new FormData object

let letters = [];
let unavailable_letters = [];

// Creates array into which letters will be pushed if checked
document.querySelectorAll('[type="checkbox"]').forEach(item => {
// Iterates through all checkbox elements
if (item.checked === true) {
  letters.push(item.value.toLowerCase());
  // Pushes checkbox value into letters array if checked
} 
else if (item.checked === false) {
    unavailable_letters.push(item.value.toLowerCase())
}
})

fd.append('letters', JSON.stringify(letters));
// Stringify array to JSON and append to FormData object



//console.log(Array.from(fd)); 
// Prints result as array

console.log(letters)
//let filename = 'database/taylor_swift.txt'
let words = readFile(selectedTheme)
let valid_phrases = findValidWords(words, unavailable_letters)
console.log(valid_phrases)

setWordList(valid_phrases.map(word => word.toLowerCase()));
};

  return (
    <div className="body">
    <div className="center">
      <label htmlFor="theme" style={{
        fontFamily:"'Courier', sans-serif",
        color: 'white'
      }}>Select a Theme: </label>
        <select name="theme" id="theme" value={selectedTheme} onChange={handleThemeChange}>
          <option value="taylor_swift">Taylor Swift</option>
          <option value="harry_styles">Harry Styles</option>
          <option value="coldplay">Coldplay</option>
          <option value="one_direction">One Direction</option>
        </select>
      </div>
    
    <form id="LetterChecklistForm" onSubmit={handleSubmit}>
    <fieldset>
        <h1 style={{
            font: '50px',
            fontFamily:"'Courier', sans-serif",
            fontWeight: 'bold',
            color: 'white'
        }}>Select the letters you have:</h1>
<input type="checkbox" id="A" name="letter" value="A"/>
<label htmlFor="A"> A</label><br/>
<input type="checkbox" id="B" name="letter" value="B"/>
<label htmlFor="B"> B</label><br/>
<input type="checkbox" id="C" name="letter" value="C"/>
<label htmlFor="C"> C</label><br/>
<input type="checkbox" id="D" name="letter" value="D"/>
<label htmlFor="D"> D</label><br/>
<input type="checkbox" id="E" name="letter" value="E"/>
<label htmlFor="E"> E</label><br/>
<input type="checkbox" id="F" name="letter" value="F"/>
<label htmlFor="F"> F</label><br/>
<input type="checkbox" id="G" name="letter" value="G"/>
<label htmlFor="G"> G</label><br/>
<input type="checkbox" id="H" name="letter" value="H"/>
<label htmlFor="H"> H</label><br/>
<input type="checkbox" id="I" name="letter" value="I"/>
<label htmlFor="I"> I</label><br/>
<input type="checkbox" id="J" name="letter" value="J"/>
<label htmlFor="J"> J</label><br/>
<input type="checkbox" id="K" name="letter" value="K"/>
<label htmlFor="K"> K</label><br/>
<input type="checkbox" id="L" name="letter" value="L"/>
<label htmlFor="L"> L</label><br/>
<input type="checkbox" id="M" name="letter" value="M"/>
<label htmlFor="M"> M</label><br/>
<br></br>
<input type="checkbox" id="N" name="letter" value="N"/>
<label htmlFor="N"> N</label><br/>
<input type="checkbox" id="O" name="letter" value="O"/>
<label htmlFor="O"> O</label><br/>
<input type="checkbox" id="P" name="letter" value="P"/>
<label htmlFor="P"> P</label><br/>
<input type="checkbox" id="Q" name="letter" value="Q"/>
<label htmlFor="Q"> Q</label><br/>
<input type="checkbox" id="R" name="letter" value="R"/>
<label htmlFor="R"> R</label><br/>
<input type="checkbox" id="S" name="letter" value="S"/>
<label htmlFor="S"> S</label><br/>
<input type="checkbox" id="T" name="letter" value="T"/>
<label htmlFor="T"> T</label><br/>
<input type="checkbox" id="U" name="letter" value="U"/>
<label htmlFor="U"> U</label><br/>
<input type="checkbox" id="V" name="letter" value="V"/>
<label htmlFor="V"> V</label><br/>
<input type="checkbox" id="W" name="letter" value="W"/>
<label htmlFor="W"> W</label><br/>
<input type="checkbox" id="X" name="letter" value="X"/>
<label htmlFor="X"> X</label><br/>
<input type="checkbox" id="Y" name="letter" value="Y"/>
<label htmlFor="Y"> Y</label><br/>
<input type="checkbox" id="Z" name="letter" value="Z"/>
<label htmlFor="Z"> Z</label><br/>

         
        <br/>
        <input type="submit" value="Submit"/>
    </fieldset>
</form>
<ul style={{
            fontFamily:"'Courier', sans-serif",
            fontWeight: 'bold',
            color: 'white'
        }}>
        {wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
</div>
  );
}

export default App;
