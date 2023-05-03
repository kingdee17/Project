var add = document.getElementById(addition);
var subtract = document.getElementById(subtraction);
function listItems( )




const yommy=(Name,age,place,person)=>{
    return `My name is ${Name}, I am ${age} years old. I live in ${place}. I hate ${person}.`
}
console.log(yommy("Damife", 20, "birmingham","ridwan"  ))

function tommy(){
    return 6*6+4;
}
console.log(tommy())
setTimeout(yommy,10000)
 
console.log(Date())

const formula=(c)=>{
    return c*(9/5)+32;
}
console.log(formula(100))

var foo="Are you up to 18"
var is=", if not "
var ridwan=", get the heck outta here."

var numbers=[1, "tom", 33717, "tyler perry", "eritrea", 40368, "rolepole"];
for(var i=0; i<numbers.length; i++) {
    if (typeof numbers[i]==="number") {
        console.log(numbers[i]+2)
    }
}

numbers.push("yam")
 console.log(numbers)


var firstname = document.getElementById("one");
var gender = document.getElementById("two");
var age = document.getElementById("three");
var nationality = document.getElementById("four");
const btn = document.querySelector("#submit");
var display = document.getElementById("display");

btn.addEventListener("click", function displayOutput(){
   display.append(`My Name is ${firstname.value}, I am a ${gender.value}, I am ${age.value} years old. I am a ${nationality.value}.`);
}
)






var friends=["Marvellous", "Ridwan", "Diogo", "omo"];
alert(friends[2]);
var names=["David"];
if(names[0]==="David")
{alert("That's my name too!")};
var myVariable=4;
if(myVariable>5)
{alert("upper");
} else
{alert("lower");
}

var go=25;

console.log(typeof go.toString());

var to="i yam"
console.log(typeof Number(to ))
console.log( `Are you up to ${foo} , if ${is} , get ${ridwan}`)

var tyne=[23, "rat", "3456"];
alert(tyne[0]);
alert(tyne[1]);
alert(tyne[2]);
if(tyne[1]==="rat")
{console.log("this is my house ")} 
else if(tyne[1]==="tar")
{console.log("this dumb")}
else
{console.log("this is long")};

if(tyne[1]!=="tar"){console.log("you missed your road")};





constnumberTocurre