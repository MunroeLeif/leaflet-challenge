// Get the Roadster endpoint


// Fetch the JSON data and console log it


// Get the capsules endpoint
const url = "https://api.spacexdata.com/v3/capsules";

// Fetch the JSON data and console log it
d3.json(url).then(function(data){
    console.log(data);
});