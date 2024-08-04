let date = new Date();

let dayNumber = date.getDay();

let theDayis;
let quote; 

switch (dayNumber) {
    case 0:
        theDayis = 'Sunday'
        quote = 'Time to chill'
        break;

    case 1:
        theDayis = 'Monday'
        quote = 'Time to Work'
        break;

    case 2:
        theDayis = 'Tuesday'
        quote = 'Time to Work hard'
        break;

    case 3:
        theDayis = 'Wednesday'
        quote = 'Time to chill'
        break;

    case 4:
        theDayis = 'Thursday'
        quote = 'Time to chill'
        break;

                    case 5:
                        theDayis = 'Friday'
                        quote = 'Time to chill'
                        break;

                        case 6:
                            theDayis = 'Saturday'
                            quote = 'Time to Leave'
                            break;
    default:
        break;
}

let weekend = document.getElementById('weekday')
weekend.innerHTML = `${theDayis}`;

let spanQuote = document.getElementById('quote');
spanQuote.innerHTML = `${quote}`