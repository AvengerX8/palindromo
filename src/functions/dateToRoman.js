const romanNumerals = {
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
    I: 1,
  };
  
  function convertToRoman(num) {
    let roman = '';
    for (let i in romanNumerals) {
      while (num >= romanNumerals[i]) {
        roman += i;
        num -= romanNumerals[i];
      }
    }
    return roman;
  }
  
  function dateToRoman(date) {
    const [year, month, day] = date.split('-').map(Number);
    return `${convertToRoman(day)}-${convertToRoman(month)}-${convertToRoman(year)}`;
  }
  
  export default dateToRoman;
  