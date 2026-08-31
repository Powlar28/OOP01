// Grading System

import { changeTextColor } from "../ChangeTextColor";

var score = 8;
var grade = "F";

switch(true)
{
    case score  > 79 : grade ="A"; break;
    case score > 69 : grade ="B"; break;
    case score > 59  : grade ="C"; break;
    case score > 49 : grade ="D"; break;
}

console.log(`Result: ${changeTextColor(grade != "F"?"Pass":"Fail",grade != "F"?"green":"red")}\nScore: ${score}\nGrade: ${changeTextColor(grade,grade!="F"?"green":"red")}`)