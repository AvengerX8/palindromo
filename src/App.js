import React, { useState } from 'react';
import checkPalindrome from '../src/functions/checkPalindrome';
import nextPalindromes from '../src/functions/nextPalindromes';
import dateToRoman     from '../src/functions/dateToRoman';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [result, setResult] = useState('');

  const handleCheckPalindrome = () => {
    const isPalindrome = checkPalindrome(date);
    setResult(isPalindrome ? 'A data é um palíndromo!' : 'A data não é um palíndromo.');
  };

  const handleNextPalindromes = () => {
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}-${month}-${year}`;

    const palindromes = nextPalindromes(formattedDate);
    setResult(`Próximas datas palíndromas: ${palindromes.join(', ')}`);
  };

  const handleConvertToRoman = () => {
    const romanDate = dateToRoman(date);
    setResult(`Data em formato romano: ${romanDate}`);
  };

  return (
    <div className="container">
      <h1>Verificação de Data</h1>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <div>
        <button onClick={handleCheckPalindrome}>Verificar Palíndromo</button>
        <button onClick={handleNextPalindromes}>Próximas Datas Palíndromas</button>
        <button onClick={handleConvertToRoman}>Converter para Romano</button>
      </div>
      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
