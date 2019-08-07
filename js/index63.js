// Define year variable and assign a number between 2006 and 2017
// Define champion variable and assing a value between 2006 and 2017
// Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
// If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
// Use a switch statement to check for the selected year value `` 2017 - Pittsburgh Penguins 2016 - Pittsburgh Penguins 2015 - Chicago Blackhawks 2014 - Los Angeles Kings 2013 - Chicago Blackhawks 2012 - Los Angeles Kings 2011 - Boston Bruins 2010 - Chicago Blackhawks 2009 - Pittsburgh Penguinas 2008 - Detroit Red Wings 2007 - Anaheim Ducks 2006 - Carolina Hurricanes
// * Try all the posible cases/scenarios (even the error message) by changing the year value

let year = 2013;
let champion = 2016;
if(!(2006 < year && year < 2017) || !(2006 < champion && champion < 2017)){
    console.log("Sorry, please try a differnt year");
} else
    console.log(champion+" was the "+year+" NHL Champion");