// script.js
document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultText = document.getElementById('resultText');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultText.textContent = 'Please enter a valid number for temperature.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    // Convert temperature based on selected unit
    let convertedTemperature;
    let unit;

    if (unitSelect === 'C') {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9/5) + 32;
        unit = 'Fahrenheit';
    } else if (unitSelect === 'F') {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5/9;
        unit = 'Celsius';
    } else {
        resultText.textContent = 'Please select a unit.';
        return;
    }

    // Display result
    resultText.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${unit}`;
});
