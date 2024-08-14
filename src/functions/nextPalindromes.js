function isPalindrome(date) {
    const formattedDate = date.replace(/-/g, '');
    const reversedDate = formattedDate.split('').reverse().join('');
    return formattedDate === reversedDate;
  }
  
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  function nextPalindromes(startDate) {
    const [day, month, year] = startDate.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const palindromes = [];
  
    while (palindromes.length < 5) {
      date.setDate(date.getDate() + 1);
      const nextDate = formatDate(date);
      if (isPalindrome(nextDate.replace(/-/g, ''))) {
        palindromes.push(nextDate);
      }
    }
  
    return palindromes;
  }
  
  export default nextPalindromes;
  