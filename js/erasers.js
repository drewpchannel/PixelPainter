function erasers () {
  var colorDiv = document.getElementById('colors');
  var buttonMade = document.createElement('div');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "erasingAll()");
  buttonMade.innerHTML = "Clear";
  buttonMade.className = 'funcButtons'

  colorDiv = document.getElementById('colors');
  buttonMade = document.createElement('div');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "eraseSquare()");
  buttonMade.innerHTML = "Eraser";
  buttonMade.className = 'funcButtons'

  // colorDiv = document.getElementById('colors');
  // buttonMade = document.createElement('div');
  // colorDiv.appendChild(buttonMade);
  // buttonMade.setAttribute("onclick", "setColorCustom()");
  // buttonMade.innerHTML = "Custom";
  // buttonMade.className = 'funcButtons'

}

var cPA = createPaintingAbility();
function erasingAll() {
var myFirebaseRef = new Firebase("https://clicktesterapp.firebaseio.com/");
  for (var i = cPA.getColorHeight() * cPA.getColorWidth() - 1; i < cPA.getCountDiv(); i++){
    //document.getElementById(i).style.backgroundColor = #ffffff;
    var pixelThingToSetOnFirebase = {};
    pixelThingToSetOnFirebase[i] = '#ffffff';
    myFirebaseRef.update(pixelThingToSetOnFirebase);
  }
  var toCreateClear = {};
  toCreateClear.value = true;
  myFirebaseRef.update(toCreateClear);
}

function eraseSquare () {
  currentColor = '#ffffff';
}