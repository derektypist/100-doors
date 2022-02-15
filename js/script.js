// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>100 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 100.`;
    } else {
        // Get the Number Information as well as Opened Doors
        txt += `Number of Doors: ${num} <p>`;
        txt += `Final Opened Doors: ${getFinalOpenedDoors(num)}`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Get Final Opened Doors
function getFinalOpenedDoors(numDoors) {
    // Set Up Variables
    let doors = [];
    let i=1, ii=i*i;
    // Loop Until numDoors is Reached
    while (ii <= numDoors) {
        doors.push(ii);
        i++;
        ii = i*i;
    }
    return doors;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}