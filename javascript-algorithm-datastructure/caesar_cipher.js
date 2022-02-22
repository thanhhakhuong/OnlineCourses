function rot13(str) {
    return str.replace(/[A-Z]/g, (letter) => {
      let asciiNum = letter.charCodeAt();
      if(asciiNum > 64 && asciiNum < 78) asciiNum += 13;
      else if(asciiNum > 77 && asciiNum < 91) asciiNum -= 13;
      return String.fromCharCode(asciiNum);
    })
  }