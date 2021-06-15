// holds current station as current station
let currentStation = "Boylston";

// holds list of allowable transitions between stations
let stationTransitions = {
  "Kendall/MIT": ["Central", "Charles/MGH"],
  Central: ["Kendall/MIT"],
  "Charles/MGH": ["Park St", "Kendall/MIT"],
  "Park St": ["Gov't Center", "Downtown Crossing", "Charles/MGH", "Boylston"],
  "Gov't Center": ["Bowdoin", "Haymarket", "State", "Park St"],
  Bowdoin: ["Gov't Center"],
  Haymarket: ["Gov't Center", "State", "North Station"],
  "North Station": ["Haymarket"],
  "Downtown Crossing": [
    "Park St",
    "State",
    "South Station",
    "Boylston",
    "Chinatown",
  ],
  Boylston: ["Park St", "Arlington", "Downtown Crossing"],
  State: ["Gov't Center", "Aquarium", "Downtown Crossing", "Haymarket"],
  "South Station": ["Downtown Crossing", "Broadway", "Courthouse", "Chinatown"],
  Chinatown: ["Tufts Medical Center", "Downtown Crossing", "South Station"],
  Arlington: ["Copley", "Boylston"],
  Aquarium: ["State"],
  Courthouse: ["South Station"],
  Broadway: ["South Station"],
  "Tufts Medical Center": ["Chinatown"],
  Copley: ["Arlington", "Hynes Convention Center", "Prudential"],
  "Hynes Convention Center": ["Copley"],
  Prudential: ["Copley"],
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

console.log(currentStation)
changeStations("Downtown Crossing")
console.log(currentStation)
changeStations("Gov't Center")
console.log(currentStation)
changeStations("State")
console.log(currentStation)
changeStations("Gov't Center")
console.log(currentStation)
