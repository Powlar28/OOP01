let fname: string= "surakit";
let lname: string= "phongsai";
let course: string[] = ["Database","OOP","Web"];
let mark: number[] = [80,65,84];
let pass: boolean =true;
let avg: number = 0;
let  totalarray: number = mark.length;


        let tempmark: number =0 ;


console.log("Hello %s %s Score %d" , fname,lname,mark);

console.log("register class",course);
console.log(" score",mark);
let testinput:number =0;

console.log("register class %s \n score %d",course[testinput],mark[testinput]);


console.log("pass" ,pass);

for(let i=0; i<totalarray;i++)
    {
        
        tempmark +=  mark[i];
    }
    avg = tempmark/totalarray;

console.log("Average = ",avg);