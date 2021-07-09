var userAge = [10, 26, 16, 44, 18, 20];
var is_subscribed = [true, true, false, true, false, false];
var arrayLength = userAge.length; // length property returns length of array, and makes the code more dynamic to the length of the array

for (var counter = 0; counter < arrayLength; counter++){

    if (userAge[counter] < 18){
        if (is_subscribed[counter]){
        console.log("User is under 18 and is subscribed");
        }else if (!is_subscribed[counter]){
        console.log("User is under 18 and is not subscribed");
        }else {
            console.log("Input error");
        }
    }else if (userAge[counter] >= 18){ // '>=' will catch 18 yr old and over
        if (is_subscribed[counter]){
            console.log("User is 18 or over and is subscribed");
        }else if (!is_subscribed[counter]) {
            console.log("User is 18 or over and is not subscribed");
        }else {
            console.log("Input error");
        }
    }
}

