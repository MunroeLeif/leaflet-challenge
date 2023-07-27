// Copy over the variables from the previous activity
let name = 'Leif';
let title = `${name}'s first Plotly Chart`;
let books = ["LOTR", "Harry Potter", "Le Petit Prince"];
let timesRead = [10, 20, 3];
// Assign `x` and `y` values for the Plotly trace object
let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar'
};

// Leave the code below unchanged
let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("plot", data, layout);