/*SWITCH*/
function moveCommand(direction){
    let whatHappens;
    switch (direction){
        case "forward":
            whatHappens="You encountered a monster";
            break;
        case "backward":
            whatHappens="you arrived home";
            break;
        case "right":
            whatHappens="you found a river";
            break;
        case "left":
            whatHappens="you run into a troll";
            break;
        default:
            whatHappens="pease enter a right direction"
            
    }
return whatHappens;
}
