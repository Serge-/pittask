var DEGRAD_PATTERN = {
    A0: {
        d0: false,
        d1: 'left',
        d2: 'right',
    },
    A1: {
        d0: 'left',
        d1: 'left',
        d2: 'left',
    },
    A2: {
        d0: 'right',
        d1: 'right',
        d2: 'right',
    }
}


var DEGRAD_PATTERN_VALUE_A = [], DEGRAD_PATTERN_VALUE_B = [], DEGRAD_PATTERN_VALUE_C = [];

function probability(prob, pattern_array) {
    for(var index = 0; index < prob.length; index++) {
        var prob_value = prob[index];

        pattern_array.push({
            A0: {
                d0:'p(O1)=0.0, p(O2)=0.0',
                d1:'p(O1)=' + prob_value + ', p(O2)=0.0',
                d2:'p(O1)=0.0, p(O2)=' + prob_value ,
            },
            A1: {
                d0:'p(O1)=' + prob_value + ', p(O2)=0.0',
                d1:'p(O1)=' + prob_value + ', p(O2)=0.0',
                d2:'p(O1)=' + prob_value + ', p(O2)=0.0',
            },
            A2: {
                d0:'p(O1)=0.0, p(O2)=' + prob_value,
                d1:'p(O1)=0.0, p(O2)=' + prob_value,
                d2:'p(O1)=0.0, p(O2)=' + prob_value,
            }
        })
    }
}


// probability(vvr.instrumental_conditioning.prob_value, vvr.instrumental_conditioning.degrad_pattern);

var pattern_chars =  ['A', 'B', 'C'];

// for (var index = 0; index < pattern_chars.length; index++) {
//     probability(window['VVR_' + pattern_chars[index] + '_PROB_VALUE'], window['DEGRAD_PATTERN_VALUE_' + pattern_chars[index]])
// }