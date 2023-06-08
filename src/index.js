const state = {
    currentTemp: 72
};

const increaseTemp = () => {
    state.currentTemp++;
    const currentTemp = document.querySelector('#display-temperature');
    console.log(state.currentTemp);
    currentTemp.textContent = `${state.currentTemp}`;
    changeTempColor();
    changeLandscape();
};

const decreaseTemp = () => {
    state.currentTemp--;
    const currentTemp = document.querySelector('#display-temperature');
    console.log(state.currentTemp);
    currentTemp.textContent = `${state.currentTemp}`;
    changeTempColor();
    changeLandscape();
};

// const setTempAndLandscape = () => {
//     const currentTemp = document.querySelector('#display-temperature');
//     currentTemp.textContent = `${state.currentTemp}`;
//     changeTempColor();
//     landscapeTitle();
// }

const changeTempColor = () => {
    const tempCurrent = document.getElementById('display-temperature');
    let color;
    switch (true) {
        case state.currentTemp >= 80:
            color = 'red';
            break;
        case state.currentTemp >= 70:
            color = 'orange';
            break;
        case state.currentTemp >= 60:
            color = 'yellow';
            break; 
        case state.currentTemp >= 50:
            color = 'green';
            break;
        default:
            color = 'teal';
    }
    tempCurrent.className = color;
};

const changeLandscape = () => {
    const landscape = document.getElementById('landscape');
    let emoji;
    switch (true) {
        case state.currentTemp >= 80:
            emoji = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
            break;
        case state.currentTemp >= 70:
            emoji = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
            break;
        case state.currentTemp >= 60:
            emoji = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
            break;
        default:
            emoji = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    landscape.textContent = emoji;
};

const registerEventHandlers = () => {
    const increaseButton = document.getElementById("increase-temp");
    const decreaseButton = document.getElementById("decrease-temp");
    increaseButton.addEventListener("click", increaseTemp);
    decreaseButton.addEventListener("click", decreaseTemp);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);