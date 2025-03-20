//Q1:Count Characters .....................................//...................................

function countalphabet(n) {
    let countA = 0, countD = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === 'A') countA++;  
        if (n[i] === 'D') countD++; 
    }
    return [countA, countD];
}
console.log(countalphabet("AbaDd"));  // Output: [1, 1]


//Q2: Count the Heads .................................//............................

let Str = "prepbytes";  
let num = {};   
let res = "";    

for (let i of Str) {
    num[i] = (num[i] || 0) + 1;
}
for (let i of Object.keys(num).sort()) {
    if (num[i] > 1) {
        res += i + num[i];
    }
}
console.log(res);  // Output: "e2p2"


//Q3: Count the Vowels ...................................//........................

let Str1 = "Prepbytes";  
let num1 = 0;
let vowels = "aeiouAEIOU";

for (let i of Str1) {
    if (vowels.includes(i)) {
        num1++;
    }
}

console.log(num1);  // Output: 2


//Q4: Concatenate the Strings .............................................//............

function str2(S1, S2) {
    return S1 + S2;  
}
console.log(str2("Prep", "bytes"));  // Output: Prepbytes
console.log(str2("Hello", "World")); // Output: HelloWorld


//Q5:  Find Length .........................................................//...........

let Str2 = "CeDqe";  
let num2 = 0;

for (let i of Str2) {  
    num2++;  
}
console.log(num2); 


//Q6: Find the Winner...................................................//....................

function Game_Winner(S) {
    let countA = 0, countD = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') countA++;
        if (S[i] === 'D') countD++;
    }
    if (countA > countD) return "Aditya";
    if (countD > countA) return "Danish";
    return "Draw";
}
console.log(Game_Winner("ADDAAADDDDD")); // Output: "Danish"
console.log(Game_Winner("ADDAAADD"));    // Output: "Draw"


//Q7:Join Strings ..........................//.......................................

function joinStrings(S, P) {
    return S + P;
}
console.log(joinStrings("PrepBytes", "Technologies")); // Output: "PrepBytesTechnologies"
console.log(joinStrings("Java", "Script"));           // Output: "JavaScript"

//Q8: Plaindrome Check .................................//........................

function Plain_Check(S) {
    S = S.toLowerCase(); 
    let left = 0, right = S.length - 1;

    while (left < right) {
        if (S[left] !== S[right]) return "False";
        left++;
        right--;
    }
    return "True";
}
console.log(Plain_Check("Naman")); // Output: "True"
console.log(Plain_Check("hello")); // Output: "False"

//Q9: Reverse the String ................................//...........................

function Reverse_String(S) {
    let reversed = "";
    for (let i = S.length - 1; i >= 0; i--) {
        reversed += S[i]; 
    }
    return reversed;
}
console.log(Reverse_String("I am Anshuman")); // Output: "namuhsna ma I"
console.log(Reverse_String("Hello World"));     // Output: "dlroW olleH"

//Q10: Q10. Match the Strings ................................................//........................

function String_Match(S1, S2) {
    if (S1 === S2) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(String_Match("Prepbytes", "Prepbytes")); // Output: YES
console.log(String_Match("Hello", "hello"));        // Output: NO
console.log(String_Match("Code", "Code "));         // Output: NO (Space matters!)

//Q11: String Replace ........................................................//.......................

let S = "Hi, I am You. You Prepbytes";
let updatedString = S.replace("You. You Prepbytes", "Prepbytes");  
console.log(updatedString);

//Q12: Split the String .................................................//........................

function Split_the_String(Str3) {
    return Str3.split(" "); 
}
let str3 = "I am Anshuman Vishwakarma";
console.log(Split_the_String(str3));


//Q13: Count the Vowels and Consonants .....................................//.................

function Count_Vowels_Consonants(Str4) {
    let vowels = 0, consonants = 0;

    for (let i of Str4) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || 
            i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U') {
            vowels++;
        } else {
            consonants++;
        }
    }
    console.log(vowels, consonants);
}
Count_Vowels_Consonants("Prepbytes");











