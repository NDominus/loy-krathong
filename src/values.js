
const boats = [
  "assets/flower.png",
]


const deco_dt = 16.66; // milliseconds it takes to update the decoration's position
const deco_dx_max = 3.0; // max value for deco_dx
const deco_dy_max = 3.0; // max value for deco_dy
const deco_change_wait_max = 5000; // max value for deco_change_wait
const deco_chance_stationary = 0.2; // probability that in a setRandomDisplacements call, deco_dx and deco_dy are set to 0

var deco_firstCycle = true; // whether it's the first time calling setRandomDisplacements
var deco_dx = 0; // rate of change on the X position
var deco_dy = 0; // rate of change on the Y position
var deco_change_wait = 0; // milliseconds it takes to call setRandomDisplacements and change deco_dx and deco_dy
var deco_active = false; // whether the decoration is currently active

var timeout_updatePos;
var timeout_setRandomDisplacements;

var test = 40 - Math.floor((timeEnd - Date.now()) / oneDay);
