import { changeTextColor } from "../ChangeTextColor";

class Student {
    name: string;
    id: number;
    scores: number[];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.scores = [];
    }

    addScore(score: number): void {
        this.scores.push(score);
    }

    getAverage(): number {
        
        return this.scores.length === 0 ? 0 : (()=>{
        const sum = this.scores.reduce((total, current) => total + current, 0);
        return sum / this.scores.length;})()
        
      
        
       
    }
}

const student = new Student("Surakit", 68025);

student.addScore(85);
student.addScore(90);
student.addScore(95);


console.log(`Student Name: ${changeTextColor(student.name,"blue")}`);
console.log(`Average Score: ${changeTextColor(student.getAverage(),"green")}`);