// Initalize psiturk object

var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// reset all previous data in case if page was reloaded
psiTurk.taskdata.set('data', [])

var counter_balancing_input = [
    a = {
        game_version: 'A',
        left: 'MM',
        right: 'BBQ',
        video: '/static/video/MM',
        converted_details: "MM"
    },
    b = {
        game_version: 'B',
        left: 'BBQ',
        right: 'MM',
        video: '/static/video/BBQ',
        converted_details: "BBQ"
    },
    c = {
        game_version: 'C',
        left: 'TT',
        right: 'BBQ',
        video: '/static/video/TT',
        converted_details: "TT"
    }, 
    d = {
        game_version: 'D',
        left: 'BBQ',
        right: 'TT',
        video: '/static/video/BBQ',
        converted_details: "BBQ"
    },
    e = {
        game_version: 'E',
        left: 'MM',
        right: 'TT',
        video: '/static/video/MM',
        converted_details: "MM"
    },
    f = {
        game_version: 'F',
        left: 'TT',
        right: 'MM',
        video: '/static/video/TT',
        converted_details: "TT"
    },
    g = {
        game_version: 'G',
        left: 'MM',
        right: 'BBQ',
        video: '/static/video/BBQ',
        converted_details: "BBQ"
    },
    h = {
        game_version: 'H',
        left: 'BBQ',
        right: 'MM',
        video: '/static/video/MM',
        converted_details: "MM"
    },
    i = {
        game_version: 'I',
        left: 'TT',
        right: 'BBQ',
        video: '/static/video/BBQ',
        converted_details: "BBQ"
    },
    j = {
        game_version: 'J',
        left: 'BBQ',
        right: 'TT',
        video: '/static/video/TT',
        converted_details: "TT"
    },
    k = {
        game_version: 'K',
        left: 'MM',
        right: 'TT',
        video: '/static/video/TT',
        converted_details: "TT"
    },
    l = {
        game_version: 'L',
        left: 'TT',
        right: 'MM',
        video: '/static/video/MM',
        converted_details: "MM"
    }
];

var counter_balancing = jsPsych.randomization.sampleWithoutReplacement(counter_balancing_input, 1);


// Reconnection to the Database
var error_message = 
"<div class='jspsych-content-wrapper'>" +
"<div class='jspsych-content'>" +
"<h1>Oops!</h1>" +
"<p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p>" +
"<button class='btn btn-primary btn-lg' id='resubmit'>Resubmit</button>" +
"</div>" +
"</div>";

prompt_resubmit = function() {
    $( "body" ).addClass("jspsych-display-element");
    document.body.innerHTML = error_message;
    
    $("#resubmit").click(resubmit);
};

resubmit = function() {

    document.body.innerHTML = "<div class='jspsych-content-wrapper'>" +
    "<div class='jspsych-content'>" +
    "<h1>Trying to resubmit...</h1>" +
    "</div>" +
    "</div>";
    reprompt = setTimeout(prompt_resubmit, 10000);
    psiTurk.saveData({
        success: function() {
            clearInterval(reprompt);
            psiTurk.completeHIT();
        },
        error: prompt_resubmit
    });
};


// Trial for parameters
var parameters = {
    parameters_instrumental_conditioning: {
        type: 'parameters-VVR',
        stage_name: 'VVR1 parameters instrumental conditioning',
        variables: {
            open_instruct: open_instruct_VVR1,
            open_instruct_text: open_instruct_text_VVR1,
            degrad_pattern: degrad_pattern_VVR1,
            prob_value: prob_value_VVR1,
            interval_duration: interval_duration_VVR1,
            outcome_duration: outcome_duration_VVR1,
            interval_num: interval_num_VVR1,
            min_blocks_num: min_blocks_num_VVR1,
            max_num_correct: max_num_correct_VVR1,
            max_num_incorrect: max_num_incorrect_VVR1,
            max_num_correct_consecutive_questions: max_num_correct_consecutive_questions_VVR1,
            close_instruct: close_instruct_VVR1,
            close_instruct_text: close_instruct_text_VVR1,
        }
    },
    parameters_contingency_degradation: {
        type: 'parameters-VVR',
        stage_name: 'VVR2 parameters contingency degradation',
        variables: {
            open_instruct: open_instruct_VVR2,
            open_instruct_text: open_instruct_text_VVR2,
            degrad_pattern: degrad_pattern_VVR2,
            prob_value: prob_value_VVR2,
            interval_duration: interval_duration_VVR2,
            outcome_duration: outcome_duration_VVR2,
            interval_num: interval_num_VVR2,
            min_blocks_num: min_blocks_num_VVR2,
            max_num_correct: max_num_correct_VVR2,
            max_num_incorrect: max_num_incorrect_VVR2,
            max_num_correct_consecutive_questions: max_num_correct_consecutive_questions_VVR2,
            close_instruct: close_instruct_VVR2,
            close_instruct_text: close_instruct_text_VVR2,
        }
    },
    parameters_contingency_restoration: {
        type: 'parameters-VVR',
        stage_name: 'VVR3 parameters contingency restoration',
        variables: {
            open_instruct: open_instruct_VVR3,
            open_instruct_text: open_instruct_text_VVR3,
            degrad_pattern: degrad_pattern_VVR3,
            prob_value: prob_value_VVR3,
            interval_duration: interval_duration_VVR3,
            outcome_duration: outcome_duration_VVR3,
            interval_num: interval_num_VVR3,
            min_blocks_num: min_blocks_num_VVR3,
            max_num_correct: max_num_correct_VVR3,
            max_num_incorrect: max_num_incorrect_VVR3,
            max_num_correct_consecutive_questions: max_num_correct_consecutive_questions_VVR3,
            close_instruct: close_instruct_VVR3,
            close_instruct_text: close_instruct_text_VVR3,
        }
    }
}

var KEY_TESTING_OPEN = {
    stage_name: 'Key-testing',
    type: 'html-keyboard-response',
    stimulus: open_instruct_text_key_testing,
    trial_latency: open_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'open_instruct_text_key_testing',
    event_converted_details: 'Key-testing open text appears'
}

var KEY_TESTING = {
    stage_name: 'Key-testing',
    type: 'key-testing',
    stimulus: '',
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'image appears',
    event_raw_details: 'key_testing_close',
    event_converted_details: 'white vending machine appears'
}

var KEY_TESTING_CLOSE = {
    stage_name: 'Key-testing',
    type: 'html-keyboard-response',
    stimulus: close_instruct_text_key_testing,
    trial_latency: close_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'close_instruct_text_key_testing',
    event_converted_details: 'Key-testing close text appears'
}

var FHQ_PRE_1 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/TT.png',
    questions: {
        top: FHQ_1,
        bottom: FHQ_1_bottom_text
    },
    food_item: "TT.png",
    rating_status: 'pre-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_1, FHQ_1_bottom_text",
    event_converted_details: 'TT scale'
}

var FHQ_PRE_2 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/MM.png',
    questions: {
        top: FHQ_2,
        bottom: FHQ_2_bottom_text
    },
    food_item: "MM.png",
    rating_status: 'pre-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_2, FHQ_2_bottom_text",
    event_converted_details: 'MM scale'
}

var FHQ_PRE_3 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/BBQ.png',
    questions: {
        top: FHQ_3,
        bottom: FHQ_3_bottom_text
    },
    food_item: "BBQ.png",
    rating_status: 'pre-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_3, FHQ_3_bottom_text",
    event_converted_details: 'BBQ scale'
}

var FHQ_PRE_4 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: 'hunger',
    questions: {
        top: FHQ_4,
    },
    food_item: "hunger",
    rating_status: 'pre-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_4",
    event_converted_details: 'Hunger scale'
}



var FHQ_POST_1 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/TT.png',
    questions: {
        top: FHQ_1,
        bottom: FHQ_1_bottom_text
    },
    food_item: "TT.png",
    rating_status: 'post-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_1, FHQ_1_bottom_text",
    event_converted_details: 'TT scale'
}

var FHQ_POST_2 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/MM.png',
    questions: {
        top: FHQ_2,
        bottom: FHQ_2_bottom_text
    },
    food_item: "MM.png",
    rating_status: 'post-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_2, FHQ_2_bottom_text",
    event_converted_details: 'MM scale'
}

var FHQ_POST_3 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/BBQ.png',
    questions: {
        top: FHQ_3,
        bottom: FHQ_3_bottom_text
    },
    food_item: "BBQ.png",
    rating_status: 'post-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_3, FHQ_3_bottom_text",
    event_converted_details: 'BBQ scale'
}

var FHQ_POST_4 = {
    stage_name: "food-and-hunger-questions",
    type: 'food-and-hunger-questions',
    stimulus: 'hunger',
    questions: {
        top: FHQ_4,
    },
    food_item: "hunger",
    rating_status: 'post-rating',
    event_type: 'Food question scale appears',
    event_raw_details: "FHQ_4",
    event_converted_details: 'Hunger scale'
}

var loop_node_counter_vvr = 0;
var loop_node_counter_vvr_determination = 0;
var loop_node_counter_max_num_correct = 0;
var loop_node_counter_max_num_incorrect = 0;
var vvrIsCorrect = false;

var vvr_ = {
    vvr_a: function() {
        var min_blocks_num = min_blocks_num_VVR1,
            max_num_correct_consecutive_questions = max_num_correct_consecutive_questions_VVR1,
            max_num_correct = max_num_correct_VVR1,
            max_num_incorrect = max_num_incorrect_VVR1;

        var vvr_a = {
            type: 'survey-vvr',
            stage_name: 'instrumental conditioning',
            variables: {
                VVR_INTERVAL_NUM: max_num_incorrect_VVR1,
                VVR_INTERVAL_DURATION: interval_duration_VVR1,
                VVR_OUTCOME_DURATION: outcome_duration_VVR1,
                VVR_PROB_VALUE: prob_value_VVR1,
                VVR_DEGRAD_PATTERN : degrad_pattern_VVR1,
            }
        }
        
        var questions_a = {
            timeline: [
                {
                    type: 'survey-vvr-questions-left',
                    stage_name: 'VVR_copy_1 question-left instrumental conditioning',
                    vvr_stage: 'VVR_copy_1',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'VVR_copy_1 question-left instrumental conditioning text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'VVR_copy_1 question-left instrumental conditioning text appears',
                        }
                    },
                    vars: {
                        question_text_a1: question_text_a1,
                        question_text_a2: question_text_a2,
                        question_text_b1: question_text_b1,
                        question_text_b2: question_text_b2,
                        question_text_b3: question_text_b3,
                        question_text_b4: question_text_b4,
                        popup_text: popup_text,
                        max_num_correct_consecutive_questions: max_num_correct_consecutive_questions
                    }
                },
                {
                    stage_name: 'VVR_copy_1 question-left instrumental conditioning feedback text',
                    type: 'html-keyboard-response',
                    stimulus: function() {
                        if(vvrIsCorrect) { 
                            return '<p style="font-size: 24px;">' + correct_text + '</p>';
                        } else {
                            return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                        }
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: feedback_duration,
                    event_type: 'text appears',
                    event_raw_details: function() {
                        if(vvrIsCorrect) { 
                            return 'correct_text';
                        } else {
                            return 'incorrect_text';
                        }
                    },
                    event_converted_details: 'VVR_copy_1 question-left instrumental conditioning feedback text appears'
                }
            ]
        }

        var questions_b = {
            timeline: [
                {
                    type: 'survey-vvr-questions-right',
                    stage_name: 'VVR_copy_1 question-right instrumental conditioning',
                    vvr_stage: 'VVR_copy_1',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(a) appears',
                            event_converted_details: 'VVR_copy_1 question-right instrumental conditioning text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(b) appears',
                            event_converted_details: 'VVR_copy_1 question-right instrumental conditioning text appears',
                        }
                    },
                    vars: {
                        question_text_a1: question_text_a1,
                        question_text_a2: question_text_a2,
                        question_text_b1: question_text_b1,
                        question_text_b2: question_text_b2,
                        question_text_b3: question_text_b3,
                        question_text_b4: question_text_b4,
                        popup_text: popup_text,
                        max_num_correct_consecutive_questions: max_num_correct_consecutive_questions
                    }
                },
                {
                    stage_name: 'VVR_copy_1 question-right instrumental conditioning feedback text',
                    type: 'html-keyboard-response',
                    stimulus: function() {
                        if(vvrIsCorrect) { 
                            return '<p style="font-size: 24px;">' + correct_text + '</p>';
                        } else {
                            return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                        }
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: feedback_duration,
                    event_type: 'text appears',
                    event_raw_details: function() {
                        if(vvrIsCorrect) { 
                            return 'correct_text';
                        } else {
                            return 'incorrect_text';
                        }
                    },
                    event_converted_details: 'VVR_copy_1 question-right instrumental conditioning feedback text appears'
                }
            ]
        }

        var vvr_a_questions = {
            timeline: jsPsych.randomization.shuffle([questions_a, questions_b])
        }

        var vvr_a_max_num_correct = max_num_correct_consecutive_questions != 0 && max_num_correct_consecutive_questions <= max_num_correct ? max_num_correct_consecutive_questions : max_num_correct;

        var loop_node_VVR = {
            timeline: [vvr_a, vvr_a_questions],
            loop_function: function(){
                if(loop_node_counter_vvr_determination >= min_blocks_num && max_num_incorrect <= loop_node_counter_max_num_incorrect) {
                    loop_node_counter_vvr = 0;
                    return false;            
                } else if(loop_node_counter_vvr_determination >= min_blocks_num && vvr_a_max_num_correct <= loop_node_counter_max_num_correct) {
                    loop_node_counter_vvr = 0;
                    return false;
                } else {
                    if(loop_node_counter_vvr >= min_blocks_num) {
                        loop_node_counter_vvr = 0;
                    }
                    return true;
                }
            }
        }

        return loop_node_VVR;
    },
    vvr_b: function() {
        var min_blocks_num = min_blocks_num_VVR2,
        max_num_correct_consecutive_questions = max_num_correct_consecutive_questions_VVR2,
        max_num_correct = max_num_correct_VVR2,
        max_num_incorrect = max_num_incorrect_VVR2;

        var vvr_a = {
            type: 'survey-vvr',
            stage_name: 'contingency degradation',
            variables: {
                VVR_INTERVAL_NUM: max_num_incorrect_VVR2,
                VVR_INTERVAL_DURATION: interval_duration_VVR2,
                VVR_OUTCOME_DURATION: outcome_duration_VVR2,
                VVR_PROB_VALUE: prob_value_VVR2,
                VVR_DEGRAD_PATTERN : degrad_pattern_VVR2
            }
        }
        
        var questions_a = {
            timeline: [
                {
                    type: 'survey-vvr-questions-left',
                    vvr_stage: 'VVR_copy_2',
                    stage_name: 'VVR_copy_2 question-left contingency degradation',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'VVR_copy_2 question-left contingency degradation text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'VVR_copy_2 question-left contingency degradation text appears',
                        }
                    },
                    vars: {
                        question_text_a1: question_text_a1,
                        question_text_a2: question_text_a2,
                        question_text_b1: question_text_b1,
                        question_text_b2: question_text_b2,
                        question_text_b3: question_text_b3,
                        question_text_b4: question_text_b4,
                        popup_text: popup_text,
                        max_num_correct_consecutive_questions: max_num_correct_consecutive_questions
                    }
                },
                {
                    stage_name: 'VVR_copy_2 question-left contingency degradation feedback text',
                    type: 'html-keyboard-response',
                    stimulus: function() {
                        if(vvrIsCorrect) { 
                            return '<p style="font-size: 24px;">' + correct_text + '</p>';
                        } else {
                            return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                        }
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: feedback_duration,
                    event_type: 'text appears',
                    event_raw_details: function() {
                        if(vvrIsCorrect) { 
                            return 'correct_text';
                        } else {
                            return 'incorrect_text';
                        }
                    },
                    event_converted_details: 'VVR_copy_2 question-left contingency degradation feedback text appears'
                }
            ]
        }

        var questions_b = {
            timeline: [
                {
                    type: 'survey-vvr-questions-right',
                    vvr_stage: 'VVR_copy_2',
                    stage_name: 'VVR_copy_2 question-right contingency degradation',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(a) appears',
                            event_converted_details: 'VVR_copy_2 question-right contingency degradation text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(b) appears',
                            event_converted_details: 'VVR_copy_2 question-right contingency degradation text appears',
                        }
                    },
                    vars: {
                        question_text_a1: question_text_a1,
                        question_text_a2: question_text_a2,
                        question_text_b1: question_text_b1,
                        question_text_b2: question_text_b2,
                        question_text_b3: question_text_b3,
                        question_text_b4: question_text_b4,
                        popup_text: popup_text,
                        max_num_correct_consecutive_questions: max_num_correct_consecutive_questions
                    }
                },
                {
                    stage_name: 'VVR_copy_2 question-right contingency degradation feedback text',
                    type: 'html-keyboard-response',
                    stimulus: function() {
                        if(vvrIsCorrect) { 
                            return '<p style="font-size: 24px;">' + correct_text + '</p>';
                        } else {
                            return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                        }
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: feedback_duration,
                    event_type: 'text appears',
                    event_raw_details: function() {
                        if(vvrIsCorrect) { 
                            return 'correct_text';
                        } else {
                            return 'incorrect_text';
                        }
                    },
                    event_converted_details: 'VVR_copy_2 question-right contingency degradation feedback text appears'
                }
            ]
        }

        var vvr_a_questions = {
            timeline: jsPsych.randomization.shuffle([questions_a, questions_b])
        }

        var vvr_a_max_num_correct = max_num_correct_consecutive_questions != 0 && max_num_correct_consecutive_questions <= max_num_correct ? max_num_correct_consecutive_questions : max_num_correct;

        var loop_node_VVR = {
            timeline: [vvr_a, vvr_a_questions],
            loop_function: function(){
                if(loop_node_counter_vvr_determination >= min_blocks_num && max_num_incorrect <= loop_node_counter_max_num_incorrect) {
                    loop_node_counter_vvr = 0;
                    return false;            
                } else if(loop_node_counter_vvr_determination >= min_blocks_num && vvr_a_max_num_correct <= loop_node_counter_max_num_correct) {
                    loop_node_counter_vvr = 0;
                    return false;
                } else {
                    if(loop_node_counter_vvr >= min_blocks_num) {
                        loop_node_counter_vvr = 0;
                    }
                    return true;
                }
            }
        }

        return loop_node_VVR;
    },
    vvr_c: function() {
        var min_blocks_num = min_blocks_num_VVR3,
        max_num_correct_consecutive_questions = max_num_correct_consecutive_questions_VVR3,
        max_num_correct = max_num_correct_VVR3,
        max_num_incorrect = max_num_incorrect_VVR3;

        var vvr_a = {
            type: 'survey-vvr',
            stage_name: 'contingency restoration',
            variables: {
                VVR_INTERVAL_NUM: max_num_incorrect_VVR3,
                VVR_INTERVAL_DURATION: interval_duration_VVR3,
                VVR_OUTCOME_DURATION: outcome_duration_VVR3,
                VVR_PROB_VALUE: prob_value_VVR3,
                VVR_DEGRAD_PATTERN : degrad_pattern_VVR3
            }
        }
        
        var questions_a = {
            timeline: [
                {
                    type: 'survey-vvr-questions-left',
                    vvr_stage: 'VVR_copy_3',
                    stage_name: 'VVR_copy_3 question-left contingency restoration',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'VVR_copy_3 question-left contingency restoration text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'VVR_copy_3 question-left contingency restoration text appears',
                        }
                    },
                    vars: {
                        question_text_a1: question_text_a1,
                        question_text_a2: question_text_a2,
                        question_text_b1: question_text_b1,
                        question_text_b2: question_text_b2,
                        question_text_b3: question_text_b3,
                        question_text_b4: question_text_b4,
                        popup_text: popup_text,
                        max_num_correct_consecutive_questions: max_num_correct_consecutive_questions
                    }
                },
                {
                    stage_name: 'VVR_copy_3 question-left contingency restoration feedback text',
                    type: 'html-keyboard-response',
                    stimulus: function() {
                        if(vvrIsCorrect) { 
                            return '<p style="font-size: 24px;">' + correct_text + '</p>';
                        } else {
                            return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                        }
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: feedback_duration,
                    event_type: 'text appears',
                    event_raw_details: function() {
                        if(vvrIsCorrect) { 
                            return 'correct_text';
                        } else {
                            return 'incorrect_text';
                        }
                    },
                    event_converted_details: 'VVR_copy_3 question-left contingency restoration feedback text appears'
                }
            ]
        }

        var questions_b = {
            timeline: [
                {
                    type: 'survey-vvr-questions-right',
                    vvr_stage: 'VVR_copy_3',
                    stage_name: 'VVR_copy_3 question-right contingency restoration',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(a) appears',
                            event_converted_details: 'VVR_copy_3 question-right contingency restoration text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(b) appears',
                            event_converted_details: 'VVR_copy_3 question-right contingency restoration text appears',
                        }
                    },
                    vars: {
                        question_text_a1: question_text_a1,
                        question_text_a2: question_text_a2,
                        question_text_b1: question_text_b1,
                        question_text_b2: question_text_b2,
                        question_text_b3: question_text_b3,
                        question_text_b4: question_text_b4,
                        popup_text: popup_text,
                        max_num_correct_consecutive_questions: max_num_correct_consecutive_questions
                    }
                },
                {
                    stage_name: 'VVR_copy_3 question-right contingency restoration feedback text',
                    type: 'html-keyboard-response',
                    stimulus: function() {
                        if(vvrIsCorrect) { 
                            return '<p style="font-size: 24px;">' + correct_text + '</p>';
                        } else {
                            return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                        }
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: feedback_duration,
                    event_type: 'text appears',
                    event_raw_details: function() {
                        if(vvrIsCorrect) { 
                            return 'correct_text';
                        } else {
                            return 'incorrect_text';
                        }
                    },
                    event_converted_details: 'VVR_copy_3 question-right contingency restoration feedback text appears'
                }
            ]
        }

        var vvr_a_questions = {
            timeline: jsPsych.randomization.shuffle([questions_a, questions_b])
        }

        var vvr_a_max_num_correct = max_num_correct_consecutive_questions != 0 && max_num_correct_consecutive_questions <= max_num_correct ? max_num_correct_consecutive_questions : max_num_correct;

        var loop_node_VVR = {
            timeline: [vvr_a, vvr_a_questions],
            loop_function: function(){
                if(loop_node_counter_vvr_determination >= min_blocks_num && max_num_incorrect <= loop_node_counter_max_num_incorrect) {
                    loop_node_counter_vvr = 0;
                    return false;            
                } else if(loop_node_counter_vvr_determination >= min_blocks_num && vvr_a_max_num_correct <= loop_node_counter_max_num_correct) {
                    loop_node_counter_vvr = 0;
                    return false;
                } else {
                    if(loop_node_counter_vvr >= min_blocks_num) {
                        loop_node_counter_vvr = 0;
                    }
                    return true;
                }
            }
        }

        return loop_node_VVR;
    },
    instructions_a: {
        instructions_open: {
            timeline: [{ 
                stage_name: 'instrumental conditioning open instructions page',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_VVR1,
                trial_latency: open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_VVR1',
                event_converted_details: 'instrumental conditioning open text appears'
            }],
            conditional_function: function(){
                return  open_instruct_VVR1;
            }
        },
        instructions_close: {
            timeline: [{
                stage_name: 'instrumental conditioning close instructions page',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_VVR1,
                trial_latency: close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_VVR1',
                event_converted_details: 'instrumental conditioning close text appears'
            }],
            conditional_function: function(){
                return close_instruct_VVR1;
            }
        }
    },
    instructions_b: {
        instructions_open: {
            timeline: [{ 
                stage_name: 'contingency degradation open instructions page',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_VVR2,
                trial_latency: open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text',
                event_converted_details: 'contingency degradation open text appears'
            }],
            conditional_function: function(){
                return  open_instruct_VVR2;
            }
        },
        instructions_close: {
            timeline: [{
                stage_name: 'contingency degradation close instructions page',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_VVR2,
                trial_latency: close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text',
                event_converted_details: 'contingency degradation close text appears'
            }],
            conditional_function: function(){
                return close_instruct_VVR2;
            }
        }
    },
    instructions_c: {
        instructions_open: {
            timeline: [{ 
                stage_name: 'contingency restoration open instructions page',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_VVR3,
                trial_latency: open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text',
                event_converted_details: 'contingency restoration open text appears'
            }],
            conditional_function: function(){
                return  open_instruct_VVR3;
            }
        },
        instructions_close: {
            timeline: [{
                stage_name: 'contingency restoration close instructions page',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_VVR3,
                trial_latency: close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text',
                event_converted_details: 'contingency restoration close text appears'
            }],
            conditional_function: function(){
                return close_instruct_VVR3;
            }
        }
    }
}

var CLINICAL_OPEN = {
    stage_name: 'Clinical open',
    type: 'html-keyboard-response',
    stimulus: open_instruct_text_clinical,
    trial_latency: open_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'open_instruct_text_clinical',
    event_converted_details: 'Clinical open text appears'
}

var CLINICAL_CLOSE = {
    stage_name: 'Clinical close',
    type: 'html-keyboard-response',
    stimulus: close_instruct_text_clinical,
    trial_latency: close_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'close_instruct_text_clinical',
    event_converted_details: 'Clinical close text appears'
};

var PAV_INSTRUCT_OPEN = {
    timeline: [{
        stage_name: 'Pavlovian Conditioning open instructions page',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_pav,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_pav',
        event_converted_details: "Pavlovian Conditioning open instructions text appears",
    }],
    conditional_function: function() {
        return open_instruct_pav ? true : false;
    }
};

var pav_correct_holder = 0;
var pav_incorrect_holder = 0;
var pav_is_correct = false;
var pav_multi_choice_counter = 0;

var pav_stimuli = [
    {
        stimuli: "/static/images/MM.png",
        value: 'MM',
        color: "green",
        response: 'a'
    },
    {
        stimuli: "/static/images/BBQ.png",
        value: 'BBQ',
        color: "blue",
        response: 'b'
    },
    {
        stimuli: "/static/images/TT.png",
        value: 'TT',
        color: "red",
        response: 'c'
    },
    {
        stimuli: "/static/images/EMPTY.png",
        value: 'Empty',
        color: "yellow",
        response: 'd'
    }
];

var pav_multi_choice_array = jsPsych.randomization.shuffle(pav_stimuli);

var PAV_CONDITIONING = {
    timeline: [
        {
            stage_name: 'Pav Conditioning',
            frame_isi: ITI_duration,
            frame_time: stim_duration,
            stimuli: [],
            stimulus: jsPsych.randomization.shuffle(pav_stimuli),
            type: 'animation'
        },
        {
            stage_name: 'Pav Conditioning Response',
            type: 'survey-multi-choice',
            questions: [
                { prompt: "Which snack is overstocked?", name: 'response', options: [
                    {
                        name: 'M&Ms',
                        value: 'MM',
                        response: 'a',
                    },
                    {
                        name: 'BBQ',
                        value: 'BBQ',
                        response: 'b',
                    },
                    {
                        name: 'Tiny teddy',
                        value: 'TT',
                        response: 'c',
                    },
                    {
                        name: 'Empty',
                        value: 'Empty',
                        response: 'd',
                    }
                ]
            }],
            button_label: 'submit answer',
        },
        {
            stage_name: 'Pav Conditioning',
            type: 'html-keyboard-response',
            stimulus: function() {
                if(pav_is_correct) { 
                    return '<p style="font-size: 24px;">Correct</p>';
                } else {
                    return '<p style="font-size: 24px;">Incorrect</p>';
                }
            },
            trial_duration: 1000,
            event_type: 'text appears',
            event_raw_details: function() {
               if(pav_is_correct){
                   return 'Correct'
               } else {
                   return 'Incorrect'
               } 
            },
            event_converted_details: function() {
                if(pav_is_correct){
                    return 'Correct'
                } else {
                    return 'Incorrect'
                } 
             }
        }
    ],
    loop_function: function(){
        pav_multi_choice_counter ++;
        pav_is_correct = false;
        if(pav_correct_holder >= max_num_correct_pav || pav_incorrect_holder >= max_num_incorrect_pav) {
            return false;
        } else {
            return true;
        }
    }
}

var TRANSFER_TEST_INSTRUCT_OPEN = {
    timeline: [{
        stage_name: 'Transfer Test open instructions page',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_transfer_test,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_transfer_test',
        event_converted_details: "Transfer Test open instructions text appears",
    }],
    conditional_function: function() {
        return open_instruct_transfer_test ? true : false;
    }
}

var TRANSFER_TEST = {
    stage_name: 'Transfer Test',
    type: 'transfer-test',
    stimulus: 'vending machine',
    transfer_test_color_consistency: sequence_array_transfer_test,
    transfer_test_color_duration: stim_duration,
    transfer_test_white_duration: ITI_duration,
    sequence_reps: number_reps_transfer_test
}

var DEVAL_VIDEO = {
    stage_name: 'Deval Video',
    type: 'video-keyboard-response',
    sources: [counter_balancing[0].video + '.mp4', counter_balancing[0].video + '.ogg'],
    autoplay: true,
    trial_duration: video_duration * 1000,
    controls: false,
    response_ends_trial: false,
    trial_ends_after_video: true,
    audio: video_sound,
    open_instruct: open_instruct_video
}

var DEVAL_TEST = {
    stage_name: 'Deval Test',
    type: 'transfer-test',
    stimulus: 'vending machine',
    transfer_test_color_consistency: sequence_array_deval_test,
    transfer_test_white_duration: ITI_duration,
    sequence_reps: number_reps_deval_test
}

var CLOSE_HIT = {
    stage_name: 'Close HIT Questions',
    type: 'close-hit-questions',
    preamble: 'Thank you for helping us to research OCD. We could not do this without you.',
    questions: [
        { prompt: "Would you like to receive information on the outcomes of the research?", horizontal: true, name: 'response', options: ['Yes', 'No'] },
        { prompt: "Could we contact you about future research projects?", horizontal: true, name: 'response', options: ['Yes', 'No'] },
        { prompt: "Do you have any suggestions for how we can improve the research?", horizontal: true, name: 'response', options: ['Yes', 'No'] }
    ],
    button_label: 'submit answer',
    event_type: 'questions appears',
    event_raw_details: 'Close HIT Questions',
    event_converted_details: "Close HIT Questions text appears"
}


var THANKS = {
    stage_name: 'Thanks',
    type: 'html-keyboard-response',
    stimulus: close_instruct_text_thanks,
    trial_latency: close_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'close_instruct_text_thanks',
    event_converted_details: "'Thank You!' text appears"
};

var timeline = [];
// Init parameters main
timeline.push({
    type: 'Parameters',
    stage_name: 'Parameters',
});

// timeline.push(parameters.parameters_instrumental_conditioning);
// timeline.push(parameters.parameters_contingency_degradation);
// timeline.push(parameters.parameters_contingency_restoration);

// Key-testing
timeline.push(KEY_TESTING_OPEN, KEY_TESTING, KEY_TESTING_CLOSE);
// Demographics
timeline.push(DEMOGRAPHICS);
// Intro: We'd like to briefly ask you about some symptoms before the online game.
timeline.push(CLINICAL_OPEN);

// Randomisation function for Symptom Inventories
var symptom_inventories_random = jsPsych.randomization.shuffle(symptom_inventory);
var symptom_inventories_ordered = symptom_inventory;
var symptom_inventory_arr = symptom_inventory_randomization ?  symptom_inventories_random : symptom_inventories_ordered;
for(var item of symptom_inventory_arr){
    timeline.push(item);
}
// SDS
timeline.push(SDS);
// ICAR
timeline.push(ICAR);
// Food & Hunger Questions pre-rating
timeline.push(FHQ_PRE_1, FHQ_PRE_2, FHQ_PRE_3, FHQ_PRE_4);
// Close: That's it for the symptom questions. Now we're ready to start the online game
timeline.push(CLINICAL_CLOSE);

timeline.push(vvr_.instructions_a.instructions_open);
timeline.push(vvr_.vvr_a());
timeline.push(vvr_.instructions_a.instructions_close);
timeline.push(vvr_.instructions_b.instructions_open);
timeline.push(vvr_.vvr_b());
timeline.push(vvr_.instructions_b.instructions_close);
timeline.push(vvr_.instructions_c.instructions_open);
timeline.push(vvr_.vvr_c());
timeline.push(vvr_.instructions_c.instructions_close);
// Pavlovian Condition Instruction Open
timeline.push(PAV_INSTRUCT_OPEN);
// Pavlovian Condition
timeline.push(PAV_CONDITIONING);
// Transfer Test Instruction Open
timeline.push(TRANSFER_TEST_INSTRUCT_OPEN);
// Transfer Test
timeline.push(TRANSFER_TEST);
// Deval Video
timeline.push(DEVAL_VIDEO);
// Deval Test
timeline.push(DEVAL_TEST);
// Food & Hunger Questions post-rating
timeline.push(FHQ_POST_1, FHQ_POST_2, FHQ_POST_3, FHQ_POST_4);
//  Close HIT Questions
timeline.push(CLOSE_HIT);
// Thanks
timeline.push(THANKS)

function startExperiment(){
    jsPsych.init({
			timeline: timeline,
            // on_finish: function(){ jsPsych.data.displayData(); }, // Debug
            on_finish: function() {
                psiTurk.saveData({
                    success: function() { 
                        psiTurk.completeHIT();
                    },
                    error: prompt_resubmit
                });
            }, 
            on_data_update: function(data) {
                psiTurk.recordTrialData(data),``
                psiTurk.recordUnstructuredData(),
                psiTurk.saveData();
			}
        }
    );

}

startExperiment();