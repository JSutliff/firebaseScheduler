var config = {
  apiKey: "AIzaSyBo48A4WbkDSZ3ZXoLwq0wIUi78N_S2P3o",
  authDomain: "testspace-ucb1.firebaseapp.com",
  databaseURL: "https://testspace-ucb1.firebaseio.com",
  projectId: "testspace-ucb1",
  storageBucket: "testspace-ucb1.appspot.com",
  messagingSenderId: "750641850621"
};
firebase.initializeApp(config);

var db = firebase.database();

function addNewTrain() {
  var trainName = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrain = $("#firstTrain").val().trim();
  var frequency = $("#frequency").val().trim();

  // append values train information to html table
  var newTableRow = $('<tr>');
  newTableRow.append('<td>' + trainName + '</td>' );
  newTableRow.append('<td>' + destination + '</td>' );
  newTableRow.append('<td>' + firstTrain + '</td>' );
  newTableRow.append('<td>' + frequency + '</td>' );
  newTableRow.append('<td>CALCULATE WITH MOMENTJS</td>' );

  $('#appendTrainInfoHere').append(newTableRow);

  // create temp object to hold train data
  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  // sends train info to firebase
  db.ref().push(newTrain);

  // logs assumptions to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  // clear text
  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrain").val("");
  $("#frequency").val("");
}

$("#addTrainButton").on("click", function(event) {
  event.preventDefault();
  addNewTrain();
  
});