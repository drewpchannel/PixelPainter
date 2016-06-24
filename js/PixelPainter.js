//do some variables need to be global?
var countDiv = -1;
var currentColor = "rgb(255,255,255)";

firebase.initializeApp(config);

// Get a reference to the database service
var myFirebaseRef = firebase.database().ref();

function createPaintingAbility() {
  var colorHeight = 1;
  var colorWidth = 8;
  var rowHeight = 16;
  var rowWidth = 32;
  var fillOnHover = false;

  var _clickColor = function(){
    currentColor = this.style.backgroundColor;
  };

  var _clickGrid = function(){
    if(this.style.backgroundColor !== currentColor){
      this.style.backgroundColor = currentColor;
    fillOnHover = true;
    var divClicked = this.id;
    divClicked = divClicked.toString();
    var pixelThingToSetOnFirebase = {};
    pixelThingToSetOnFirebase[divClicked] = currentColor;
    myFirebaseRef.update(pixelThingToSetOnFirebase);
    }
  };

  var _doFillOnHover = function() {
    if (fillOnHover === true){
      if(this.style.backgroundColor !== currentColor){
        this.style.backgroundColor = currentColor;
        var divClicked = this.id;
        var pixelThingToSetOnFirebase = {};
        pixelThingToSetOnFirebase[divClicked] = currentColor;
        myFirebaseRef.update(pixelThingToSetOnFirebase);
      }
    }
  };

  var _mouseUpUpdate = function(){
    fillOnHover = false;
  };

  function _getcolorHeight() {
    return colorHeight;
  }

  function _setcolorHeight(setter) {
    colorHeight = setter;
  }

  function _getcolorWidth() {
    return colorWidth;
  }

  function _setcolorWidth(setter) {
    colorWidth = setter;
  }

  function _getRowHeight() {
    return rowHeight;
  }

  function _setRowHeight(setter) {
    rowHeight = setter;
  }

  function _getrowWidth() {
    return rowWidth;
  }

  function _setrowWidth(setter) {
    rowWidth = setter;
  }

  function _getcountDiv() {
    return countDiv;
  }
  function _setcountDiv(setter) {
    countDiv = setter;
  }

  function _getfillOnHover() {
    return fillOnHover;
  }

  function _setfillOnHover(setter) {
    fillOnHover = setter;
  }

  function _getcurrentColor() {
    return getcurrentColor;
  }

  function _setcurrentColor(setter) {
    getcurrentColor = setter;
  }

  function _getCountDiv() {
    return countDiv;
  }

  function _setCountDiv(setter) {
    countDiv = setter;
  }

  function _sendRGB () {
    var rgb = currentColor;
    var x = rgb.substring(4, rgb.length - 1)
      .replace (/ /g, '')
      .split (',');
      return x;
  }

  return {
    clickColor: _clickColor,
    clickGrid: _clickGrid,
    doFillOnHover: _doFillOnHover,
    mouseUpUpdate: _mouseUpUpdate,
    setColorHeight: _setcolorHeight,
    getColorHeight: _getcolorHeight,
    setColorWidth: _setcolorWidth,
    getColorWidth: _getcolorWidth,
    setRowWidth: _setrowWidth,
    getRowWidth: _getrowWidth,
    getRowHeight: _getRowHeight,
    setRowHeight: _setRowHeight,
    setCountDiv: _setcountDiv,
    getCountDiv: _getcountDiv,
    getFillOnHover: _getfillOnHover,
    setFillOnHover: _setfillOnHover,
    getCurrentColor: _getcurrentColor,
    setCurrentColor: _setcurrentColor,
    sendRGB: _sendRGB
  };
}