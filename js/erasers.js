function erasers () {
  var colorDiv = document.getElementById('colors');
  var buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "erasingAll()");
  buttonMade.innerHTML = "Clear";

  colorDiv = document.getElementById('colors');
  buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "eraseSquare()");
  buttonMade.innerHTML = "Eraser";

  colorDiv = document.getElementById('colors');
  buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "setColorCustom()");
  buttonMade.innerHTML = "Custom";

  colorDiv = document.getElementById('colors');
  buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "trollMode()");
  buttonMade.innerHTML = "Troll Mode";
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