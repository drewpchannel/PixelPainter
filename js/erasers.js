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
  for(var k = 0; k < painterGenerator.getRowHeight(); k++){
    for(var l = 0; l < painterGenerator.getRowWidth(); l++){
      var pixelThingToSetOnFirebase = {};
      pixelThingToSetOnFirebase[l + ' ' + k] = 'rgb(0,0,0)';
      myFirebaseRef.update(pixelThingToSetOnFirebase);
    }
  }
}
/*  var toCreateClear = {};
  toCreateClear.value = true;
  myFirebaseRef.update(toCreateClear);*/
//}

function eraseSquare () {
  currentColor = 'rgb(0,0,0)';
}