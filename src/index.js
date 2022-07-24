module.exports = function toReadable (number) {
    if (number === 0) {
    return "zero";
    
    let units9 = ["","one","two","three","four","five","six","seven","eight","nine"];
    let units19 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let dozens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let hundreds = ["hundred"]   

    let result='';

    }
    else if (number>0 && number<10) {
        return result=units9[number];
    }
    else if (number>=10 && number<20) {
        return result=units19[number-10];
    }
    else if (number>=20 && number<100 && number%10==0) {
        return result=dozens[Math.floor(number/10)];
    }
    else if (number>=10 && number<100 && number%10!=0) {
        return result=dozens[Math.floor(number/10)]+''+ units9[number%10];
    }
    else if (number>=100 && number<1000 && number%100==0) {
        return result=units9[Math.floor(number/100)]+ hundreds[0];
    }
    else if (number>=100 && number<1000 && number%100!=0) {
        return result=units9[Math.floor(number/100)]+ hundreds[0]+dozens[number % 100]+ units9[number % 100-10];
    }  
}
