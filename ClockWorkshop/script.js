/**
 * Clock 🕰️
 *
 */

const clockEl = document.querySelector('#clock');


const clockId = setInterval( () => {
    const now = new Date();
    clockEl.innerHTML = now.toLocaleTimeString();
}, 1000);


