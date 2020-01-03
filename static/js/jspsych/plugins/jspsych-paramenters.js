jsPsych.plugins['parameters-instrumental-conditioning'] = (function(){

    var plugin = {};
  
    plugin.info = {
        name: 'parameters-instrumental-conditioning',
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
        var {
            open_instruct,
            open_instruct_text,
            open_instruct_latency,
            degrad_pattern,
            prob_value,
            interval_duration,
            outcome_duration,
            interval_num,
            min_blocks_num,
            max_num_correct,
            max_num_incorrect,
            max_num_correct_consecutive_questions,
            question_text_a1,
            question_text_a2,
            question_text_b1,
            question_text_b2,
            question_text_b3,
            question_text_b4,
            popup_text,
            correct_text,
            incorrect_text,
            feedback_duration,
            close_instruct,
            close_instruct_text,
            close_instruct_latency,
        } = trial.variables;

        var trial_data = {
            "stage_name": trial.stage_name,
            "parameters": [
                {
                    'Parameter': 'open_instruct',
                    'Units of measure': 'string',
                    'Value, default': open_instruct,
                    'Value, range': 'on, off',
                    'Function, brief': 'Turning the opening instruction page on or off.',
                    'Function, full': 'This controls the presence (on) or absence (off) of the instruction page at the beginning of the stage. If it is off then the stage starts immediately with the vending machine.',
                },
                {
                    'Parameter': 'open_instruct_text',
                    'Units of measure': 'string',
                    'Value, default': open_instruct_text,
                    'Value, range': 'Any 400 characters, including spaces.',
                    'Function, brief': 'Text for opening instruction for participants.',
                    'Function, full': 'This string of text is shown at the beginning of the stage to orient the participant to the operation of the vending machine and tell them that they can begin by pressing any key.',
                },
                {
                    'Parameter': 'open_instruct_latency',
                    'Units of measure': 'ms',
                    'Value, default': open_instruct_latency,
                    'Value, range': '0, 1000, 2000, 3000, …, 6000.',
                    'Function, brief': 'Minimum time, display of instructions.',
                    'Function, full': 'This number of milliseconds determines the minimum amount of time that the instructions are shown to participants. This is to stop people from inadvertantly dismissing the instructions before they have read them.',
                },     
                {
                    'Parameter': 'degrad_pattern',
                    'Units of measure': 'symbol',
                    'Value, default': degrad_pattern.toString(),
                    'Value, range': 'd0, d1, d2',
                    'Function, brief': 'Counterbalance pattern for which contingency degradation.',
                    'Function, full': 'This will determine, per block, which action-outcome pairing is degraded. The number of symbols entered in this parameter field must be equal to the number of blocks in the experiment.',
                },     
                {
                    'Parameter': 'prob_value',
                    'Units of measure': 'fraction',
                    'Value, default': prob_value.toString(),
                    'Value, range': '0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0',
                    'Function, brief': 'Determines probabibilty of outcome being shown.',
                    'Function, full': 'The parameter value of probability should be to one decimal place and can be any value between 0.1 and 1.0. This is applied as a constant across all 3 conditions (A0, A1, A2) and intervals within the block.',
                },     
                {
                    'Parameter': 'interval_duration',
                    'Units of measure': 'ms',
                    'Value, default': interval_duration,
                    'Value, range': '100, 200, 300, …, 6000',
                    'Function, brief': 'Determines duration of interval.',
                    'Function, full': 'The number, of milliseconds, entered into this parameter will determine the duration of the intervals across the whole stage.',
                },     
                {
                    'Parameter': 'outcome_duration',
                    'Units of measure': 'ms',
                    'Value, default': outcome_duration,
                    'Value, range': '100, 200, 300, …, 6000',
                    'Function, brief': 'Determine duration of outcome.',
                    'Function, full': 'The number, of milliseconds, entered into this parameter will determine the duration of the presentation of outcome (food) image across the whole stage.',
                },     
                {
                    'Parameter': 'interval_num',
                    'Units of measure': 'integer',
                    'Value, default': interval_num,
                    'Value, range': '1, 2, 3, …, 500.',
                    'Function, brief': 'Determines number of intervals in each block.',
                    'Function, full': 'The number of intervals in each block across the whole stage.',
                },         
                {
                    'Parameter': 'min_blocks_num',
                    'Units of measure': 'integer',
                    'Value, default': min_blocks_num,
                    'Value, range': '1, 2, 3, …, 12.',
                    'Function, brief': 'Determines the minimum number of blocks across whole stage.',
                    'Function, full': 'The minimum number of blocks across the whole stage. This is an essential criteria for stage termination along with EITHER max_num_correct OR max_num_incorrect.',
                },         
                {
                    'Parameter': 'max_num_correct',
                    'Units of measure': 'integer',
                    'Value, default': max_num_correct,
                    'Value, range': '1, 2, 3, …, 20.',
                    'Function, brief': 'Maximum number of consecutive correct responses',
                    'Function, full': 'This number sets the number of most recent correct responses. This is a stage termination criterion if minimum number of blocks is satisfied.',
                },        
                {
                    'Parameter': 'max_num_incorrect',
                    'Units of measure': 'integer',
                    'Value, default': max_num_incorrect,
                    'Value, range': '1, 2, 3, …, 20.',
                    'Function, brief': 'Maximum number of total incorrect responses.',
                    'Function, full': 'The maximum number of total (doesn\'t need to be consecutive) incorrect responses allowed before terminating the stage. This is a stage termination criterion if minimum number of blocks is satisfied.',
                },
                {
                    'Parameter': 'max_num_correct_consecutive_questions',
                    'Units of measure': 'integer',
                    'Value, default': max_num_correct_consecutive_questions,
                    'Value, range': '1, 2, 3, …, 20.',
                    'Function, brief': 'Maximum number of total correct consecutive responses.',
                    'Function, full': 'The maximum number of total consecutive correct responses allowed before terminating the stage.',
                },  
                {
                    'Parameter': 'question_text_a1',
                    'Units of measure': 'string',
                    'Value, default': question_text_a1.slice(0, 200),
                    'Value, range': 'Any 200 characters, including spaces.',
                    'Function, brief': 'Tests knowledge of action-outcome contingency.',
                    'Function, full': 'This string of text contains the action-outcome contingency question above the outcome image.',
                },   
                {
                    'Parameter': 'question_text_a2',
                    'Units of measure': 'string',
                    'Value, default': question_text_a2.slice(0, 100),
                    'Value, range': 'Any 100 characters, including spaces.',
                    'Function, brief': 'Tests knowledge of action-outcome contingency.',
                    'Function, full': 'This string of text contains instruction to answer the action-outcome contingency question below the outcome image.',
                },   
                {
                    'Parameter': 'question_text_b1',
                    'Units of measure': 'string',
                    'Value, default': question_text_b1.slice(0, 100),
                    'Value, range': 'Any 100 characters, including spaces.',
                    'Function, brief': 'Tests belief strength of action-outcome contingency.',
                    'Function, full': 'This string of text contains the belief strength question above the VAS.',
                },   
                {
                    'Parameter': 'question_text_b2',
                    'Units of measure': 'string',
                    'Value, default': question_text_b2.slice(0, 100),
                    'Value, range': 'Any 100 characters, including spaces.',
                    'Function, brief': 'Tests belief strength of action-outcome contingency.',
                    'Function, full': 'This string of text determines what is on the left end of the VAS in the belief strength question.',
                },   
                {
                    'Parameter': 'question_text_b3',
                    'Units of measure': 'string',
                    'Value, default': question_text_b3.slice(0, 100),
                    'Value, range': 'Any 100 characters, including spaces.',
                    'Function, brief': 'Tests belief strength of action-outcome contingency.',
                    'Function, full': 'This string of text determines what is on the right end of the VAS in the belief strength question.',
                },
                {
                    'Parameter': 'question_text_b4',
                    'Units of measure': 'string',
                    'Value, default': question_text_b4.slice(0, 100),
                    'Value, range': 'Any 100 characters, including spaces.',
                    'Function, brief': 'Tests belief strength of action-outcome contingency.',
                    'Function, full': 'This string of text contains instructions how to use VAS line.',
                },
                {
                    'Parameter': 'popup_text',
                    'Units of measure': 'string',
                    'Value, default': popup_text.slice(0, 100),
                    'Value, range': 'Any 100 characters, including spaces.',
                    'Function, brief': 'Tests belief strength of action-outcome contingency.',
                    'Function, full': 'This string of text contains error message appears in the popup window if user clicks submit button before interacted with the VAS.',
                },
                {
                    'Parameter': 'correct_text',
                    'Units of measure': 'string',
                    'Value, default': correct_text.slice(0, 100),
                    'Value, range': 'Any 50 characters, including spaces.',
                    'Function, brief': 'Feedback for action-outcome contingency question.',
                    'Function, full': 'This string of text contains the feedback shown following a correct answer to the action-outcome contingency question.',
                },
                {
                    'Parameter': 'incorrect_text',
                    'Units of measure': 'string',
                    'Value, default': incorrect_text.slice(0, 100),
                    'Value, range': '50 characters',
                    'Function, brief': 'Feedback for action-outcome contingency question.',
                    'Function, full': 'This string of text contains the feedback shown following an incorrect answer to the action-outcome contingency question.',
                },      
                {
                    'Parameter': 'feedback_duration',
                    'Units of measure': 'ms',
                    'Value, default': feedback_duration,
                    'Value, range': '100, 200, 300, …, 6000',
                    'Function, brief': 'Determines the duration of which the feedback is shown.',
                    'Function, full': 'The number, of milliseconds, entered into this parameter will determine the duration of feedback presentation when a correct or incorrect answer is given to the action-outcome contingency question.',
                },     
                {
                    'Parameter': 'close_instruct',
                    'Units of measure': 'integer',
                    'Value, default': close_instruct,
                    'Value, range': 'on, off',
                    'Function, brief': 'Turning the closing instruction page on or off.',
                    'Function, full': 'This number controls the presence (on) or absence (off) of the instruction page at the end of the stage.',
                },      
                {
                    'Parameter': 'close_instruct_text',
                    'Units of measure': 'string',
                    'Value, default': close_instruct_text.slice(0, 400),
                    'Value, range': 'Any 400 characters, including spaces.',
                    'Function, brief': 'Text for closing instruction for participants.',
                    'Function, full': 'This string of text is shown at the end of the stage.',
                },     
                {
                    'Parameter': 'close_instruct_latency',
                    'Units of measure': 'ms',
                    'Value, default': close_instruct_latency,
                    'Value, range': '0, 1000, 2000, 3000, …, 6000.',
                    'Function, brief': 'Minimum time, display of instructions.',
                    'Function, full': 'This number of milliseconds determines the minimum amount of time that the instructions are shown to participants.',
                }
            ]

        };

        jsPsych.finishTrial(trial_data);
    }
  
    return plugin;
  
})();