import React, { useState, useEffect } from 'react';

function SearchCurrency() {
    const [currencyCode, setCurrencyCode] = useState('');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = 'YOUR_API_KEY_HERE';

    const fetchExchangeRate = () => {
        if (currencyCode) {
            setLoading(true);
            setError(null);

            // fetch(`https://open.er-api.com/v6/latest/${currencyCode}/${API_KEY}`)
            // fetch(`https://open.er-api.com/v6/latest/${currencyCode}/${API_KEY}`)
            fetch(`https://api.exchangeratesapi.io/2023-01-01?base=USD&symbols=EUR`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.rates) {
                        setExchangeRate(data.rates[currencyCode]);
                    } else {
                        setError('Currency not found');
                    }
                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        fetchExchangeRate();
    }, [currencyCode]);

    return (
        <div>
            <h1>Currency Exchange Rate Search</h1>
            <input
                type="text"
                placeholder="Enter a currency code (e.g., USD)"
                value={currencyCode}
                onChange={(e) => setCurrencyCode(e.target.value)}
            />
            <button onClick={fetchExchangeRate}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {exchangeRate && <p>Exchange Rate: {exchangeRate}</p>}
        </div>
    );
}

export default SearchCurrency;
