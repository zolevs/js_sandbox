
// clock


const clock = document.querySelector('.clock');
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);









// const before = new Date("2015-03-25T12:00:00-06:30");
// const now = new Date();

// console.log(now.getTime());
// console.log(before.getTime());

// const diff = now.getTime() - before.getTime();

// console.log(diff);
// const mins = Math.round(diff/1000/60);
// const hours = Math.round(mins/60);
// const days = Math.round(hours/24);
// console.log(mins);
// console.log(hours);
// console.log(days);

// const timestamp = 1675938474990;
// console.log(new Date(timestamp));
// const converted = new Date(timestamp);
// console.log(converted);







// // dates & time

// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // year, months, day, times
// console.log('getFullYear: ', now.getFullYear());
// console.log('getmonth: ', now.getMonth());
// console.log('getDate: ', now.getDate());
// console.log('getDay: ', now.getDay());
// console.log('getHours: ', now.getHours());
// console.log('getMinutes: ', now.getMinutes());

// console.log('timestamp: ', now.getTime());

// console.log(now.toDateString());
// console.log(now.toTimeString());



