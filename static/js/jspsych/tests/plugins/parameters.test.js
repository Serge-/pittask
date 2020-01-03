const root = '../../';

beforeEach(() => {
    require(root + 'jspsych.js');
    require(root + 'plugins/jspsych-paramenters.js');
    require('../../plugins/jspsych-html-keyboard-response.js');
});

describe('parameters-instrumental-conditioning', function(){

    test('plugin loads correctly', () => {
        expect(typeof window.jsPsych.plugins['parameters-instrumental-conditioning']).not.toBe('undefined');
    });

    test('send data', () => {

        var parameters = {
            type: 'parameters-instrumental-conditioning',
            stage_name: 'parameters contingency restoration',
            variables: {
                open_instruct: true,
                open_instruct_text: '<p>You can now interact with the vending machine to earn snacks.</p>',
                open_instruct_latency: 1500,
                degrad_pattern: ['d1', 'd2'],
                prob_value: [1, 1],
                interval_duration: 2000,
                outcome_duration: 1000,
                interval_num: 1,
                min_blocks_num: 1,
                max_num_correct: 2,
                max_num_incorrect: 2,
                max_num_correct_consecutive_questions: 6,
                question_text_a1: 'Which directions did you get tilt to get',
                question_text_a2: 'Press Left or Right button',
                question_text_b1: 'How strongly do you believe in your answer?',
                question_text_b2: 'Very little',
                question_text_b3: 'Very much!',
                question_text_b4: '<li><span>Select answer using your mouse.</span></li><li><span>Click \'submit answer\' when ready</span></li>',
                popup_text: 'Sorry, first you should select answer using your mouse prior to submission.',
                correct_text: 'Correct',
                incorrect_text: 'Try again!',
                feedback_duration: 2000,
                close_instruct: true,
                close_instruct_text: '<p>Some text for close instructions VVR "contingency degradation"</p>',
                close_instruct_latency: 1500,
            }
        }

        return (new Promise(function(resolve, reject){
            
            jsPsych.init({
                timeline: [parameters],
                on_finish: function() {
                    resolve({parameters});
                }
            });

        
        })).then(function(data) {
            expect(data.parameters).toBe(parameters)
        });

    });

})