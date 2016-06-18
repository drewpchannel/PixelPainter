function setColorCustom () {
  var a = prompt('Enter three numbers with commas x,y,z');
  document.getElementById('99').style.backgroundColor = 'rgb(' + a + ')';
}

var n = 1000;
function trollMode(n){
  // for (var x = 0; x < 612; x++){
  window.clearInterval();
  n -= 25;
  var x = 0;
  window.setInterval(function (n) {
    x =  x.toString();
    j = document.getElementById(x);
    j.className += 'trollMode';
    x++;
  }, n);
  // }
  trollMode();
  }
function trollModeCallback() {

}

//   timerTroll -= 25;
//   countDivsTroll++;
//   trollModeCallback();
//   if (countDivsTroll === 611){
//     return;
//   }
// }


//setinterval is crashing the browser  need to call less of them
// add var to interval ... clear interveral each iteration and recreate