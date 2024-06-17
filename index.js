let x = 0;
let array = Array();

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", getAdd);
function getAdd() {
  array[x] = document.getElementById("txtValue").value;
  alert("Element " + array[x] + " Add " + x);
  x++;
  document.getElementById("txtValue").value = "";
}

var btnDisplay = document.getElementById("btnDisplay");
btnDisplay.addEventListener("click", getDisplay);
function getDisplay() {
  let e = "<hr>";
  for (i = 0; i < array.length; i++) {
    e += "Element " + i + " = " + array[i] + ";"+ "<br>";
  }
  document.getElementById("result").innerHTML = e;
}
