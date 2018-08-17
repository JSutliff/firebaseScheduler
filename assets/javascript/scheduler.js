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
  var frequency = parseInt($("#frequency").val().trim());
  
  // append values train information to html table
  // var newTableRow = $('<tr>');
  // newTableRow.append('<td>' + trainName + '</td>' );
  // newTableRow.append('<td>' + destination + '</td>' );
  // newTableRow.append('<td>' + firstTrain + '</td>' );
  // newTableRow.append('<td>' + frequency + '</td>' );
  

  // $('#appendTrainInfoHere').append(newTableRow);

  // create temp object to hold train data
  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
    currentDate: firebase.database.ServerValue.TIMESTAMP
  };

  // sends train info to firebase
  db.ref().push(newTrain);

  // logs assumptions to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);
  console.log(newTrain.date);

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

db.ref().orderByChild("currentDate").on("child_added", function(snapshot){
  var ss = snapshot.val();
  console.log(ss);
  var frequency = ss.frequency;
  var currentTime = moment().format("HH:mm");
  currentTime.split(':')
  
  
  var newTableRow = $('<tr>');
  newTableRow.append('<td>' + ss.name + '</td>' );
  newTableRow.append('<td>' + ss.destination + '</td>' );
  newTableRow.append('<td>' + frequency + '</td>' );
  newTableRow.append('<td>' + ss.firstTrain + '</td>' );
  // newTableRow.append('<td>' + minutesAway + '</td>' );
  
  $('#appendTrainInfoHere').append(newTableRow);
});