module.exports = function makeExchange(currency) {
    let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency == 0) return ({})
    else if (currency < 0) return ({})
    else if (currency>10000) return(error)
    else if ((currency>0)&&(currency<=10000)) {
    let output = {};
    while (currency){
        if (currency>=50) {
            var Half = Math.floor(currency/50);
            currency = (currency-Half*50);
            output["H"] = Half;
        }
        if (currency>=25) {
            var Quart = Math.floor(currency/25);
            currency = (currency-Quart*25);
            output["Q"] = Quart;
        }
        if (currency>=10) {
            var Dim = Math.floor(currency/10);
            currency = (currency-Dim*10);
            output["D"] = Dim;
        }
        if (currency>=5) {
            var Nick = Math.floor(currency/5);
            currency = (currency-Nick*5);
            output["N"] = Nick;
        }
        if (currency>=1) {
            output["P"] = currency;
        }
        currency = 0;
    }
    
    return (output);
};
}
