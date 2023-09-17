//         //   Class Task
//         //   Q3
 for(var i = 1; i<=10; i++){
      document.write(i + "<br>")
}
            // Q4
var userInput = +prompt("Enter a number to generate a multiplication table");
var userInputlength = +prompt("Enter a length");
for(var i = 1; i<=userInputlength; i++){
    document.write(userInput + "x" + i + "=" + userInput*i + "<br>")
}
//             // Q5
var fruitName = prompt("Enter your desired fruit");
arr = ["apple", "banana", "mango", "orange","strawberry"];
document.write(arr[0] + "<br>" +arr[1] +"<br>" +arr[2] +"<br>" +arr[3] +"<br>" +arr[4] ) 
for (var i = 0; i <= arr.length; i++) {
  if(fruitName === arr[0]) {
    alert("Apple")
  }
  else if (fruitName === arr[1]) {
    alert("Banana")
  }
  else if (fruitName === arr[2]) {
    alert("Mango")
  }
  else if (fruitName === arr[3]) {
    alert("Orange")
  }
  else if (fruitName === arr[4]) {
    alert("StrawBerry") 
  }
}
//             // Q6
document.write("<b>" + "Counting :" + "</b>" + "<br>");
document.write(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 + "<br>");
document.write("<b>" + "Reverse Counting :" + "</b>" + "<br>");
document.write(10,9,8,7,6,5,4,3,2,1 + "<br>");
document.write("<b>" + "Even :" + "</b>" + "<br>");
document.write(0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 + "<br>");
document.write("<b>" + "Odd :" + "</b>" + "<br>");
document.write(1, 3, 5, 7, 9, 11, 13, 15, 17, 19 + "<br>");
document.write("<b>" + "Series :" + "</b>" + "<br>");
document.write("2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k" + "<br>");
        //    Q7
var userInput = prompt("Welcome to ABC bakery. What would you like to order?");
arr = ["cake","apple pie","cookie","chips","patties"];
if(userInput === arr[0]){
    alert("Yes cake is available");
}
if(userInput === arr[1]){
    alert("Yes pie is available");
}
if(userInput === arr[2]){
    alert("Yes cookie is available");
}
if(userInput === arr[3]){
    alert("Yes chips are available");
}
if(userInput === arr[4]){
    alert("Yes patties are available");
}
else{
    alert("Sorry"+ " " + userInput + " " +"is not currently available");
}
        //  Q8
var numbers = [24 , 53 , 78 , 91 , 12];
var largest = numbers[0];        
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}        
console.log("The largest number is: ", largest);
        // Q9
var numbers = [24, 53, 78, 91, 12];
var smallest = numbers[0]; 
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i]; 
        }
    }
console.log("The smallest number in the array is:", smallest);
    //  Q10
var multiples = 5
for(var i = 1; i<=20; i++) {
    document.write(5*i , " ")
}        
          