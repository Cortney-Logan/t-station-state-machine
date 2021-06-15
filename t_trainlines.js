//const that set up the interface with the terminal, allowing a user to interact with your program
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

//function establishing an ask function to await user input
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

// -------------------- part 1 -------------------- //

// defines class of train lines
class TrainLines {
  constructor(color, stations, connectingLines) {
    this.color = color;
    this.stations = stations;
    this.connectingLines = connectingLines;
  }
}

// holds state of current line
let currentLine = "blue";

// declares each of the train lines
let blueLine = new TrainLines(
  "blue",
  ["Bowdoin", "Gov't Center", "State", "Aquarium"],
  ["green", "orange"]
);

let redLine = new TrainLines(
  "red",
  [
    "Kendal/MIT",
    "Charles/MGH",
    "Park St",
    "Downtown Crossing",
    "South Station",
  ],
  ["green", "orange", "grey"]
);

let orangeLine = new TrainLines(
  "orange",
  [
    "Haymarket",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Tufts Medical Center",
  ],
  ["blue", "green", "red", "grey"]
);

let greenLine = new TrainLines(
  "green",
  [
    "Haymarket",
    "Gov't Center",
    "Park St",
    "Boylston",
    "Arlington",
    "Copley",
    "Prudential",
  ],
  ["red", "blue", "orange", "grey"]
);

let greyLine = new TrainLines(
  "grey",
  ["Boylston", "Chinatown", "South Station"],
  ["orange", "blue", "green"]
);

// lookup table for train lines
let lineLookUp = {
  green: greenLine,
  red: redLine,
  blue: blueLine,
  grey: greyLine,
  orange: orangeLine,
};

// transition function, checks for valid line changes
function changeLines(newLine) {
  if (lineLookUp[currentLine].connectingLines.includes(newLine)) {
    currentLine = newLine;
  } else {
    console.log(`Invalid line change from ${currentLine} to ${newLine}`);
  }
}

console.log(currentLine);
changeLines("red");
console.log(currentLine);
changeLines("green");
console.log(currentLine);

// -------------------- part 2 -------------------- //

// lookup tables for abbreviations
// this is a short set of stations to use as an example
let stationAbbr = {
  Chinatown: ["Chinatown", "china town", "chinatown"],
  "South Station": ["South Station", "south station"],
  "Gov't Center": ["government center", "govt center", "gov't center"],
};

// asks
async function checkStation() {
  let answer = await ask("What station are you looking for? ");
  let stationToCheck = null;

  // creates list of station names from stationAbbr lookup table
  let stationKeys = Object.keys(stationAbbr);

  // identifies the station name from the stationAbbr lookup table based on what user input
  stationKeys.forEach((station) => {
    if (stationAbbr[station].includes(answer)) {
      stationToCheck = station;
    }
  });

  // if station exists then check if station is on the current line
  // we need to use the linelookup table to translate between the currentline (string) and the line (object)
  if (stationToCheck) {
    if (lineLookUp[currentLine].stations.includes(stationToCheck)) {
      console.log(`${stationToCheck} is on the ${currentLine} line.`);
    } else {
      console.log(`${stationToCheck} is not on the ${currentLine} line.`);
    }
  }
  // otherwise print default message
  else {
    console.log("Sorry, I'm not sure what station you are looking for");
  }

  process.exit();
}

checkStation();
