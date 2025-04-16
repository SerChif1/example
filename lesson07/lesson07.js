const week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const currentDay = new Date().getDay();

const weekDaysDiv = document.getElementById("weekDays");

week.forEach((day, index) => {
    const dayElement = document.createElement("div");

    if (index === 5 || index === 6) {
        dayElement.style.fontStyle = "italic";
    }

    if (index === currentDay - 1) {
        dayElement.style.fontWeight = "bold";
    }

    dayElement.textContent = day;

    weekDaysDiv.appendChild(dayElement);
});
