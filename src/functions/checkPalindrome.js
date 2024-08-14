function checkPalindrome(date) {
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}${month}${year}`;

    const reversedDate = formattedDate.split('').reverse().join('');
    return formattedDate === reversedDate;
  }
  
  export default checkPalindrome;