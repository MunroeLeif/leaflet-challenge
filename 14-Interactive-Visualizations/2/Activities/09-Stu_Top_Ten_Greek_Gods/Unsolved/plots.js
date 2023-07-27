// Sort the data by Greek search results descending
let Greeksort = data.sort((a,b)=> b.greekSearchResults - a.greekSearchResults);

console.log(Greeksort);
// Slice the first 10 objects for plotting
let sliceGreek = Greeksort.slice(0,10);
console.log(sliceGreek);

// Reverse the array to accommodate Plotly's defaults
let reverseGreek = sliceGreek.reverse();
console.log(reverseGreek);

// Trace for the Greek Data
let trace1 = {
    type:'bar',
    x: reverseGreek.map(item => item.greekSearchResults),
    y: reverseGreek.map(item => item.greekName),
    orientation: 'h'
};

// Data array
let traceData = [trace1];

// Apply a title to the layout
let layout = {
    title: "Top ten Greek gods"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);