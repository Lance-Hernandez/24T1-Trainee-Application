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
    eveningMode(h);
    updateBackground(h);

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
    } else if (hour >= 12 && hour < 19) {
        greetingMessage.innerHTML = "Good afternoon!";
    } else {
        greetingMessage.innerHTML = "Good evening!";
    }
}

// Script to update background image of card-container depending on time

function updateBackground(hour) {
    const cardContainer = document.getElementById('card-container');

    if (hour >= 5 && hour < 12) {
        cardContainer.classList.add('morning');
    } else if (hour >= 12 && hour < 19) {
        cardContainer.classList.add('afternoon');
    } else {
        cardContainer.classList.add('evening');
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
    
    if (!(hour >5 && hour < 17)) {
        bodyDark.classList.add('dark-mode');
        cardDark.classList.add('card-dark-mode');
        greetingDark.classList.add('card-dark-mode');
        statsDark.classList.add('card-dark-mode');
        portfolioDark.classList.add('card-dark-mode');
        flagsDark.classList.add('card-dark-mode');
        socialsDark.classList.add('card-dark-mode');
        containerDark.classList.add('container-dark-mode');
    } else {
        bodyDark.classList.remove('dark-mode');
        cardDark.classList.remove('card-dark-mode');
        greetingDark.classList.remove('card-dark-mode');
        statsDark.classList.remove('card-dark-mode');
        portfolioDark.classList.remove('card-dark-mode');
        flagsDark.classList.remove('card-dark-mode');
        socialsDark.classList.remove('card-dark-mode');
        containerDark.classList.remove('container-dark-mode');
    }
}

// Script to copy discord tag when discord anchor link is clicked

function toolTipFunction() {
    const toolTip = document.getElementById("myToolTip");
    toolTip.innerHTML = "USER COPIED";

    setTimeout(() => {
        toolTip.innerHTML = "DISCORD";
    }, 2000);

    navigator.clipboard.writeText("lvncex");
}