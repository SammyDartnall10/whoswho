console.log("hello")
let data = {}

// function loadJSON(callback) {   
//   const xobj = new XMLHttpRequest();
//   xobj.overrideMimeType("application/json");
//   xobj.open('GET', './Responses.json', false);
//   xobj.onreadystatechange = function () {
//     if (xobj.readyState == 4 && xobj.status == "200") {
//         // callback(xobj.responseText)
//         callback(JSON.parse(xobj.responseText));
    
//     }
//   };
//   xobj.send(null);  
// }

// loadJSON(function(json) {
//     data= json
// });

// console.log("Data is: ")
// console.log(data);

// Create chart instance
const chart = am4core.create("chartdiv", am4charts.PieChart);

chart.dataSource.url = "./Responses.json";

// Create pie series
const series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "Accountability";
// series.dataFields.category = "country";

// Add data
chart.data = data

// And, for a good measure, let's add a legend
chart.legend = new am4charts.Legend();


