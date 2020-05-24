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
        video: video_MM,
        converted_details: "MM"
    },
    b = {
        game_version: 'B',
        left: 'BBQ',
        right: 'MM',
        video: video_BBQ,
        converted_details: "BBQ"
    },
    c = {
        game_version: 'C',
        left: 'TT',
        right: 'BBQ',
        video: video_TT,
        converted_details: "TT"
    }, 
    d = {
        game_version: 'D',
        left: 'BBQ',
        right: 'TT',
        video: video_BBQ,
        converted_details: "BBQ"
    },
    e = {
        game_version: 'E',
        left: 'MM',
        right: 'TT',
        video: video_MM,
        converted_details: "MM"
    },
    f = {
        game_version: 'F',
        left: 'TT',
        right: 'MM',
        video: video_TT,
        converted_details: "TT"
    },
    g = {
        game_version: 'G',
        left: 'MM',
        right: 'BBQ',
        video: video_BBQ,
        converted_details: "BBQ"
    },
    h = {
        game_version: 'H',
        left: 'BBQ',
        right: 'MM',
        video: video_MM,
        converted_details: "MM"
    },
    i = {
        game_version: 'I',
        left: 'TT',
        right: 'BBQ',
        video: video_BBQ,
        converted_details: "BBQ"
    },
    j = {
        game_version: 'J',
        left: 'BBQ',
        right: 'TT',
        video: video_TT,
        converted_details: "TT"
    },
    k = {
        game_version: 'K',
        left: 'MM',
        right: 'TT',
        video: video_TT,
        converted_details: "TT"
    },
    l = {
        game_version: 'L',
        left: 'TT',
        right: 'MM',
        video: video_MM,
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
        stage_name: 'parameters instrumental conditioning',
        variables: {
            open_instruct: vvr.instrumental_conditioning.open_instruct,
            open_instruct_text: vvr.instrumental_conditioning.open_instruct_text,
            open_instruct_latency: vvr.instrumental_conditioning.open_instruct_latency,
            degrad_pattern: vvr.instrumental_conditioning.degrad_pattern,
            prob_value: vvr.instrumental_conditioning.prob_value,
            interval_duration: vvr.instrumental_conditioning.interval_duration,
            outcome_duration: vvr.instrumental_conditioning.outcome_duration,
            interval_num: vvr.instrumental_conditioning.interval_num,
            min_blocks_num: vvr.instrumental_conditioning.min_blocks_num,
            max_num_correct: vvr.instrumental_conditioning.max_num_correct,
            max_num_incorrect: vvr.instrumental_conditioning.max_num_incorrect,
            max_num_correct_consecutive_questions: vvr.instrumental_conditioning.max_num_correct_consecutive_questions,
            question_text_a1: vvr.instrumental_conditioning.question_text_a1,
            question_text_a2: vvr.instrumental_conditioning.question_text_a2,
            question_text_b1: vvr.instrumental_conditioning.question_text_b1,
            question_text_b2: vvr.instrumental_conditioning.question_text_b2,
            question_text_b3: vvr.instrumental_conditioning.question_text_b3,
            question_text_b4: vvr.instrumental_conditioning.question_text_b4,
            popup_text: vvr.instrumental_conditioning.popup_text,
            correct_text: vvr.instrumental_conditioning.correct_text,
            incorrect_text: vvr.instrumental_conditioning.incorrect_text,
            feedback_duration: vvr.instrumental_conditioning.feedback_duration,
            close_instruct: vvr.instrumental_conditioning.close_instruct,
            close_instruct_text: vvr.instrumental_conditioning.close_instruct_text,
            close_instruct_latency: vvr.instrumental_conditioning.close_instruct_latency,
        }
    },
    parameters_contingency_degradation: {
        type: 'parameters-VVR',
        stage_name: 'parameters contingency degradation',
        variables: {
            open_instruct: vvr.contingency_degradation.open_instruct,
            open_instruct_text: vvr.contingency_degradation.open_instruct_text,
            open_instruct_latency: vvr.contingency_degradation.open_instruct_latency,
            degrad_pattern: vvr.contingency_degradation.degrad_pattern,
            prob_value: vvr.contingency_degradation.prob_value,
            interval_duration: vvr.contingency_degradation.interval_duration,
            outcome_duration: vvr.contingency_degradation.outcome_duration,
            interval_num: vvr.contingency_degradation.interval_num,
            min_blocks_num: vvr.contingency_degradation.min_blocks_num,
            max_num_correct: vvr.contingency_degradation.max_num_correct,
            max_num_incorrect: vvr.contingency_degradation.max_num_incorrect,
            max_num_correct_consecutive_questions: vvr.contingency_degradation.max_num_correct_consecutive_questions,
            question_text_a1: vvr.contingency_degradation.question_text_a1,
            question_text_a2: vvr.contingency_degradation.question_text_a2,
            question_text_b1: vvr.contingency_degradation.question_text_b1,
            question_text_b2: vvr.contingency_degradation.question_text_b2,
            question_text_b3: vvr.contingency_degradation.question_text_b3,
            question_text_b4: vvr.contingency_degradation.question_text_b4,
            popup_text: vvr.contingency_degradation.popup_text,
            correct_text: vvr.contingency_degradation.correct_text,
            incorrect_text: vvr.contingency_degradation.incorrect_text,
            feedback_duration: vvr.contingency_degradation.feedback_duration,
            close_instruct: vvr.contingency_degradation.close_instruct,
            close_instruct_text: vvr.contingency_degradation.close_instruct_text,
            close_instruct_latency: vvr.contingency_degradation.close_instruct_latency,
        }
    },
    parameters_contingency_restoration: {
        type: 'parameters-VVR',
        stage_name: 'parameters contingency restoration',
        variables: {
            open_instruct: vvr.contingency_restoration.open_instruct,
            open_instruct_text: vvr.contingency_restoration.open_instruct_text,
            open_instruct_latency: vvr.contingency_restoration.open_instruct_latency,
            degrad_pattern: vvr.contingency_restoration.degrad_pattern,
            prob_value: vvr.contingency_restoration.prob_value,
            interval_duration: vvr.contingency_restoration.interval_duration,
            outcome_duration: vvr.contingency_restoration.outcome_duration,
            interval_num: vvr.contingency_restoration.interval_num,
            min_blocks_num: vvr.contingency_restoration.min_blocks_num,
            max_num_correct: vvr.contingency_restoration.max_num_correct,
            max_num_incorrect: vvr.contingency_restoration.max_num_incorrect,
            max_num_correct_consecutive_questions: vvr.contingency_restoration.max_num_correct_consecutive_questions,
            question_text_a1: vvr.contingency_restoration.question_text_a1,
            question_text_a2: vvr.contingency_restoration.question_text_a2,
            question_text_b1: vvr.contingency_restoration.question_text_b1,
            question_text_b2: vvr.contingency_restoration.question_text_b2,
            question_text_b3: vvr.contingency_restoration.question_text_b3,
            question_text_b4: vvr.contingency_restoration.question_text_b4,
            popup_text: vvr.contingency_restoration.popup_text,
            correct_text: vvr.contingency_restoration.correct_text,
            incorrect_text: vvr.contingency_restoration.incorrect_text,
            feedback_duration: vvr.contingency_restoration.feedback_duration,
            close_instruct: vvr.contingency_restoration.close_instruct,
            close_instruct_text: vvr.contingency_restoration.close_instruct_text,
            close_instruct_latency: vvr.contingency_restoration.close_instruct_latency,
        }
    }
}

var KEY_TESTING_OPEN = {
    stage_name: 'Key-testing',
    type: 'html-keyboard-response',
    stimulus: key_testing_open,
    trial_latency: key_testing_latency_period,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'key_testing_open',
    event_converted_details: 'Key-testing open text appears'
}

var KEY_TESTING = {
    stage_name: 'Key-testing',
    type: 'key-testing',
    stimulus: '',
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'image appears',
    event_raw_details: 'clinical_close_text',
    event_converted_details: 'white vending machine appears'
}

var KEY_TESTING_CLOSE = {
    stage_name: 'Key-testing',
    type: 'html-keyboard-response',
    stimulus: key_testing_close,
    trial_latency: key_testing_latency_period,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'key_testing_close',
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
        var _vvr$instrumental_con = vvr.instrumental_conditioning,
            interval_num = _vvr$instrumental_con.interval_num,
            interval_duration = _vvr$instrumental_con.interval_duration,
            outcome_duration = _vvr$instrumental_con.outcome_duration,
            prob_value = _vvr$instrumental_con.prob_value,
            degrad_pattern = _vvr$instrumental_con.degrad_pattern,
            min_blocks_num = _vvr$instrumental_con.min_blocks_num,
            max_num_correct_consecutive_questions = _vvr$instrumental_con.max_num_correct_consecutive_questions,
            max_num_correct = _vvr$instrumental_con.max_num_correct,
            max_num_incorrect = _vvr$instrumental_con.max_num_incorrect,
            correct_text = _vvr$instrumental_con.correct_text,
            incorrect_text = _vvr$instrumental_con.incorrect_text,
            feedback_duration = _vvr$instrumental_con.feedback_duration,
            question_text_a1 = _vvr$instrumental_con.question_text_a1,
            question_text_a2 = _vvr$instrumental_con.question_text_a2,
            question_text_b1 = _vvr$instrumental_con.question_text_b1,
            question_text_b2 = _vvr$instrumental_con.question_text_b2,
            question_text_b3 = _vvr$instrumental_con.question_text_b3,
            question_text_b4 = _vvr$instrumental_con.question_text_b4,
            popup_text = _vvr$instrumental_con.popup_text,
            max_num_correct_consecutive_questions = _vvr$instrumental_con.max_num_correct_consecutive_questions;

        var vvr_a = {
            type: 'survey-vvr',
            stage_name: 'instrumental conditioning',
            variables: {
                VVR_INTERVAL_NUM: interval_num,
                VVR_INTERVAL_DURATION: interval_duration,
                VVR_OUTCOME_DURATION: outcome_duration,
                VVR_PROB_VALUE: prob_value,
                VVR_DEGRAD_PATTERN : degrad_pattern,
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
        var _vvr$contingency_degr = vvr.contingency_degradation,
        interval_num = _vvr$contingency_degr.interval_num,
        interval_duration = _vvr$contingency_degr.interval_duration,
        outcome_duration = _vvr$contingency_degr.outcome_duration,
        prob_value = _vvr$contingency_degr.prob_value,
        degrad_pattern = _vvr$contingency_degr.degrad_pattern,
        min_blocks_num = _vvr$contingency_degr.min_blocks_num,
        max_num_correct_consecutive_questions = _vvr$contingency_degr.max_num_correct_consecutive_questions,
        max_num_correct = _vvr$contingency_degr.max_num_correct,
        max_num_incorrect = _vvr$contingency_degr.max_num_incorrect,
        correct_text = _vvr$contingency_degr.correct_text,
        incorrect_text = _vvr$contingency_degr.incorrect_text,
        feedback_duration = _vvr$contingency_degr.feedback_duration,
        question_text_a1 = _vvr$contingency_degr.question_text_a1,
        question_text_a2 = _vvr$contingency_degr.question_text_a2,
        question_text_b1 = _vvr$contingency_degr.question_text_b1,
        question_text_b2 = _vvr$contingency_degr.question_text_b2,
        question_text_b3 = _vvr$contingency_degr.question_text_b3,
        question_text_b4 = _vvr$contingency_degr.question_text_b4,
        popup_text = _vvr$contingency_degr.popup_text,
        max_num_correct_consecutive_questions = _vvr$contingency_degr.max_num_correct_consecutive_questions;

        var vvr_a = {
            type: 'survey-vvr',
            stage_name: 'contingency degradation',
            variables: {
                VVR_INTERVAL_NUM: interval_num,
                VVR_INTERVAL_DURATION: interval_duration,
                VVR_OUTCOME_DURATION: outcome_duration,
                VVR_PROB_VALUE: prob_value,
                VVR_DEGRAD_PATTERN : degrad_pattern,
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

        var _vvr$contingency_rest = vvr.contingency_restoration,
            interval_num = _vvr$contingency_rest.interval_num,
            interval_duration = _vvr$contingency_rest.interval_duration,
            outcome_duration = _vvr$contingency_rest.outcome_duration,
            prob_value = _vvr$contingency_rest.prob_value,
            degrad_pattern = _vvr$contingency_rest.degrad_pattern,
            min_blocks_num = _vvr$contingency_rest.min_blocks_num,
            max_num_correct_consecutive_questions = _vvr$contingency_rest.max_num_correct_consecutive_questions,
            max_num_correct = _vvr$contingency_rest.max_num_correct,
            max_num_incorrect = _vvr$contingency_rest.max_num_incorrect,
            correct_text = _vvr$contingency_rest.correct_text,
            incorrect_text = _vvr$contingency_rest.incorrect_text,
            feedback_duration = _vvr$contingency_rest.feedback_duration,
            question_text_a1 = _vvr$contingency_rest.question_text_a1,
            question_text_a2 = _vvr$contingency_rest.question_text_a2,
            question_text_b1 = _vvr$contingency_rest.question_text_b1,
            question_text_b2 = _vvr$contingency_rest.question_text_b2,
            question_text_b3 = _vvr$contingency_rest.question_text_b3,
            question_text_b4 = _vvr$contingency_rest.question_text_b4,
            popup_text = _vvr$contingency_rest.popup_text,
            max_num_correct_consecutive_questions = _vvr$contingency_rest.max_num_correct_consecutive_questions;

        var vvr_a = {
            type: 'survey-vvr',
            stage_name: 'contingency restoration',
            variables: {
                VVR_INTERVAL_NUM: interval_num,
                VVR_INTERVAL_DURATION: interval_duration,
                VVR_OUTCOME_DURATION: outcome_duration,
                VVR_PROB_VALUE: prob_value,
                VVR_DEGRAD_PATTERN : degrad_pattern,
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
                stimulus: vvr.instrumental_conditioning.open_instruct_text,
                trial_latency: vvr.instrumental_conditioning.open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text',
                event_converted_details: 'instrumental conditioning open text appears'
            }],
            conditional_function: function(){
                return  vvr.instrumental_conditioning.open_instruct;
            }
        },
        instructions_close: {
            timeline: [{
                stage_name: 'instrumental conditioning close instructions page',
                type: 'html-keyboard-response',
                stimulus: vvr.instrumental_conditioning.close_instruct_text,
                trial_latency: vvr.instrumental_conditioning.close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'VVR_A_CLOSE_INSTRUCTIONS_TEXT',
                event_converted_details: 'instrumental conditioning close text appears'
            }],
            conditional_function: function(){
                return vvr.instrumental_conditioning.close_instruct;
            }
        }
    },
    instructions_b: {
        instructions_open: {
            timeline: [{ 
                stage_name: 'contingency degradation open instructions page',
                type: 'html-keyboard-response',
                stimulus: vvr.contingency_degradation.open_instruct_text,
                trial_latency: vvr.contingency_degradation.open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text',
                event_converted_details: 'contingency degradation open text appears'
            }],
            conditional_function: function(){
                return  vvr.contingency_degradation.open_instruct;
            }
        },
        instructions_close: {
            timeline: [{
                stage_name: 'contingency degradation close instructions page',
                type: 'html-keyboard-response',
                stimulus: vvr.contingency_degradation.close_instruct_text,
                trial_latency: vvr.contingency_degradation.close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text',
                event_converted_details: 'contingency degradation close text appears'
            }],
            conditional_function: function(){
                return vvr.contingency_degradation.close_instruct;
            }
        }
    },
    instructions_c: {
        instructions_open: {
            timeline: [{ 
                stage_name: 'contingency restoration open instructions page',
                type: 'html-keyboard-response',
                stimulus: vvr.contingency_restoration.open_instruct_text,
                trial_latency: vvr.contingency_restoration.open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text',
                event_converted_details: 'contingency restoration open text appears'
            }],
            conditional_function: function(){
                return  vvr.contingency_restoration.open_instruct;
            }
        },
        instructions_close: {
            timeline: [{
                stage_name: 'contingency restoration close instructions page',
                type: 'html-keyboard-response',
                stimulus: vvr.contingency_restoration.close_instruct_text,
                trial_latency: vvr.contingency_restoration.close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text',
                event_converted_details: 'contingency restoration close text appears'
            }],
            conditional_function: function(){
                return vvr.contingency_restoration.close_instruct;
            }
        }
    }
}


var CLINICAL_OPEN = {
    stage_name: 'Clinical open',
    type: 'html-keyboard-response',
    stimulus: survey.clinical_text.clinical_open_text,
    trial_latency: survey.clinical_text.clinical_latency_period,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'clinical_open_text',
    event_converted_details: 'Clinical open text appears'
}

var CLINICAL_CLOSE = {
    stage_name: 'Clinical close',
    type: 'html-keyboard-response',
    stimulus: survey.clinical_text.clinical_close_text,
    trial_latency: survey.clinical_text.clinical_latency_period,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'clinical_close_text',
    event_converted_details: 'Clinical close text appears'
};

/************************************************************
 * Pavlovian Conditioning
 ************************************************************/
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
            frame_isi: pav_interval_between_images,
            frame_time: pav_time_animation,
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
        if(pav_correct_holder >= pav_correct_answers || pav_incorrect_holder >= pav_incorrect_answers) {
            return false;
        } else {
            return true;
        }
    }
}

var TRANSFER_TEST = {
    stage_name: 'Transfer Test',
    type: 'transfer-test',
    stimulus: 'vending machine',
    transfer_test_color_consistency: transfer_test_color_consistency,
    transfer_test_color_duration: transfer_test_color_duration,
    transfer_test_white_duration: transfer_test_white_duration,
    sequence_reps: transfer_test_reps
}

var DEVAL_VIDEO = {
    stage_name: 'Deval Video',
    type: 'video-keyboard-response',
    sources: [counter_balancing[0].video + '.mp4', counter_balancing[0].video + '.ogg'],
    autoplay: true,
    trial_duration: video_duration * 1000,
    controls: false,
    response_ends_trial: false,
    trial_ends_after_video: true
}

var DEVAL_TEST = {
    stage_name: 'Deval Test',
    type: 'transfer-test',
    stimulus: 'vending machine',
    transfer_test_color_consistency: deval_test,
    transfer_test_white_duration: deval_test_duration,
    sequence_reps: deval_test_reps
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
    stimulus: thanks_close,
    trial_latency: thanks_close_latency_period,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'thanks_close',
    event_converted_details: "'Thank You!' text appears"
};

var timeline = [];
// Init parameters main
timeline.push({
    type: 'Parameters',
    stage_name: 'Parameters',
});

timeline.push(parameters.parameters_instrumental_conditioning);
timeline.push(parameters.parameters_contingency_degradation);
timeline.push(parameters.parameters_contingency_restoration);

// Key-testing
timeline.push(KEY_TESTING_OPEN, KEY_TESTING, KEY_TESTING_CLOSE);
// Demographics
timeline.push(DEMOGRAPHICS);
// Intro: We'd like to briefly ask you about some symptoms before the online game.
timeline.push(CLINICAL_OPEN);

// Randomisation function for Symptom Inventories
var symptom_inventories_random = jsPsych.randomization.shuffle(survey.symptom_inventory);
var symptom_inventories_ordered = survey.symptom_inventory;
var symptom_inventory = symptom_inventory_randomization ?  symptom_inventories_random : symptom_inventories_ordered;
for(var item of symptom_inventory ){
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

// Pavlovian Condition
timeline.push(PAV_CONDITIONING);
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