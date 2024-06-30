//Net Salary Calculator

//Defining variables
 let basicSalary = 2000
let benefits = 3000

//Gross Salary = Basic Salary + Benefits
if(isNaN(basicSalary) || isNaN(benefits)){
   console.log('The input entered must be a number')
} else if (basicSalary <= 0 || benefits <=0){
   console.log('The input entered must be a number greater than 0 ')
} else {
   let grossSalary = basicSalary +benefits
   console.log(`${grossSalary}`)
}
const grossSalary = basicSalary + benefits
  
//Gross Salary (ANUALLY)
// PAYE (i.e. Tax)   
let PAYE = 0 
if (grossSalary <=288000){
   console.log (`${grossSalary * 0.1}`)
} else if (grossSalary >= 288001 && grossSalary <= 388000){
   console.log (`${28800 + (grossSalary - 288000) * 0.25} `)
} else if (grossSalary >= 388001 && grossSalary <= 6000000){
   console.log(`${53800 + (grossSalary - 388000) * 0.3} `)
} else if (grossSalary >= 6000001 && grossSalary <= 9600000){
   console.log (`${1737400 + (grossSalary - 6000000) * 0.325}`)
} else {
   console.log (`${2907400 + (grossSalary - 9600000)* 0.35}`)
}
  

  
// // NHIFDeductions
let NHIFDeductions = 0
if(grossSalary < 5999 ){
   console.log(NHIF = 150)
} else if (grossSalary >= 6000 && grossSalary <=7999){
   console.log(NHIF = 300)
} else if (grossSalary >= 8000 && grossSalary <= 11999){
   console.log (NHIF = 400)
} else if (grossSalary >=1200 && grossSalary <= 14999){
   console.log (NHIF = 500)
} else if (grossSalary >=15000 && grossSalary <= 19999){
   console.log (NHIF = 600)
} else if (grossSalary >= 20000 && grossSalary <= 24999){
   console.log (NHIF = 750)
} else if (grossSalary >= 25000 && grossSalary <= 29999){
   console.log (NHIF = 850)
} else if (grossSalary >= 30000 && grossSalary <= 34999){
   console.log (NHIF = 900)
} else if (grossSalary >= 35000 && grossSalary <= 39999){
   console.log (NHIF = 950)
} else if (grossSalary >= 40000 && grossSalary <= 44999){
   console.log (NHIF = 1000)
} else if (grossSalary >=45000 && grossSalary <= 49999){
   console.log (NHIF = 1100)
} else if (grossSalary >= 50000 && grossSalary <= 59999){
   console.log (NHIF = 1200)
} else if (grossSalary >= 60000 && grossSalary <= 69999){
   console.log (NHIF = 1300)
} else if (grossSalary >= 70000 && grossSalary <= 79999){
   console.log (NHIF = 1400)
} else if (grossSalary >= 80000 && grossSalary <= 89999){
   console.log (NHIF = 1500)
} else if (grossSalary >= 90000 && grossSalary <= 99999){
   console.log (NHIF = 1600)
} else if (grossSalary >100000){  
   console.log (NHIF = 1700)
}

// NSSFDeductions 6% of the Gross Salary
let NSSFDeductions = (grossSalary * 0.06)
 console.log(`${grossSalary * 0.06}`)

//Individual's Net Salary Anually
const netSalary = grossSalary - (PAYE + NHIFDeductions + NSSFDeductions ) 
  console.log(`${grossSalary - (PAYE + NHIFDeductions + NSSFDeductions)}`)
