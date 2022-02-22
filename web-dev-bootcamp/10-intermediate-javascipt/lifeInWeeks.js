function lifeInWeeks(age) {
  var years = 90 - age;
  var days = years * 365;
  var weeks = years * 52;
  var months = years * 12;
  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}
