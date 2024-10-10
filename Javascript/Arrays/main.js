// Chapter # "15","16","17" "Array"

var num1 = ["Motton" , "Checken" , "Beef" , "Malai boti"];
console.log(num1);

    // Push method use to add at last
// num1.push("Biryani");
// console.log(num1);

    // Pop method use to remove at last
// num1.pop();
// console.log(num1);

    // Shift method use to remove in first element
// num1.shift();
// console.log(num1);

    // unshift method use to add in first element 
// num1.unshift("Tikka");
// console.log(num1);

    // (1) is index (2) is lenght and third is add
// num1.splice(1, 2, "Korma", "Rasmalai");
// console.log(num1);

    // sort method is to convert assanding order
// var num2 = ["52", "85", "20", "12", "19", "25", "53", "10", "20"];
// console.log(num2);
// num2.sort();
// console.log(num2);

    // Reverse method is use to convert dessanding order
// var num2 = ["52", "85", "20", "12", "19", "25", "53", "10", "20"];
// console.log(num2);
// console.log(num2.reverse());
    

    // Join method is use to join word
// var num3 = ["Muhammad", "Asad", "Javed", "Aziz"]
// console.log(num3);
// console.log(num3.join (""));

    // Split method is use to convert to string
// var num3 = "Muhammad Asad Javed Aziz"
// console.log(num3.split(" "));


// Chapter # 18 "For loop"

    // Even number
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

    // Odd number
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

    // Text vertical in line
// let word = "MuhammadAsadJaved"
// for (let char of word) {
//     console.log(char);
// }

let bio = {
    name: "Rahman",
    age: 31,
    grade: "Fail"
};
for (let key in bio) {
    console.log(`${key}: ${bio[key]}`);
}

// let cities = ["Karachi", "Lahore", "Islamabad"];
// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// let num = 1234;
// let reversed = 0;

// while (num !== 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(reversed); 

// let input;
// do {
//     input = prompt("Enter 'good' to stop:");
// } while (input !== "good");
// console.log("You entered 'yes', loop stopped.");


    
