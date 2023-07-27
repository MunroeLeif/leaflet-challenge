console.log(data);

// Create a custom function to return Roman gods with more than 1 million search results
function popularRomans(gods) {
    return gods.romanSearchResults > 100000000;
}

// Call the custom function with filter()
let popRoman = data.filter(popularRomans);


//let romanName = data.map(item => item.romanName);
//console.log(romanName);
// Trace for the Roman Data
let trace1 = {
    x: popRoman.map(row => row.romanName),
    y: popRoman.map(row => row.romanSearchResults),
    type: "bar"
};

// Data trace array
let traceData = [trace1]

// Apply title to the layout
layout = {
    title: "Popular Roman Gods"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout)