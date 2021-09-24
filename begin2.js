
/// 30 days array

const today = new Date();
const oneMonth = new Date();
oneMonth.setDate(today.getDate()+30);

//console.log(oneMonth)


//blocked date

const p1_start = '2021-09-30'
const p1_end = '2021-10-08'
let p1_dates = []

const p2_start = '2021-09-24'
const p2_end = '2021-10-06'
let p2_dates = []



const addDays = (date, days = 1) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const dateRange = (start, end, range = []) => {
  if (start > end) return range ;
  const next = addDays(start, 1);
  return dateRange(next, end, [...range , start]);
};

const pApref = dateRange(new Date(p1_start), new Date(p1_end));
const pBpref = dateRange(new Date(p2_start), new Date(p2_end));

const monthArray = dateRange(today, oneMonth)

//console.log(personApref)
//console.log(range);

// console.log(pApref.map(date => date.toISOString().slice(0, 10)))
// console.log(pBpref.map(date => date.toISOString().slice(0, 10)))
// console.log(monthArray.map(date => date.toISOString().slice(0, 10)))




///  Remove an array from another array

const myArray = (monthArray.map(date => date.toISOString().slice(0, 10)))
const toRemove = new Set(pApref.map(date => date.toISOString().slice(0, 10)))
const toRemove1 = new Set(pBpref.map(date => date.toISOString().slice(0,10)))

// const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const toRemove = new Set(['b', 'c', 'g']);



//console.log(myArray)
//console.log(toRemove)
const difference = myArray.filter( x => !toRemove.has(x) );
const difference1 = difference.filter( x => !toRemove1.has(x) );

console.log('A - total days in month')
console.log(myArray)

console.log('B - blockedDays')
console.log(toRemove)


console.log('C Difference between A and B')
console.log(difference); // ["a", "d", "e", "f"]

console.log('D - Difference between C and prefB')
console.log(difference1)

