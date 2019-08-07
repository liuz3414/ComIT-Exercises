// Define monthNumber variable and assign a number between 1 and 12
// Define monthName variable and assign null as value
// define monthDays variable and assign null as value
// Use a switch statement
// Depending the monthNumber value assign the corresponding monthName and monthDays values
// January - 31 days
// February - 28 days in a common year and 29 days in leap years
// March - 31 days
// April - 30 days
// May - 31 days
// June - 30 days
// July - 31 days
// August - 31 days
// September - 30 days
// October - 31 days
// November - 30 days
// December - 31 days
// If monthName & monthDays are null then show an error message
// Else show the following message: %monthName% is the selected month and has %monthDays%
// Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value

let monthNumber = 11;
let monthName = null;
let monthDays = null;

switch(monthNumber) {
    case 1:
        monthName = "January";
        monthDays = 31;
        break;
    case 2:
        monthName = "Feburary";
        monthDays = 28;
        break;
    case 3:
        monthName = "March";
        monthDays = 31;
        break;
    case 4:
        monthName = "April";
        monthDays = 30;
        break;
    case 5:
        monthName = "May";
        monthDays = 31;
        break;
    case 6:
        monthName = "June";
        monthDays = 30;
        break;
    case 7:
        monthName = "July";
        monthDays = 31;
        break;
    case 8:
        monthName = "August";
        monthDays = 31;
        break;
    case 9:
        monthName = "September";
        monthDays = 30;
        break;
    case 10:
        monthName = "October";
        monthDays = 31;
        break;
    case 11:
        monthName = "November";
        monthDays = 30;
        break;
    case 12:
        monthName = "December";
        monthDays = 31;
        break;
}

if(monthName == null || monthDays == null){
    console.log("Error message");
} else {
    console.log(monthName + " is the selected month and has " + monthDays);
}