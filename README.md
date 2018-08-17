<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Firebase(train) Scheduler

<!-- Put a description of what the project is -->
Combining HTML, jQuery, Bootstrap/CSS and firebase to build a train scheduler. The 
firebase database stores user inputed schedules and references momentJS to provide
arrival information. 

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
[Train Scheduler](https://jsutliff.github.io/firebaseScheduler/)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
[screen shot of completed assignment](assets/images/screenShot.png)


<img src="assets/images/firebaseScreenShot.jpeg">
# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->
- HTML5
- jQuery
- CSS3
- FireBase
- MomentJS


<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```javascript
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
```
# Explanation of code
This snipet highlets the use of firebase and storing user data. In the addNewTrain 
function after creating a temporary object with user input values I push those values
to be stored in the database for future refernce. 

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
This assignment was beyond challenging. Implenting a new technology(momentJS) that 
I was unfamiliar with provided many unexpected challenges. Learning to sort out 
problems with limited documentation and no prior experience is a skill I hope to
improve on. 

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Jason P. Sutliff](https://jsutliff.github.io/Basic-Portfolio/)