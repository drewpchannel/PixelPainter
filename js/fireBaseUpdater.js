var firebaseToCheck = new Firebase("https://clicktesterapp.firebaseio.com/");

firebaseToCheck.on("child_changed", function (childSnapshot, dataSnapshot){
      updatePixels(childSnapshot.val());
/*      var _getCurrentChanges = function (x) {
        childSnapshot.val();
      };
      return {
        getCurrentChanges: _getCurrentChanges
      };*/
});

function updatePixels (currentState) {
  Object.keys(currentState).forEach(function(key){
    console.log('this is key  ' + currentState[key]);
    var x = document.getElementById(key);
    x.style.backgroundColor = currentState[key];
  });
}