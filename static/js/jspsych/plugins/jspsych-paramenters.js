jsPsych.plugins['Parameters'] = (function(){

    var plugin = {};
  
    plugin.info = {
        name: 'Parameters',
        stage_name: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Stage Name',
            default: null,
            description: 'Specific name of the current stage.'
        },
        parameters: {
            variables: {
                type: jsPsych.plugins.parameterType.Obj,
                pretty_name: 'Variables',
                default: null,
                description: 'Variables from parameters.js file.'
            }
        }
    }
  
    plugin.trial = function(display_element, trial){
        var parameters = {
            "full_screen_mode": full_screen_mode,
            "open_instruct_latency": open_instruct_latency,
            "close_instruct_latency": close_instruct_latency,
            "outcome_duration": outcome_duration,
            "stim_duration": stim_duration,
            "ITI_duration": ITI_duration,
            "correct_text": correct_text,
            "incorrect_text": incorrect_text,
            "feedback_duration": feedback_duration,
            "popup_text": popup_text,
            "popup_text_web_forms": popup_text_web_forms,

            "shake_right_rotate": shake_right_rotate,
            "shake_right_translateX": shake_right_translateX,
            "shake_left_rotate": shake_left_rotate,
            "shake_left_translateX": shake_left_translateX,
            "shake_return_time": shake_return_time,
            "shake_transition": shake_transition,
            "left_tilt": left_tilt,
            "right_tilt": right_tilt,

            "open_instruct_text_key_testing": open_instruct_text_key_testing,
            "close_instruct_text_key_testing": close_instruct_text_key_testing,
            "open_instruct_text_clinical": open_instruct_text_clinical,
            "close_instruct_text_clinical": close_instruct_text_clinical,
            "symptom_inventory_randomization": symptom_inventory_randomization,
            "symptom_inventory": "",
            "video_duration": video_duration,
            "video_sound": video_sound,
            "open_instruct_video": open_instruct_video,
            "open_instruct_text_video": open_instruct_text_video,
       
            "FHQ_1": FHQ_1,
            "FHQ_2": FHQ_2,
            "FHQ_3": FHQ_3,
            "FHQ_4": FHQ_4,
            "FHQ_1_bottom_text": FHQ_1_bottom_text,
            "FHQ_2_bottom_text": FHQ_2_bottom_text,
            "FHQ_3_bottom_text": FHQ_3_bottom_text,
            "vas_left": vas_left,
            "vas_center": vas_center,
            "vas_right": vas_right,
            "vas_left_hungry": vas_left_hungry,
            "vas_right_hungry": vas_right_hungry,

            "question_text_a1": question_text_a1,
            "question_text_a2": question_text_a2,
            "question_text_b1": question_text_b1,
            "question_text_b2": question_text_b2,
            "question_text_b3": question_text_b3,
            "question_text_b4": question_text_b4,

            "open_instruct_VVR1": open_instruct_VVR1,
            "close_instruct_VVR1": close_instruct_VVR1,
            "open_instruct_text_VVR1": open_instruct_text_VVR1,
            "close_instruct_text_VVR1": close_instruct_text_VVR1,
            "degrad_pattern_VVR1": "",
            "prob_value_VVR1": "",
            "interval_num_VVR1": interval_num_VVR1,
            "min_blocks_num_VVR1": min_blocks_num_VVR1,
            "min_num_correct_VVR1": min_num_correct_VVR1,
            "max_num_incorrect_VVR1": max_num_incorrect_VVR1,

            "open_instruct_VVR2": open_instruct_VVR2,
            "close_instruct_VVR2": close_instruct_VVR2,
            "open_instruct_text_VVR2": open_instruct_text_VVR2,
            "close_instruct_text_VVR2": close_instruct_text_VVR2,
            "degrad_pattern_VVR2": "",
            "prob_value_VVR2": "",
            "interval_num_VVR2": interval_num_VVR2,
            "min_blocks_num_VVR2": min_blocks_num_VVR2,
            "min_num_correct_VVR2": min_num_correct_VVR2,
            "max_num_incorrect_VVR2": max_num_incorrect_VVR2,

            "open_instruct_VVR3": open_instruct_VVR3,
            "close_instruct_VVR3": close_instruct_VVR3,
            "open_instruct_text_VVR3": open_instruct_text_VVR3,
            "close_instruct_text_VVR3": close_instruct_text_VVR3,
            "degrad_pattern_VVR3": "",
            "prob_value_VVR3": "",
            "interval_num_VVR3": interval_num_VVR3,
            "min_blocks_num_VVR3": min_blocks_num_VVR3,
            "min_num_correct_VVR3": min_num_correct_VVR3,
            "max_num_incorrect_VVR3": max_num_incorrect_VVR3,

            "open_instruct_VVR4": open_instruct_VVR4,
            "close_instruct_VVR4": close_instruct_VVR4,
            "open_instruct_text_VVR4": open_instruct_text_VVR4,
            "close_instruct_text_VVR4": close_instruct_text_VVR4,
            "degrad_pattern_VVR4": "",
            "prob_value_VVR4": "",
            "interval_num_VVR4": interval_num_VVR4,
            "min_blocks_num_VVR4": min_blocks_num_VVR4,
            "min_num_correct_VVR4": min_num_correct_VVR4,
            "max_num_incorrect_VVR4": max_num_incorrect_VVR4,

            "open_instruct_pav": open_instruct_pav,
            "open_instruct_text_pav": open_instruct_text_pav,

            "min_num_correct_pav": min_num_correct_pav,
            "max_num_incorrect_pav": max_num_incorrect_pav,

            "open_instruct_transfer_test": open_instruct_transfer_test,
            "open_instruct_text_transfer_test": open_instruct_text_transfer_test,
            "block_num_transfer_test": block_num_transfer_test,
            "close_instruct_text_thanks": close_instruct_text_thanks
        };

        symptom_inventory.forEach(function(element, index) {
            if(element.type) {
                index === 0 ? parameters['symptom_inventory'] += element.type : parameters['symptom_inventory'] += ', ' + element.type;
            } else if(element.timeline) {
                parameters['symptom_inventory'] += ', SMOKING STATUS';
            }
        });

        function array_extraction(arr, str) {
            arr.forEach(function(element, index) {
                index === 0 ? parameters[str] += element : parameters[str] += ', ' + element;
            });
        };

        array_extraction(degrad_pattern_VVR1, 'degrad_pattern_VVR1');
        array_extraction(degrad_pattern_VVR2, 'degrad_pattern_VVR2');
        array_extraction(degrad_pattern_VVR3, 'degrad_pattern_VVR3');
        array_extraction(degrad_pattern_VVR4, 'degrad_pattern_VVR4');

        array_extraction(prob_value_VVR1, 'prob_value_VVR1');
        array_extraction(prob_value_VVR2, 'prob_value_VVR2');
        array_extraction(prob_value_VVR3, 'prob_value_VVR3');
        array_extraction(prob_value_VVR4, 'prob_value_VVR4');

        var trial_data = {
            "stage_name": "Parameters",
            "counter-balancing version": counter_balancing[0]["game_version"],
            "commit": git_commit,
            "parameters": JSON.stringify(parameters)
        };

        jsPsych.finishTrial(trial_data);
    }
  
    return plugin;
  
})();