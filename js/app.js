var username = "John";
var userAge = 17;
console.log(typeof(username));
console.log(typeof(userAge));
console.log(typeof(username));

var statement1 = true;
var statement2 = true;
console.log(statement1 || statement2);

var userHeight = 1.6;
if (userHeight > 2) {
    console.log("User is tall");
}else {
    console.log("User is NOT old enough! He is actually"  + userHeight);
}

var user = "John";
var userAge = 26;
isblonde=true;

if (user == "Jane"){
    console.log("Nice hair");
}
else if(user == "John"){
    if(userAge < 18){
        console.log("nice hair");
    }
    else if (userAge > 25){
        console.log("Welcome back");
    }
}else {
    console.log("How do you do");
}



