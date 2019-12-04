map_hundreds = {0:' ', 1: 'cento', 2: 'duzentos', 3:'trezentos',4:'quatrocentos', 5: 'cinco',6 : 'seiscentos',7 : 'setecentos', 8 : 'oitocentos',9: 'novecentos'}
map_unities = {0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove'}

map_special_cases = {
    0 : 'zero',
    100: 'cem',
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove'}

map_tens = {
    1: 'dez',
    2: 'vinte',
    3: 'trinta',
    4: 'quarenta',
    5: 'cinquenta',
    6: 'sessenta',
    7: 'setenta',
    8: 'oitenta',
    9: 'noventa'}

function  fromNumbertoString(value){

    if(value < 0 || value > 999)
        return 'Empty String';

    returned_string = '';

    if(value >= 10 && value < 20){
        returned_string = map_special_cases[value];
        return returned_string;
    }

    hundreds = value / 100;
    hundreds = parseInt(hundreds)
    tens =value%100;

    if(tens >=10 && tens < 20){
        return map_hundreds[hundreds] + ' e ' + map_special_cases[tens]
    }

    unities = tens%10;
    tens /= 10;
    tens = parseInt(tens);

    if(value === 0){
        returned_string = map_special_cases[value];
        return returned_string;
    }

    if(hundreds !== 0 && tens ===0 && unities === 0){
        if(hundreds === 1){
            returned_string = map_special_cases[100];
            return returned_string;
        }
        returned_string = map_hundreds[hundreds];
        return returned_string;
    }

    if(hundreds === 0 && tens !==0 && unities === 0){
        returned_string = map_hundreds[tens];
        return returned_string;
    }

    hundreds_string = map_hundreds[hundreds];
    tens_string = map_tens[tens];
    unities_string = map_unities[unities];
    returned_string = hundreds_string + ' e ' + tens_string + ' e ' + unities_string;

    return returned_string;
    
    
}

console.log(fromNumbertoString(-1));
console.log(fromNumbertoString(1200));
console.log(fromNumbertoString(10));
console.log(fromNumbertoString(40));
console.log(fromNumbertoString(70));
console.log(fromNumbertoString(100));
console.log(fromNumbertoString(400));
console.log(fromNumbertoString(700));
console.log(fromNumbertoString(0));
console.log(fromNumbertoString(999));
console.log(fromNumbertoString(111));
console.log(fromNumbertoString(115));
console.log(fromNumbertoString(117));
console.log(fromNumbertoString(400));
console.log(fromNumbertoString(11));
console.log(fromNumbertoString(12));
console.log(fromNumbertoString(13));
console.log(fromNumbertoString(14));
console.log(fromNumbertoString(11));
console.log(fromNumbertoString(15));
console.log(fromNumbertoString(16));
console.log(fromNumbertoString(17));
console.log(fromNumbertoString(18));
console.log(fromNumbertoString(20));
console.log(fromNumbertoString(110))