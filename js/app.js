var userAge = 17;
var is_subscribed = true;

if (userAge < 18){
    if (is_subscribed){
    console.log("User is under 18 and is subscribed");
    }else if (!is_subscribed){
    console.log("User is under 18 and is not subscribed");
    }
}else if (userAge > 18){
    if (is_subscribed){
        console.log("User is over 18 and is subscribed");
    }else if (!is_subscribed) {
        console.log("User is over 18 and is not subscribed");
    }
}
