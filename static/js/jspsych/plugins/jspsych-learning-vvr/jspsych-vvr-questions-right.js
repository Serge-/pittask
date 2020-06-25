jsPsych.plugins['survey-vvr-questions-right'] = (function() {

    var plugin = {};

    plugin.info = {
        name: 'survey-vvr-questions-right',
        parameters: {
            choices: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                array: true,
                pretty_name: 'Choices',
                default: jsPsych.ALL_KEYS,
                description: 'The keys the subject is allowed to press to respond to the stimulus.'
            },
            trial_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Trial duration', 
                default: null,
                description: 'How long to show trial before it ends.'
            },
            stage_name: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Stage Name',
                default: null,
                description: 'Specific name of the current stage.'
            },
            vars: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Text variables',
                default: null,
                description: 'Text variables.'
            },
            details: {
                a: {
                    event_type: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Event type',
                        default: null,
                        description: 'Event type'
                    },
                    event_raw_details: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Event raw details',
                        default: null,
                        description: 'Event raw details'
                    },
                    event_converted_details: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Event converted details',
                        default: null,
                        description: 'Event converted details'
                    }
                },
                b: {
                    event_type: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Event type',
                        default: null,
                        description: 'Event type'
                    },
                    event_raw_details: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Event raw details',
                        default: null,
                        description: 'Event raw details'
                    },
                    event_converted_details: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Event converted details',
                        default: null,
                        description: 'Event converted details'
                    }
                }
            }
        }
    }

    plugin.trial = function(display_element, trial){
        var VENDING_MACHINE = '/static/images/vending_machine.svg';
        var outcome_collection = {
            MM:'/static/images/MM.png',
            TT:'/static/images/TT.png',
            BBQ:'/static/images/BBQ.png',
        };
        var OUTCOME = outcome_collection[counter_balancing[0].right];
        var button_trigger = false;
        var isMachineTilted = false;
        var vas_holder = 0;

        var new_html = 
            `<div id="jspsych-stimulus" class='vvr-question-container vvr-question-right'>
                <div class='vvr-question-a'>
                    <p>${trial.vars.question_text_a1}</p>
                    <div class="outcome-container-learning"><img src='${OUTCOME}'/></div>
                    <p class="answer_latency" style='padding:2rem 0'>${trial.vars.question_text_a2}</p>
                    <img class="vending-machine" src='${VENDING_MACHINE}'/>
                </div>
                <div class='vvr-question-b' style='display: none'>
                    <p>${trial.vars.question_text_b1}</p>
                    <div class="votes-container">
                        <div id="slider">
                            <div class="description">
                                <div class="description--left">${trial.vars.question_text_b2}</div>
                                <div class="description--center"></div>
                                <div class="description--right">${trial.vars.question_text_b3}</div>
                            </div>
                        </div>
                        <button id="button" class="confirm-button btn">Submit answer</button>
                        <ul>${trial.vars.question_text_b4}</ul>
                    </div>
                </div>
            </div>`;

        // store response
        var response = {
            trial_events: []
        };
        var timestamp_onload = jsPsych.totalTime();

        response.trial_events.push({
            "event_type": trial.details.a.event_type,
            "event_raw_details": trial.details.a.event_raw_details,
            "event_converted_details": trial.details.a.event_converted_details,
            "timestamp": jsPsych.totalTime(),
            "time_elapsed": jsPsych.totalTime() - timestamp_onload
        });

        
        display_element.innerHTML = new_html;

        $(display_element).append(
            '<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">' +
                '<div class="modal__overlay" tabindex="-1" data-micromodal-close>' +
                '<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">' +
                    '<header class="modal__header">' +
                    '<h2 class="modal__title" id="modal-1-title">' +
                        'Warning!' +
                    '</h2>' +
                    '<button class="modal__close" aria-label="Close modal" data-micromodal-close></button>' +
                    '</header>' +
                    '<main class="modal__content" id="modal-1-content">' +
                    '<p>' + trial.vars.popup_text + '</p>' +
                    '</main>' +
                    '<footer class="modal__footer">' +
                    '<button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>' +
                    '</footer>' +
                '</div>' +
                '</div>' +
            '</div>'
        );

        $("#slider").slider({
            value: 5,
            min: 0,
            max: 10,
            step: 0.01,
            change: function(event, ui) {
                $("#button").removeClass('disabled');
                button_trigger = true;
                vas_holder = ui.value.toFixed(2);
                response.trial_events.push({
                    "event_type": 'VAS answer has been made',
                    "event_raw_details": ui.value.toFixed(2),
                    "event_converted_details": ui.value.toFixed(2) + ' answer has been made',
                    "timestamp": jsPsych.totalTime(),
                    "time_elapsed": jsPsych.totalTime() - timestamp_onload
                });
            }
        });

        if(item_id === 0) {
            var counter = answer_latency / 1000;
            $('.answer_latency').text('You can answer after ' + counter + ' sec');
            var interval = setInterval(function() {
                counter--;
                $('.answer_latency').fadeOut();
                $('.answer_latency').text('You can answer after ' + counter + ' sec');
                $('.answer_latency').fadeIn();
                if (counter == 0) {
                    // Display a login box
                    $('.answer_latency').text(trial.vars.question_text_a2);
                    clearInterval(interval);
                }
            }, 1000);
        };

        $("#button").click(function() {
            response.trial_events.push({
                "event_type": 'button click',
                "event_raw_details": '\'submit button\' was clicked',
                "event_converted_details": '\'submit button\' was clicked',
                "timestamp": jsPsych.totalTime(),
                "time_elapsed": jsPsych.totalTime() - timestamp_onload
            });
            if(button_trigger) {
                end_trial();
                button_trigger = false;
            } else {
                MicroModal.show('modal-1');
                response.trial_events.push({
                    "event_type": "error message",
                    "event_raw_details": 'Error message',
                    "event_converted_details": popup_text_web_forms,
                    "timestamp": jsPsych.totalTime(),
                    "time_elapsed": jsPsych.totalTime() - timestamp_onload
                });
            }
        });

        function showNextQuestion() {
            $('.vvr-question-b').fadeIn('slow');   
            response.trial_events.push({
                "event_type": trial.details.b.event_type,
                "event_raw_details": trial.details.b.event_raw_details,
                "event_converted_details": trial.details.b.event_converted_details,
                "timestamp": jsPsych.totalTime(),
                "time_elapsed": jsPsych.totalTime() - timestamp_onload
            });
        };

        $(".modal__btn, .modal__close").on("click touchstart",function(){
            response.trial_events.push({
              "event_type": "popup closed",
              "event_raw_details": 'Close',
              "event_converted_details": trial.event_converted_details,
              "timestamp": jsPsych.totalTime(),
              "time_elapsed": jsPsych.totalTime() - timestamp_onload
            });
        });


        // function to handle responses by the subject
        var after_response = function(info) {

            if(info.key_release === undefined) {
                response.trial_events.push({
                  "event_type": "key press",
                  "event_raw_details": info.key,
                  "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
                  "timestamp": jsPsych.totalTime(),
                  "time_elapsed": jsPsych.totalTime() - timestamp_onload
                });
            } else {
                response.trial_events.push({
                  "event_type": "key release",
                  "event_raw_details": info.key_release,
                  "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
                  "timestamp": jsPsych.totalTime(),
                  "time_elapsed": jsPsych.totalTime() - timestamp_onload
                });
            }

            if(info.key === left_tilt && !isMachineTilted) {
                $(".vending-machine").css({
                    "transform":  "rotate(" + shake_left_rotate + "deg) translateX(" + shake_left_translateX + "%)",
                    "transition": "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)"
                });
                vvrIsCorrect = false;
                isMachineTilted = true;
                ++loop_node_counter_max_num_incorrect;
                loop_node_counter_max_num_correct = 0;
                showNextQuestion();
            } else if (info.key === right_tilt && !isMachineTilted) {
                $(".vending-machine").css({
                    "transform":  "rotate(" + shake_right_rotate + "deg) translateX(" + shake_right_translateX + "%)",
                    "transition": "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)"
                });
                vvrIsCorrect = true;
                isMachineTilted = true;
                ++loop_node_counter_max_num_correct;
                showNextQuestion();
            }
        };


        // function to end trial when it is time
        var end_trial = function() {

            // kill any remaining setTimeout handlers
            jsPsych.pluginAPI.clearAllTimeouts();

            // kill keyboard listeners
            if (typeof keyboardListener !== 'undefined') {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                jsPsych.pluginAPI.cancelClickResponse(clickListener);
            }

            // gather the data to store for the trial
            var trial_data = {
                "stage_name": JSON.stringify(trial.stage_name),
                "vvr_stage": JSON.stringify(trial.vvr_stage),
                "stimulus": trial.stimulus,
                "timestamp": jsPsych.totalTime(),
                "block_number": loop_node_counter_vvr,
                "item_id": ++item_id,
                "food_item": OUTCOME.slice(15),
                "correct": vvrIsCorrect ? 'y':'n',
                "strength_of_belief": vas_holder,
                "events": JSON.stringify(response.trial_events)
            };

            // clear the display
            display_element.innerHTML = '';

            // move on to the next trial
            jsPsych.finishTrial(trial_data);
        };

        // start the response listener
        if (trial.choices != jsPsych.NO_KEYS) {
            var keyboardListener;
            if(item_id === 0) {
                setTimeout( function() {
                    keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                        callback_function: after_response,
                        valid_responses: trial.choices,
                        rt_method: 'performance',
                        persist: true,
                        allow_held_key: false
                    });
                }, answer_latency);
            } else {
                keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                    callback_function: after_response,
                    valid_responses: trial.choices,
                    rt_method: 'performance',
                    persist: true,
                    allow_held_key: false
                });
            };

            var clickListener = jsPsych.pluginAPI.getMouseResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
                rt_method: 'date',
                persist: false,
                allow_held_key: false
            });
        }

            // end trial if trial_duration is set
        if (trial.trial_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function() {
            end_trial();
            }, trial.trial_duration);
        }
    }

    return plugin;
})();