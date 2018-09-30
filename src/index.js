// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    if (currency <= 0) {
        return result;
    }

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    //H, Q, D, N P
    const coins = [
        { name: 'H', value: 50 },
        { name: 'Q', value: 25 },
        { name: 'D', value: 10 },
        { name: 'N', value: 5 },
        { name: 'P', value: 1 }
    ];

    let reminder = currency;
    let coinsCount = 0;
    for (let i = 0; i < coins.length; i++) {
        var coin = coins[i];
        coinsCount = Math.floor(reminder/coin.value);
        reminder = reminder % coin.value;
        if (coinsCount > 0){
            result[coin.name] = coinsCount;
        }
    }

    return result;

    // Return an object containing the minimum number of coins needed to make change
}
