jsPsych.plugins['survey-vvr'] = (function() {
 
    var plugin = {};

    plugin.info = {
      name: 'survey-vvr',
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
        variables: {
            type: jsPsych.plugins.parameterType.Obj,
            pretty_name: 'Variables',
            default: null,
            description: 'Variables from parameters.js file.'
        },
        stage_name: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Stage Name',
          default: null,
          description: 'Specific name of the current stage.'
        }
      }
    }
  
    plugin.trial = function(display_element, trial){
        var { VVR_INTERVAL_DURATION, VVR_INTERVAL_NUM, VVR_OUTCOME_DURATION, VVR_DEGRAD_PATTERN, VVR_PROB_VALUE } = trial.variables;
        var VENDING_MACHINE = '/static/images/vending_machine.svg';
        var OUTCOME = {
          MM:'/static/images/MM.png',
          TT:'/static/images/TT.png',
          BBQ:'/static/images/BBQ.png',
        };

        var degradation_pattern_condition = VVR_DEGRAD_PATTERN[loop_node_counter_vvr]; // Default condition degradation pattern
        var probability_value = VVR_PROB_VALUE[loop_node_counter_vvr];
        var timerId;
        var condition_outcome = 'A0'

        // store response
        var response = {
          trial_events: []
        };
          
        var new_html = '<div id="jspsych-stimulus"><img class="vending-machine" src='+ VENDING_MACHINE +'/><div class="outcome-container"></div></div>';

        display_element.innerHTML = new_html;

        response.trial_events.push({
          "event_type": 'image appears',
          "event_raw_details": VENDING_MACHINE,
          "event_converted_details": 'white vending machine appears',
          "timestamp": jsPsych.totalTime()
        });

        // outcome presentation logic
        (function () {
          
          let x = 0;
          let duration = VVR_INTERVAL_DURATION;
          timerId = jsPsych.pluginAPI.setTimeout(function request() {

            var random_boolean = Math.random() < probability_value;
            var outcome_present = DEGRAD_PATTERN[condition_outcome][degradation_pattern_condition];

            if (random_boolean && outcome_present) {
              $('.outcome-container').html('<img class="outcome" src="'+ OUTCOME[counter_balancing[0][outcome_present]] +'"/>');
              response.trial_events.push({
                "timestamp": jsPsych.totalTime(),
                "event_type": 'image appears',
                "event_raw_details": OUTCOME[counter_balancing[0][outcome_present]],
                "event_converted_details": counter_balancing[0][outcome_present] + ' image appears'
              });

              jsPsych.pluginAPI.setTimeout(() => {
                $('.outcome-container').html('');
                
                if (++x === VVR_INTERVAL_NUM) {
                  clearTimeout(timerId);
                  end_trial();
                }
     
              }, VVR_OUTCOME_DURATION);
              duration += VVR_OUTCOME_DURATION;
            } else {
              if (++x === VVR_INTERVAL_NUM) {
                clearTimeout(timerId);
                end_trial();
              }
            }
            
            timerId = jsPsych.pluginAPI.setTimeout(request, duration);
          }, duration);          
        }());


        // function to handle responses by the subject
        var after_response = function(info) {
   
            function machine_tilt() {
                if(info.key === left_tilt) {
                    $(".vending-machine").css({
                        "transform":  "rotate(" + shake_left_rotate + "deg) translateX(" + shake_left_translateX + "%)",
                        "transition": "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)"
                    });
          
                    jsPsych.pluginAPI.setTimeout(function(){ $(".vending-machine").css({
                      "transform":  "rotate(0deg) translateX(0%)",
                      "transition": "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)"
                    }); }, shake_return_time);
                    
                    response.trial_events.push({
                      "event_type": "left tilt",
                      "event_raw_details": shake_left_translateX + "%, " + shake_left_rotate + "deg",
                      "event_converted_details": "vending machine was tilted left " + shake_left_translateX + "%, " + shake_left_rotate + "deg",
                      "timestamp": jsPsych.totalTime()
                    });
                    condition_outcome = 'A1';

                } else if (info.key === right_tilt) {
                    $(".vending-machine").css({
                        "transform":  "rotate(" + shake_right_rotate + "deg) translateX(" + shake_right_translateX + "%)",
                        "transition": "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)"
                    });
          
                    jsPsych.pluginAPI.setTimeout(function(){ $(".vending-machine").css({
                      "transform": "rotate(0deg) translateX(0%)",
                      "transition": "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)"
                    }); }, shake_return_time);
                    
                    response.trial_events.push({
                      "event_type": "right tilt",
                      "event_raw_details": shake_right_translateX + "%, " + shake_right_rotate + "deg",
                      "event_converted_details": "vending machine was tilted right " + shake_right_translateX + "%, " + shake_right_rotate + "deg",
                      "timestamp": jsPsych.totalTime()
                    });

                    condition_outcome = 'A2';

                } else {
                    condition_outcome = 'A0';
                }
            }
          
            if(info.key_release === undefined) {
                machine_tilt();
                response.trial_events.push({
                  "event_type": "key press",
                  "event_raw_details": info.key,
                  "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
                  "timestamp": jsPsych.totalTime()
                });
            } else {
                response.trial_events.push({
                  "event_type": "key release",
                  "event_raw_details": info.key_release,
                  "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
                  "timestamp": jsPsych.totalTime()
                });
            }
            
        }
        
      

        // function to end trial when it is time
        var end_trial = function() {

            // increase counter
            loop_node_counter_vvr += 1;
            loop_node_counter_vvr_determination += 1;

            
            // kill any remaining setTimeout handlers
            jsPsych.pluginAPI.clearAllTimeouts();
            // hack to kill all remaining setTimeouts
            while (timerId--) {
              window.clearTimeout(timerId); // will do nothing if no timeout with id is present
            } 

            // kill keyboard listeners
            if (typeof keyboardListener !== 'undefined') {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                jsPsych.pluginAPI.cancelClickResponse(clickListener);
            }

            // gather the data to store for the trial
            var trial_data = {
                "stage_name": trial.stage_name,
                "stimulus": trial.stimulus,
                "events": response.trial_events
            };

            // clear the display
            display_element.innerHTML = '';

            // move on to the next trial
            jsPsych.finishTrial(trial_data);
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