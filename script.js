// Script to show live time

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = `The local time is ${h}:${m}:${s}`;

    updateGreeting(h);
    eveningMode(h)

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; // Add zero in front of numbers below 10
    return i;
}

// Script to change greeting message depending on time

function updateGreeting(hour) {
    const greetingMessage = document.getElementById('greeting');

    if (hour >= 5 && hour < 12) {
        greetingMessage.innerHTML = "Good morning!";
    } else if (hour >= 12 && hour < 17) {
        greetingMessage.innerHTML = "Good afternoon!";
    } else {
        greetingMessage.innerHTML = "Good evening!";
    }
}

// Script to update to dark mode if at night

function eveningMode(hour) {
    const bodyDark = document.querySelector('body');
    const cardDark = document.querySelector('.card');
    const greetingDark = document.querySelector('.header');
    const statsDark = document.querySelector('.card.stats');
    const portfolioDark = document.querySelector('.card.portfolio');
    const flagsDark = document.querySelector('.card.flags');
    const socialsDark = document.querySelector('.card.socials');
    const containerDark = document.querySelector('.card-container');
    
    if (!(hour >5 && hour < 12)) {
        bodyDark.classList.add('dark-mode');
        cardDark.classList.add('card-dark-mode');
        greetingDark.classList.add('card-dark-mode');
        statsDark.classList.add('card-dark-mode');
        portfolioDark.classList.add('card-dark-mode');
        flagsDark.classList.add('card-dark-mode');
        socialsDark.classList.add('card-dark-mode');
        containerDark.classList.add('container-dark-mode');
    }
}