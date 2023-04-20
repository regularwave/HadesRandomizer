# HadesRandomizer
HadesRandomizer allows you set up random Hades escape attempts. You can select which options you want the randomizer to choose from for each section. The layout works well as an OBS dock, too!

## Escape parameters
The **escape parameters** tile shows the random pick from amongst the *infernal arms*, *keepsakes*, *companions*, *Mirror of Night* choices, and *Pact of Punishment* ranks that are enabled. The **Again!** button will roll a new randomization with the currently selected options.
<br />By default, it selects from all options on load. The *Mirror choices* and *Pact rank order* lines are hidden because they can be very long, especially with *Verbose* mode enabled.

## Options
The **options** tile includes buttons to check or uncheck everything in the randomizer. The **Verbose?** check box uses the full names for the displays in the *escape parameter* tile. The *Instructions* link goes to this readme.

## Pact of Punishment
For each option in this tile, you can set the *maximum* number of times the randomizer will include that option in the *Pact rank order*. Never want to see *Extreme Measures 4*? Set that option to 3 and *Extreme Measures* will only ever show up three times.
<br />If you're looking to target a specific heat level, go down the list of ranks provided by the *Pact rank order* line in the *escape parameters* tile until you either reach the target heat level or would exceed it. If you would exceed it, skip the rank that would cause you to go over and choose the next one in the list (repeating until you hit your target heat).
<br />The *Reset* button will return all the options to their maximum number of ranks. The *Zero* button will set them all to zero.

## Mirror of Night
Choose which Mirror options you want the randomizer to choose from. If you choose neither option, the *escape parameters* tile will show 'none' for that row under *Mirror choices*.
<br />The *arrow* button will toggle between checking all and none, preferring to select all. The *Red* button selects only the red side options; the *Green* button selects only the green side options.

## Infernal Arms
Choose which Infernal Arms the randomizer will choose from. Currently, choosing nothing will cause the *escape parameters* tile to show 'undefined' for the Infernal Arm row.
<br />The *arrow* button will toggle between checking all and none, preferring to select all.

## Keepsakes
Choose which Keepsakes the randomizer will choose from. The function that chooses Keepsakes will comply with the Keepsake switching mechanics from the game: if it chooses a differnt keepsake between biomes, it will not return to the previous one. (For example, "Cerberus, Cerberus, Nyx, Zeus" is a valid chain of options, but "Cerberus, Nyx, Cerberus, Zeus" is not.)
<br />The *arrow* button will toggle between checking all and none, preferring to select all.

## Chthonic Companions
Choose which companions the randomizer will choose from. Currently, choosing nothing will cause the *escape parameters* tile to show 'undefined' for the Companion row.
<br />The *arrow* button will toggle between checking all and none, preferring to select all.
