

console.log("hello")


function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './Responses.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
        // callback(xobj.responseText)
        callback(JSON.parse(xobj.responseText));
    
    }
  };
  xobj.send(null);  
}

loadJSON(function(json) {
  console.log(json); // this will log out the json object
});












// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Create pie series
var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "litres";
series.dataFields.category = "country";

// Add data
chart.data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
}];

// And, for a good measure, let's add a legend
chart.legend = new am4charts.Legend();


// //var csv is the CSV file with headers
// function csvJSON(csv){

//   var lines=csv.split("\n");

//   var result = [];

//   // NOTE: If your columns contain commas in their values, you'll need
//   // to deal with those before doing the next step 
//   // (you might convert them to &&& or something, then covert them back later)
//   // jsfiddle showing the issue https://jsfiddle.net/
//   var headers=lines[0].split(",");

//   for(var i=1;i<lines.length;i++){

//       var obj = {};
//       var currentline=lines[i].split(",");

//       for(var j=0;j<headers.length;j++){
//           obj[headers[j]] = currentline[j];
//       }

//       result.push(obj);

//   }

//   //return result; //JavaScript object
//   return JSON.stringify(result); //JSON
// }

// csvJSON()