const converted = {
    M: 1000, 
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  function convertToRoman(num) {
    let final = '';
    for (let roman in converted) {
      while (num >= converted[roman]) {
        num -= converted[roman];
        final += roman;
      }
    }
   return final;
  }
  
  console.log(convertToRoman(99));
  // 99 đi từ trên xuống dưới tìm số đầu tiên mà nó lớn hơn
  // 99 lớn hơn 90, final thêm XC đằng trước
  // 99 trừ đi 90 còn 9, đi từ trên xuống dưới tìm số đầu tiên lớn hơn
  // lớn hơn 9 thêm IX đằng sau XC
  // ra được 99 là XCIX