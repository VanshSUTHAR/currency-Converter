import React, { useEffect, useState } from 'react'
import './CurrencyConverter.css'
const CurrencyConverter = () => {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("")
  const [result, setResult] = useState(null)


  const rates = {
    USD: 1,
    EUR: 0.86,
    INR: 88.58,
    GBP: 0.76,
    JPY: 155.42,
    AED: 3.67,
    AUD: 1.54, 
    CAD: 1.40,     
    CHF: 0.80,     
    CNY: 7.11,     
    NZD: 1.76,     
    KRW: 1464.86,     
    BRL: 5.33,     
    RUB: 81.05,     
    ZAR: 17.20,     
    MXN: 18.44,     
    SGD: 1.30,     
    TRY: 42.26,     
    SAR: 3.75,     
    SEK: 9.50,     
    NOK: 10.14,
    PLN:3.66,  
    PKR:280.70,
    LKR:307.75,
    BDT:121.80,
    NPR:141.77,
    AFN:66.27,
    KWD:0.31,
    IRR:42000,
    UAH:42.07, 
    NGN:780,
    VND:26378
  };
  const convert = () => {
    if (!amount || isNaN(amount)) {
      setResult("Please enter a valid amount.");
      return;
    }
    const Amount = parseFloat(amount) / rates[fromCurrency];
    const converted = Amount * rates[toCurrency];

    setResult(`${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`);
  };

  return (
    <div className='main'>
      <h2>Currency Converter</h2>

      <div className='amount'>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div className='fromcurrency'>
        <label>From Currency:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USA</option>
          <option value="EUR">EUROPEc</option>
          <option value="INR">INDIA</option>
          <option value="GBP">UK</option>
          <option value="JPY">JPAN</option>
          <option value="AED">UAE</option>
          <option value="AUD">AUSTRALIA</option>
          <option value="CAD">CANADA</option>
          <option value="CHF">SWEETZERLEND</option>
          <option value="CNY">CHINA</option>
          <option value="NZD">NEWZEELAND</option>
          <option value="KRW">SOUTHKOREA</option>
          <option value="BRL">BRAZIL</option>
          <option value="RUB">RUSSIA</option>
          <option value="ZAR">SOUTHAFRICA</option>
          <option value="MXN">MEXICO</option>
          <option value="SGD">SINGAPORE</option>
          <option value="TRY">TURKEE</option>
          <option value="SAR">SAUDIARABIA</option>
          <option value="SEK">SWEEDAN</option>
          <option value="NOK">NORWAY</option>
          <option value="PLN">POLAND</option>
          <option value="PKR">PAKISTAN</option>
          <option value="LKR">SRILANKA</option>
          <option value="BDT">BANGLADESH</option>
          <option value="NPR">NEPAL</option>
          <option value="AFN">AFAGANISTAN</option>
          <option value="KWD">KUWAIT</option>
          <option value="IRR">IRAN</option>
          <option value="UAH">UKRAIN</option>
          <option value="NGN">NIGERIA</option>
          <option value="VND">VIETNAM</option>
        </select>
      </div>

      <div className='toCurrency'>
        <label>To Currency:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USA</option>
          <option value="EUR">EUROPE</option>
          <option value="INR">INDIA</option>
          <option value="GBP">UK</option>
          <option value="JPY">JPAN</option>
          <option value="AED">UAE</option>
          <option value="AUD">AUSTRALIA</option>
          <option value="CAD">CANADA</option>
          <option value="CHF">SWEETZERLEND</option>
          <option value="CNY">CHINA</option>
          <option value="NZD">NEWZEELAND</option>
          <option value="KRW">SOUTHKOREA</option>
          <option value="BRL">BRAZIL</option>
          <option value="RUB">RUSSIA</option>
          <option value="ZAR">SOUTHAFRICA</option>
          <option value="MXN">MEXICO</option>
          <option value="SGD">SINGAPORE</option>
          <option value="TRY">TURKEE</option>
          <option value="SAR">SAUDIARABIA</option>
          <option value="SEK">SWEEDAN</option>
          <option value="NOK">NORWAY</option>
          <option value="PLN">POLAND</option>
          <option value="PKR">PAKISTAN</option>
          <option value="LKR">SRILANKA</option>
          <option value="BDT">BANGLADESH</option>
          <option value="NPR">NEPAL</option>
          <option value="AFN">AFAGANISTAN</option>
          <option value="KWD">KUWAIT</option>
          <option value="IRR">IRAN</option>
          <option value="UAH">UKRAIN</option>
          <option value="NGN">NIGERIA</option>
          <option value="VND">VIETNAM</option>
        </select>
      </div>

      <button onClick={convert}>Convert</button>
      <h3>Result: {result}</h3>
    </div>
  )
}

export default CurrencyConverter