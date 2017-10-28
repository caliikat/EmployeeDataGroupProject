
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCl2gNcdLbeTVYqsevajiQhJTjZlZmiBMk",
  authDomain: "employeedatagroupproject.firebaseapp.com",
  databaseURL: "https://employeedatagroupproject.firebaseio.com",
  projectId: "employeedatagroupproject",
  storageBucket: "",
  messagingSenderId: "755373556303"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//upon clicking the "add employee" button
$("#add-employeeButton").on("click", function() {
  event.preventDefault();//take out to clear form after submitting
  var employeeName = $("#employee-name").val().trim();
  var role = $("#role").val().trim();
  var startDate = $("#start-date").val().trim();
  var monthlyRate = parseInt($("#monthly-rate").val().trim());

  console.log(employeeName);
  console.log(role);
  console.log(startDate);
  console.log(monthlyRate);

  database.ref().push({
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
  });

  // database.ref().on("child_added", display(snapshot.val(), function(errorObject){console.log("failed")})
  // )

  database.ref().on("child_added", function(snapshot) {
  display(snapshot.val());
  }, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  function display(data) {
    var row = $("<tr>")
    row.append($("<td>").text(data.employeeName))
      .append($("<td>").text(data.role))
      .append($("<td>").text(data.startDate))
      .append($("<td>").text("Months Worked"))//add months worked function
      .append($("<td>").text(data.monthlyRate))
      .append($("<td>").text("Total Billed"));//add total billed function
    //append row above to the table
    $("tbody").append(row);

    //call function for months worked
    //call function for billed
  }
  

});

//add function for months worked
//add function for billed


database.ref().on("child_added", function(snapshot) {
  display(snapshot.val());
  }, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  function display(data) {
    var row = $("<tr>")
    row.append($("<td>").text(data.employeeName))
      .append($("<td>").text(data.role))
      .append($("<td>").text(data.startDate))
      .append($("<td>").text("Months Worked"))//add months worked function
      .append($("<td>").text(data.monthlyRate))
      .append($("<td>").text("Total Billed"));//add total billed function
    //append row above to the table
    $("tbody").append(row);
  }















