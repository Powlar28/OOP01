export function changeTextColor(text:string|number,color:string)
{   let colorNumber:number = 37; // White
    switch(color.toLowerCase())
    {
        case "red" : colorNumber = 31; break;
        case "green" : colorNumber = 32; break;
        case "yellow" : colorNumber = 33; break;
        case "blue" : colorNumber = 34; break;
        case "magenta" : colorNumber = 35; break;
        case "white" : colorNumber = 36; break;
        default : colorNumber = 37; break;

    }
    return `\x1b[${colorNumber}m${text}\x1b[0m`
}