//Net Salary Calculator

//Defining variables
 let basicSalary = 2000000
let benefits = 300000

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
   PAYE = (`${grossSalary * 0.1}`)
} else if (grossSalary >= 288001 && grossSalary <= 388000){
   PAYE = (`${28800 + (grossSalary - 288000) * 0.25} `)
} else if (grossSalary >= 388001 && grossSalary <= 6000000){
   PAYE = (`${53800 + (grossSalary - 388000) * 0.3} `)
} else if (grossSalary >= 6000001 && grossSalary <= 9600000){
   PAYE = (`${1737400 + (grossSalary - 6000000) * 0.325}`)
} else {
   PAYE = (`${2907400 + (grossSalary - 9600000)* 0.35}`)
}
 console.log(`${PAYE}`)
  

  
// // NHIFDeductions
let NHIFDeductions = 0
if(grossSalary < 5999 ){
    (NHIFDeductions = 150)
} else if (grossSalary >= 6000 && grossSalary <=7999){
   (NHIFDeductions = 300)
} else if (grossSalary >= 8000 && grossSalary <= 11999){
   (NHIFDeductions = 400)
} else if (grossSalary >=1200 && grossSalary <= 14999){
   (NHIFDeductions = 500)
} else if (grossSalary >=15000 && grossSalary <= 19999){
   (NHIFDeductions = 600)
} else if (grossSalary >= 20000 && grossSalary <= 24999){
  (NHIFDeductions = 750)
} else if (grossSalary >= 25000 && grossSalary <= 29999){
  (NHIFDeductions = 850)
} else if (grossSalary >= 30000 && grossSalary <= 34999){
   (NHIFDeductions = 900)
} else if (grossSalary >= 35000 && grossSalary <= 39999){
   (NHIFDeductions = 950)
} else if (grossSalary >= 40000 && grossSalary <= 44999){
   (NHIFDeductions = 1000)
} else if (grossSalary >=45000 && grossSalary <= 49999){
   (NHIFDeductions = 1100)
} else if (grossSalary >= 50000 && grossSalary <= 59999){
   (NHIFDeductions = 1200)
} else if (grossSalary >= 60000 && grossSalary <= 69999){
   (NHIFDeductions = 1300)
} else if (grossSalary >= 70000 && grossSalary <= 79999){
   (NHIFDeductions = 1400)
} else if (grossSalary >= 80000 && grossSalary <= 89999){
   (NHIFDeductions = 1500)
} else if (grossSalary >= 90000 && grossSalary <= 99999){
   (NHIFDeductions = 1600)
} else if (grossSalary >100000){  
   (NHIFDeductions = 1700)
}  
 console.log(`${NHIFDeductions}`)

// NSSFDeductions 6% of the Gross Salary
let NSSFDeductions = (grossSalary * 0.06)
 console.log(`${grossSalary * 0.06}`)
 

//Individual's Net Salary Anually
let netSalary = (`${grossSalary - (PAYE + NHIFDeductions + NSSFDeductions)}`)
  console.log(`${grossSalary - PAYE - NHIFDeductions - NSSFDeductions}`)
