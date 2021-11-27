/*!
 * 
 * 
 * 
 */

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


// let rndDate = randomDate(new Date(1977, 8, 1), new Date(2999, 8, 1));
