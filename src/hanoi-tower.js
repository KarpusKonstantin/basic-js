module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn =  0;
    let second = 0;

    turn = Math.pow(2, disksNumber) - 1;
    second = turn / (turnsSpeed / 3600);

    return {turns: turn, seconds: second};
}
