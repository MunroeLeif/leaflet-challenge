let heroines = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

// Create an array of just the names from the heroines array
let names = heroines.map(function(heroines){
  return heroines.name;
})
console.log("Heroine names:", names)
// Create an array of strings for each heroine's name, follow by a colon, followed by their age

let arrowNamesAges = heroines.map(heroine => `${heroine.name}: ${heroine.age}`);
console.log("Heroine names and ages:", arrowNamesAges)