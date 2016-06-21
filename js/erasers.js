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

  colorDiv = document.getElementById('colors');
  buttonMade = document.createElement('button');
  colorDiv.appendChild(buttonMade);
  buttonMade.setAttribute("onclick", "firebaseToCheck");
  buttonMade.innerHTML = "Test FireBAse";
}

var cPA = createPaintingAbility();
function erasingAll(currentState) {
  for (var i = 0; i < cPA.getCountDiv(); i++){
    var whereDoesTheGridStart = cPA.getColorHeight() * cPA.getColorWidth() - 1;
    var makeId = whereDoesTheGridStart + i;
    var currentSquareToClear = document.getElementById(makeId.toString());
    currentSquareToClear.style.backgroundColor = 'rgb(255, 255, 255)';
    Object.keys(currentState).forEach(function(key){
      console.log(key,currentState[key]);
      var x = document.getElementById(key);
      x.style.backgroundColor = 'rgb(255, 255, 255)';
  });
  }
}


function eraseSquare () {
  currentColor = '#ffffff';
}