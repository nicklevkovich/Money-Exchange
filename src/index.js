module.exports = function makeExchange(currency) {
    let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if ((currency == 0)||(currency < 0)) return ({})
    else if (currency>10000) return(error)
    else {
    let output = {};
    while (currency){
        if (currency >= 50) {
            output.H = Math.floor(currency/50);
            currency -= output.H*50;
        }
        if (currency>=25) {
            output.Q = Math.floor(currency/25);
            currency -= output.Q*25;
        }
        if (currency>=10) {
            output.D = Math.floor(currency/10);
            currency -= output.D*10;
        }
        if (currency>=5) {
            output.N = Math.floor(currency/5);
            currency -= output.N*5;
        }
        if (currency>=1) {
            output.P = currency;
        }
        currency = 0;
    }
    return (output);
    };
}
