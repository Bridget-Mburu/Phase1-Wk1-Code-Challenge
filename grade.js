// Student Grade Generator

// A > 79
// B - 60 to 79
// C -  59 to 49 
// D - 40 to 49
// E - less 40


     function grade_generator(marks = 78){ 
    if(marks <=100 && marks >79 ){
        return`You have A`
     } else if(marks <= 79 && marks >= 60){
        return `You have B`
     } else if(marks <= 59 && marks > 49){
        return `You have C`
     } else if(marks <= 49 && marks >= 40){
        return`You have D`
     } else if(marks < 40 && marks >= 0){
        return `You have E`
     } else {
        return `Not in range`
     }
    }


    //  let marks = 100
    // if(marks <=100 && marks >79 ){
    //     console.log('You have A')
    //  } else if(marks <= 79 && marks >= 60) {
    //     console.log('You have B')
    //  } else if(marks <= 59 && marks > 49) {
    //     console.log('You have C')
    //  } else if(marks <= 49 && marks >= 40) {
    //     console.log('You have D')
    //  } else if(marks < 40 && marks >= 0) {
    //     console.log('You have E')
    //  } else {
    //     console.log ('Not in range')
    //  }
