
module.exports = function toReadable(number) {
    let digits1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let digits2 = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let digits3 = ['dummy1', 'dummy2', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number.toString().length == 1) {
        return digits1[number]
    }

    if (number.toString().length == 2 && number < 20) {
        return digits2[number - 10]
    }

    if (number.toString().length == 2 && number >= 20) {
        let rank10s = number.toString()[0];
        let rank1s = number.toString()[1];
        if (rank1s != 0) {
            return digits3[rank10s] + ' ' + digits1[rank1s];
        }
        return digits3[rank10s];
    }

    if (number.toString().length == 3) {
        let rank100s = number.toString()[0];
        let rank10s = number.toString()[1];
        let rank1s = number.toString()[2];

        if (rank1s == 0 && rank10s == 0) {    //200-900 rounds        
            return digits1[rank100s] + ' hundred'; // 100 & 200-900 (rounds)
        } else if (rank10s == 0) {
            return   digits1[rank100s] + ' hundred ' + digits1[rank1s]; // x01-x09
        } else if (rank1s == 0 && rank10s != 1 ) { // xx0
            return  digits1[rank100s] + ' hundred ' + digits3[rank10s];
        } else if(rank10s == 1) {
            return digits1[rank100s] + ' hundred ' + digits2[rank1s];
        }
        return digits1[rank100s] + ' hundred ' + digits3[rank10s] + ' ' + digits1[rank1s];

    }  
}
