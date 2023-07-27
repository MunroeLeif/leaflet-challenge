//console.log(data);

// Trace for the Greek Data
let Greekname = data.map(function(row){
    return row.greekName
});
console.log(Greekname)
let Greeksearch = data.map(item => item.greekSearchResults);
console.log(Greeksearch)
let trace1 = {
    x:Greekname,
    y:Greeksearch,
    type: "bar"
};

// Data trace array
let tracedata = [trace1];

// Apply the group barmode to the layout
let layout = {
    title : "Greek gods booh yah"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", tracedata, layout);
