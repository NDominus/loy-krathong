function clampX(x, rect){ return Math.max(0, Math.min(x, window.innerWidth  - rect.width  - 1)); }
function clampY(y, rect){ return Math.max(0, Math.min(y, window.innerHeight - rect.height - 1)); }

function toggleDecoration(event){

  // var btn = document.getElementById("toggleDeco");
  deco_active = !deco_active;

  if (deco_active) {
    // set initial coordinates to the adjusted position of the touch event
    var boat = document.getElementById("boat");
    boat.src = chooseRandomDecoration();

    var rect = boat.getBoundingClientRect();


    var x = event.clientX - rect.width/2;
    var y = event.clientY - rect.height/2;

    boat.style.left = x + "px";
    boat.style.top = y + "px";



    startDecoration(x, y);
  }
  else {
    stopDecoration();
  }
}

function startDecoration(x,y) {
  // deco_active = true;
  document.getElementById("boat").style.visibility = "visible";

  setTimeout(setRandomDisplacements, 0);
  // setTimeout(stopDecoration, 5000);
  updatePos();

  document.getElementById("TextWidget").innerText = "Happy Loy Krathong!";
  document.getElementById("TextWidget").textContent = "Happy Loy Krathong!";

}

function stopDecoration() {
  deco_active = false;
  document.getElementById("boat").style.visibility = "hidden";

  // clear old timeouts
  clearTimeout(timeout_updatePos);
  clearTimeout(timeout_setRandomDisplacements);

  // reset deco variables
  deco_firstCycle = true;
  deco_dx = 0; //
  deco_dy = 0; //
  deco_change_wait = 0;

  document.getElementById("TextWidget").innerText = "Tap somewhere...";
  document.getElementById("TextWidget").textContent = "Tap somewhere...";


}

function updatePos(){
  var rect = document.getElementById("boat").getBoundingClientRect();

  var new_left = rect.left + deco_dx;
  var new_top =  rect.top  + deco_dy;

  if (new_left + rect.width < 0){ // exited left
    stopDecoration();
    return;
  }
  if (new_left > window.innerWidth) { // exited right
    stopDecoration();
    return;
  }
  if (new_top + rect.height < 0) { // exited top
    stopDecoration();
    return;
  }
  if (new_top > window.innerHeight) { // exited bottom
    stopDecoration();
    return;
  }

  document.getElementById("boat").style.left = new_left + "px";
  document.getElementById("boat").style.top = new_top + "px";
  document.getElementById("boat").style.transform = deco_dx < 0 ? "scaleX(-1)" : "";

  timeout_updatePos = setTimeout(updatePos, deco_dt);
}

function setRandomDisplacements(){
  var r_dx = Math.random() * 2 - 1; //
  var r_dy = Math.random() * 2 - 1; //
  var r_wait = Math.random(); //
  var r_move = Math.random(); //

  deco_dx = deco_dx_max * r_dx;
  deco_dy = deco_dy_max * r_dy;
}

function chooseRandomDecoration(){
  return boats[Math.floor(Math.random() * boats.length)];
}
