function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 != 0) {
      return "Not leap year.";
    }
    return "Leap year.";
  } else return "Not leap year.";
}
