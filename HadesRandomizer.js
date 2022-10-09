const visCount = document.getElementById('visCount');
updateSiteCounter();

function randomize() {

  getcbstatus();
  getheatstatus();

  var weapons = [];
  var companion = [];
  var keepsakes = [];
  var getweapon;
  var getcompanion;

  var kshold = [];

  verbosetext = document.getElementById("verbosetext").checked;

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

  if (keep_cer) { verbosetext ? keepsakes.push(" Cerberus' Old Spiked Collar") : keepsakes.push(" Cerberus") }
  if (keep_ach) { verbosetext ? keepsakes.push(" Achilles' Myrmidon Bracer") : keepsakes.push(" Achilles") }
  if (keep_nyx) { verbosetext ? keepsakes.push(" Nyx's Black Shawl") : keepsakes.push(" Nyx") }
  if (keep_tha) { verbosetext ? keepsakes.push(" Thanatos' Pierced Butterfly") : keepsakes.push(" Thanatos") }
  if (keep_char) { verbosetext ? keepsakes.push(" Charon's Bone Hourglass") : keepsakes.push(" Charon") }
  if (keep_hyp) { verbosetext ? keepsakes.push(" Hypnos' Chthonic Coin Purse") : keepsakes.push(" Hypnos") }
  if (keep_meg) { verbosetext ? keepsakes.push(" Megaera's Skull Earring") : keepsakes.push(" Megaera") }
  if (keep_orp) { verbosetext ? keepsakes.push(" Orpheus' Distant Memory") : keepsakes.push(" Orpheus") }
  if (keep_dus) { verbosetext ? keepsakes.push(" Dusa's Harpy Feather Duster") : keepsakes.push(" Dusa") }
  if (keep_ske) { verbosetext ? keepsakes.push(" Skelly's Lucky Tooth") : keepsakes.push(" Skelly") }
  if (keep_zeu) { verbosetext ? keepsakes.push(" Zeus' Thunder Signet") : keepsakes.push(" Zeus") }
  if (keep_pos) { verbosetext ? keepsakes.push(" Poseidon's Conch Shell") : keepsakes.push(" Poseidon") }
  if (keep_ath) { verbosetext ? keepsakes.push(" Athena's Owl Pendant") : keepsakes.push(" Athena") }
  if (keep_aph) { verbosetext ? keepsakes.push(" Aphrodite's Eternal Rose") : keepsakes.push(" Aphrodite") }
  if (keep_are) { verbosetext ? keepsakes.push(" Ares' Blood-Filled Vial") : keepsakes.push(" Ares") }
  if (keep_art) { verbosetext ? keepsakes.push(" Artemis' Adamant Arrowhead") : keepsakes.push(" Artemis") }
  if (keep_dio) { verbosetext ? keepsakes.push(" Dionysus' Overflowing cup") : keepsakes.push(" Dionysus") }
  if (keep_her) { verbosetext ? keepsakes.push(" Hermes' Lambent Plume") : keepsakes.push(" Hermes") }
  if (keep_dem) { verbosetext ? keepsakes.push(" Demeter's Frostbitten Horn") : keepsakes.push(" Demeter") }
  if (keep_chao) { verbosetext ? keepsakes.push(" Chaos' Cosmic Egg") : keepsakes.push(" Chaos") }
  if (keep_sis) { verbosetext ? keepsakes.push(" Sisyphus' Shattered Shackle") : keepsakes.push(" Sisyphus") }
  if (keep_eur) { verbosetext ? keepsakes.push(" Eurydice's Evergreen Acorn") : keepsakes.push(" Eurydice") }
  if (keep_pat) { verbosetext ? keepsakes.push(" Patroclus' Broken Spearpoint") : keepsakes.push(" Patroclus") }
  if (keep_per) { verbosetext ? keepsakes.push(" Persephone's Pom Blossom") : keepsakes.push(" Persephone") }
  if (keep_had) { verbosetext ? keepsakes.push(" Hades' Sigil of the Dead") : keepsakes.push(" Hades") }

  getweapon = Math.floor(Math.random() * weapons.length);
  document.getElementById("text_weapon").innerHTML = weapons[getweapon];

  do {
    shufflearray(keepsakes);
    kshold.push(keepsakes[0]);
    if (kshold.length > 1) {
      if (kshold[kshold.length - 2] != kshold[kshold.length - 1]) {
        keepsakes.splice(keepsakes.indexOf(kshold[kshold.length - 2]), 1);
      }
    }
  } while (kshold.length < 4);

  document.getElementById("text_keepsakes").innerHTML = kshold;

  getcompanion = Math.floor(Math.random() * companion.length);
  document.getElementById("text_companion").innerHTML = companion[getcompanion];

  /*mslots rows are [red status, green status, red short, green short, red verbose, green verbose, " none"] */
  let mslots = [
    [mirror_ShPr, mirror_FiPr, " ShPr", " FiPr", " Shadow Presence", " Fiery Presence", " none"],
    [mirror_ChVi, mirror_DaRe, " ChVi", " DaRe", " Chthonic Vitality", " Dark Regeneration", " none"],
    [mirror_DeDe, mirror_StDe, " DeDe", " StDe", " Death Defiance", " Stubborn Defiance", " none"],
    [mirror_GrRe, mirror_RuRe, " GrRe", " RuRe", " Greater Reflex", " Ruthless Reflex", " none"],
    [mirror_BoBl, mirror_AbBl, " BoBl", " AbBl", " Boiling Blood", " Abyssal Blood", " none"],
    [mirror_InSo, mirror_StSo, " InSo", " StSo", " Infernal Soul", " Stygian Soul", " none"],
    [mirror_DePo, mirror_GoTo, " DePo", " GoTo", " Deep Pockets", " Golden Touch", " none"],
    [mirror_ThSk, mirror_HiCo, " ThSk", " HiCo", " Thick Skin", " High Confidence", " none"],
    [mirror_PrSt, mirror_FaFa, " PrSt", " FaFa", " Privileged Status", " Family Favorite", " none"],
    [mirror_OlFa, mirror_DaFo, " OlFa", " DaFo", " Olympian Favor", " Dark Foresight", " none"],
    [mirror_GoPr, mirror_GoLe, " GoPr", " GoLe", " Gods' Pride", " Gods' Legacy", " none"],
    [mirror_FaAu, mirror_FaPe, " FaAu", " FaPe", " Fated Authority", " Fated Persuasion", " none"]
  ];

  var mirrorarray = [];
  do {
    if (mslots[mirrorarray.length][0] && mslots[mirrorarray.length][1]) {
      getrandtf() ? mirrorarray.push(mslots[mirrorarray.length][verbosetext ? 4 : 2]) : mirrorarray.push(mslots[mirrorarray.length][verbosetext ? 5 : 3]);
    } else if (mslots[mirrorarray.length][0] && !mslots[mirrorarray.length][1]) {
      mirrorarray.push(mslots[mirrorarray.length][verbosetext ? 4 : 2]);
    } else if (!mslots[mirrorarray.length][0] && mslots[mirrorarray.length][1]) {
      mirrorarray.push(mslots[mirrorarray.length][verbosetext ? 5 : 3]);
    } else {
      mirrorarray.push(mslots[mirrorarray.length][6]);
    }
  } while (mirrorarray.length < 12);
  document.getElementById("text_mirror").innerHTML = mirrorarray;

  getheatstatus();
  document.getElementById("text_heat").innerHTML = heatarray;
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
  mirror_ShPr = document.getElementById("mirror_ShPr").checked;
  mirror_FiPr = document.getElementById("mirror_FiPr").checked;
  mirror_ChVi = document.getElementById("mirror_ChVi").checked;
  mirror_DaRe = document.getElementById("mirror_DaRe").checked;
  mirror_DeDe = document.getElementById("mirror_DeDe").checked;
  mirror_StDe = document.getElementById("mirror_StDe").checked;
  mirror_GrRe = document.getElementById("mirror_GrRe").checked;
  mirror_RuRe = document.getElementById("mirror_RuRe").checked;
  mirror_BoBl = document.getElementById("mirror_BoBl").checked;
  mirror_AbBl = document.getElementById("mirror_AbBl").checked;
  mirror_InSo = document.getElementById("mirror_InSo").checked;
  mirror_StSo = document.getElementById("mirror_StSo").checked;
  mirror_DePo = document.getElementById("mirror_DePo").checked;
  mirror_GoTo = document.getElementById("mirror_GoTo").checked;
  mirror_ThSk = document.getElementById("mirror_ThSk").checked;
  mirror_HiCo = document.getElementById("mirror_HiCo").checked;
  mirror_PrSt = document.getElementById("mirror_PrSt").checked;
  mirror_FaFa = document.getElementById("mirror_FaFa").checked;
  mirror_OlFa = document.getElementById("mirror_OlFa").checked;
  mirror_DaFo = document.getElementById("mirror_DaFo").checked;
  mirror_GoPr = document.getElementById("mirror_GoPr").checked;
  mirror_GoLe = document.getElementById("mirror_GoLe").checked;
  mirror_FaAu = document.getElementById("mirror_FaAu").checked;
  mirror_FaPe = document.getElementById("mirror_FaPe").checked;
}

function getheatstatus() {

  heat_hlv = document.getElementById("heat_hlv").value;
  heat_lcv = document.getElementById("heat_lcv").value;
  heat_cfv = document.getElementById("heat_cfv").value;
  heat_jsv = document.getElementById("heat_jsv").value;
  heat_emv = document.getElementById("heat_emv").value;
  heat_cpv = document.getElementById("heat_cpv").value;
  heat_bpv = document.getElementById("heat_bpv").value;
  heat_mmv = document.getElementById("heat_mmv").value;
  heat_ucv = document.getElementById("heat_ucv").value;
  heat_fov = document.getElementById("heat_fov").value;
  heat_hsv = document.getElementById("heat_hsv").value;
  heat_riv = document.getElementById("heat_riv").value;
  heat_dcv = document.getElementById("heat_dcv").value;
  heat_apv = document.getElementById("heat_apv").value;
  heat_tdv = document.getElementById("heat_tdv").value;

  buildheatarray();
}

function buildheatarray() {

  heatarray = [];

  for (let i = 0; i < heat_hlv; i++) { verbosetext ? heatarray.push(" Hard Labor") : heatarray.push(" HL") }
  for (let i = 0; i < heat_lcv; i++) { verbosetext ? heatarray.push(" Lasting Consequences") : heatarray.push(" LC") }
  for (let i = 0; i < heat_cfv; i++) { verbosetext ? heatarray.push(" Convenience Fee") : heatarray.push(" CF") }
  for (let i = 0; i < heat_jsv; i++) { verbosetext ? heatarray.push(" Jury Summons") : heatarray.push(" JS") }
  for (let i = 0; i < heat_emv; i++) { verbosetext ? heatarray.push(" Extreme Measures") : heatarray.push(" EM") }
  for (let i = 0; i < heat_cpv; i++) { verbosetext ? heatarray.push(" Calisthenics Program") : heatarray.push(" CP") }
  for (let i = 0; i < heat_bpv; i++) { verbosetext ? heatarray.push(" Benefits Package") : heatarray.push(" BP") }
  for (let i = 0; i < heat_mmv; i++) { verbosetext ? heatarray.push(" Middle Management") : heatarray.push(" MM") }
  for (let i = 0; i < heat_ucv; i++) { verbosetext ? heatarray.push(" Underworld Customs") : heatarray.push(" UC") }
  for (let i = 0; i < heat_fov; i++) { verbosetext ? heatarray.push(" Forced Overtime") : heatarray.push(" FO") }
  for (let i = 0; i < heat_hsv; i++) { verbosetext ? heatarray.push(" Heightened Security") : heatarray.push(" HS") }
  for (let i = 0; i < heat_riv; i++) { verbosetext ? heatarray.push(" Routine Inspection") : heatarray.push(" RI") }
  for (let i = 0; i < heat_dcv; i++) { verbosetext ? heatarray.push(" Damage Control") : heatarray.push(" DC") }
  for (let i = 0; i < heat_apv; i++) { verbosetext ? heatarray.push(" Approval Process") : heatarray.push(" AP") }
  for (let i = 0; i < heat_tdv; i++) { verbosetext ? heatarray.push(" Tight Deadline") : heatarray.push(" TD") }

  shufflearray(heatarray);

}

function shufflearray(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

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

function reset_heat() {
  document.getElementById("heat_hlv").value = 5;
  document.getElementById("heat_lcv").value = 4;
  document.getElementById("heat_cfv").value = 2;
  document.getElementById("heat_jsv").value = 3;
  document.getElementById("heat_emv").value = 4;
  document.getElementById("heat_cpv").value = 2;
  document.getElementById("heat_bpv").value = 2;
  document.getElementById("heat_mmv").value = 1;
  document.getElementById("heat_ucv").value = 1;
  document.getElementById("heat_fov").value = 2;
  document.getElementById("heat_hsv").value = 1;
  document.getElementById("heat_riv").value = 4;
  document.getElementById("heat_dcv").value = 2;
  document.getElementById("heat_apv").value = 2;
  document.getElementById("heat_tdv").value = 3;
}

function zero_heat() {
  document.getElementById("heat_hlv").value = 0;
  document.getElementById("heat_lcv").value = 0;
  document.getElementById("heat_cfv").value = 0;
  document.getElementById("heat_jsv").value = 0;
  document.getElementById("heat_emv").value = 0;
  document.getElementById("heat_cpv").value = 0;
  document.getElementById("heat_bpv").value = 0;
  document.getElementById("heat_mmv").value = 0;
  document.getElementById("heat_ucv").value = 0;
  document.getElementById("heat_fov").value = 0;
  document.getElementById("heat_hsv").value = 0;
  document.getElementById("heat_riv").value = 0;
  document.getElementById("heat_dcv").value = 0;
  document.getElementById("heat_apv").value = 0;
  document.getElementById("heat_tdv").value = 0;
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

function cbgroup_keepsakes() {
  getcbstatus();
  if (keep_cer && keep_ach && keep_nyx && keep_tha && keep_char && keep_hyp && keep_meg && keep_orp && keep_dus && keep_ske && keep_zeu && keep_pos && keep_ath && keep_aph && keep_are && keep_art && keep_dio && keep_her && keep_dem && keep_chao && keep_sis && keep_eur && keep_pat && keep_per && keep_had) {
    document.getElementById("keep_cer").checked = false;
    document.getElementById("keep_ach").checked = false;
    document.getElementById("keep_nyx").checked = false;
    document.getElementById("keep_tha").checked = false;
    document.getElementById("keep_char").checked = false;
    document.getElementById("keep_hyp").checked = false;
    document.getElementById("keep_meg").checked = false;
    document.getElementById("keep_orp").checked = false;
    document.getElementById("keep_dus").checked = false;
    document.getElementById("keep_ske").checked = false;
    document.getElementById("keep_zeu").checked = false;
    document.getElementById("keep_pos").checked = false;
    document.getElementById("keep_ath").checked = false;
    document.getElementById("keep_aph").checked = false;
    document.getElementById("keep_are").checked = false;
    document.getElementById("keep_art").checked = false;
    document.getElementById("keep_dio").checked = false;
    document.getElementById("keep_her").checked = false;
    document.getElementById("keep_dem").checked = false;
    document.getElementById("keep_chao").checked = false;
    document.getElementById("keep_sis").checked = false;
    document.getElementById("keep_eur").checked = false;
    document.getElementById("keep_pat").checked = false;
    document.getElementById("keep_per").checked = false;
    document.getElementById("keep_had").checked = false;
  } else {
    document.getElementById("keep_cer").checked = true;
    document.getElementById("keep_ach").checked = true;
    document.getElementById("keep_nyx").checked = true;
    document.getElementById("keep_tha").checked = true;
    document.getElementById("keep_char").checked = true;
    document.getElementById("keep_hyp").checked = true;
    document.getElementById("keep_meg").checked = true;
    document.getElementById("keep_orp").checked = true;
    document.getElementById("keep_dus").checked = true;
    document.getElementById("keep_ske").checked = true;
    document.getElementById("keep_zeu").checked = true;
    document.getElementById("keep_pos").checked = true;
    document.getElementById("keep_ath").checked = true;
    document.getElementById("keep_aph").checked = true;
    document.getElementById("keep_are").checked = true;
    document.getElementById("keep_art").checked = true;
    document.getElementById("keep_dio").checked = true;
    document.getElementById("keep_her").checked = true;
    document.getElementById("keep_dem").checked = true;
    document.getElementById("keep_chao").checked = true;
    document.getElementById("keep_sis").checked = true;
    document.getElementById("keep_eur").checked = true;
    document.getElementById("keep_pat").checked = true;
    document.getElementById("keep_per").checked = true;
    document.getElementById("keep_had").checked = true;
  }
}

function cbgroup_companions() {
  getcbstatus();
  if (comp_bat && comp_mor && comp_rib && comp_sha && comp_fid && comp_ant) {
    document.getElementById("comp_bat").checked = false;
    document.getElementById("comp_mor").checked = false;
    document.getElementById("comp_rib").checked = false;
    document.getElementById("comp_sha").checked = false;
    document.getElementById("comp_fid").checked = false;
    document.getElementById("comp_ant").checked = false;
  } else {
    document.getElementById("comp_bat").checked = true;
    document.getElementById("comp_mor").checked = true;
    document.getElementById("comp_rib").checked = true;
    document.getElementById("comp_sha").checked = true;
    document.getElementById("comp_fid").checked = true;
    document.getElementById("comp_ant").checked = true;
  }
}

function cbgroup_mirror() {
  getcbstatus();
  if (mirror_ShPr && mirror_FiPr && mirror_ChVi && mirror_DaRe && mirror_DeDe && mirror_StDe && mirror_GrRe && mirror_RuRe && mirror_BoBl && mirror_AbBl && mirror_InSo && mirror_StSo && mirror_DePo && mirror_GoTo && mirror_ThSk && mirror_HiCo && mirror_PrSt && mirror_FaFa && mirror_OlFa && mirror_DaFo && mirror_GoPr && mirror_GoLe && mirror_FaAu && mirror_FaPe) {
    mirror_off();
  } else {
    document.getElementById("mirror_ShPr").checked = true;
    document.getElementById("mirror_FiPr").checked = true;
    document.getElementById("mirror_ChVi").checked = true;
    document.getElementById("mirror_DaRe").checked = true;
    document.getElementById("mirror_DeDe").checked = true;
    document.getElementById("mirror_StDe").checked = true;
    document.getElementById("mirror_GrRe").checked = true;
    document.getElementById("mirror_RuRe").checked = true;
    document.getElementById("mirror_BoBl").checked = true;
    document.getElementById("mirror_AbBl").checked = true;
    document.getElementById("mirror_InSo").checked = true;
    document.getElementById("mirror_StSo").checked = true;
    document.getElementById("mirror_DePo").checked = true;
    document.getElementById("mirror_GoTo").checked = true;
    document.getElementById("mirror_ThSk").checked = true;
    document.getElementById("mirror_HiCo").checked = true;
    document.getElementById("mirror_PrSt").checked = true;
    document.getElementById("mirror_FaFa").checked = true;
    document.getElementById("mirror_OlFa").checked = true;
    document.getElementById("mirror_DaFo").checked = true;
    document.getElementById("mirror_GoPr").checked = true;
    document.getElementById("mirror_GoLe").checked = true;
    document.getElementById("mirror_FaAu").checked = true;
    document.getElementById("mirror_FaPe").checked = true;
  }
}

function cbgroup_mirror_red() {
  mirror_off();
  document.getElementById("mirror_ShPr").checked = true;
  document.getElementById("mirror_ChVi").checked = true;
  document.getElementById("mirror_DeDe").checked = true;
  document.getElementById("mirror_GrRe").checked = true;
  document.getElementById("mirror_BoBl").checked = true;
  document.getElementById("mirror_InSo").checked = true;
  document.getElementById("mirror_DePo").checked = true;
  document.getElementById("mirror_ThSk").checked = true;
  document.getElementById("mirror_PrSt").checked = true;
  document.getElementById("mirror_OlFa").checked = true;
  document.getElementById("mirror_GoPr").checked = true;
  document.getElementById("mirror_FaAu").checked = true;
}

function cbgroup_mirror_green() {
  mirror_off();
  document.getElementById("mirror_FiPr").checked = true;
  document.getElementById("mirror_DaRe").checked = true;
  document.getElementById("mirror_StDe").checked = true;
  document.getElementById("mirror_RuRe").checked = true;
  document.getElementById("mirror_AbBl").checked = true;
  document.getElementById("mirror_StSo").checked = true;
  document.getElementById("mirror_GoTo").checked = true;
  document.getElementById("mirror_HiCo").checked = true;
  document.getElementById("mirror_FaFa").checked = true;
  document.getElementById("mirror_DaFo").checked = true;
  document.getElementById("mirror_GoLe").checked = true;
  document.getElementById("mirror_FaPe").checked = true;
}

function mirror_off() {
  document.getElementById("mirror_ShPr").checked = false;
  document.getElementById("mirror_FiPr").checked = false;
  document.getElementById("mirror_ChVi").checked = false;
  document.getElementById("mirror_DaRe").checked = false;
  document.getElementById("mirror_DeDe").checked = false;
  document.getElementById("mirror_StDe").checked = false;
  document.getElementById("mirror_GrRe").checked = false;
  document.getElementById("mirror_RuRe").checked = false;
  document.getElementById("mirror_BoBl").checked = false;
  document.getElementById("mirror_AbBl").checked = false;
  document.getElementById("mirror_InSo").checked = false;
  document.getElementById("mirror_StSo").checked = false;
  document.getElementById("mirror_DePo").checked = false;
  document.getElementById("mirror_GoTo").checked = false;
  document.getElementById("mirror_ThSk").checked = false;
  document.getElementById("mirror_HiCo").checked = false;
  document.getElementById("mirror_PrSt").checked = false;
  document.getElementById("mirror_FaFa").checked = false;
  document.getElementById("mirror_OlFa").checked = false;
  document.getElementById("mirror_DaFo").checked = false;
  document.getElementById("mirror_GoPr").checked = false;
  document.getElementById("mirror_GoLe").checked = false;
  document.getElementById("mirror_FaAu").checked = false;
  document.getElementById("mirror_FaPe").checked = false;
}

function updateSiteCounter() {
  fetch('https://api.countapi.xyz/hit/regularwave_HadesRandomizer')
      .then(response => response.json())
      .then(response => {
          visCount.innerHTML = response.value;
      })
}