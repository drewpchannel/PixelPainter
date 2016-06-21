var firebaseToCheck = new Firebase("https://clicktesterapp.firebaseio.com/");

firebaseToCheck.on("value", function (childSnapshot, dataSnapshot){
/*      console.log('data snapshot' + dataSnapshot);
      console.log('data snapshot ' + JSON.stringify(childSnapshot.val(),null,2));
      console.log('data snapshot ' + childSnapshot.val());*/
      updatePixels(childSnapshot.val());
      var _getCurrentChanges = function (x) {
        childSnapshot.val();
      };
      return {
        getCurrentChanges: _getCurrentChanges
      };
});

//setInterval(updatePixels, 10);
// Object.keys(childSnapshot.val());
function updatePixels (currentState) {
  Object.keys(currentState).forEach(function(key){
    var x = document.getElementById(key);
    x.style.backgroundColor = currentState[key].color;
  });
}
    //x.style.backgroundColor =
/*    var updateAllPixels = document.getElementById(key);
    updateAllPixels.style.background = currentState[key];*/
  // currentState
  // console.log(currentState);
    //console.log(key,currentState[key]);
/*  var tryThis = currentState;
  for (var i; i < 613; i++) {
    var pixelBeingChecked = childSnapshot.val();
    console.log(tryThis);*/
  //}