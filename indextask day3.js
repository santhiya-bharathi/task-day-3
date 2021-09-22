// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)
// For:
var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}
// for in:
var numbers = [10, 20, 30, 40, 50] 
for(var key in numbers) {
   console.log(key, numbers[key]);
}
// for of:
var numbers = [10, 20, 30, 40, 50] 
for(var number of numbers) {
   console.log(number);
}
//forEach:
var names = ["jerry", "tom", "pluto", "micky", "mini"];

function function1(currentValue) {
   console.log(currentValue);
}
names.forEach(function1);

// 2.Create your own resume data in JSON format
var person = {
   "name" : "Santhiya Bharathi C",
   "educationalQualification" : [["APRIL 2019, B.Sc PHYSICS, MANONMANIUM SUNDARANAR UNIVERSITY,TIRUNELVELI, CGPA: 8.85"], ["MARCH 2016, HIGHER SECONDARY EDUCATION, ST. MICHAEL’S GIRL’S HR.SEC.SCHOOL, TENKASI, PERCENTAGE: 79"], ["MARCH 2014, SECONDARY SCHOOL LEAVING CERTIFICATE, ST. MICHAEL’S GIRL’S HR.SEC.SCHOOL, TENKASI PERCENTAGE: 93.4"],["M.Sc (Physics) 2021 passed out (first year(1st semester) - CGPA 9.0)"]],
   "knownSkills" : ["Ability to communicate well both verbally and in writing", "Public speaking", "Adaptability","Team work","Decision making","Attention and Accuracy in projects", "Highly motivated with positive attributes"],
   "computerSkills" : "Microsoft Office (Word, Excel, PowerPoint)",
   "ExtraCertificate" : "NSS",
   "projects" : "Development of Nano generator",
   "FatherName": "S. CHANDRA SEKARAN",
   "MotherName": "S. JEGATHAMBIGAI",
"DateOfBirth": "09.06.1999",
"Nationality": "Indian",
"Marital Status": "Single",
"Address": "2, MATHANG KOVIL 3RD STREET TENKASI",
"LanguagesKnown": ["Tamil", "English"]
}
console.log(person);
