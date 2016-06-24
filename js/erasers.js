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
  for (var i = cPA.getColorHeight() * cPA.getColorWidth() - 1; i < cPA.getCountDiv(); i++){
    var myFirebaseRef = new Firebase("https://clicktesterapp.firebaseio.com/" + i);
    var pixelThingToSetOnFirebase = {
      color: '#ffffff'
    };
    myFirebaseRef.set(pixelThingToSetOnFirebase);
  }
}

function eraseSquare () {
  currentColor = '#ffffff';
}