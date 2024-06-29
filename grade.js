// Student Grade Generator

function isMarks(marks = 75){
    if(marks <= 100 && marks >79){
        return 'You have A'

    } else if(marks <= 79 && marks <= 60){
        return 'You have B'
    } else if(marks <= 59 && marks < 49){
        return 'You have C'
    } else if (marks <40 && marks >= 0){  
        return 'You have E' 
    } else {
        return 'Not in Range'
    }
}