function randomize() {

  var weapons = [];
  var companion = [];
  var keepsakes = [];
  var getweapon;
  var getcompanion;
  var getkeepsakes;

  var tot_keep = 0;

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

  var comp_bat = document.getElementById("comp_bat").checked;
  var comp_mor = document.getElementById("comp_mor").checked;
  var comp_rib = document.getElementById("comp_rib").checked;
  var comp_sha = document.getElementById("comp_sha").checked;
  var comp_fid = document.getElementById("comp_fid").checked;
  var comp_ant = document.getElementById("comp_ant").checked;

  var keep_cer = document.getElementById("keep_cer").checked;
  var keep_ach = document.getElementById("keep_ach").checked;
  var keep_nyx = document.getElementById("keep_nyx").checked;
  var keep_tha = document.getElementById("keep_tha").checked;
  var keep_char = document.getElementById("keep_char").checked;
  var keep_hyp = document.getElementById("keep_hyp").checked;
  var keep_meg = document.getElementById("keep_meg").checked;
  var keep_orp = document.getElementById("keep_orp").checked;
  var keep_dus = document.getElementById("keep_dus").checked;
  var keep_ske = document.getElementById("keep_ske").checked;
  var keep_zeu = document.getElementById("keep_zeu").checked;
  var keep_pos = document.getElementById("keep_pos").checked;
  var keep_ath = document.getElementById("keep_ath").checked;
  var keep_aph = document.getElementById("keep_aph").checked;
  var keep_are = document.getElementById("keep_are").checked;
  var keep_art = document.getElementById("keep_art").checked;
  var keep_dio = document.getElementById("keep_dio").checked;
  var keep_her = document.getElementById("keep_her").checked;
  var keep_dem = document.getElementById("keep_dem").checked;
  var keep_chao = document.getElementById("keep_chao").checked;
  var keep_sis = document.getElementById("keep_sis").checked;
  var keep_eur = document.getElementById("keep_eur").checked;
  var keep_pat = document.getElementById("keep_pat").checked;
  var keep_per = document.getElementById("keep_per").checked;
  var keep_had = document.getElementById("keep_had").checked;

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

  if (comp_bat) { companion.push("Battie") }
  if (comp_mor) { companion.push("Mort") }
  if (comp_rib) { companion.push("Rib") }
  if (comp_sha) { companion.push("Shady") }
  if (comp_fid) { companion.push("Fidi") }
  if (comp_ant) { companion.push("Antos") }

  if (keep_cer) { tot_keep++; keepsakes.push("Cerberus' Old Spiked Collar") }
  if (keep_ach) { tot_keep++; keepsakes.push("Achilles' Myrmidon Bracer") }
  if (keep_nyx) { tot_keep++; keepsakes.push("Nyx's Black Shawl") }
  if (keep_tha) { tot_keep++; keepsakes.push("Thanatos' Pierced Butterfly") }
  if (keep_char) { tot_keep++; keepsakes.push("Charon's Bone Hourglass") }
  if (keep_hyp) { tot_keep++; keepsakes.push("Hypnos' Chthonic Coin Purse") }
  if (keep_meg) { tot_keep++; keepsakes.push("Megaera's Skull Earring") }
  if (keep_orp) { tot_keep++; keepsakes.push("Orpheus' Distant Memory") }
  if (keep_dus) { tot_keep++; keepsakes.push("Dusa's Harpy Feather Duster") }
  if (keep_ske) { tot_keep++; keepsakes.push("Skelly's Lucky Tooth") }
  if (keep_zeu) { tot_keep++; keepsakes.push("Zeus' Thunder Signet") }
  if (keep_pos) { tot_keep++; keepsakes.push("Poseidon's Conch Shell") }
  if (keep_ath) { tot_keep++; keepsakes.push("Athena's Owl Pendant") }
  if (keep_aph) { tot_keep++; keepsakes.push("Aphrodite's Eternal Rose") }
  if (keep_are) { tot_keep++; keepsakes.push("Ares' Blood-Filled Vial") }
  if (keep_art) { tot_keep++; keepsakes.push("Artemis' Adamant Arrowhead") }
  if (keep_dio) { tot_keep++; keepsakes.push("Dionysus' Overflowing cup") }
  if (keep_her) { tot_keep++; keepsakes.push("Hermes' Lambent Plume") }
  if (keep_dem) { tot_keep++; keepsakes.push("Demeter's Frostbitten Horn") }
  if (keep_chao) { tot_keep++; keepsakes.push("Chaos' Cosmic Egg") }
  if (keep_sis) { tot_keep++; keepsakes.push("Sisyphus' Shattered Shackle") }
  if (keep_eur) { tot_keep++; keepsakes.push("Eurydice's Evergreen Acorn") }
  if (keep_pat) { tot_keep++; keepsakes.push("Patroclus' Broken Spearpoint") }
  if (keep_per) { tot_keep++; keepsakes.push("Persephone's Pom Blossom") }
  if (keep_had) { tot_keep++; keepsakes.push("Hades' Sigil of the Dead") }

  getweapon = Math.floor(Math.random() * weapons.length);
  document.getElementById("text_weapon").innerHTML = "Infernal Arm: " + weapons[getweapon];

  switch (tot_keep) {
    case 0:
      document.getElementById("text_keepsakes").innerHTML = "Keepsakes: -";
      break;
    case 1:
      document.getElementById("text_keepsakes").innerHTML = "Keepsake: " + keepsakes[0];
      break;
    case 2:
      if (getrandtf()) {
        document.getElementById("text_keepsakes").innerHTML = "Keepsakes: " + keepsakes[0] + ", " + keepsakes[1];
      } else {
        document.getElementById("text_keepsakes").innerHTML = "Keepsakes: " + keepsakes[1] + ", " + keepsakes[0];
      }
      break;
    case 3:
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_1 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_2 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes,1);
      keepsake_3 = keepsakes[0];
      document.getElementById("text_keepsakes").innerHTML = "Keepsakes: " + keepsake_1 + ", " + keepsake_2 + ", " + keepsake_3;
      break;
    case 4:
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_1 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_2 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes,1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_3 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes,1);
      keepsake_4 = keepsakes[0];
      document.getElementById("text_keepsakes").innerHTML = "Keepsakes: " + keepsake_1 + ", " + keepsake_2 + ", " + keepsake_3 + ", " + keepsake_4;
      break;
    default:
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_1 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_2 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes,1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_3 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes,1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_4 = keepsakes[getkeepsakes];
      document.getElementById("text_keepsakes").innerHTML = "Keepsakes: " + keepsake_1 + ", " + keepsake_2 + ", " + keepsake_3 + ", " + keepsake_4;
      break;
  }

  getcompanion = Math.floor(Math.random() * companion.length);
  document.getElementById("text_companion").innerHTML = "Chthonic Companion: " + companion[getcompanion];

}

function getrandtf() {
  return Math.random() >= 0.5;
}
