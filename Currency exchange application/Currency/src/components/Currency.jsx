import React, { useState } from "react";
import "../css/Currency.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = import.meta.env.VITE_API_KEY;

function Currency() {
  const [amount, setAmount] = useState();  // setAmout -> setAmount
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");  // ToCurrency -> toCurrency
  const [result, setResult] = useState();  // SetResult -> setResult

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result)
  }

  return (
    <div className="Currency-div">
      <div
        style={{
          color: "white",
          fontFamily: "Arial",  // font-family corrected
          backgroundColor: "black",
          width: "100%",
          textAlign: "center",
          height: "90px",
          fontSize: "30px",
        }}
      >
        <p>CURRENCY EXCHANGE APPLICATION</p> 
      </div>
      <div style={{ marginTop: "40px" }}>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount" />
        <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
          <option>GBP</option>
          <option>JPY</option>
          <option>CAD</option>
          <option>AUD</option>
          <option>CHF</option>
        </select>
        <FaArrowRightLong style={{ color: "white", fontSize: "35px" }} />
        <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
          <option>JPY</option>
          <option>CAD</option>
          <option>AUD</option>
          <option>CHF</option>
        </select>
        <input value={result} type="number" className="result" readOnly /> 
      </div>
      <div>
        <button onClick={exchange} className="exchange">Convert</button>  
      </div>
    </div>
  );
}

export default Currency;
