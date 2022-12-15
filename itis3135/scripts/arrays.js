window.onload = function()
{
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("person").focus;
};

let personArray = ["Employee"];
let salaryArray = ["Salary"];

function addSalary()
{
    var enteredSalary = parseFloat(document.getElementById("salary").value);
    var enteredPerson = document.getElementById("person").value;

    enteredSalary = parseFloat(enteredSalary);
    if(enteredPerson !== "" && enteredSalary >= 0) 
    {
        if(personArray.includes(enteredPerson))
        {
            salaryArray[personArray.indexOf(enteredPerson)] = enteredSalary;
        } else
        {
            personArray.push(enteredPerson);
            salaryArray.push(enteredSalary);
        }
    }
    else if (enteredPerson === ""){alert("You didn't select anyone");}
    else{alert("That's not a salary.");}
    document.getElementById("salary").value = "";
    document.getElementById("person").focus();
    var namePosition = $('person').position();
    
}

function displayResults()
{
    var average = 0;
    var sum = 0;
    var personWithHighestSalary = "";
    var maxNumber = 0;

    for(i = 1; i < salaryArray.length; i++)
    {
        sum += salaryArray[i];
        if(maxNumber < salaryArray[i]){maxNumber = salaryArray[i];}
    }
    console.log(sum);
    average = (sum / salaryArray.length);
    console.log(average);
    personWithHighestSalary = personArray[salaryArray.indexOf(maxNumber)];

    document.getElementById("results").appendChild(document.createTextNode("The average salary was $" + average.toFixed(2) + ", thats quite a bit!"));
    document.getElementById("results").appendChild(document.createTextNode(personWithHighestSalary + " had the highest salary of $" + maxNumber.toFixed(2)));
    
    document.getElementById("results").innerHTML = "The average salary is $" + average.toFixed(2) + ", thats quite a bit! " + personWithHighestSalary + " had the highest salary of $" + maxNumber.toFixed(2);
}

function displaySalary()
{
    let data = [personArray,salaryArray];
    var tableLocation = document.getElementById("table_results");
    tableLocation.innerHTML = "";
    var table = document.createElement('TABLE');
    table.className = "simpleTable";
    table.border = '1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < personArray.length; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
      if(i==0){tr.className = "head";}
      else if(i % 2 == 1){tr.className = "odd";}
        for (var j = 0; j < 2; j++) {
            var td = document.createElement('TD');
            if(j==0){td.appendChild(document.createTextNode(data[j][i]));}
            else{td.appendChild(document.createTextNode("$\t" + data[j][i]));}
            tr.appendChild(td);
        }
    }
    tableLocation.appendChild(table);
}