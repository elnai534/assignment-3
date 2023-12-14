/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let numberOfDays = 0;
let elements = [];

window.addEventListener('load', function () {
  costPerDay = 0; 
  numberOfDays = 0; 
  elements = document.querySelectorAll('.small-button'); 
  updateCost();
});
function updateCost() {
  const totalCost = costPerDay * numberOfDays;
  console.log('Total Cost:', totalCost);
  const calculatedCostElement = document.getElementById('calculated-cost');
  calculatedCostElement.textContent = totalCost;

  elements.forEach(function (element) {
    element.classList.add('modified');
  });
}
function resetVariables() {
  costPerDay = 0;
  numberOfDays = 0;
  elements = [];

  // Perform any additional actions required after resetting or updating the variables
}
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function handleDayClick(event) {
    const clickedDay = event.target;
  
    if (!clickedDay.classList.contains('clicked')) {
      clickedDay.classList.add('clicked');
      numberOfDays++;
    } else {
      clickedDay.classList.remove('clicked');
      numberOfDays--;
    }
  
    updateCost();
  }
const dayButtons = document.querySelectorAll('.blue-hover');
dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener('click', handleDayClick);
});
function handleClearButtonClick() {
    const dayButtons = document.querySelectorAll('.blue-hover');
  
    dayButtons.forEach(function(dayButton) {
      if (dayButton.classList.contains('clicked')) {
        dayButton.classList.remove('clicked');
      }
    });
  
    numberOfDays = 0;
    updateCost();
}
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', handleClearButtonClick);
/********* change rate *********/
function handleHalfDayButtonClick() {
  const halfDayButton = document.getElementById('half');
  const fullDayButton = document.getElementById('full');

  halfDayButton.classList.add('clicked');
  fullDayButton.classList.remove('clicked');

  costPerDay = 20;
  updateCost();
}
const halfDayButton = document.getElementById('half');
halfDayButton.addEventListener('click', handleHalfDayButtonClick);
const fullDayButton = document.getElementById('full');
const calculatedCost = document.getElementById('calculated-cost');
fullDayButton.addEventListener('click', function () {
    // Set the daily rate to $35
    const dailyRate = 35;
    fullDayButton.classList.add('clicked');
    const halfDayButton = document.getElementById('half');
    halfDayButton.classList.remove('clicked');
    const totalCost = dailyRate;
    calculatedCost.textContent = totalCost;
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


