# Phase1-Wk1-Code-Challenge

 ## Introduction
 In this document I used javascript to write down solutions of some challenges given. First I creadted a repository in Git Hub with 4 folders which contains the different solutions.

## Instructions
*Code Challenge 1 - Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade.

*Code Challenge 2 - Write a program that takes the speed of a car as input . If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

*Code Challenge 3 - Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the PAYE, NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

## Challenge 1 : Grade Student Generator
The first challenge which is to create a Grade Generator from a range of 0 to 100. First `Enter the marks` in the variable at the top 'let marks'. I used a `if...else if...else` condition to write the function. It displays that 100 to 80 'You have A', 79 to 60 'You have B', 59 to 49 'You have C', 49 to 40 'You have D', less than 40 'You have E',The mark input corresponds the correct output grade as shown above.

## Challenge 2 : Speed Detector
The speed of a car should be less or equal to 70km/s so it is takes up constant as a variable. `Enter the speed of the car` in the 'let carSpeed' after inputing the speed of a car I used the `arithmetic operator` to get the demerit point which is 1 is equal to 5km/s above the constant speed.When the licence of the car passes more than 12 demerits it is suspended hence use of `if..else` statement to determine whether the car is `Ok` or `Licence Suspended`.

## Challenge 3 : Net Salary Calculator
This is a Net Salary Calculator which calculates an individual net salary after the benefits and deductions. It starts off by defining the variables of the basic salary and the benefits using `let`. In this two variables the Basic Salary and Benefits `Enter the values`.The total of this two give the Gross Salary which is the salary before deductions and it is given by use of `if...else` where the input must be a number, it must be greater than 0 for it to be calculated or else an error is detected hence not calculated.
`if...else if...else` statement is used to find  the PAYE which is the taxed by the KRA on the anual gross Salary. The same condition is used to get the NHIF Deductions immediately after.
The NSSF Deduction is equal to 6% of the Gross Salary. Lastly the Individual's Net Salary is equal to the Gross Salary minus the Deductions calculated earlier.

## Conclusion
In this Code Challenge I spent time understanding more about the content learnt by puting it into practice. A lot of skills were grasped during this challenge.




