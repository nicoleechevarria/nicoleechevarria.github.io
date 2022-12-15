document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

function getTodaysDate() 
{
    let a;
    let time;
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    setInterval(() => 
    {
        a = new Date();
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + ' and the date is ' + days[a.getDay()] + ', ' + a.getDate() + ' ' + months[a.getMonth()] + ", " + a.getFullYear();
        document.getElementById('time').innerHTML = time;
    }, 1000);
}
function promptUser() 
{
    let fullName = document.getElementById("fullName").value;
    let feeling = document.getElementById("feeling").value;
    document.getElementById('greeting').innerHTML = `Welcome to the home of the Noble Elk ${fullName} ! We feel ${feeling} too!`;
}

function elkAge() 
{
    let age = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
    var elkAge = age[Math.floor(Math.random() * age.length)];
    document.getElementById('elkAge').innerHTML = 'Your elks age is:' + elkAge;
}

function myAlert() {
    alert("Nice! You've been alerted by the Noble Elk");
}
function sumNumber()
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let sum = parseInt(number1) + parseInt(number2);

    document.getElementById("sumResponse").innerHTML = sum;
}
