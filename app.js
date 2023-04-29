// Question # 1: 

function question_1(){

    let firstName = prompt("Enter your First Name");
    let lastName = prompt("Enter your last Name");
    let fullName = firstName + " " + lastName ;
    alert("Hello " + fullName);
}


// Question # 2:

function question_2(){

    let favtMoblModel = prompt("What is your favourite Mobile model?");
    let modelLengtth = favtMoblModel.length;
    let firstLine = "My favourite phone is " + favtMoblModel ;
    let secondLine =  "length of string " + modelLengtth;
    alert(firstLine + "\n " + secondLine)
}


// Question # 3

function question_3(){

    let letterName = "Pakistani";
    alert("index of 'n' :" + letterName.indexOf("n"));
}




// Question # 4


// let greetingIndex = "Hello World";
// console.log(greetingIndex.lastIndexOf("l"))


// Question # 5

// let pakName = "Pakistani";
// let resultOFPakName = pakName.slice(3,4)

// console.log(resultOFPakName)


// Question # 6

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your last Name");

// alert(firstName.concat()+ " " + lastName)


// Question # 7

var hydIsl = "Hyderabad";
var afterReplace = "Islam"+hydIsl.slice(5)
console.log(afterReplace)

// OR
// var afterReplace = hydIsl.replace("Hyder","Islam")



// Question # 8





// Question # 16


// var university = "University Of Karachi";

// for(let i=0; i<university.length; i++){
//     console.log(university[i])
// }

// question # 17

// let countryName = prompt("Enter country Name");
// for(let i=0; i<countryName.length; i++){
//     let lastIndex = indexof(countryName.length-1)

//     console.log(lastIndex)
// }


function abc(){

    var num1 = +prompt("Enter Number");
    var num2 = +prompt("Enter Number");
    alert(num1+num2)
    
}


// alert("Hello\nAzeem")

