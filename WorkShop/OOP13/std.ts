import { changeTextColor } from "./ChangeTextColor";



class Student{
    constructor(private id:string,private name:string,private faculty:string){}
    getStudentInfo ():string{
        return `ID ${this.id} Name ${this.name} Faculty ${this.faculty}`
    }
}
class Teacher{
    constructor(private name:string,private major:string){}
    getStudentInfo():string{
        return `T_Name ${this.name} Major ${this.major}`
    }
    teach(std:Student):void{
        console.log(`Teacher ${this.name} Teach STD${std}`)
    }

}
class University{
    name:string;
    students:Student[];
    teachers:Teacher[];
    constructor(name:string,students :Student[],teachers :Teacher[]){
        this.name = name;
        this.students = students
        this.teachers = teachers;
    }
    showUniversity():void{
        console.log(`${changeTextColor(this.name+" University Infomation","Red")}`);
         console.log(`${changeTextColor("Teacher","blue")}`);
                this.teachers.forEach(element => {
                    console.log(element.getStudentInfo());
                });
                console.log(`${changeTextColor("Students","blue")}`);
                this.students.forEach(element => {
                    console.log(element.getStudentInfo());
                });

    }
}
const STDList:Student[]=[];
const TeachList:Teacher[]=[];


for (let i = 0; i < 5; i++) {
    const std = new Student("STD"+i,"NAME"+i,"Faculty"+i)
    STDList.push(std)
    
}
for (let i = 0; i < 2; i++) {
    const Teach = new Teacher("STD"+i,"Major"+i,)
    TeachList.push(Teach)
    
}

const Univer = new University("NPRU",STDList,TeachList);

Univer.showUniversity()