// alert(prompt("Type your message: ").slice(0, 140));

/* var myName = prompt("What's your name? ");
alert(myName.toUpperCase());
alert(myName.toLowerCase());
alert(myName.slice(0, 1).toUpperCase() + myName.slice(1).toLowerCase()); */

/* var dogAge = prompt("How old is your dog? ");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years."); */

/*function getName() {
    console.log("Jonathan");
}

getName();*/

/* var n = Math.random();
n *= 6;
n = Math.floor(n) + 1;
console.log(n); */

/* var name1 = prompt("Type the first name: ");
var name2 = prompt("Type the second name: ");
var loveScore = Math.floor(Math.random() * 100) + 1; // 1 - 100

if (loveScore < 30) {
    alert("The lovescore between " + name1 + " and " + name2 + " is " + loveScore 
      + " %." + " You love each other like oil loves water.");
} 

if (loveScore >= 30 && loveScore <= 70) {
    alert("The lovescore between " + name1 + " and " + name2 + " is " + loveScore 
      + " %." + " You love each other.");
} 

if (loveScore > 70) {
    alert("The lovescore between " + name1 + " and " + name2 + " is " + loveScore 
      + " %. You love each other like Kanye loves Kanye.");
} */

/*function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you are underweight.";
    }
    
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you have a normal weight.";
    }
    
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you are overweight.";
    }
    return interpretation;
}

bmiCalculator(60, 2); */

/*function isLeap(year) {  
    if ((year % 4) === 0) {
        if ((year % 100) === 0) {
            if ((year % 400) === 0) {
                return "Leap year";
            } else {
                return "Not leap year";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
} */

/* var guestList = ["Pedro", "Maria", "João", "Lara", "Márcia", "Gilberto"];

console.log(guestList[0]);
console.log(guestList.includes("Maria")); */

/* var guestList = ["Pedro", "Maria", "João", "Lara", "Márcia", "Gilberto"];
var guestName = prompt("What's your name? ");
var youAreInvited = guestList.includes(guestName);

if (youAreInvited) {
    console.log("You are invited.");
} else {
    console.log("You are not invited.");
} */

/* var output = [];
output.push(1);
console.log(output);

function fizzBuzz() {
    output.push(output[(output.length - 1)] + 1);
    console.log(output);
} */


/*
var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    
    else if (count % 3 === 0) {
        output.push("Fizz");
    }

    else if (count % 5 === 0) {
        output.push("Buzz");
    }
        
    else {
        output.push(count);
    }
    
    count++;
    console.log(output);
}
*/

/*
function whosPaying(names) {
    var whoisPay = Math.floor(names[(Math.random() * names.length) - 1]);
    return whoisPay + " is going to buy lunch today!";   
}
*/

/* var i = 1;

while (i < 2) {
    console.log(i);
    i++;
} */

/*var output = [];
var count = 1;

function fizzBuzz() {

    while (count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
    
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
            
        else {
            output.push(count);
        }
        
        count++;
        
    }
    console.log(output);
}

fizzBuzz() */

/* var bottles = 99

while (bottles > 0) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + 
                " bottles of beer.");
    console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
    console.log("")
    bottles--;
} */

/* for (var i = 0; i < 2; i++) {
    //Do something
    console.log(i);
} */


/*var output = [];

function fizzBuzz() {

    for (var count = 1; count < 101; count++) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
    
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
            
        else {
            output.push(count);
        }
        
    }
    console.log(output);
}

fizzBuzz(); */

/* function fibonacciGenerator (n) {

    var output = []
    if (n === 1) {
        output = [0];
    }
    
    else if (n === 2) {
        output = [0, 1];
    }

    else if (n > 2) {
        output = [0, 1];
        while (output.length !== n) {
            output.push(output[output.length - 1] + output[output.length - 2]);
            }
        }
    return output;
}

fibonacciGenerator(7); */