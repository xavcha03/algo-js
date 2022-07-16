function spaceAge(AgeSec, planet){
switch (planet){
    case 'Earth':
        return AgeSec / 1.0;
        break;
    case "Mercury":
            return AgeSec / 0.2408467;
            break;
    case "Venus":
        return AgeSec / 0.61519726;
        break;
    case "Mars":
        return AgeSec / 1.8808158;
        break;
    case "Jupiter":
        return AgeSec / 11.862615;
        break;
    default : 
        console.log("The planet not exist");

}
}

let age = spaceAge(37 * 365.25 * 24 * 60 * 60, "Jupiter");
console.log(age/60/60/24/365.25 + " Ans");