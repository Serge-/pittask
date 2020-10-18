const root = '../../';

let OCIR, MOVES, DASS, ASRS5, EAT26, RAADS, PHQ9, GAD7, LSAS, ASRM, PTSD, PRIME_R, AUDIT, PGSI, YIAT, SMOKE_FTND, ISI, PID;

beforeEach(() => {
    require(root + 'jspsych.js');
    require(root + 'parameters.js');
    require(root + 'plugins/jspsych-parameters.js');
    require(root + 'plugins/jspsych-html-keyboard-response.js');
});

describe('parameters', function(){

    test('plugin loads correctly', () => {
        expect(typeof window.jsPsych.plugins['parameters']).not.toBe('undefined');
    });

    test('send data', () => {

        var parameters = {
            type: 'parameters',
            stage_name: 'parameters contingency restoration',
            variables: {
                "re_captcha": re_captcha,
                "re_captcha_duration": re_captcha_duration,
                "full_screen_mode": full_screen_mode,
                "open_instruct_latency": open_instruct_latency,
                "close_instruct_latency": close_instruct_latency,
                "outcome_duration": outcome_duration,
                "stim_duration": stim_duration,
                "ITI_duration": ITI_duration,
                "interval_duration": interval_duration,
                "interval_num": interval_num,
                "answer_latency_countdown": answer_latency_countdown,
                "answer_latency": answer_latency,
                "answer_latency_text": answer_latency_text,
                "correct_text": correct_text,
                "incorrect_text": incorrect_text,
                "feedback_duration": feedback_duration,
                "popup_text_behav": popup_text_behav,
                "popup_text_WBF": popup_text_WBF,
                "shake_right_rotate": shake_right_rotate,
                "shake_right_translateX": shake_right_translateX,
                "shake_left_rotate": shake_left_rotate,
                "shake_left_translateX": shake_left_translateX,
                "shake_return_time": shake_return_time,
                "shake_transition": shake_transition,
                "left_tilt": left_tilt,
                "right_tilt": right_tilt,
                "stim1_colour": stim1_colour,
                "stim2_colour": stim2_colour,
                "stim3_colour": stim3_colour,
                "stim4_colour": stim4_colour,
                "open_instruct_text_key_testing": open_instruct_text_key_testing,
                "close_instruct_text_key_testing": close_instruct_text_key_testing,
                "open_instruct_WBF": open_instruct_WBF,
                "close_instruct_WBF": close_instruct_WBF,
                "open_instruct_text_WBF": open_instruct_text_WBF,
                "close_instruct_text_WBF": close_instruct_text_WBF,
                "open_instruct_demographics": open_instruct_demographics,
                "close_instruct_demographics": close_instruct_demographics,
                "open_instruct_text_demographics": open_instruct_text_demographics,
                "close_instruct_text_demographics": close_instruct_text_demographics,
                "open_instruct_inventory": open_instruct_inventory,
                "close_instruct_inventory": close_instruct_inventory,
                "open_instruct_text_inventory": open_instruct_text_inventory,
                "close_instruct_text_inventory": close_instruct_text_inventory,
                "open_instruct_SDS": open_instruct_SDS, 
                "close_instruct_SDS": close_instruct_SDS, 
                "open_instruct_text_SDS": open_instruct_text_SDS, 
                "close_instruct_text_SDS": close_instruct_text_SDS,
                "open_instruct_ICAR": open_instruct_ICAR,
                "close_instruct_ICAR": close_instruct_ICAR,
                "open_instruct_text_ICAR": open_instruct_text_ICAR, 
                "close_instruct_text_ICAR": close_instruct_text_ICAR, 
                "inventory_rand": inventory_rand,
                "symptom_inventory": "",
                "video_duration": video_duration,
                "video_sound": video_sound,
                "open_instruct_video": open_instruct_video,
                "open_instruct_text_video": open_instruct_text_video,
                "close_instruct_video": close_instruct_video,
                "close_instruct_text_video": close_instruct_text_video,
                "open_instruct_FHQ_pre_rating": open_instruct_FHQ_pre_rating,
                "close_instruct_FHQ_pre_rating": close_instruct_FHQ_pre_rating,
                "open_instruct_text_FHQ_pre_rating": open_instruct_text_FHQ_pre_rating,
                "close_instruct_text_FHQ_pre_rating": close_instruct_text_FHQ_pre_rating,
                "open_instruct_FHQ_post_rating": open_instruct_FHQ_post_rating,
                "close_instruct_FHQ_post_rating": close_instruct_FHQ_post_rating,
                "open_instruct_text_FHQ_post_rating": open_instruct_text_FHQ_post_rating,
                "close_instruct_text_FHQ_post_rating": close_instruct_text_FHQ_post_rating,
                "FHQ_1": FHQ_1,
                "FHQ_2": FHQ_2,
                "FHQ_3": FHQ_3,
                "FHQ_4": FHQ_4,
                "FHQ_1_bottom_text": FHQ_1_bottom_text,
                "FHQ_2_bottom_text": FHQ_2_bottom_text,
                "FHQ_3_bottom_text": FHQ_3_bottom_text,
                "FHQ_VAS_left": FHQ_VAS_left,
                "FHQ_VAS_center": FHQ_VAS_center,
                "FHQ_VAS_right": FHQ_VAS_right,
                "FHQ_VAS_left_hungry": FHQ_VAS_left_hungry,
                "FHQ_VAS_right_hungry": FHQ_VAS_right_hungry,
                "VVR_q_text_a1": VVR_q_text_a1,
                "VVR_q_text_a2": VVR_q_text_a2,
                "VVR_q_text_b1": VVR_q_text_b1,
                "VVR_q_text_b2": VVR_q_text_b2,
                "VVR_q_text_b3": VVR_q_text_b3,
                "VVR_q_text_b4": VVR_q_text_b4,
                "open_instruct_VVR1": open_instruct_VVR1,
                "close_instruct_VVR1": close_instruct_VVR1,
                "open_instruct_text_VVR1": open_instruct_text_VVR1,
                "close_instruct_text_VVR1": close_instruct_text_VVR1,
                "degrad_pattern_VVR1": "",
                "prob_value_VVR1": "",
                "min_blocks_num_VVR1": min_blocks_num_VVR1,
                "min_num_correct_VVR1": min_num_correct_VVR1,
                "max_num_incorrect_VVR1": max_num_incorrect_VVR1,
                "open_instruct_VVR2": open_instruct_VVR2,
                "close_instruct_VVR2": close_instruct_VVR2,
                "open_instruct_text_VVR2": open_instruct_text_VVR2,
                "close_instruct_text_VVR2": close_instruct_text_VVR2,
                "degrad_pattern_VVR2": "",
                "prob_value_VVR2": "",
                "min_blocks_num_VVR2": min_blocks_num_VVR2,
                "min_num_correct_VVR2": min_num_correct_VVR2,
                "max_num_incorrect_VVR2": max_num_incorrect_VVR2,
                "open_instruct_VVR3": open_instruct_VVR3,
                "close_instruct_VVR3": close_instruct_VVR3,
                "open_instruct_text_VVR3": open_instruct_text_VVR3,
                "close_instruct_text_VVR3": close_instruct_text_VVR3,
                "degrad_pattern_VVR3": "",
                "prob_value_VVR3": "",
                "min_blocks_num_VVR3": min_blocks_num_VVR3,
                "min_num_correct_VVR3": min_num_correct_VVR3,
                "max_num_incorrect_VVR3": max_num_incorrect_VVR3,
                "open_instruct_pav": open_instruct_pav,
                "close_instruct_pav": close_instruct_pav,
                "open_instruct_text_pav": open_instruct_text_pav,
                "min_num_correct_pav": min_num_correct_pav,
                "max_num_incorrect_pav": max_num_incorrect_pav,
                "close_instruct_text_pav": close_instruct_text_pav,
                "open_instruct_transfer_test": open_instruct_transfer_test,
                "close_instruct_transfer_test": close_instruct_transfer_test,
                "open_instruct_text_transfer_test": open_instruct_text_transfer_test,
                "close_instruct_text_transfer_test": close_instruct_text_transfer_test,
                "block_num_transfer_test": block_num_transfer_test,
                "close_instruct_text_thanks": close_instruct_text_thanks,
                "open_instruct_deval_test": open_instruct_deval_test,
                "close_instruct_deval_test": close_instruct_deval_test,
                "open_instruct_text_deval_test": open_instruct_text_deval_test,
                "close_instruct_text_deval_test": close_instruct_text_deval_test, 
                "deval_test_duration": deval_test_duration,
                "close_instruct_text_close_HIT_q": close_instruct_text_close_HIT_q
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