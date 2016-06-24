myFirebaseRef.on("value", function (childSnapshot, dataSnapshot){
    updatePixels(childSnapshot.val());
    var _getCurrentChanges = function (x) {
      childSnapshot.val();
    };
});

function updatePixels (currentState) {
  Object.keys(currentState).forEach(function(key){
    var x = document.getElementById(key);
    x.style.backgroundColor = currentState[key];
  });
}