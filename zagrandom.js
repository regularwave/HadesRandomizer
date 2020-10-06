function myFunction() {
  var redv = 1;
  var bluev = 2;
  var totv = 0;
  var numres = "";
  var redcb = document.getElementById("redcb");
  var bluecb = document.getElementById("bluecb");
  
if (redcb.checked == true) { totv += redv };
if (bluecb.checked == true) { totv += bluev };
  
  switch(totv) {
    case 0:
      numres = "none";
      break;
    case 1:
      numres = "red";
      break;
    case 2:
      numres = "blue";
      break;
    case 3:
      numres = "purple";
      break;
  }
  
document.getElementById("text").innerHTML = numres;
document.getElementById("num").innerHTML = totv;
}

function getrandtf() {
  return Math.random() >= 0.5;
}
