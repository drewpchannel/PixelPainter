var firebaseToCheck = new Firebase("https://clicktesterapp.firebaseio.com/");

firebaseToCheck.on("value", function (childSnapshot, dataSnapshot){
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
    var x = document.getElementById(key);
    if ( currentState[key] !== x.style.backgroundColor ){
      console.log('I found a color that is new');
      x.style.backgroundColor = currentState[key];
    } else {console.log('i found something repeated');}
  });
}