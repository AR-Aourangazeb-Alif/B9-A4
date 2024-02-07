// Problem-1 
function calculateMoney(ticketSale) {
    if (typeof ticketSale === `number`) {
        if (ticketSale >= 0) {

            const dailyIncome = 120 * ticketSale;
            const dailySpend = 500 + (8 * 50);

            const roi = dailyIncome - dailySpend;
            return roi;

        } else {
            return "!!!Invalid Number!!!\nTicket sale can't be negative value...Give a positive value : )";
        }
    } else {
        return "!!!Invalid input!!!\nGive a number value : )";
    }
}

// Problem - 2 
function checkName(name) {
    const expectedLastChars = [`a`, `y`, `i`, `e`, `o`, `u`, `w`];
    if (typeof name === 'string') {

        if (expectedLastChars.includes(name[name.length - 1].toLowerCase())) {
            return "Good Name";
        } else {
            return "Bad Name";
        }

    } else {
        return "invalid";
    }
}

// Problem - 3 
function deleteInvalids(array) {
    if (Array.isArray(array)) {

        const outputArray = [];

        for (const i of array) {
            if (typeof i === 'number' && !isNaN(i)) {
                outputArray.push(i);
            }
        }
        return outputArray;

    } else {
        return "Invalid Array";
    }
}