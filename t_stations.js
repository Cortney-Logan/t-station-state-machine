// STATE MACHINES

// State Transition Diagram - map!
//    Current state
//    Allowable transitions
//    Move between states


// holds current station as current station
let currentStation = "Boylston";

// holds list of allowable transitions between stations
let stationTransitions = {
  // greenline
  "Hynes Convention Center": ["Copley"],
  Copley: ["Arlington", "Hynes Convention Center", "Prudential"],
  Prudential: ["Copley", "Symphony", "Northeastern"],
  Symphony: ["Prudential", "Northeaster"],
  Northeastern: ["Symphony"],
  Arlington: ["Copley", "Boylston"],
  Boylston: ["Park St", "Arlington", "Downtown Crossing"],
  "Park St": ["Gov't Center", "Downtown Crossing", "Charles/MGH", "Boylston"],
  "Gov't Center": ["Bowdoin", "Haymarket", "State", "Park St"],
  Haymarket: ["Gov't Center"],

  // red line
  "Kendall/MIT": ["Charles/MGH"],
  "Charles/MGH": ["Park St", "Kendall/MIT"],
  "Downtown Crossing": [
    "Park St",
    "State",
    "South Station",
    "Boylston",
    "Chinatown",
  ],
  "South Station": ["Downtown Crossing", "Broadway", "Courthouse", "Chinatown"],
  Courthouse: ["South Station"],
  Broadway: ["South Station"],

  // blue line
  Bowdoin: ["Gov't Center"],
  State: ["Gov't Center", "Aquarium", "Downtown Crossing", "Haymarket"],
  Aquarium: ["State"],

  // orange line
  Chinatown: ["Tufts Medical Center", "Downtown Crossing", "South Station"],
  "Tufts Medical Center": ["Chinatown", "Back Bay", "Herald St"],
  "Back Bay": ["Tufts Medical Center", "Mass. Ave"],
  "Mass. Ave": ["Back Bay"],

  // grey line
  "Herald St": ["Tufts Medical Center", "East Berkeley St"],
  "East Berkeley St": ["Herald St", "Union Park St"],
  "Union Park St": ["East Berkeley St"],
};

// function that checks for valid station changes
function changeStations(newStation) {
  // checks against state transitions object, if new station is included in the allowable transitions current station changes, otherwise no change
  if (stationTransitions[currentStation].includes(newStation)) {
    currentStation = newStation;
  } else {
    console.log(
      `Invalid station change from ${currentStation} to ${newStation}`
    );
  }
}

console.log(currentStation);
changeStations("Downtown Crossing");
console.log(currentStation);
changeStations("Gov't Center");
console.log(currentStation);
changeStations("State");
console.log(currentStation);
changeStations("Gov't Center");
console.log(currentStation);
