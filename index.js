let x = 0;
let array = Array();

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", getAdd);
function getAdd() {
  array[x] = document.getElementById("txtValue").value;
  alert("Giá trị " + array[x] + " được thêm vào vị trí " + x);
  x++;
  document.getElementById("txtValue").innerHTML = "";
}

let btnDisplay = document.getElementById("btnDisplay");
btnDisplay.addEventListener("click", getDisplay);
function getDisplay() {
  let e = "<hr>";
  for (i = 0; i < array.length; i++) {
    e += "Vị trị " + i + " là = " + array[i] + ";" + "<br>";
  }
  document.getElementById("result").innerHTML = e;
}
