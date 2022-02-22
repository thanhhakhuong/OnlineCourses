
function palindrome(str) {
    let newStr = str.replace(/[_\W]/g, '').toLowerCase();
    return newStr === newStr.split('').reverse().join('');
  }