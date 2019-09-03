const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function getRandomDay() {
    const randomDay = Math.floor(Math.random() * days.length);

    return days[randomDay];
}

export function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

export default getRandomDay;