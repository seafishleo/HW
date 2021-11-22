function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {    
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    
    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  }); 
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {  
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    let metadata_array = data.metadata;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let filtered_metadata = metadata_array.filter( m => m.id == sample);
    
    //  5. Create a variable that holds the first sample in the array.
    let samples_array = data.samples;
    let filtered_samples = samples_array.filter( s=>s.id == sample);
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = filtered_samples[0]["otu_ids"];
    var otu_labels = filtered_samples[0]["otu_labels"];
    var sample_values = filtered_samples[0]["sample_values"];    

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    let top10_otu_ids = otu_ids.slice(0,10).map(o => "OTU " + o).reverse();
    let top10_sample_values = sample_values.slice(0,10).sort((a,b) => a-b);
    var yticks = {
      x: top10_sample_values,
      y: top10_otu_ids,
      type: "bar",
      orientation: 'h'
    };

    // 8. Create the trace for the bar chart. 
    var barData = [yticks];
    
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };

    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    
    // 1. Create the trace for the bubble chart.
    let trace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',      
      marker: {        
        size: sample_values,
        color: otu_ids
      }
    };
    var bubbleData = [trace];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      showlegend: false,
      xaxis: {
        title: "OTU ID"
      }
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // 4. Create the trace for the gauge chart.     
    let gaugeData = [
      {
        value: filtered_metadata[0].wfreq,        
        type: "indicator",
        mode: "gauge+number",
        title: { 
          text: "Belly Button Washing Frequency<br><sup>Scurbs per Week</sup>", 
          font: { size: 24 } 
        },
        gauge: {
          axis: { range: [0, 10] },
          bar: { color: "black" },
          steps: [
            { range: [0, 2], color: "red" },
            { range: [2, 4], color: "orange" },
            { range: [4, 6], color: "yellow" },
            { range: [6, 8], color: "lightgreen" },
            { range: [8, 10], color: "green" }
          ]          
        }
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    let gaugeLayout = {
      margin: { t: 0, b: 0 } 
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
