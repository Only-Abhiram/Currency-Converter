document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('converter-form').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevents page refresh on form submission

        let amount = document.getElementById('amount').value;
        let fromCurrency = document.getElementById('from-currency').value;
        let toCurrency = document.getElementById('to-currency').value;

        if (amount === '' || isNaN(amount)) {
            alert('Please enter a valid amount');
            return;
        }

        let apiKey = 'badf4c53dadb680f5fc98bda';  // API key
        let url = `https://v6.exchangerate-api.com/v6/badf4c53dadb680f5fc98bda/latest/${fromCurrency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let rate = data.conversion_rates[toCurrency];  // Get conversion rate
                let result = amount * rate;  // Calculate converted amount

                document.getElementById('result').innerText = `${amount}  ${fromCurrency} = ${result.toFixed(2)}  ${toCurrency}`;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            });
    }); // Closing bracket for the addEventListener
}); // Closing bracket for DOMContentLoaded
