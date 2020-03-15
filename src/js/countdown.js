class Timer {
    constructor(finishDate, daysDOM, hoursDOM, minutesDOM, secondsDOM) {
        this.finishDate = new Date(finishDate).getTime();
        this.daysDOM = daysDOM;
        this.hoursDOM = hoursDOM;
        this.minutesDOM = minutesDOM;
        this.secondsDOM = secondsDOM;

        let currentDate = new Date().getTime();
        this.updateCurrentDate = setInterval(() => {
            currentDate = new Date().getTime();
        }, 1000);
        this.getCurrentDate = () => {
            return currentDate;
        }
    }
    init() {
        this.insertToDOM();
        const interval = setInterval(() => {
            this.getCurrentDate();
            this.insertToDOM();
            this.checkIsFinish(interval);
        }, 1000);
    }
    insertToDOM = () => {
        function handleInsert(value) {
            return value < 10 ? `0${value}` : value;
        }
        this.daysDOM.textContent != this.getDays() ? this.daysDOM.textContent = handleInsert(this.getDays()) : this.daysDOM.textContent;
        this.hoursDOM.textContent != this.getHours() ? this.hoursDOM.textContent = handleInsert(this.getHours()) : this.hoursDOM.textContent;
        this.minutesDOM.textContent != this.getMinutes() ? this.minutesDOM.textContent = handleInsert(this.getMinutes()) : this.minutesDOM.textContent;
        this.secondsDOM.textContent != this.getSeconds() ? this.secondsDOM.textContent = handleInsert(this.getSeconds()) : this.secondsDOM.textContent;
    }
    checkIsFinish = (interval) => {
        if (this.finishDate - this.getCurrentDate() <= 1000) {
            clearInterval(interval);
        }
    }
    getDays() {
        return Math.floor((this.finishDate / (1000 * 60 * 60 * 24)) - (this.getCurrentDate() / (1000 * 60 * 60 * 24)));
    }
    getHours() {
        return Math.floor((this.finishDate / (1000 * 60 * 60) - this.getCurrentDate() / (1000 * 60 * 60)) % 24);
    }
    getMinutes() {
        return Math.floor((this.finishDate / (1000 * 60) - this.getCurrentDate() / (1000 * 60)) % 60);
    }
    getSeconds() {
        return Math.floor((this.finishDate / 1000 - this.getCurrentDate() / 1000) % 60);
    }
}