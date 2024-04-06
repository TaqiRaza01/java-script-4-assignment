// Array for cities (GLOBAL)

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];


// 

// clear  button for input-box

function clrInput() {
    document.getElementById("input").value = "";
}

// clear  button for output-box

function clrOutput() {
    document.getElementById("output").innerHTML = "";
}


// btn simple aler
function simpleAlert() {
    let simpleAlert = input.value
    if (!simpleAlert) {
        document.getElementById("output").innerHTML = "<h4> PLEASE Write Something in Input-Box to alert.</h4>"
    }
    else {
        alert(input.value)
        document.getElementById("output").innerHTML = "<h4>This is simple alert.</h4>"
    }

}

// print my name button

function printMyName() {
    let myName = document.getElementById("input").value     // OR   let myName = input.value

    if (!myName) {
        alert("PLEASE Enter your Name. ")
        return;
    }
    else {
        document.getElementById("output").innerHTML = myName
        document.getElementById("output").style.textAlign = 'center';
    }
}


// Print all cities button
function printAllCities() {
    document.getElementById("output").innerHTML = ""; // Clearing the output on button click prevents data repetition, ensuring content displays only once.

    for (let i = 0; i < cities.length; i++) {
        let count = 1 + i;
        document.getElementById("output").innerHTML += count + ")" + cities[i] + "<br>";
        console.log(cities[i])
    }

}


// ADDING new city in list.


function addCity() {
    let addCity = input.value
    if (!addCity) {
        alert("PLEASE enter city to add.")
        return;
    }
    else {
        cities.push(addCity);
        document.getElementById("output").innerHTML = '<span style="color:green; font-size:20px;">' + addCity + '</span> has been successfully added into the list.';
    }
}


// Generating table

function generateTable() {
    let tableNumber = parseInt(input.value); // Assuming input is the input field where the user enters the number
    if (!tableNumber || isNaN(tableNumber)) {
        alert("Please enter a valid number first to generate its table.");
    } else {
        let tableExtent = prompt("Up to what extent do you want to generate the table?");
        if (!tableExtent || isNaN(tableExtent)) {
            alert("Please enter a valid extent.");
        } else {
            let table;
            for (let i = 1; i <= tableExtent; i++) {
                let result = i * tableNumber;
                table += `${tableNumber} × ${i} = ${result} <br>`;
            }
            document.getElementById("output").innerHTML = tableHTML;
        }
    }
}






















