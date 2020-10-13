function randomize() {

  getcbstatus();

  var weapons = [];
  var companion = [];
  var keepsakes = [];
  var getweapon;
  var getcompanion;
  var getkeepsakes;
  var keepsake_1;
  var keepsake_2;
  var keepsake_3;
  var keepsake_4;

  var tot_keep = 0;

  var verbosetext = document.getElementById("verbosetext").checked;

  if (sword_zag) { verbosetext ? weapons.push("Stygius, the Blade of the Underworld: Aspect of Zagreus") : weapons.push("Sword: Zagreus") }
  if (sword_nem) { verbosetext ? weapons.push("Stygius, the Blade of the Underworld: Aspect of Nemesis") : weapons.push("Sword: Nemesis") }
  if (sword_pos) { verbosetext ? weapons.push("Stygius, the Blade of the Underworld: Aspect of Poseidon") : weapons.push("Sword: Poseidon") }
  if (sword_art) { verbosetext ? weapons.push("Stygius, the Blade of the Underworld: Aspect of Arthur") : weapons.push("Sword: Arthur") }
  if (spear_zag) { verbosetext ? weapons.push("Varatha, the Eternal Spear: Aspect of Zagreus") : weapons.push("Spear: Zagreus") }
  if (spear_ach) { verbosetext ? weapons.push("Varatha, the Eternal Spear: Aspect of Achilles") : weapons.push("Spear: Achilles") }
  if (spear_had) { verbosetext ? weapons.push("Varatha, the Eternal Spear: Aspect of Hades") : weapons.push("Spear: Hades") }
  if (spear_gua) { verbosetext ? weapons.push("Varatha, the Eternal Spear: Aspect of Guan Yu") : weapons.push("Spear: Guan Yu") }
  if (shield_zag) { verbosetext ? weapons.push("Aegis, the Shield of Chaos: Aspect of Zagreus") : weapons.push("Shield: Zagreus") }
  if (shield_cha) { verbosetext ? weapons.push("Aegis, the Shield of Chaos: Aspect of Chaos") : weapons.push("Shield: Chaos") }
  if (shield_zeu) { verbosetext ? weapons.push("Aegis, the Shield of Chaos: Aspect of Zeus") : weapons.push("Shield: Zeus") }
  if (shield_beo) { verbosetext ? weapons.push("Aegis, the Shield of Chaos: Aspect of Beowulf") : weapons.push("Shield: Beowulf") }
  if (bow_zag) { verbosetext ? weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Zagreus") : weapons.push("Bow: Zagreus") }
  if (bow_chi) { verbosetext ? weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Chiron") : weapons.push("Bow: Chiron") }
  if (bow_her) { verbosetext ? weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Hera") : weapons.push("Bow: Hera") }
  if (bow_ram) { verbosetext ? weapons.push("Coronacht, the Heart-Seeking Bow: Aspect of Rama") : weapons.push("Bow: Rama") }
  if (fists_zag) { verbosetext ? weapons.push("Twin Fists of Malphon: Aspect of Zagreus") : weapons.push("Fists: Zagreus") }
  if (fists_tal) { verbosetext ? weapons.push("Twin Fists of Malphon: Aspect of Talos") : weapons.push("Fists: Talos") }
  if (fists_dem) { verbosetext ? weapons.push("Twin Fists of Malphon: Aspect of Demeter") : weapons.push("Fists: Demeter") }
  if (fists_gil) { verbosetext ? weapons.push("Twin Fists of Malphon: Aspect of Gilgamesh") : weapons.push("Fists: Gilgamesh") }
  if (rail_zag) { verbosetext ? weapons.push("Exagryph, the Adamant Rail: Aspect of Zagreus") : weapons.push("Rail: Zagreus") }
  if (rail_eri) { verbosetext ? weapons.push("Exagryph, the Adamant Rail: Aspect of Eris") : weapons.push("Rail: Eris") }
  if (rail_hes) { verbosetext ? weapons.push("Exagryph, the Adamant Rail: Aspect of Hestia") : weapons.push("Rail: Hestia") }
  if (rail_luc) { verbosetext ? weapons.push("Exagryph, the Adamant Rail: Aspect of Lucifer") : weapons.push("Rail: Lucifer") }

  if (comp_bat) { companion.push("Battie") }
  if (comp_mor) { companion.push("Mort") }
  if (comp_rib) { companion.push("Rib") }
  if (comp_sha) { companion.push("Shady") }
  if (comp_fid) { companion.push("Fidi") }
  if (comp_ant) { companion.push("Antos") }

  if (keep_cer) { tot_keep++; verbosetext ? keepsakes.push("Cerberus' Old Spiked Collar") : keepsakes.push("Cerberus") }
  if (keep_ach) { tot_keep++; verbosetext ? keepsakes.push("Achilles' Myrmidon Bracer") : keepsakes.push("Achilles") }
  if (keep_nyx) { tot_keep++; verbosetext ? keepsakes.push("Nyx's Black Shawl") : keepsakes.push("Nyx") }
  if (keep_tha) { tot_keep++; verbosetext ? keepsakes.push("Thanatos' Pierced Butterfly") : keepsakes.push("Thanatos") }
  if (keep_char) { tot_keep++; verbosetext ? keepsakes.push("Charon's Bone Hourglass") : keepsakes.push("Charon") }
  if (keep_hyp) { tot_keep++; verbosetext ? keepsakes.push("Hypnos' Chthonic Coin Purse") : keepsakes.push("Hypnos") }
  if (keep_meg) { tot_keep++; verbosetext ? keepsakes.push("Megaera's Skull Earring") : keepsakes.push("Megaera") }
  if (keep_orp) { tot_keep++; verbosetext ? keepsakes.push("Orpheus' Distant Memory") : keepsakes.push("Orpheus") }
  if (keep_dus) { tot_keep++; verbosetext ? keepsakes.push("Dusa's Harpy Feather Duster") : keepsakes.push("Dusa") }
  if (keep_ske) { tot_keep++; verbosetext ? keepsakes.push("Skelly's Lucky Tooth") : keepsakes.push("Skelly") }
  if (keep_zeu) { tot_keep++; verbosetext ? keepsakes.push("Zeus' Thunder Signet") : keepsakes.push("Zeus") }
  if (keep_pos) { tot_keep++; verbosetext ? keepsakes.push("Poseidon's Conch Shell") : keepsakes.push("Poseidon") }
  if (keep_ath) { tot_keep++; verbosetext ? keepsakes.push("Athena's Owl Pendant") : keepsakes.push("Athena") }
  if (keep_aph) { tot_keep++; verbosetext ? keepsakes.push("Aphrodite's Eternal Rose") : keepsakes.push("Aphrodite") }
  if (keep_are) { tot_keep++; verbosetext ? keepsakes.push("Ares' Blood-Filled Vial") : keepsakes.push("Ares") }
  if (keep_art) { tot_keep++; verbosetext ? keepsakes.push("Artemis' Adamant Arrowhead") : keepsakes.push("Artemis") }
  if (keep_dio) { tot_keep++; verbosetext ? keepsakes.push("Dionysus' Overflowing cup") : keepsakes.push("Dionysus") }
  if (keep_her) { tot_keep++; verbosetext ? keepsakes.push("Hermes' Lambent Plume") : keepsakes.push("Hermes") }
  if (keep_dem) { tot_keep++; verbosetext ? keepsakes.push("Demeter's Frostbitten Horn") : keepsakes.push("Demeter") }
  if (keep_chao) { tot_keep++; verbosetext ? keepsakes.push("Chaos' Cosmic Egg") : keepsakes.push("Chaos") }
  if (keep_sis) { tot_keep++; verbosetext ? keepsakes.push("Sisyphus' Shattered Shackle") : keepsakes.push("Sisyphus") }
  if (keep_eur) { tot_keep++; verbosetext ? keepsakes.push("Eurydice's Evergreen Acorn") : keepsakes.push("Eurydice") }
  if (keep_pat) { tot_keep++; verbosetext ? keepsakes.push("Patroclus' Broken Spearpoint") : keepsakes.push("Patroclus") }
  if (keep_per) { tot_keep++; verbosetext ? keepsakes.push("Persephone's Pom Blossom") : keepsakes.push("Persephone") }
  if (keep_had) { tot_keep++; verbosetext ? keepsakes.push("Hades' Sigil of the Dead") : keepsakes.push("Hades") }

  getweapon = Math.floor(Math.random() * weapons.length);
  document.getElementById("text_weapon").innerHTML = weapons[getweapon];

  switch (tot_keep) {
    case 0:
      document.getElementById("text_keepsakes").innerHTML = "-";
      break;
    case 1:
      document.getElementById("text_keepsakes").innerHTML = keepsakes[0];
      break;
    case 2:
      if (getrandtf()) {
        document.getElementById("text_keepsakes").innerHTML = keepsakes[0] + ", " + keepsakes[1];
      } else {
        document.getElementById("text_keepsakes").innerHTML = keepsakes[1] + ", " + keepsakes[0];
      }
      break;
    case 3:
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_1 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_2 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      keepsake_3 = keepsakes[0];
      document.getElementById("text_keepsakes").innerHTML = keepsake_1 + ", " + keepsake_2 + ", " + keepsake_3;
      break;
    case 4:
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_1 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_2 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_3 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      keepsake_4 = keepsakes[0];
      document.getElementById("text_keepsakes").innerHTML = keepsake_1 + ", " + keepsake_2 + ", " + keepsake_3 + ", " + keepsake_4;
      break;
    default:
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_1 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_2 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_3 = keepsakes[getkeepsakes];
      keepsakes.splice(getkeepsakes, 1);
      getkeepsakes = Math.floor(Math.random() * keepsakes.length);
      keepsake_4 = keepsakes[getkeepsakes];
      document.getElementById("text_keepsakes").innerHTML = keepsake_1 + ", " + keepsake_2 + ", " + keepsake_3 + ", " + keepsake_4;
      break;
  }

  getcompanion = Math.floor(Math.random() * companion.length);
  document.getElementById("text_companion").innerHTML = companion[getcompanion];

}

function getcbstatus() {
  sword_zag = document.getElementById("sword_zag").checked;
  sword_nem = document.getElementById("sword_nem").checked;
  sword_pos = document.getElementById("sword_pos").checked;
  sword_art = document.getElementById("sword_art").checked;
  spear_zag = document.getElementById("spear_zag").checked;
  spear_ach = document.getElementById("spear_ach").checked;
  spear_had = document.getElementById("spear_had").checked;
  spear_gua = document.getElementById("spear_gua").checked;
  shield_zag = document.getElementById("shield_zag").checked;
  shield_cha = document.getElementById("shield_cha").checked;
  shield_zeu = document.getElementById("shield_zeu").checked;
  shield_beo = document.getElementById("shield_beo").checked;
  bow_zag = document.getElementById("bow_zag").checked;
  bow_chi = document.getElementById("bow_chi").checked;
  bow_her = document.getElementById("bow_her").checked;
  bow_ram = document.getElementById("bow_ram").checked;
  fists_zag = document.getElementById("fists_zag").checked;
  fists_tal = document.getElementById("fists_tal").checked;
  fists_dem = document.getElementById("fists_dem").checked;
  fists_gil = document.getElementById("fists_gil").checked;
  rail_zag = document.getElementById("rail_zag").checked;
  rail_eri = document.getElementById("rail_eri").checked;
  rail_hes = document.getElementById("rail_hes").checked;
  rail_luc = document.getElementById("rail_luc").checked;
  comp_bat = document.getElementById("comp_bat").checked;
  comp_mor = document.getElementById("comp_mor").checked;
  comp_rib = document.getElementById("comp_rib").checked;
  comp_sha = document.getElementById("comp_sha").checked;
  comp_fid = document.getElementById("comp_fid").checked;
  comp_ant = document.getElementById("comp_ant").checked;
  keep_cer = document.getElementById("keep_cer").checked;
  keep_ach = document.getElementById("keep_ach").checked;
  keep_nyx = document.getElementById("keep_nyx").checked;
  keep_tha = document.getElementById("keep_tha").checked;
  keep_char = document.getElementById("keep_char").checked;
  keep_hyp = document.getElementById("keep_hyp").checked;
  keep_meg = document.getElementById("keep_meg").checked;
  keep_orp = document.getElementById("keep_orp").checked;
  keep_dus = document.getElementById("keep_dus").checked;
  keep_ske = document.getElementById("keep_ske").checked;
  keep_zeu = document.getElementById("keep_zeu").checked;
  keep_pos = document.getElementById("keep_pos").checked;
  keep_ath = document.getElementById("keep_ath").checked;
  keep_aph = document.getElementById("keep_aph").checked;
  keep_are = document.getElementById("keep_are").checked;
  keep_art = document.getElementById("keep_art").checked;
  keep_dio = document.getElementById("keep_dio").checked;
  keep_her = document.getElementById("keep_her").checked;
  keep_dem = document.getElementById("keep_dem").checked;
  keep_chao = document.getElementById("keep_chao").checked;
  keep_sis = document.getElementById("keep_sis").checked;
  keep_eur = document.getElementById("keep_eur").checked;
  keep_pat = document.getElementById("keep_pat").checked;
  keep_per = document.getElementById("keep_per").checked;
  keep_had = document.getElementById("keep_had").checked;
}

function getrandtf() {
  return Math.random() >= 0.5;
}

function checkall() {
  var cbitems = document.getElementsByName('cb');
  for (var i = 0; i < cbitems.length; i++) {
    if (cbitems[i].type == 'checkbox')
      cbitems[i].checked = true;
  }
}

function uncheckall() {
  var cbitems = document.getElementsByName('cb');
  for (var i = 0; i < cbitems.length; i++) {
    if (cbitems[i].type == 'checkbox')
      cbitems[i].checked = false;
  }
}

function cbgroup_sword() {
  getcbstatus();
  if (sword_zag && sword_nem && sword_pos && sword_art) {
    document.getElementById("sword_zag").checked = false;
    document.getElementById("sword_nem").checked = false;
    document.getElementById("sword_pos").checked = false;
    document.getElementById("sword_art").checked = false;
  } else {
    document.getElementById("sword_zag").checked = true;
    document.getElementById("sword_nem").checked = true;
    document.getElementById("sword_pos").checked = true;
    document.getElementById("sword_art").checked = true;
  }
}

function cbgroup_spear() {
  getcbstatus();
  if (spear_zag && spear_ach && spear_had && spear_gua) {
    document.getElementById("spear_zag").checked = false;
    document.getElementById("spear_ach").checked = false;
    document.getElementById("spear_had").checked = false;
    document.getElementById("spear_gua").checked = false;
  } else {
    document.getElementById("spear_zag").checked = true;
    document.getElementById("spear_ach").checked = true;
    document.getElementById("spear_had").checked = true;
    document.getElementById("spear_gua").checked = true;
  }
}

function cbgroup_shield() {
  getcbstatus();
  if (shield_zag && shield_cha && shield_zeu && shield_beo) {
    document.getElementById("shield_zag").checked = false;
    document.getElementById("shield_cha").checked = false;
    document.getElementById("shield_zeu").checked = false;
    document.getElementById("shield_beo").checked = false;
  } else {
    document.getElementById("shield_zag").checked = true;
    document.getElementById("shield_cha").checked = true;
    document.getElementById("shield_zeu").checked = true;
    document.getElementById("shield_beo").checked = true;
  }
}

function cbgroup_bow() {
  getcbstatus();
  if (bow_zag && bow_chi && bow_her && bow_ram) {
    document.getElementById("bow_zag").checked = false;
    document.getElementById("bow_chi").checked = false;
    document.getElementById("bow_her").checked = false;
    document.getElementById("bow_ram").checked = false;
  } else {
    document.getElementById("bow_zag").checked = true;
    document.getElementById("bow_chi").checked = true;
    document.getElementById("bow_her").checked = true;
    document.getElementById("bow_ram").checked = true;
  }
}

function cbgroup_fists() {
  getcbstatus();
  if (fists_zag && fists_tal && fists_dem && fists_gil) {
    document.getElementById("fists_zag").checked = false;
    document.getElementById("fists_tal").checked = false;
    document.getElementById("fists_dem").checked = false;
    document.getElementById("fists_gil").checked = false;
  } else {
    document.getElementById("fists_zag").checked = true;
    document.getElementById("fists_tal").checked = true;
    document.getElementById("fists_dem").checked = true;
    document.getElementById("fists_gil").checked = true;
  }
}

function cbgroup_rail() {
  getcbstatus();
  if (rail_zag && rail_eri && rail_hes && rail_luc) {
    document.getElementById("rail_zag").checked = false;
    document.getElementById("rail_eri").checked = false;
    document.getElementById("rail_hes").checked = false;
    document.getElementById("rail_luc").checked = false;
  } else {
    document.getElementById("rail_zag").checked = true;
    document.getElementById("rail_eri").checked = true;
    document.getElementById("rail_hes").checked = true;
    document.getElementById("rail_luc").checked = true;
  }
}

function cbgroup_weapons() {
  cbgroup_sword();
  cbgroup_spear();
  cbgroup_shield();
  cbgroup_bow();
  cbgroup_fists();
  cbgroup_rail();
}