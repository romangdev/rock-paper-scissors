function computerPlay() {
    let numChoice = Math.random();
    numChoice = numChoice.toFixed(2);
    numChoice *= 100;
    if (numChoice >= 0 && numChoice < 33) {
        return 'Rock';
    } 
    else if (numChoice >= 33 && numChoice <= 66) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}