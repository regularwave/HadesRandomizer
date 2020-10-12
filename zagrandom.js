function myFunction() {

  var weapons = [];
  var getweapon;

  /*document.getElementById("spear").checked = getrandtf();
  document.getElementById("shield").checked = getrandtf();
  document.getElementById("bow").checked = getrandtf();
  document.getElementById("fist").checked = getrandtf();
  document.getElementById("gun").checked = getrandtf();*/

  var sword_zag = document.getElementById("sword_zag").checked;
  var sword_nem = document.getElementById("sword_nem").checked;
  var sword_pos = document.getElementById("sword_pos").checked;
  var sword_art = document.getElementById("sword_art").checked;
  var spear_zag = document.getElementById("spear_zag").checked;
  var spear_ach = document.getElementById("spear_ach").checked;
  var spear_had = document.getElementById("spear_had").checked;
  var spear_gua = document.getElementById("spear_gua").checked;
  var shield_zag = document.getElementById("shield_zag").checked;
  var shield_cha = document.getElementById("shield_cha").checked;
  var shield_zeu = document.getElementById("shield_zeu").checked;
  var shield_beo = document.getElementById("shield_beo").checked;
  var bow_zag = document.getElementById("bow_zag").checked;
  var bow_chi = document.getElementById("bow_chi").checked;
  var bow_her = document.getElementById("bow_her").checked;
  var bow_ram = document.getElementById("bow_ram").checked;
  var fists_zag = document.getElementById("fists_zag").checked;
  var fists_tal = document.getElementById("fists_tal").checked;
  var fists_dem = document.getElementById("fists_dem").checked;
  var fists_gil = document.getElementById("fists_gil").checked;
  var rail_zag = document.getElementById("rail_zag").checked;
  var rail_eri = document.getElementById("rail_eri").checked;
  var rail_hes = document.getElementById("rail_hes").checked;
  var rail_luc = document.getElementById("rail_luc").checked;

  if (sword_zag) { weapons.push("Stygius, the Blade of the Underworld: Aspect of Zagreus") }
  if (sword_nem) { weapons.push("Stygius, the Blade of the Underworld: Aspect of Nemesis") }
  if (sword_pos) { weapons.push("Stygius, the Blade of the Underworld: Aspect of Poseidon") }
  if (sword_art) { weapons.push("Stygius, the Blade of the Underworld: Aspect of Arthur") }
  if (spear_zag) { weapons.push("Varatha, the Eternal Spear: Aspect of Zagreus") }
  if (spear_ach) { weapons.push("Varatha, the Eternal Spear: Aspect of Achilles") }
  if (spear_had) { weapons.push("Varatha, the Eternal Spear: Aspect of Hades") }
  if (spear_gua) { weapons.push("Varatha, the Eternal Spear: Aspect of Guan Yu") }
  if (shield_zag) { weapons.push("Aegis, the Shield of Chaos: Aspect of Zagreus") }
  if (shield_cha) { weapons.push("Aegis, the Shield of Chaos: Aspect of Chaos") }
  if (shield_zeu) { weapons.push("Aegis, the Shield of Chaos: Aspect of Zeus") }
  if (shield_beo) { weapons.push("Aegis, the Shield of Chaos: Aspect of Beowulf") }
  if (bow_zag) { weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Zagreus") }
  if (bow_chi) { weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Chiron") }
  if (bow_her) { weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Hera") }
  if (bow_ram) { weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Rama") }
  if (fists_zag) { weapons.push("Twin Fists of Malphon: Aspect of Zagreus") }
  if (fists_tal) { weapons.push("Twin Fists of Malphon: Aspect of Talos") }
  if (fists_dem) { weapons.push("Twin Fists of Malphon: Aspect of Demeter") }
  if (fists_gil) { weapons.push("Twin Fists of Malphon: Aspect of Gilgamesh") }
  if (rail_zag) { weapons.push("Exagryph, the Adamant Rail: Aspect of Zagreus") }
  if (rail_eri) { weapons.push("Exagryph, the Adamant Rail: Aspect of Eris") }
  if (rail_hes) { weapons.push("Exagryph, the Adamant Rail: Aspect of Hestia") }
  if (rail_luc) { weapons.push("Exagryph, the Adamant Rail: Aspect of Lucifer") }

  getweapon = Math.floor(Math.random() * weapons.length);

  document.getElementById("text").innerHTML = weapons[getweapon];
  document.getElementById("num").innerHTML = weapons.length;

}

function getrandtf() {
  return Math.random() >= 0.5;
}
