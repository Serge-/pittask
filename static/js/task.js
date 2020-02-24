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
        video: 0,
        converted_details: "MM"
    },
    b = {
        game_version: 'B',
        left: 'BBQ',
        right: 'MM',
        video: 1,
        converted_details: "BBQ"
    },
    c = {
        game_version: 'C',
        left: 'TT',
        right: 'BBQ',
        video: 2,
        converted_details: "TT"
    }, 
    d = {
        game_version: 'D',
        left: 'BBQ',
        right: 'TT',
        video: 1,
        converted_details: "BBQ"
    },
    e = {
        game_version: 'E',
        left: 'MM',
        right: 'TT',
        video: 0,
        converted_details: "MM"
    },
    f = {
        game_version: 'F',
        left: 'TT',
        right: 'MM',
        video: 2,
        converted_details: "TT"
    },
    g = {
        game_version: 'G',
        left: 'MM',
        right: 'BBQ',
        video: 1,
        converted_details: "BBQ"
    },
    h = {
        game_version: 'H',
        left: 'BBQ',
        right: 'MM',
        video: 0,
        converted_details: "MM"
    },
    i = {
        game_version: 'I',
        left: 'TT',
        right: 'BBQ',
        video: 1,
        converted_details: "BBQ"
    },
    j = {
        game_version: 'J',
        left: 'BBQ',
        right: 'TT',
        video: 2,
        converted_details: "TT"
    },
    k = {
        game_version: 'K',
        left: 'MM',
        right: 'TT',
        video: 2,
        converted_details: "TT"
    },
    l = {
        game_version: 'L',
        left: 'TT',
        right: 'MM',
        video: 0,
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


var loop_node_counter_vvr = 0;
var loop_node_counter_vvr_determination = 0;
var loop_node_counter_max_num_correct = 0;
var loop_node_counter_max_num_incorrect = 0;
var vvrIsCorrect = false;

var vvr_ = {
    vvr_a: function() {
        var { 
            interval_num,
            interval_duration,
            outcome_duration,
            prob_value,
            degrad_pattern,
            min_blocks_num,
            max_num_correct_consecutive_questions,
            max_num_correct,
            max_num_incorrect,
            correct_text,
            incorrect_text,
            feedback_duration,
            question_text_a1,
            question_text_a2,
            question_text_b1,
            question_text_b2,
            question_text_b3,
            question_text_b4,
            popup_text,
            max_num_correct_consecutive_questions,
        } = vvr.instrumental_conditioning;

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
                    stage_name: 'vvr question-left instrumental conditioning',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'vvr question-left instrumental conditioning text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'vvr question-left instrumental conditioning text appears',
                        }
                    },
                    vars: {
                        question_text_a1,
                        question_text_a2,
                        question_text_b1,
                        question_text_b2,
                        question_text_b3,
                        question_text_b4,
                        popup_text,
                        max_num_correct_consecutive_questions,
                    }
                },
                {
                    stage_name: 'vvr question-left instrumental conditioning feedback text',
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
                    event_converted_details: 'vvr question-left instrumental conditioning feedback text appears'
                }
            ]
        }

        var questions_b = {
            timeline: [
                {
                    type: 'survey-vvr-questions-right',
                    stage_name: 'vvr question-right instrumental conditioning',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(a) appears',
                            event_converted_details: 'vvr question-right instrumental conditioning text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(b) appears',
                            event_converted_details: 'vvr question-right instrumental conditioning text appears',
                        }
                    },
                    vars: {
                        question_text_a1,
                        question_text_a2,
                        question_text_b1,
                        question_text_b2,
                        question_text_b3,
                        question_text_b4,
                        popup_text,
                        max_num_correct_consecutive_questions,
                    }
                },
                {
                    stage_name: 'vvr question-right instrumental conditioning feedback text',
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
                    event_converted_details: 'vvr question-right instrumental conditioning feedback text appears'
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
        var { 
            interval_num,
            interval_duration,
            outcome_duration,
            prob_value,
            degrad_pattern,
            min_blocks_num,
            max_num_correct_consecutive_questions,
            max_num_correct,
            max_num_incorrect,
            correct_text,
            incorrect_text,
            feedback_duration,
            question_text_a1,
            question_text_a2,
            question_text_b1,
            question_text_b2,
            question_text_b3,
            question_text_b4,
            popup_text,
            max_num_correct_consecutive_questions,
        } = vvr.contingency_degradation;

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
                    stage_name: 'vvr question-left contingency degradation',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'vvr question-left contingency degradation text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'vvr question-left contingency degradation text appears',
                        }
                    },
                    vars: {
                        question_text_a1,
                        question_text_a2,
                        question_text_b1,
                        question_text_b2,
                        question_text_b3,
                        question_text_b4,
                        popup_text,
                        max_num_correct_consecutive_questions,
                    }
                },
                {
                    stage_name: 'vvr question-left contingency degradation feedback text',
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
                    event_converted_details: 'vvr question-left contingency degradation feedback text appears'
                }
            ]
        }

        var questions_b = {
            timeline: [
                {
                    type: 'survey-vvr-questions-right',
                    stage_name: 'vvr question-right contingency degradation',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(a) appears',
                            event_converted_details: 'vvr question-right contingency degradation text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(b) appears',
                            event_converted_details: 'vvr question-right contingency degradation text appears',
                        }
                    },
                    vars: {
                        question_text_a1,
                        question_text_a2,
                        question_text_b1,
                        question_text_b2,
                        question_text_b3,
                        question_text_b4,
                        popup_text,
                        max_num_correct_consecutive_questions,
                    }
                },
                {
                    stage_name: 'vvr question-right contingency degradation feedback text',
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
                    event_converted_details: 'vvr question-right contingency degradation feedback text appears'
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
        var { 
            interval_num,
            interval_duration,
            outcome_duration,
            prob_value,
            degrad_pattern,
            min_blocks_num,
            max_num_correct_consecutive_questions,
            max_num_correct,
            max_num_incorrect,
            correct_text,
            incorrect_text,
            feedback_duration,
            question_text_a1,
            question_text_a2,
            question_text_b1,
            question_text_b2,
            question_text_b3,
            question_text_b4,
            popup_text,
            max_num_correct_consecutive_questions,
        } = vvr.contingency_restoration;

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
                    stage_name: 'vvr question-left contingency restoration',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'vvr question-left contingency restoration text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'vvr question-left contingency restoration text appears',
                        }
                    },
                    vars: {
                        question_text_a1,
                        question_text_a2,
                        question_text_b1,
                        question_text_b2,
                        question_text_b3,
                        question_text_b4,
                        popup_text,
                        max_num_correct_consecutive_questions,
                    }
                },
                {
                    stage_name: 'vvr question-left contingency restoration feedback text',
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
                    event_converted_details: 'vvr question-left contingency restoration feedback text appears'
                }
            ]
        }

        var questions_b = {
            timeline: [
                {
                    type: 'survey-vvr-questions-right',
                    stage_name: 'vvr question-right contingency restoration',
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(a) appears',
                            event_converted_details: 'vvr question-right contingency restoration text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 2(b) appears',
                            event_converted_details: 'vvr question-right contingency restoration text appears',
                        }
                    },
                    vars: {
                        question_text_a1,
                        question_text_a2,
                        question_text_b1,
                        question_text_b2,
                        question_text_b3,
                        question_text_b4,
                        popup_text,
                        max_num_correct_consecutive_questions,
                    }
                },
                {
                    stage_name: 'vvr question-right contingency restoration feedback text',
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
                    event_converted_details: 'vvr question-right contingency restoration feedback text appears'
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


var timeline = [];
// Init parameters
timeline.push({
    type: 'Parameters',
    stage_name: 'Parameters',
});

timeline.push(parameters.parameters_instrumental_conditioning);
timeline.push(parameters.parameters_contingency_degradation);
timeline.push(parameters.parameters_contingency_restoration);

// Demographics
timeline.push(DEMOGRAPHICS);
// Intro: We'd like to briefly ask you about some symptoms before the online game.
timeline.push(CLINICAL_OPEN);
// Randomisation function for Symptom Inventories
var symptom_inventories_random = jsPsych.randomization.shuffle(survey.symptom_inventory);
// required for testing
var symptom_inventories_ordered = survey.symptom_inventory; 
for(var item of symptom_inventories_random ){
    timeline.push(item);
}
// SDS
timeline.push(SDS);
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