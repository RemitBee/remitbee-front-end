import React, { useState, useEffect } from 'react';

function CurrencyConvert() {
    const [currencies, setCurrencies] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [exchangeRates, setExchangeRates] = useState({});
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        // Replace 'YOUR_API_KEY' with your actual API key
        const API_KEY = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR';
        const API_URL = `https://open.er-api.com/v6/latest/${baseCurrency}.json?apikey=${API_KEY}`;

        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                const rates = data.rates;
                setCurrencies([baseCurrency, ...Object.keys(rates)]);
                setExchangeRates(rates);
            })
            .catch((error) => {
                console.error('Error fetching exchange rates:', error);
            });
    }, [baseCurrency]);

    const handleCurrencyChange = (event) => {
        setBaseCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <div>
            <div>
                <label>Select Currency:</label>
                <select onChange={handleCurrencyChange} value={baseCurrency}>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div>
                <ul>
                    {currencies.map((currency) => (
                        <li key={currency}>
                            {currency}: {amount * exchangeRates[currency]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CurrencyConvert;
