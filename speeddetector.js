//Speed Detector Generator

//speed limit should be <70
const speedLimit= 70

let carSpeed = 80

//Difference of the actual speed to the speed limit 
//Every 5km/s above the speed limit = 1 demerit point hence difference / 5
let demeritPoints = (`${(carSpeed - speedLimit) / 5}`)
  //if..else condition
if(demeritPoints > 12) {
    console.log("License suspended")
} else {
    console.log("Ok")
}

