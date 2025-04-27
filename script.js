document.getElementById('getWeather').addEventListener('click', () => {
    const apiKey = 'f346937e602556b05de5e08c1be2294d';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric&lang=ua`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weather').innerHTML = `
                <p>Температура: ${temperature} °C</p>
                <p>Вологість: ${humidity} %</p>
                <p>Швидкість вітру: ${windSpeed} м/с</p>
            `;
        })
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
            document.getElementById('weather').innerText = 'Не вдалося отримати дані про погоду.';
        });
});
