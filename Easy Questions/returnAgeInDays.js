/*
Create a function that takes the age and 
return the age in days.
*/

function calcAge(age) {
    const ageInDays = age * 365
    if(age > 0){
        return ageInDays
    }else{
       return 0
    }
}

console.log(calcAge(-1))