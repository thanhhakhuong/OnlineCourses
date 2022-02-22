/* 
    Example Input: ["Angela", "Ben", "Jenny"]
    Example Output: Angela is going to buy lunch today!
*/
function whosPaying(names) {

  var randomNumber = Math.floor(Math.random() * names.length);
  var randomPerson = names[randomNumber];
  return randomPerson + " is going to buy lunch today!";

}
