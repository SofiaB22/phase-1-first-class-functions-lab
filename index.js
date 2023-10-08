// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = array => {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => {
    return function fareMultiplier(num) { return num * num}
}

const fareDoubler = num => num * 2
const fareTripler = num => num * 3

const selectDifferentDrivers = (arrayOfDrivers, func) => {
    return func(arrayOfDrivers);
}