module.exports = function toReadable (number) {
    if (number === 0) {
    return "Zero";
    
    let units9 = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    let units19 = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    let dozens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
    let hundreds = ["Hundred"]   

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
