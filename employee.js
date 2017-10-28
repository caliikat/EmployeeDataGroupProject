
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
$("add-employeeButton").on("click", function() {
  var employeeName = 
  var role = 
  var startDate = 
  var monthlyRate = 
});