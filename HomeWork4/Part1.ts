
var quantities :number[] = [20, 5, 12, 8, 30];
var threshold :number = 10;
function findLowStockItem(quantities: number[],threshold:number)
{
    var result : number[] = [];

    quantities.forEach(element => {
        if(element<threshold)
            result.push(element)
    });
    
    return result;

}

var Result = findLowStockItem(quantities,threshold)
Result.forEach(element => {
    console.log(element)
});


    
