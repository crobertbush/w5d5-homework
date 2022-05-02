//1.
let yourArray = ["Dad", 4, true, 4, "z"];

//2.
myArray[1] = "not b anymore"

//3.
arr.unshift("I", 2, "three");
arr.push(7, "VIII", 9);

//4.
let popped = arr.pop() // Change this line
let shifted = arr.shift() // Change this line

//5.
arr.splice(1, 4);

//6.
arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

//7.
arr = arr.slice(2, 4);

//8.
newArr.push([...arr]);

//9.
let sentence = ["learning", ...fragment, "is", "fun"];

//10.
if(arr.indexOf(elem) >= 0) {
    return true;
  } 
  return false;

//11.
for(let i = 0; i < arr.length; i++) {
    if(arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);

//12.
['unshift', false, 1, 2, 3, 'complex', 'nested', ["deep"]],
  ['loop', 'shift', [6, 7, 1000, ["deeper"], 'method']],
  ['concat', [false, [true, ["deepest"], 'spread'], 'array']],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']

//13.
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

//14.
userActivity.data.online = 45;

//15.
return foods[scannedItem];

//16.
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

//17.
if( userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")) {
      return true;
    } 
    return false;

//18.
let result = 0;

for(let user in usersObj) {
  if(usersObj[user].online === true) {
    result++;
  }
} return result;

//19.
return Object.keys(obj);

//20.
userObj.data.friends.push(friend);
return userObj.data.friends;
