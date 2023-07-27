// An array of objects
let roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}
];

// Create a custom function to return players who made the team
function madeTheteam(tryouts){
  return tryouts.madeTeam = true;
}

// Call the custom function with filter()
let teamList = roster.filter(madeTheteam);

// Display the results
console.log(teamList);

// Determine how many players made the cut
let listLength = teamList.length;

// Display the results
console.log(`The number of players who made the team is: ${listLength}`);