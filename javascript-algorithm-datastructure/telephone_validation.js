function telephoneCheck(str) {
    const re = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
    console.log(str.match(re));
    return re.test(str);
  }
  
  console.log(telephoneCheck("1(555)555-5555"));