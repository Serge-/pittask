jsPsych.plugins["food-and-hunger-questions"] = (function() {

    var plugin = {};
  
    plugin.info = {
      name: 'food-and-hunger-questions',
      description: '',
      parameters: {
        stimulus: {
          type: jsPsych.plugins.parameterType.HTML_STRING,
          pretty_name: 'Stimulus',
          default: undefined,
          description: 'The HTML string to be displayed'
        },
        choices: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          array: true,
          pretty_name: 'Choices',
          default: jsPsych.ALL_KEYS,
          description: 'The keys the subject is allowed to press to respond to the stimulus.'
        },
        prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Prompt',
          default: null,
          description: 'Any content here will be displayed below the stimulus.'
        },
        stimulus_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus duration',
          default: null,
          description: 'How long to hide the stimulus.'
        },
        trial_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Trial duration',
          default: null,
          description: 'How long to show trial before it ends.'
        },
        trial_latency: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Trial latency',
          default: null,
          description: 'How long to show trial before key press it ends.'
        },
        response_ends_trial: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Response ends trial',
          default: false,
          description: 'If true, trial will end when subject makes a response.'
        },
        stage_name: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Stage Name',
          default: null,
          description: 'Specific name of the current stage.'
        },
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
  
    plugin.trial = function(display_element, trial) {
  
        var html = "";
        var IMAGE_SRC = trial.stimulus;
        var h3 =  trial.questions.top;
        var bottom_txt =  trial.questions.bottom;
        var button_trigger = false;
        var vas_holder = 0;

        // store response
        var response = {
        trial_events: []
        };

        var timestamp_onload = jsPsych.totalTime();

        response.trial_events.push({
            "event_type": trial.event_type,
            "event_raw_details": trial.event_raw_details,
            "event_converted_details": trial.event_converted_details,
            "timestamp": jsPsych.totalTime(),
            "time_elapsed": jsPsych.totalTime() - timestamp_onload
        });
        

        // inject CSS for trial
        html += '<style id="key-testing">' +
                'img { width: 300px; margin: 20px 0; }' +
                '.votes-container { margin-top: 8rem; }' +
                '.key-testing-text { padding-bottom: 4rem; }' +
                '.description { top: -6.7rem; }' +
                '.description div { width: 100px; }' +
                '.description .description--right { margin-right: -3rem }' +
                'ul { outline: 1px solid #fff; list-style: none; padding: 1rem; }'
        html += '</style>';

        html += '<div id="jspsych-stimulus"><h3 class="key-testing-text">' + h3 + '</h3>';

        if(trial.stimulus !== 'hunger') {
          html += '<img src='+ IMAGE_SRC +'/>';
          html += '<p>' + bottom_txt + '</p>';
        }

        html += '<div class="votes-container">' +
            '<div id="slider">' +
                '<div class="description">' +
                    '<div class="description--left">' + vas_left + '</div>';
        if(trial.stimulus !== 'hunger') {
          html +=  '<div class="description--center">' + vas_center + '</div>';
        }
                    
        html += '<div class="description--right">' + vas_right + '</div>' +
                '</div>' +
            '</div>' +
            '<button id="button" class="confirm-button btn">Submit answer</button>' +
            "<ul><li>Select answer using your mouse.</li><li>Click 'submit answer' when ready.</li></ul>" +
        '</div>'
        html += '</div>';

        html +=
         ' <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">' +
            '<div class="modal__overlay" tabindex="-1" data-micromodal-close>' +
              '<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">' +
                '<header class="modal__header">' +
                  '<button class="modal__close" aria-label="Close modal" data-micromodal-close></button>' +
                '</header>' +
                '<main class="modal__content" id="modal-1-content">' +
                  '<p>' + popup_text + '</p>' +
                '</main>' +
                '<footer class="modal__footer">' +
                  '<button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>' +
                '</footer>' +
              '</div>' +
            '</div>' +
        '</div>';
    
        // draw
        display_element.innerHTML = html;

        // define slider
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
        })

        // 
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

        $(".modal__btn, .modal__close").on("click touchstart",function(){
          response.trial_events.push({
            "event_type": "popup closed",
            "event_raw_details": 'Close',
            "event_converted_details": trial.event_converted_details,
            "timestamp": jsPsych.totalTime(),
            "time_elapsed": jsPsych.totalTime() - timestamp_onload
          });
        });
    
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
                "events": JSON.stringify(response.trial_events),
                "rating_status": JSON.stringify(trial.rating_status),
                "rating": JSON.stringify(vas_holder),
                "food_item": JSON.stringify(trial.food_item)
            };
    
            // clear the display
            display_element.innerHTML = '';
    
            // move on to the next trial
            jsPsych.finishTrial(trial_data);
        };
  
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
        };
    
        // start the response listener
        if (trial.choices != jsPsych.NO_KEYS) {
            var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
                rt_method: 'performance',
                persist: true,
                allow_held_key: false
            });
            var clickListener = jsPsych.pluginAPI.getMouseResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
                rt_method: 'date',
                persist: true,
                allow_held_key: false
            });
        }
  
        // hide stimulus if stimulus_duration is set
        if (trial.stimulus_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function() {
            display_element.querySelector('#jspsych-html-keyboard-response-stimulus').style.visibility = 'hidden';
            }, trial.stimulus_duration);
        }
    
        // end trial if trial_duration is set
        if (trial.trial_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function() {
            end_trial();
            }, trial.trial_duration);
        }
    
        // end trial if trial_duration is set
        if (trial.trial_latency !== null) {
            jsPsych.pluginAPI.setTimeout(function() {
            trial.response_ends_trial = true;
            }, trial.trial_latency);
        }
  
    };
  
    return plugin;
  })();
  