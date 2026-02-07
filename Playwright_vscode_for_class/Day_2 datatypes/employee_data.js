let name = "Prakash";
console.log("Employee_name is :"+name)

let age = 30;
console.log("Employee's age is :"+age)
 
let blood_grp = "A1 +ve";
console.log("Employee Bloog group is :"+blood_grp);

let emp_id = 87664;
console.log("Employee id :"+emp_id);

let ratings = 9.5;
console.log("Employee rating :" +ratings);

let emp_num = BigInt(956748383599969665995956);
console.log("Employee mobile_num is :",emp_num);

let emp_recoords = null;
console.log("Employee's previous records :"+emp_recoords);

let undefinedValue;
console.log("Employee's previus work history :" +undefinedValue)

let senior_citizen = true
console.log("Employee is senior citizen :" + senior_citizen)

let a = "id"
let b = "id"
console.log("a===b",a===b)

let sym1=Symbol("id")
let sym2=Symbol("id")
console.log("sym1===sym2:",sym1===sym2)

//non- primitive

let personal = {
    "Gender" : "Male",
    "Age" :25,
    "skin_tone" : "Brown"
}
console.log("Object is :",personal)

let colors = ["Red","Green","Blue"]
console.log("colors are:",colors)


function greet(first_name,sur_name){
    console.log("welcome",first_name,sur_name,"and your age is",age1)
}
first_name = "Prakash"
sur_name = "Raj"
age1= 21

greet(first_name,sur_name,age1)


function calculator(){
    total = n1+n2
    console.log("The total is",total)
}
n1=5
n2=5
calculator(n1,n2)