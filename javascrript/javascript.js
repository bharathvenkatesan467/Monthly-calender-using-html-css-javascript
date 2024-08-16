let currentMonth = 7; // August
let currentYear = 2024;

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function generateCalendar() {
    let daysInMonth = getDaysInMonth(currentMonth, currentYear);
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let calendarHTML = '';


    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += '<div></div>';
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendarHTML += `<div>${i}</div>`;
    }

    document.querySelector('.days').innerHTML = calendarHTML;
    document.querySelector('#month').textContent = getMonthName(currentMonth);
    document.querySelector('#year').textContent = currentYear;
}

function getMonthName(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1];
}

generateCalendar();