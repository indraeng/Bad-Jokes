fetch('https://icanhazdadjoke.com/slack')
    .then((result) => result.json())
    .then((joke) => {
        const jokeTxt = joke.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeTxt;
    })