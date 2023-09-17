        // Q1
// for(var i=1;i<=10;i++ ){
//     alert("Well Played");
// }


//  Q2
// for(var i = 1;i<=12;i++){
//     console.log("Absolute Sheer dominance");
// }


//  Q3
for(var i=0;i<=4;i++)


//  Q4
for(var h = 0;h<100;h++) {
    console.log("The City of Lights");
}


//   Q5
for(var i=4; i>1 ;--i){
    console.log("Bleed Green");
}


//     //    Q6
arr = ["biryani","qorma","nihari"];
var a = arr.length;
console.log(a);


//   Q7
var flag = true;
console.log("match");


//    Q8
arr = ["goldfish" , "cat" , "parrot" , "rabbit"];
for (var i=1; i<=arr.length; i++){
    console.log("Pets Available");
}


//  Q9
for(var i=1; i<=10; i++){
    if(i === 2){
        alert("It should be one");
    }
    else{
        alert("Take care");
    }
}


// Q10
arr = ["hasan","taha","hamza","sami"];
var firstName = prompt("Please Enter your Name");
for(var i=1; i<=arr.length; i++){
    if(firstName === arr[0]){
        alert("Enter");
    }
    else{
        alert("Please Enter correct username");
    }
}


// Q11
var userInput = prompt("Please Choose Your Team")
list = ["fcb","rma","atm","acm"]
var matchFound = false;
for (var i = 0; i < list.length; i++) {
if (userInput === list[i]) {
alert("Match found");
matchFound = true; break;
}
else{
    alert("Match not found");
}
}


// Q12
var firstArr = ["a","b","c","d","e","f"];
var secondArr = ["1","2","3","4","5","6"];
var result = "";
for(var i=0; i<firstArr.length; i++){
     for(var j=0; j<secondArr.length; j++){
     result += firstArr[i] + secondArr[j] + "<br>";    
    }
}
document.write(result);
