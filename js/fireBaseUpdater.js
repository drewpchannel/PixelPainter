var firebaseToCheck = new Firebase("https://clicktesterapp.firebaseio.com/");

firebaseToCheck.on("value", function (childSnapshot, dataSnapshot){
      updatePixels(childSnapshot.val());
      var _getCurrentChanges = function (x) {
        childSnapshot.val();
      };
});

function updatePixels (currentState) {
  Object.keys(currentState).forEach(function(key){
    var x = document.getElementById(key);
    if(currentState[key].color !== x.style.backgroundColor){
      x.style.backgroundColor = currentState[key].color;
    }
  });
}