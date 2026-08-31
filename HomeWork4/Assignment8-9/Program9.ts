import { HourlyWorkr, SalariedWorker } from "./Assignment9";

var hourlyWorkr = new HourlyWorkr("hourlyWorkr",5,5)
var salariedWorker = new SalariedWorker("salariedWorker",100)

console.log(`Name: ${hourlyWorkr._name}\nTotal HourPay: ${hourlyWorkr.calculatePay()}`)

console.log(`\nName: ${salariedWorker._name}\nTotal Salary: ${salariedWorker.applyTax(salariedWorker.calculatePay())}`)