// Write an algorithm to make change


function makeChange(amount) {
    const tempArr = [];
    const coins = [25, 10, 5, 1];

    for (let i = 0; i < coins.length; i++) {
        const coinValue = coins[i];

        while (amount >= coinValue) {
            tempArr.push(coinValue);
            amount = amount - coinValue
        }
    }
    return(tempArr);
}

console.log (makeChange(3));
console.log (makeChange(7));
console.log (makeChange(13));
console.log (makeChange(18));
console.log (makeChange(26));
console.log (makeChange(42));