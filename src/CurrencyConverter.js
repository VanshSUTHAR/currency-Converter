import React, { useEffect, useState } from 'react'
import './CurrencyConverter.css'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("")
  const [result, setResult] = useState(null)
  const [rates, setRates] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/rates")
      .then(res => res.json())
      .then(data => setRates(data))
  }, [])

  const convert = () => {
    if (!amount || isNaN(amount)) {
      setResult("Please enter a valid amount.")
      return
    }
    if (!rates[fromCurrency] || !rates[toCurrency]) {
      setResult("Rates not loaded yet.")
      return
    }

    const Amount = parseFloat(amount) / rates[fromCurrency]
    const converted = Amount * rates[toCurrency]

    setResult(`${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`)
  }

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
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <div className='toCurrency'>
        <label>To Currency:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <button onClick={convert}>Convert</button>
      <h3>{result}</h3>
    </div>
  )
}

export default CurrencyConverter;