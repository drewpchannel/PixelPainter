myFirebaseRef.on("value", function(childSnapshot, dataSnapshot){
  updatePixels(childSnapshot.val());
  var _getCurrentChanges = function(x) {
    childSnapshot.val();
  };
});

function updatePixels(currentState) {
  Object.keys(currentState).forEach(function(key){
    var x = document.getElementById(key);
    if ( currentState[key] !== x.style.backgroundColor ){
      x.style.backgroundColor = currentState[key];
    }
  });
}









